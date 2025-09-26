from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pymongo.errors import DuplicateKeyError
from datetime import datetime
import pytz

from .db import get_db
from .serializers import StudentSerializer, CheckinSerializer

db = get_db()

class StudentsView(APIView):
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        doc = serializer.validated_data
        try:
            db.students.insert_one({
                "name": doc["name"],
                "email": doc["email"],
                "student_id": doc["student_id"],
                "created_at": datetime.now(pytz.UTC),
            })
        except DuplicateKeyError:
            return Response({"error": "student_id already exists"},
                            status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "student created"}, status=status.HTTP_201_CREATED)

    def get(self, request):
        students = list(db.students.find({}, {"_id": 0}))
        return Response(students, status=status.HTTP_200_OK)

class CheckinView(APIView):
    def post(self, request):
        serializer = CheckinSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        doc = serializer.validated_data
        student = db.students.find_one({"student_id": doc["student_id"]})
        if not student:
            return Response({"error": "student_id not found"}, status=status.HTTP_404_NOT_FOUND)

        db.checkins.insert_one({
            "student_id": doc["student_id"],
            "timestamp": doc["timestamp"],
        })
        return Response({"message": "checkin recorded"}, status=status.HTTP_201_CREATED)

    def get(self, request):
        pipeline = [
            {"$lookup": {
                "from": "students",
                "localField": "student_id",
                "foreignField": "student_id",
                "as": "student"
            }},
            {"$unwind": {"path": "$student", "preserveNullAndEmptyArrays": True}},
            {"$project": {
                "_id": 0,
                "student_id": 1,
                "timestamp": 1,
                "student.name": 1,
                "student.email": 1,
            }},
            {"$sort": {"timestamp": -1}},
        ]
        rows = list(db.checkins.aggregate(pipeline))
        for r in rows:
            if isinstance(r.get("timestamp"), datetime):
                r["timestamp"] = r["timestamp"].isoformat()
            r["student"] = r.pop("student", None)
        return Response(rows, status=status.HTTP_200_OK)
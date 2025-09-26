from rest_framework import serializers
from datetime import datetime
import pytz

class StudentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    email = serializers.EmailField()
    student_id = serializers.CharField(max_length=100)

class CheckinSerializer(serializers.Serializer):
    student_id = serializers.CharField(max_length=100)
    timestamp = serializers.DateTimeField(required=False)

    def validate(self, data):
        if "timestamp" not in data or data["timestamp"] is None:
            data["timestamp"] = datetime.now(pytz.UTC)
        return data
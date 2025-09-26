import os
from pymongo import MongoClient, ASCENDING
from dotenv import load_dotenv

load_dotenv()  

MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
MONGODB_DBNAME = os.getenv("MONGODB_DBNAME", "attendance_db")

_client = None
_db = None

def get_client():
    global _client
    if _client is None:
        _client = MongoClient(MONGODB_URI)
    return _client

def get_db():
    global _db
    if _db is None:
        _db = get_client()[MONGODB_DBNAME]
        _ensure_indexes(_db)
    return _db

def _ensure_indexes(db):
    """Create necessary indexes safely."""
    db.students.create_index([("student_id", ASCENDING)], unique=True)
    db.checkins.create_index([("timestamp", ASCENDING)])

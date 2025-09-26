import os
from pymongo import MongoClient, ASCENDING
from pymongo.errors import DuplicateKeyError
from dotenv import load_dotenv

load_dotenv()  # load variables from .env if present

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
        client = get_client()
        _db = client[MONGODB_DBNAME]
        _ensure_indexes()
    return _db

def _ensure_indexes():
    db = _db or get_db()
    db.students.create_index([("student_id", ASCENDING)], unique=True)
    db.checkins.create_index([("timestamp", ASCENDING)])
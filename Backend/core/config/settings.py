import os
from dotenv import load_dotenv
from pydantic import BaseSettings

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
load_dotenv(os.path.join(BASE_DIR, '.env'))

class Settings(BaseSettings):
    SECRET_KEY = os.getenv('SECRET_KEY', '')
    API_PREFIX = '/api/v1'
    BACKEND_CORS_ORIGINS = ['*']
    DATABASE_URL = 'postgresql://postgres:1@localhost:5432/Cars'
    SECURITY_ALGORITHM = 'HS256'

settings = Settings()
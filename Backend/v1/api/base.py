from core.database.database import SessionLocal
import core.database.database as Database

def add_tables():
    return Database.Base.metadata.create_all(bind=Database.engine)

# De
def get_db():
    db = Database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

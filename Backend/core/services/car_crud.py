import decimal
from sqlalchemy.orm import Session
from core.models import models

def get_Vehicles(db: Session):
    return db.query(models.Vehicle).filter(models.Vehicle.is_delete == 0).all()

from sqlalchemy.orm import Session
from core.models import models
from fastapi import  HTTPException, status
import sqlalchemy as sa
from sqlalchemy import func

def get_Vehicles(db: Session):
    return db.query(models.Vehicle).filter(models.Vehicle.is_delete == 0).all()

def get_Vehicle(id: int , db: Session):
    return db.query(models.Vehicle).filter(models.Vehicle.id == id, models.Vehicle.is_delete == 0).first()

def get_Vehicle_By_Brand(brand: str , db: Session):
    try:
        return db.query(models.Vehicle) \
            .join(models.Model, models.Vehicle.model_id==models.Model.id) \
            .join(models.Brand, models.Model.maker_id==models.Brand.id) \
            .filter(models.Brand.name == brand).all()

    except:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not search brand")

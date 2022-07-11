from sqlalchemy.orm import Session
import models, schemas

def get_Brand(db: Session, brand_id: int):
    return db.query(models.Brand).filter(models.Brand.id == brand_id).first()

def get_Brands(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Brand).all()##.offset(skip).limit(limit).all()
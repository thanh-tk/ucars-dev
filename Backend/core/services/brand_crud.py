import sqlalchemy as sa
from core.models import models
from core.schemas import brand
from sqlalchemy.orm import Session
from fastapi import  HTTPException, status

def get_Brand(db: Session, brand_id: int):
    return db.query(models.Brand).filter(models.Brand.id == brand_id, models.Brand.is_delete == 0).first()

def get_Brands(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Brand).filter(models.Brand.is_delete == 0).all()

def create_Brand(session: Session, brand: brand.BrandRequest):
    try:
        session.execute(sa.text("CALL public.\"brand_Create\"( :param1, :param2, :param3, :param4)"), {
        "param1": brand.name, 
        "param2": brand.status, 
        "param3": brand.description, 
        "param4": brand.logo})

        name = brand.name

        session.commit()
    except:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not update brand")

    return f"created brand item with name {name} Successfully"

def update_Brand(session: Session, brand: brand.BrandUpdateRequest):
    try:
        session.execute(sa.text("CALL public.\"pro_brand_update\"( :param1, :param2, :param3, :param4, :param5)"), {
        "param1": brand.id, 
        "param2": brand.name, 
        "param3": brand.status, 
        "param4": brand.description, 
        "param5": brand.logo
        })
        
        session.commit()

    except:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not update brand")

    return f"Update brand item with name {brand.name} Successfully"

def delete_brand(session: Session, brand: brand.BrandDeleteRequest):
    try:
        session.execute(sa.text("CALL public.\"pro_brand_delete\"( :param1)"), {"param1": brand.id})
        
        session.commit()

    except:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not delete brand")

    return f"Delete brand item with name {brand.id} Successfully"


from fastapi import  HTTPException, status
from sqlalchemy.orm import Session
from core.schemas import schemas
import sqlalchemy as sa
from core.models import models

def create_Model(session: Session, Model: schemas.ModelCreateRequest):
    try:
        session.execute(sa.text("CALL public.\"proc_models_create\"( :param1, :param2, :param3, :param4)"), {
        "param1": Model.name, 
        "param2": Model.maker_id, 
        "param3": Model.type_id, 
        "param4": Model.description})

        name = Model.name

        session.commit()
    except:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not update Model")

    return f"created Model item with name {name} Successfully"

def get_model(db: Session, model_id: int):
    return db.query(models.Model).filter(models.Model.id == model_id, models.Model.is_delete == 0).first()

def get_models(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Model).filter(models.Model.is_delete == 0).all()

def update_Model(session: Session, Model: schemas.ModelUpdateRequest):
    try:
        session.execute(sa.text("CALL public.\"proc_models_update\"( :param1, :param2, :param3, :param4, :param5)"), {
        "param1": Model.id, 
        "param2": Model.name, 
        "param3": Model.maker_id, 
        "param4": Model.type_id, 
        "param5": Model.description
        })
        
        session.commit()

    except:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not update Model")

    return f"Update Model item with name {Model.name} Successfully"

def delete_Model(session: Session, Model: schemas.ModelDeleteRequest):
    try:
        session.execute(sa.text("CALL public.\"proc_models_delete\"( :param1)"), {"param1": Model.id})
        
        session.commit()

    except:
        session.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f" Can not delete Model")

    return f"Delete Model item with name {Model.id} Successfully"

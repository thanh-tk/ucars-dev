
from fastapi import APIRouter
from fastapi import Depends, HTTPException, status
from requests import Session
from fastapi_sqlalchemy import db

from core.schemas import schemas
from core.services import model_crud
from core.database.database import engine
from v1.api.base import get_db

router = APIRouter()


#region MODELS STA --------------------------------------------------------
@router.post("/create-model/", status_code=status.HTTP_201_CREATED)
def create_model(name: str, description: str, maker_id: int, type_id: int, model: schemas.ModelCreateRequest):
    session = db.session
    modelDB = schemas.ModelCreateRequest(
        name = name,
        description = description,
        maker_id= maker_id,
        type_id= type_id,
        # name = model.name,
        # description = model.description,
        # maker_id= model.maker_id,
        # type_id= model.type_id,
    )
    
    model_crud.create_Model(session, modelDB)
    session.close()

@router.get("/model/{id}", response_model=schemas.Model)
def search_brand(id: int, db: Session = Depends(get_db)):
    print(id)
    model = model_crud.get_model(db, id)

    if not id:
        raise HTTPException(status_code=404, detail=f" item with id {id} not found")
    return model

@router.get("/models/", response_model=list[schemas.Model])
def search_brand(skip: int=0, limit: int=100, db: Session = Depends(get_db)):
    models = model_crud.get_models(db, skip=skip, limit=limit)
    return models

@router.post("/update-model/", status_code=status.HTTP_200_OK)
def update_Brand(id: int, name: str, description: str, maker_id: int, type_id: int, model: schemas.ModelUpdateRequest):

    brandDB = schemas.ModelUpdateRequest(
            id= id,
            name = name,
            maker_id = maker_id,
            type_id = type_id,
            description = description,
        )    
    session = db.session
    model_crud.update_Model(session, brandDB)
    session.close()

@router.post("/delete-model/{id}", status_code=status.HTTP_200_OK)
def delete_brand(id: int):
    brandDB = schemas.ModelDeleteRequest(
        id= id
    )
    session = db.session
    model_crud.delete_Model(session, brandDB)
    session.close()
    

#region MODELS END --------------------------------------------------------
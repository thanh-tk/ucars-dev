

from fastapi import APIRouter
from fastapi import Depends, HTTPException, status
from requests import Session
from fastapi_sqlalchemy import db

from core.schemas import brand
from core.services import brand_crud
from v1.api.base import get_db

router = APIRouter()

#region BRAND STA --------------------------------------------------------
@router.post("/create-brand/", status_code=status.HTTP_201_CREATED)
def create_Brand(brand: brand.BrandRequest):
    brandDB = brand.BrandRequest(
        id= 0,
        name = brand.name,
        logo = brand.logo,
        status = brand.status,
        description = brand.description,
    )
    session = db.session
    brand_crud.create_Brand(session, brandDB)
    session.close()
    
@router.post("/update-brand/", status_code=status.HTTP_200_OK)
def update_Brand(brand: brand.BrandUpdateRequest):

    brandDB = brand.BrandUpdateRequest(
            id= brand.id,
            name = brand.name,
            logo = brand.logo,
            status = brand.status,
            description = brand.description,
        )    
    session = db.session
    brand_crud.update_Brand(session, brandDB)
    session.close()


@router.post("/delete-brand/{id}", status_code=status.HTTP_200_OK)
def delete_brand(id: int):
    brandDB = brand.BrandDeleteRequest(
        id= id
    )
    session = db.session
    brand_crud.delete_brand(session, brandDB)
    session.close()
    
@router.get("/brand/{id}", response_model=brand.Brand)
def search_brand(id: int, db: Session = Depends(get_db)):
    print(id)
    brands = brand_crud.get_Brand(db, id)

    if not id:
        raise HTTPException(status_code=404, detail=f" item with id {id} not found")
    return brands

@router.get("/brands/", response_model=list[brand.Brand])
def search_brand(skip: int=0, limit: int=100, db: Session = Depends(get_db)):
    brands = brand_crud.get_Brands(db, skip=skip, limit=limit)
    return brands
#region BRAND END --------------------------------------------------------


import decimal
from typing import Optional
from fastapi import APIRouter
from fastapi import Depends
from requests import Session


from core.schemas import car
from core.services import car_crud
from v1.api.base import get_db

router = APIRouter()

@router.get("/vehicles/", response_model=list[car.Car])
def search_cars(db: Session = Depends(get_db)):
    cars = car_crud.get_Vehicles(db)
    return cars

@router.get("/vehicle/", response_model=car.Car)
def search_car(id: int, db: Session = Depends(get_db)):
    cars = car_crud.get_Vehicle(id, db)
    return cars

@router.get("/vehicle-by-brand/", response_model=list[car.Car])
def search_car(brand: str, db: Session = Depends(get_db)):
    cars = car_crud.get_Vehicle_By_Brand(brand, db)
    return cars
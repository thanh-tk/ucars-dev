import datetime
import decimal
from typing import Optional
from pydantic import BaseModel

class CarBase(BaseModel):
    name: str
    year: str
    price: decimal.Decimal
    description: Optional[str] = None
    model_id: int
    vehicle_cond: int

class Car(CarBase):
    id: int
    class Config:
        orm_mode = True

class CarByBrand(BaseModel):
    id: int
    # NAME: str
    # YEAR: str
    # PRICE: decimal.Decimal
    # description: Optional[str] = None
    # logo: bytes
    # brand_name: str
    # model_name: str
class CarView(CarByBrand):
    class Config:
        orm_mode = True

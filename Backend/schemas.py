import datetime
from pydantic import BaseModel

class ModelBase(BaseModel):
    NAME: str
    DESCRIPTION: str | None = None
class ModelCreate(ModelBase):
    pass
class Model(ModelBase):
    ID: int
    MAKER_ID: int
    class Config:
        orm_mode = True

class BrandBase(BaseModel):
    name: str
    status: int
    logo: bytes | None
    last_update: datetime.date | None
    description: str | None = None
class BrandCreate(BrandBase):
    pass
class Brand(BrandBase):
    id: int
    is_delete: int
    models: list[Model] = []
    class Config:
        orm_mode = True
class BrandRequest(BaseModel):
    name: str
    status: int
    logo: bytes | None
    description: str | None = None
class BrandUpdateRequest(BaseModel):
    id: int
    name: str
    status: int
    logo: bytes | None
    description: str | None = None
class BrandDeleteRequest(BaseModel):
    id: int
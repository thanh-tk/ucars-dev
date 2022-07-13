import datetime
from pydantic import BaseModel

class ModelBase(BaseModel):
    name: str
    last_update: datetime.date | None
    description: str | None = None
class ModelCreate(ModelBase):
    pass
class Model(ModelBase):
    id: int
    maker_id: int
    class Config:
        orm_mode = True

class ModelCreateRequest(BaseModel):
    name: str
    description: str | None = None
    maker_id: int
    type_id: int

class ModelUpdateRequest(BaseModel):
    id: int
    name: str
    maker_id: int
    type_id: int
    description: str | None = None

class ModelDeleteRequest(BaseModel):
    id: int

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
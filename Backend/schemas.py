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
    NAME: str
    STATUS: int
class BrandCreate(BrandBase):
    pass
class Brand(BrandBase):
    ID: int
    models: list[Model] = []
    class Config:
        orm_mode = True
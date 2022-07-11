from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, false
from sqlalchemy.orm import relationship
from database import Base

class Brand(Base):
    __tablename__ = 'brand'
    ID = Column(Integer, primary_key=True, index=True)
    NAME = Column(String, unique=false)
    STATUS = Column(Integer, default=1)
    models = relationship("Model", back_populates="ownerBrand")

class Model(Base):
    __tablename__ = 'model'
    ID = Column(Integer, primary_key=True, index=True)
    NAME = Column(String, unique=false)
    DESCRIPTION = Column(String, index=True)
    MAKER_ID = Column(Integer, ForeignKey("brand.ID"))
    ownerBrand = relationship("Brand", back_populates="models")
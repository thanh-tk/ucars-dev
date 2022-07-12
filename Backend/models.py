from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, LargeBinary, String, Text, desc, false
from sqlalchemy.orm import relationship
from database import Base

class Brand(Base):
    __tablename__ = 'brand'
    id = Column("ID",Integer, primary_key=True, index=True)
    name = Column("NAME",String, unique=false)
    status = Column("STATUS",Integer)
    logo = Column("LOGO",LargeBinary)
    last_update = Column("LAST_UPDATE",DateTime)
    description = Column("DESCRIPTION",Text)
    models = relationship("Model", back_populates="ownerBrand")

class Model(Base):
    __tablename__ = 'model'
    ID = Column(Integer, primary_key=True, index=True)
    NAME = Column(String, unique=false)
    DESCRIPTION = Column(Text, index=True)
    MAKER_ID = Column(Integer, ForeignKey("brand.ID"))
    ownerBrand = relationship("Brand", back_populates="models")
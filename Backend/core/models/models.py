from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, LargeBinary, Numeric, String, Text, false
from sqlalchemy.orm import relationship
from core.database.database import Base

class Brand(Base):
    __tablename__ = 'brand'
    id = Column("ID",Integer, primary_key=True, index=True, autoincrement=True)
    name = Column("NAME",String, unique=false)
    status = Column("STATUS",Integer)
    logo = Column("LOGO",LargeBinary)
    last_update = Column("LAST_UPDATE",DateTime)
    description = Column("DESCRIPTION",Text)
    is_delete = Column("IS_DELETE",Integer)
    models = relationship("Model", back_populates="ownerBrand")

class Model(Base):
    __tablename__ = 'model'
    id = Column("ID", Integer, primary_key=True, index=True, autoincrement=True)
    name = Column("NAME", String, unique=false)
    description = Column("DESCRIPTION", Text, index=True)
    maker_id = Column("MAKER_ID", Integer, ForeignKey("brand.ID"))
    type_id = Column("TYPE_ID", Integer, ForeignKey("type.ID"))
    last_update = Column("LAST_UPDATE", DateTime)
    description = Column("DESCRIPTION", Text)
    is_delete = Column("IS_DELETE", Integer)
    ownerBrand = relationship("Brand", back_populates="models")
    vehicles = relationship("Vehicle", back_populates="ownerModel")

class Vehicle(Base):
    __tablename__ = 'vehicle'
    id = Column("ID", Integer, primary_key=True, index=True, autoincrement=True)
    name = Column("NAME", String, unique=false)
    year = Column("YEAR", Integer, unique=false)
    price = Column("PRICE", Numeric)
    description = Column("DESCRIPTION", Text, index=True)
    model_id = Column("MODEL_ID", Integer, ForeignKey("model.ID"))
    vehicle_cond = Column("VEHICLE_COND", Integer, ForeignKey("vehicle_condition.ID"))
    description = Column("DESCRIPTION", Text)
    update_at = Column("UPDATE_AT", DateTime)
    create_at = Column("CREATE_AT", DateTime)
    is_delete = Column("IS_DELETE", Integer)
    ownerModel = relationship("Model", back_populates="vehicles")

class CarCondition(Base):
    __tablename__ = 'vehicle_condition'
    id = Column("ID", Integer, primary_key=True, index=True, autoincrement=True)
    name = Column("NAME", String, unique=false)

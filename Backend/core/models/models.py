from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, LargeBinary, String, Text, desc, false
from sqlalchemy.orm import relationship
from core.database.database import Base

class Brand(Base):
    __tablename__ = 'brand'
    id = Column("ID",Integer, primary_key=True, index=True)
    name = Column("NAME",String, unique=false)
    status = Column("STATUS",Integer)
    logo = Column("LOGO",LargeBinary)
    last_update = Column("LAST_UPDATE",DateTime)
    description = Column("DESCRIPTION",Text)
    is_delete = Column("IS_DELETE",Integer)
    models = relationship("Model", back_populates="ownerBrand")

class Model(Base):
    __tablename__ = 'model'
    id = Column("ID", Integer, primary_key=True, index=True)
    name = Column("NAME", String, unique=false)
    description = Column("DESCRIPTION", Text, index=True)
    maker_id = Column("MAKER_ID", Integer, ForeignKey("brand.ID"))
    type_id = Column("TYPE_ID", Integer, ForeignKey("type.ID"))
    last_update = Column("LAST_UPDATE", DateTime)
    description = Column("DESCRIPTION", Text)
    is_delete = Column("IS_DELETE", Integer)
    ownerBrand = relationship("Brand", back_populates="models")
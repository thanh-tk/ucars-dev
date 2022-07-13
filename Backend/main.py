import sqlalchemy as sa
from fastapi import Depends, FastAPI, status
from sqlalchemy.orm import Session
import crud, models, schemas
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:4200",
]


app =FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
models.Base.metadata.create_all(bind=engine)

# De
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "Hello World"}

@app.post("/brand/", status_code=status.HTTP_201_CREATED)
def create_Brand(brand: schemas.BrandRequest):
    session = Session(bind=engine, expire_on_commit=False)

    brandDB = schemas.Brand(
        id= 0,
        name = brand.name,
        logo = brand.logo,
        status = brand.status,
        description = brand.description,
    )
    
    print(brandDB.name, brandDB.status, brandDB.description)
    session.execute(sa.text("CALL public.\"brand_Create\"( :param1, :param2, :param3, :param4)"), {
    "param1": brandDB.name, 
    "param2": brandDB.status, 
    "param3": brandDB.description, 
    "param4": brandDB.logo})

    name = brandDB.name

    session.commit()

    session.close()

    return f"created brand item with id {name}"

@app.post("/img", status_code=status.HTTP_201_CREATED)
def create_Brand():
    return "Image uploaded"

@app.get("/brand/{name}")
def search_brand(name: str):
    return "Search brand with id " + name

@app.get("/brands/", response_model=list[schemas.Brand])
def search_brand(skip: int=0, limit: int=100, db: Session = Depends(get_db)):
    brands = crud.get_Brands(db, skip=skip, limit=limit)
    return brands
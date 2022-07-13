from requests import session
import sqlalchemy as sa
from fastapi import Depends, FastAPI, HTTPException, status
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

@app.post("/create-brand/", status_code=status.HTTP_201_CREATED)
def create_Brand(brand: schemas.BrandRequest):
    brandDB = schemas.BrandRequest(
        id= 0,
        name = brand.name,
        logo = brand.logo,
        status = brand.status,
        description = brand.description,
    )
    session = Session(bind=engine, expire_on_commit=False)
    crud.create_Brand(session, brandDB)
    session.close()
    
@app.post("/update-brand/", status_code=status.HTTP_200_OK)
def update_Brand(brand: schemas.BrandUpdateRequest):

    brandDB = schemas.BrandUpdateRequest(
            id= brand.id,
            name = brand.name,
            logo = brand.logo,
            status = brand.status,
            description = brand.description,
        )    
    session = Session(bind=engine, expire_on_commit=False)
    crud.update_Brand(session, brandDB)
    session.close()


@app.post("/delete-brand/{id}", status_code=status.HTTP_200_OK)
def delete_brand(id: int):
    brandDB = schemas.BrandDeleteRequest(
        id= id
    )
    session = Session(bind=engine, expire_on_commit=False)
    crud.delete_brand(session, brandDB)
    session.close()
    
@app.post("/img", status_code=status.HTTP_201_CREATED)
def create_Brand():
    return "Image uploaded"

@app.get("/brand/{id}", response_model=schemas.Brand)
def search_brand(id: int, db: Session = Depends(get_db)):
    print(id)
    brands = crud.get_Brand(db, id)

    if not id:
        raise HTTPException(status_code=404, detail=f" item with id {id} not found")
    return brands

@app.get("/brands/", response_model=list[schemas.Brand])
def search_brand(skip: int=0, limit: int=100, db: Session = Depends(get_db)):
    brands = crud.get_Brands(db, skip=skip, limit=limit)
    return brands
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

@app.post("/brand", status_code=status.HTTP_201_CREATED)
def create_Brand():
    return "Create brand"

@app.get("/brand/{name}")
def search_brand(name: str):
    return "Search brand with id " + name

@app.get("/brands/", response_model=list[schemas.Brand])
def search_brand(skip: int=0, limit: int=100, db: Session = Depends(get_db)):
    brands = crud.get_Brands(db, skip=skip, limit=limit)
    return brands
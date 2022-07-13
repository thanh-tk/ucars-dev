
from fastapi import APIRouter
from fastapi import status


router = APIRouter()

##Utilities --------------------------------------------------------
@router.post("/img", status_code=status.HTTP_200_OK)
def create_Brand():
    return "Image uploaded"

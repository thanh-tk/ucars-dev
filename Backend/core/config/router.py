from fastapi import APIRouter

from v1.api import brand_api
from v1.api import models_api

router = APIRouter()

router.include_router(brand_api.router, tags=["brand"], prefix="/brand")
router.include_router(models_api.router, tags=["model"], prefix="/model")
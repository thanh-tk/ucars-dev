from fastapi import APIRouter

from v1.api import brand_api
from v1.api import models_api
from v1.api import util_api
from v1.api import vehicle_api

router = APIRouter()

router.include_router(brand_api.router, tags=["brand"], prefix="/brand")
router.include_router(models_api.router, tags=["model"], prefix="/model")
router.include_router(vehicle_api.router, tags=["vehicle"], prefix="/vehicle")
router.include_router(util_api.router, tags=["util"], prefix="/util")
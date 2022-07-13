from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware
import uvicorn
from core.config.settings import settings

from starlette.middleware.cors import CORSMiddleware
from core.config.router import router
import v1.api.base as base

origins = [
    "http://localhost",
    "http://localhost:4200",
]

base.add_tables()

def get_application() -> FastAPI:
    application = FastAPI(
        title="UCARS API",
        docs_url="/docs", 
        redoc_url='/re-docs',
        openapi_url=f"{settings.API_PREFIX}/openapi.json",

    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    application.add_middleware(DBSessionMiddleware, db_url=settings.DATABASE_URL)
    application.include_router(router, prefix=settings.API_PREFIX)

    return application

app = get_application()
if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)
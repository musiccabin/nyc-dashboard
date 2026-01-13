from fastapi import FastAPI
from app.routers import metrics
from app.routers import health

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routers import metrics

app = FastAPI()

app.include_router(metrics.router)
app.include_router(health.router)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(metrics.router)

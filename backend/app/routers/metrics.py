from fastapi import APIRouter
from app.services.analytics import get_top_rated_restaurants
from app.services.analytics import get_fastest_restaurants

router = APIRouter(
    prefix="/metrics",
    tags=["metrics"])

@router.get("/top-rated-restaurants")
def top_rated_restaurants():
    return get_top_rated_restaurants()

@router.get("/fastest-restaurants")
def fastest_restaurants():
    return get_fastest_restaurants()

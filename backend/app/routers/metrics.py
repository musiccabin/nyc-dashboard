from fastapi import APIRouter
from app.services.analytics import get_top_rated_restaurants

router = APIRouter()

@router.get("/top-rated-restaurants")
def top_rated_restaurants():
    return get_top_rated_restaurants()


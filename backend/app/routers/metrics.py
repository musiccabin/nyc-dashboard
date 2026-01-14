from fastapi import APIRouter
from typing import Optional
from app.services.analytics import get_top_rated_restaurants
from app.services.analytics import get_fastest_restaurants

router = APIRouter()

@router.get("/top-rated-restaurants")
def top_rated_restaurants(
    cuisine: Optional[str] = None,
    day: Optional[str] = None
):
    return get_top_rated_restaurants(cuisine=cuisine, day=day)


@router.get("/fastest-restaurants")
def fastest_restaurants(
    cuisine: Optional[str] = None,
    day: Optional[str] = None
):
    return get_fastest_restaurants(cuisine=cuisine, day=day)


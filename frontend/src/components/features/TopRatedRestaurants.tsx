import React, { useEffect, useState, useMemo } from "react"
import type { TopRestaurant } from "../../types/metrics"
import { RestaurantTable } from "../tables/RestaurantTable"
import Filters from "../../components/Filters"

import { cuisineOptions } from "../../constants/customerView"

const TopRatedRestaurants: React.FC = () => {
  const [topRatedData, setTopRatedData] = useState<TopRestaurant[]>([])

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      const topRes = await fetch(`http://127.0.0.1:8000/metrics/top-rated-restaurants`)
      const topJson = await topRes.json()
      setTopRatedData(topJson)
    }
    fetchData()
    console.log(topRatedData)
  }, [])

  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(cuisineOptions)
  const [selectedRating, setSelectedRating] = useState<number>(4)
  const [selectedCost, setSelectedCost] = useState<number>(60)

  const filteredData = useMemo(() => {
  return topRatedData.filter((r) => {
    const cuisineMatch = selectedCuisines.includes(r.cuisine)
    const ratingMatch = r.avg_rating >= selectedRating
    const costMatch = r.avg_cost <= selectedCost

    return cuisineMatch && ratingMatch && costMatch
  })
}, [topRatedData, selectedCuisines, selectedRating, selectedCost])

  return (
    <div>
      <Filters
        selectedCuisines={selectedCuisines}
        setSelectedCuisines={setSelectedCuisines}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedCost={selectedCost}
        setSelectedCost={setSelectedCost}
      />
      <RestaurantTable topRatedData={filteredData}></RestaurantTable>
    </div>
  )
}

export default TopRatedRestaurants
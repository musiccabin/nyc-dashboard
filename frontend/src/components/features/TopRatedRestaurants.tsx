import React, { useEffect, useState } from "react"
import type { TopRestaurant } from "../../types/metrics"
import { fetchTopRatedRestaurants } from "../../api/metrics"
import BarChart from "../charts/BarChart"

const TopRatedRestaurants: React.FC = () => {
  const [data, setData] = useState<TopRestaurant[]>([])

  useEffect(() => {
    fetchTopRatedRestaurants().then(setData)
  }, [])

  return (
    <div className="w-full md:w-1/2 h-64 md:h-80">
      <h2 className="text-xl font-semibold mb-2 text-center">Top-Rated Restaurants</h2>
      <BarChart data={data} />
    </div>
  )
}

export default TopRatedRestaurants
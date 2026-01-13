import React, { useEffect, useState } from "react"
import type { FastRestaurant } from "../../types/metrics"
import { fetchFastestRestaurants } from "../../api/metrics"
import BarChart from "../charts/BarChart"

const FastestRestaurants: React.FC = () => {
  const [data, setData] = useState<FastRestaurant[]>([])

  useEffect(() => {
    fetchFastestRestaurants().then(setData)
  }, [])

  return (
    <div className="w-full md:w-1/2 h-64 md:h-80">
      <h2 className="text-xl font-semibold mb-2 text-center">Fastest Restaurants</h2>
      <BarChart data={data} />
    </div>
  )
}

export default FastestRestaurants
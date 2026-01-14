import React, { useEffect, useState } from "react"
import type { FastRestaurant } from "../../types/metrics"
import BarChart from "../charts/BarChart"
interface CustomerChartProps {
  selectedCuisine: string | null;
  selectedDay: string | null;
}

const FastestRestaurants: React.FC<CustomerChartProps> = ({ selectedCuisine, selectedDay }) => {
  const [fastData, setFastData] = useState<FastRestaurant[]>([])

  // Fetch data from backend whenever filters change
  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams()
      if (selectedCuisine) query.append("cuisine", selectedCuisine)
      if (selectedDay) query.append("day", selectedDay)

      const fastRes = await fetch(`http://127.0.0.1:8000/metrics/fastest-restaurants?${query.toString()}`)
      const fastJson = await fastRes.json()
      setFastData(fastJson)
    }

    fetchData();
  }, [selectedCuisine, selectedDay]);

  return (
    <div className="w-full md:w-1/2 h-64 md:h-80">
      <h2 className="text-xl font-semibold mb-2 text-center">Fastest Restaurants</h2>
      <BarChart data={fastData} />
    </div>
  )
}

export default FastestRestaurants
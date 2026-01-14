import React, { useEffect, useState } from "react"
import type { TopRestaurant } from "../../types/metrics"
import BarChart from "../charts/BarChart"
interface CustomerChartProps {
  selectedCuisine: string | null
  selectedDay: string | null
}

const TopRatedRestaurants: React.FC<CustomerChartProps> = ({ selectedCuisine, selectedDay }) => {
  const [topRatedData, setTopRatedData] = useState<TopRestaurant[]>([])

  // Fetch data from backend whenever filters change
  useEffect(() => {
    const fetchData = async () => {
      const query = new URLSearchParams()
      if (selectedCuisine) query.append("cuisine", selectedCuisine)
      if (selectedDay) query.append("day", selectedDay)

      const topRes = await fetch(`http://127.0.0.1:8000/metrics/top-rated-restaurants?${query.toString()}`)
      const topJson = await topRes.json()
      setTopRatedData(topJson)
    }

    fetchData();
  }, [selectedCuisine, selectedDay]);

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
      <div className="w-full md:w-1/2 h-80 md:h-96">
        <h2 className="text-xl font-semibold mb-2 text-center">Top-Rated Restaurants</h2>
        <BarChart data={topRatedData} metric="rating" />
      </div>
      <div className="w-full md:w-1/2 h-80 md:h-96">
        <h2 className="text-xl font-semibold mb-2 text-center">Cooking Time (Minutes)</h2>
        <BarChart data={topRatedData} metric="prep_time" />
      </div>
    </div>
  )
}

export default TopRatedRestaurants
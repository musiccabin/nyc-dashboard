import React from "react"
import _ChartJS from "chart.js/auto"
import { Bar } from "react-chartjs-2"
import type { TopRestaurant, FastRestaurant } from "../../types/metrics"
interface ChartProps {
  data: TopRestaurant[] | FastRestaurant[]
}

const BarChart: React.FC<ChartProps> = ({ data }) => {
  if (!data || data.length === 0) return null

  const labels = data.map(d => d.restaurant)
  const values = data.map(d => ("avg_rating" in d ? d.avg_rating : d.fulfilment_time))

  const restaurants = {
    labels,
    datasets: [
      {
        label: "avg_rating" in data[0] ? "Average Rating" : "Fulfillment Time (Minutes)",
        data: values,
        backgroundColor: "rgba(37, 99, 235)", // customer button (tailwind-bg-blue-600)
      },
    ],
  }

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: false,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      }
    },
  }

  return <Bar data={restaurants} options={options} />
}

export default BarChart

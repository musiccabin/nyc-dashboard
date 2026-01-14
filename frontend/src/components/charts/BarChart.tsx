import React from "react"
import _ChartJS from "chart.js/auto"
import { Bar } from "react-chartjs-2"
import type { TopRestaurant } from "../../types/metrics"
interface ChartProps {
  data: TopRestaurant[]
  metric: string | null
}

const BarChart: React.FC<ChartProps> = ({ data, metric }) => {
  if (!data || data.length === 0) return null

  const labels = data.map(d => d.restaurant)
  const values = data.map(d => (metric === "rating" ? d.avg_rating : d.avg_prep_time))

  const restaurants = {
    labels,
    datasets: [
      {
        label: metric === "rating" ? "Average Rating" : "Cooking time (Minutes)",
        data: values,
        backgroundColor: metric === "rating" ? "rgba(37, 99, 235)" : "rgba(245, 140, 85, 1)", // customer button (tailwind-bg-blue-600)
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

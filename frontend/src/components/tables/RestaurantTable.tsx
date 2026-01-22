import { useState, useMemo } from "react"
import type { TopRestaurant } from "../../types/metrics"
import WeekendIcon from '../../assets/weekend-borderless.png'
import WeekdayIcon from '../../assets/weekday-borderless.png'

type SortKey = "avg_rating" | "avg_prep_time"

type Props = {
  topRatedData: TopRestaurant[]
}

export function RestaurantTable({ topRatedData }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("avg_rating")
  const [visibleCount, setVisibleCount] = useState<number>(10)

  const visibleRestaurants = topRatedData.slice(0, visibleCount)

  const sortedRestaurants = useMemo(() => {
    return [...visibleRestaurants].sort((a, b) => 
        sortKey === "avg_rating" 
            ? b.avg_rating - a.avg_rating 
            : a.avg_prep_time - b.avg_prep_time
        )
}, [visibleRestaurants, sortKey])

  return (
    <div>
      <div className="flex justify-between items-center mb-2 sm:hidden">
        <span className="font-semibold">Sort by:</span>

        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded border ${
              sortKey === "avg_rating" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setSortKey("avg_rating")}
          >
            ⭐ Rating
          </button>

          <button
            className={`px-3 py-1 rounded border ${
              sortKey === "avg_prep_time" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setSortKey("avg_prep_time")}
          >
            ⏱ Speed
          </button>
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
        <tr className="border-b last:border-b-0">
            <th className="pl-4">Restaurant</th>
            <th
            onClick={() => setSortKey("avg_rating")}
            className={`cursor-pointer px-4 py-2 ${sortKey === "avg_rating" ? "font-semibold underline" : ""}`}
            // className={sortKey === "avg_rating" ? "active" : ""}
            >
            ⭐ Rating
            </th>

            <th
            onClick={() => setSortKey("avg_prep_time")}
            className={sortKey === "avg_prep_time" ? "active" : ""}
            >
            ⏱ Speed
            </th>
        </tr>
        </thead>

        <tbody>
          {sortedRestaurants.map(r => (
            <tr key={crypto.randomUUID()} className="hover:bg-blue-50">
              <td className="pl-4 relative">
                <span className="hover:underline cursor-pointer">
                  {r.name}
                </span>
              </td>

              <td className="px-4 py-2 flex items-center gap-2">
                <span className="sm:hidden mr-1">⭐</span>
                {r.avg_rating.toFixed(1)}
                {r.higher_day === "Weekend" && (
                  <img
                    src={WeekendIcon}
                    alt="Weekend"
                    className="w-16 text-green-500"
                  />
                )}
                {r.higher_day === "Weekday" && (
                  <img
                    src={WeekdayIcon}
                    alt="Weekday"
                    className="w-16 text-green-500"
                  />
                )}
              </td>

              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="sm:hidden mr-1">⏱</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full
                        ${r.avg_prep_time < 25 && "bg-green-500 w-1/3"}
                        ${r.avg_prep_time >= 25 && r.avg_prep_time <= 28 && "bg-yellow-400 w-2/3"}
                        ${r.avg_prep_time > 28 && "bg-red-500 w-full"}
                      `}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{r.avg_prep_time}m</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {visibleCount < topRatedData.length && (
        <button onClick={() => setVisibleCount(c => c + 5)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show 5 more
        </button>
      )}
    </div>
  )
}

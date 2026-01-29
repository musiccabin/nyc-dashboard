import React from "react"

type EmptyRestaurantsProps = {
  resetFilters: () => void
}

export const EmptyRestaurants: React.FC<EmptyRestaurantsProps> = ({ resetFilters }) => {
  return (
    <div className="text-center py-16">
      <p className="mt-4 text-gray-500">
        No results found for your selection.<br />
        Try adjusting your filters or search.
      </p>

      <button
        className="mt-6 px-4 py-2 bg-teal-500 text-white rounded"
        onClick={resetFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

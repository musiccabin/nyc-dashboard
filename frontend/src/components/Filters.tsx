import React from "react"
import { cuisineOptions } from "../constants/customerView"
interface FilterProps {
  selectedCuisines: string[]
  setSelectedCuisines: (val: string[]) => void
  selectedRating: number
  setSelectedRating: (val: number) => void
  selectedCost: number
  setSelectedCost: (val: number) => void
}

const Filters: React.FC<FilterProps> = ({
  selectedCuisines, setSelectedCuisines,
  selectedRating, setSelectedRating,
  selectedCost, setSelectedCost
}: FilterProps) => {

  return (
    <div className="flex flex-col gap-4 mb-4">
      {/* Cuisine */}
      <div>
        <span className="font-semibold">Cuisine</span>
        <div className="flex gap-2 mt-1">
          <button
            className="text-sm px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            onClick={() => setSelectedCuisines([])}
          >
            Clear all
          </button>

          <button
            className="text-sm px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            onClick={() => setSelectedCuisines(cuisineOptions)}
          >
            Select all
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          {cuisineOptions.map(c => (
            <button
              key={c}
              className={`px-3 py-1 border rounded ${
                selectedCuisines.includes(c) ? "bg-blue-500 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => {
                if (selectedCuisines.includes(c)) {
                  // Deselect
                  setSelectedCuisines(selectedCuisines.filter(x => x !== c))
                } else {
                  // Select
                  setSelectedCuisines([...selectedCuisines, c])
                }
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <span className="font-semibold">Rating</span>
        <input
          type="range"
          min={4}
          max={5}
          step={0.1}
          value={selectedRating}
          onChange={e => setSelectedRating(Number(e.target.value))}
          className="w-full mt-1"
        />
        <div className="text-sm mt-1">{selectedRating}⭐ & up</div>
      </div>

      {/* Cost */}
      <div>
        <span className="font-semibold">Cost ($)</span>
        <input
          type="range"
          min={20}
          max={60}
          step={10}
          value={selectedCost}
          onChange={e => setSelectedCost(Number(e.target.value))}
          className="w-full mt-1"
        />
        <div className="text-sm mt-1">Up to ${selectedCost}</div>
      </div>
    </div>

    // <div className="flex space-x-4">
    //   <select value={selectedCuisine ?? ""} onChange={(e) => setSelectedCuisine(e.target.value || null)}>
    //     <option value="">All Cuisines</option>
    //     <option value="American">American</option>
    //     <option value="Chinese">Chinese</option>
    //     <option value="French">French</option>
    //     <option value="Indian">Indian</option>
    //     <option value="Italian">Italian</option>
    //     <option value="Japanese">Japanese</option>
    //     <option value="Korean">Korean</option>
    //     <option value="Mediterranean">Mediterranean</option>
    //     <option value="Mexican">Mexican</option>
    //     <option value="Middle Eastern">Middle Eastern</option>
    //     <option value="Southern">Southern</option>
    //     <option value="Spanish">Spanish</option>
    //     {/* <option value="Thai">Thai</option>
    //     <option value="Vietnamese">Vietnamese</option> */}
    //   </select>

    //   <select value={selectedDay ?? ""} onChange={(e) => setSelectedDay(e.target.value || null)}>
    //     <option value="">Any Day</option>
    //     <option value="Weekday">Weekday</option>
    //     <option value="Weekend">Weekend</option>
    //   </select>
    // </div>
  );
};

export default Filters;

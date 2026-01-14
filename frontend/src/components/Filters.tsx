import React from "react";

interface FiltersProps {
  selectedCuisine: string | null;
  setSelectedCuisine: (val: string | null) => void;
  selectedDay: string | null;
  setSelectedDay: (val: string | null) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCuisine, setSelectedCuisine,
  selectedDay, setSelectedDay
}) => {
  return (
    <div className="flex space-x-4">
      <select value={selectedCuisine ?? ""} onChange={(e) => setSelectedCuisine(e.target.value || null)}>
        <option value="">All Cuisines</option>
        <option value="American">American</option>
        <option value="Chinese">Chinese</option>
        <option value="French">French</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Korean">Korean</option>
        <option value="Mediterranean">Mediterranean</option>
        <option value="Mexican">Mexican</option>
        <option value="Middle Eastern">Middle Eastern</option>
        <option value="Southern">Southern</option>
        <option value="Spanish">Spanish</option>
        {/* <option value="Thai">Thai</option>
        <option value="Vietnamese">Vietnamese</option> */}
      </select>

      <select value={selectedDay ?? ""} onChange={(e) => setSelectedDay(e.target.value || null)}>
        <option value="">Any Day</option>
        <option value="Weekday">Weekday</option>
        <option value="Weekend">Weekend</option>
      </select>
    </div>
  );
};

export default Filters;

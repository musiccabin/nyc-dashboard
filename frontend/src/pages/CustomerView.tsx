import React, { useState } from 'react'
import '../App.css'

import BusinessButton from '../components/buttons/BusinessButton'
import TopRatedRestaurants from '../components/features/TopRatedRestaurants'
import FastestRestaurants from '../components/features/FastestRestaurants'

import Filters from "../components/Filters"
import { predict } from "../ml/predict"

const App: React.FC = () => {  
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const mlPrediction = predict({ restaurant: selectedRestaurant, cuisine: selectedCuisine, day: selectedDay });

  return (
    <div className="p-6 space-y-8">
      <div className="mb-12 flex space-x-4">
        <BusinessButton></BusinessButton>
      </div>
      <h1 className="text-3xl font-bold">Customer Dashboard</h1>

      <div className="flex justify-center mb-6">
        <Filters
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <TopRatedRestaurants></TopRatedRestaurants>
        <FastestRestaurants></FastestRestaurants>
      </div>

      <div className="text-lg font-semibold">
        Calculate Wait Time {mlPrediction}
      </div>
    </div>
  );
};

export default App


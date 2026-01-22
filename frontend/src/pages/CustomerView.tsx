import React from 'react'
import '../App.css'

import BusinessButton from '../components/buttons/BusinessButton'
import TopRatedRestaurants from '../components/features/TopRatedRestaurants'

// import { predict } from "../ml/predict"

const App: React.FC = () => {  
  // const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  // const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // const mlPrediction = predict({ cuisine: selectedCuisine, day: selectedDay });

  return (
    <div className="p-6 space-y-8">
      <div className="mb-12 flex space-x-4">
        <BusinessButton></BusinessButton>
      </div>
      <h1 className="text-3xl font-bold">Customer Dashboard</h1>
      <TopRatedRestaurants></TopRatedRestaurants>

      {/* <div className="text-lg font-semibold">
        Calculate Wait Time {mlPrediction}
      </div> */}
    </div>
  )
}

export default App


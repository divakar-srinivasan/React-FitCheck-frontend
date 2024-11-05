import React, { useState } from 'react';
import axios from 'axios';

const CaloriesBurnedCalculator = () => {
  const [activity, setActivity] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);
  const [error, setError] = useState(null);

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const fetchCaloriesBurned = async () => {
    try {
      setError(null); // Clear any previous errors
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`,
        {
          headers: {
            'X-Api-Key': '86FDGT8ZDTowjh2cPDNKtg==esRZyB4QvUF9F87a',
          },
        }
      );
      setCaloriesBurned(response.data[0]); // Assuming the first object in the array contains the details
    } catch (error) {
      setError('Error: Unable to fetch data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCaloriesBurned();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Calories Burned Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter activity (e.g., skiing)"
          value={activity}
          onChange={handleActivityChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Calculate
        </button>
      </form>

      {caloriesBurned && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700">Calories Burned Details</h3>
          <div className="mt-2 text-gray-700">
            <p><strong>Activity:</strong> {caloriesBurned.name}</p>
            <p><strong>Calories Per Hour:</strong> {caloriesBurned.calories_per_hour}</p>
            <p><strong>Duration (minutes):</strong> {caloriesBurned.duration_minutes}</p>
            <p><strong>Total Calories Burned:</strong> {caloriesBurned.total_calories}</p>
          </div>
        </div>
      )}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default CaloriesBurnedCalculator;

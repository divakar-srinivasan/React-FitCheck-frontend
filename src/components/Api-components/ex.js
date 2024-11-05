import React, { useState } from 'react';
import axios from 'axios';

const ExerciseFinder = () => {
  const [muscle, setMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  const handleMuscleChange = (e) => {
    setMuscle(e.target.value);
  };

  const fetchExercises = async () => {
    try {
      setError(null); // Clear any previous errors
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        {
          headers: {
            'X-Api-Key': '86FDGT8ZDTowjh2cPDNKtg==esRZyB4QvUF9F87a',
          },
        }
      );

      if (response.data.length > 0) {
        setExercises(response.data); // Set fetched exercises
      } else {
        setError('No exercises found for that muscle group.');
      }
    } catch (error) {
      setError('Error: Unable to fetch data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExercises();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Exercise Finder</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter muscle group (e.g., biceps)"
          value={muscle}
          onChange={handleMuscleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Find Exercises
        </button>
      </form>

      {exercises.length > 0 && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700">Exercises:</h3>
          {exercises.map((exercise, index) => (
            <div key={index} className="border-b mb-4 pb-2">
              <h4 className="text-lg font-semibold text-gray-700">{exercise.name}</h4>
              <p className="text-gray-600"><strong>Type:</strong> {exercise.type}</p>
              <p className="text-gray-600"><strong>Equipment:</strong> {exercise.equipment}</p>
              <p className="text-gray-600"><strong>Difficulty:</strong> {exercise.difficulty}</p>
              <p className="text-gray-600"><strong>Instructions:</strong> {exercise.instructions}</p>
            </div>
          ))}
        </div>
      )}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default ExerciseFinder;

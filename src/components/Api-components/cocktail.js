import React, { useState } from 'react';
import axios from 'axios';

const CocktailCalculator = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleCocktailNameChange = (e) => {
    setCocktailName(e.target.value);
  };

  const fetchCocktailDetails = async () => {
    try {
      setError(null); // Clear any previous errors
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/cocktail?name=${cocktailName}`,
        {
          headers: {
            'X-Api-Key': '86FDGT8ZDTowjh2cPDNKtg==esRZyB4QvUF9F87a',
          },
        }
      );

      if (response.data.length > 0) {
        setCocktailDetails(response.data[0]); // Assuming we take the first cocktail details
      } else {
        setError('No cocktail found with that name.');
      }
    } catch (error) {
      setError('Error: Unable to fetch data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCocktailDetails();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Cocktail Finder</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter cocktail name (e.g., Bloody Mary)"
          value={cocktailName}
          onChange={handleCocktailNameChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Find Cocktail
        </button>
      </form>

      {cocktailDetails && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg">
          <h3 className="text-xl font-semibold text-green-700">{cocktailDetails.name}</h3>
          <h4 className="text-lg font-semibold text-gray-700 mt-2">Ingredients:</h4>
          <ul className="list-disc ml-6 text-gray-700">
            {cocktailDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mt-2">Instructions:</h4>
          <p className="text-gray-700">{cocktailDetails.instructions}</p>
        </div>
      )}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default CocktailCalculator;

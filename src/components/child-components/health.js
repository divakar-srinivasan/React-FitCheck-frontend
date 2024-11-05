import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import api1 from '../../images/api1.jpg';
import api2 from '../../images/api2.jpg';
import api3 from '../../images/api3.jpg';
import api4 from '../../images/api4.jpg';
import api5 from '../../images/api5.jpg';

const Health = () => {
  const apiData = [
    {
      name: 'Calories',
      img: api2,
      description: 'Track your daily calorie intake to maintain a balanced diet.',
      route: '/home/health/calorie',
    },
    {
      name: 'Cocktail',
      img: api1,
      description: 'Discover various cocktails and learn how to make them.',
      route: '/home/health/cocktail',
    },
    {
      name: 'Exercise',
      img: api3,
      description: 'Get the best exercise routines to stay fit and healthy.',
      route: '/home/health/exercise',
    },
    {
      name: 'Nutrition',
      img: api4,
      description: 'Understand the nutritional value of different foods.',
      route: '/home/health/nutrition',
    },
    {
      name: 'Recipe',
      img: api5,
      description: 'Explore a variety of recipes for healthy meals.',
      route: '/home/health/recipe',
    },
  ];

  return (
    <div className="container bg-gray-300 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Health Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiData.map((api, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              src={api.img}
              alt={api.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{api.name}</h2>
            <p className="text-gray-600 mb-4 text-center">{api.description}</p>
            <Link
              to={api.route}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-center"
            >
              Find
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Health;

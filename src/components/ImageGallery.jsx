import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRandomMeals } from '../api/Api';
import BeatLoader from 'react-spinners/BeatLoader';

const ImageGallery = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomMeals = async () => {
    try {
      const data = await getRandomMeals.fetchData();
      return {
        id: data.meals[0].idMeal,
        image: data.meals[0].strMealThumb,
        title: data.meals[0].strMeal,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchMultipleMeals = async () => {
      const mealsArray = [];

      for (let i = 0; i < 10; i++) {
        const mealsData = await fetchRandomMeals();
        mealsArray.push(mealsData);
      }

      setMeals(mealsArray);
      setLoading(false);
    };

    fetchMultipleMeals();
  }, []);

  return (
    <div className="">
      <h2 className="font-title text-5xl mb-4 text-pink-500">Gallery Recipe</h2>
      {loading && (
        <BeatLoader
          className="text-center my-8"
          color={`pink`}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}{' '}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {meals.map((list, index) => (
          <div
            key={index}
            className={
              index % 4 === 1 || (index - 1) % 4 === 1
                ? 'md:col-span-2'
                : 'md:col-span-1'
            }>
            <div className="relative overflow-hidden group">
              <img
                src={list.image}
                alt={`Food ${index + 1}`}
                className="rounded w-full h-[340px] object-cover hover:shadow-xl grop-hover:scale-110"
              />
              <Link to={`/meal/${list.id}`}>
                <p className="absolute h-full flex justify-center items-center pb-5 bottom-96 group-hover:bottom-0 duration-500 ease-in-out text-base text-pink-600 z-30 font-bold text-center w-full left-0 bg-gradient-to-t from-slate-950 to-slate-50/50">
                  <button className="bg-gradient-to-br from-purple-700 to-pink-800 text-white font-semibold py-3 px-6 ml-2 rounded-md focus:outline-none hover:scale-110 duration-300 ease-in-out">
                    View Recipe
                  </button>
                </p>
              </Link>

              <p className="absolute bottom-0 p-4 font-bold text-2xl z-30 bg-slate-900 rounded-tr-2xl text-pink-200">
                {list.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

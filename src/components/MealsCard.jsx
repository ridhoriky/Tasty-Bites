import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
  const instructions = meal.strInstructions
    ? meal.strInstructions.slice(0, 80)
    : '';

  return (
    <div className="mb-4 my-5 w-full md:w-1/2 xl:w-1/3 ">
      <div className="mx-4 px-4 py-3 rounded-md bg-gradient-to-tr from-blue-800 to-pink-900">
        <h2 className="text-xl text-pink-200 text-center rounded-md bg-slate-900 font-extrabold mb-2 border-b-2">
          {meal.strMeal}
        </h2>
        <img
          className="w-full h-full object-cover rounded mb-2"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <p className="text-pink-200/60 mb-2">{instructions}</p>
        <div className="flex items-center gap-2">
          <Link to={`/meal/${meal.idMeal}`}>
            <button className="bg-gradient-to-br text-sm md:text-base from-purple-700 to-pink-700 text-white font-semibold  md:py-2 px-4  rounded-md focus:outline-none hover:scale-110 duration-300 ease-in-out">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;

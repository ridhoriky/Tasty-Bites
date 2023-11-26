import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealDetails } from '../api/Api';

const MealDetailPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const result = await getMealDetails.fetchMealById(id);
        setMeal(result.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMealDetails();
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  const ingredients = [];
  const measures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(ingredient);
      measures.push(measure);
    } else {
      break;
    }
  }

  return (
    <div className="px-4 md:px-[15%] bg-slate-900 pt-20 flex flex-col justify-center items-start">
      <div className="flex flex-col md:flex-row 0 ">
        <div className="md:w-1/3 mr-8">
          <img
            className="w-full mr-8 h-auto mb-4 rounded-lg"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-extrabold mb-4 w-fit border-b-4 border-l-2 md:border-b-8 z-20 md:border-l-4  bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent xl:text-7xl  font-title   px-5 md:px-10 py-4 ">
            {meal.strMeal}
          </h2>
          <div className="mb-4 text-pink-200/60">
            <strong className="text-pink-500/60">Category:</strong>{' '}
            {meal.strCategory}
          </div>
          <div className="mb-4 text-pink-200/60">
            <strong className="text-pink-500/60">Area:</strong> {meal.strArea}
          </div>
          <div className="text-pink-200/60 mb-4">
            <strong className="text-pink-500/60">Guide: </strong>
            {meal.strInstructions}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="mb-4 md:w-1/3 mr-8 ">
          <strong className="text-pink-500/60">Ingredients:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-pink-200/60">
                {`${ingredient} - ${measures[index]}`}
              </li>
            ))}
          </ul>
        </div>

        {meal.strYoutube && (
          <div className="mb-4 md:w-2/3 ">
            <strong className="text-pink-500/60">Video Guide:</strong>
            <div className="iframe-container  relative overflow-hidden">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${
                  meal.strYoutube.split('v=')[1]
                }`}
                title="YouTube video player"
                allowFullScreen></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetailPage;

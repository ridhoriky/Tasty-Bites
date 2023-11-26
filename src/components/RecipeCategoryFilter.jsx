import React, { useEffect, useState } from 'react';
import { getCategorieMeals } from '../api/Api';
import MealCard from './MealsCard';

const RecipeCategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryMeals, setCategoryMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategorieMeals.fetchData();
        setCategories(result.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoryMeals = async () => {
      try {
        if (selectedCategory !== '') {
          const result = await getCategorieMeals.fetchMealsByCategory(
            selectedCategory
          );
          setCategoryMeals(result.meals);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryMeals();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="mb-8 w-full z-40">
      <select
        id="category"
        className="border-2 border-pink-500 rounded-xl py-3 px-6 mb-5 w-full md:w-1/2 lg:w-1/3 bg-slate-700 text-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
        onChange={handleCategoryChange}
        value={selectedCategory}>
        {categories.map((category, id) => (
          <option
            key={id}
            value={category.strCategory}
            className="text-pink-500">
            {category.strCategory}
          </option>
        ))}
      </select>

      <div className="flex flex-wrap">
        {categoryMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default RecipeCategoryFilter;

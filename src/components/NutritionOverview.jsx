// src/components/NutritionOverview.jsx
import React from 'react';

const NutritionOverview = () => {
  const nutritionInfo = {
    calories: 300,
    protein: 15,
    carbs: 40,
    fat: 10,
  };

  return (
    <div className="mb-8 text-center md:text-left">
      <h2 className="text-3xl font-title mb-10 text-pink-500 ">
        Nutrition Overview
      </h2>
      <div className="border-2 border-pink-500 text-center rounded-md py-16">
        <p className="text-pink-500">Calories: {nutritionInfo.calories} kcal</p>
        <p className="text-pink-500">Protein: {nutritionInfo.protein} g</p>
        <p className="text-pink-500">Carbohydrates: {nutritionInfo.carbs} g</p>
        <p className="text-pink-500">Fat: {nutritionInfo.fat} g</p>
      </div>
    </div>
  );
};

export default NutritionOverview;

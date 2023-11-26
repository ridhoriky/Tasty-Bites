// src/components/NutritionCalculator.jsx
import React, { useState } from 'react';

const NutritionCalculator = () => {
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setter(value);
    }
  };

  const calculateTotalCalories = () => {
    const totalCalories =
      Number(calories) +
      Number(protein) * 4 +
      Number(carbs) * 4 +
      Number(fat) * 9;
    return isNaN(totalCalories) ? 'Invalid Input' : totalCalories.toFixed(2);
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-title mb-4 text-pink-500">
        Nutrition Calculator
      </h2>
      <div className="sm:flex flex-row w-full justify-between gap-5">
        <div className="flex flex-col w-full">
          <label className="mb-2 text-pink-200/70">Calories:</label>
          <input
            type="text"
            value={calories}
            onChange={(e) => handleInputChange(e, setCalories)}
            className="border bg-slate-500/60 border-pink-500 focus:outline-pink-200/70 text-pink-200 rounded-md p-2 mb-4"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 text-pink-200/70">Protein (g):</label>
          <input
            type="text"
            value={protein}
            onChange={(e) => handleInputChange(e, setProtein)}
            className="border bg-slate-500/60 border-pink-500 focus:outline-pink-200/70 text-pink-200 rounded-md p-2 mb-4"
          />
        </div>
      </div>
      <div className="sm:flex flex-row w-full justify-between gap-5">
        <div className="flex flex-col w-full">
          <label className="mb-2 text-pink-200/70">Carbs (g):</label>
          <input
            type="text"
            value={carbs}
            onChange={(e) => handleInputChange(e, setCarbs)}
            className="border bg-slate-500/60 border-pink-500 focus:outline-pink-200/70 text-pink-200 rounded-md p-2 mb-4"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 text-pink-200/70">Fat (g):</label>
          <input
            type="text"
            value={fat}
            onChange={(e) => handleInputChange(e, setFat)}
            className="border bg-slate-500/60 border-pink-500 focus:outline-pink-200/70 text-pink-200 rounded-md p-2 mb-4"
          />
        </div>
      </div>
      <div className="flex flex-col text-center">
        <label className="mb-2 text-pink-200/70">Total Calories:</label>
        <div className="border border-pink-500 focus:outline-pink-200/70 text-pink-200 rounded-md p-2">
          {calculateTotalCalories()}
        </div>
      </div>
    </div>
  );
};

export default NutritionCalculator;

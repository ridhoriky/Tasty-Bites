import React, { useState, useEffect } from 'react';
import MealCard from './MealsCard';
import { searchMeals } from '../api/Api';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMeals(searchTerm);
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="flex justify-center h-screen w-full">
      <img
        className="absolute w-full z-20 h-full object-cover top-0 left-0"
        src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="food"
      />
      <div className="absolute w-full h-screen object-cover top-0 left-0 z-20 bg-gradient-to-t from-slate-900 to-slate-50/0"></div>
      <div className="absolute w-full h-screen object-cover top-0 left-0 z-20 bg-gradient-to-b from-slate-900 to-slate-50/0"></div>
      <div className="z-50 mt-80 w-fit text-white">
        <h1 className="text-center w-fit font-[700] border-pink-200/60  border-b-8 border-x-4 rounded-md bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent text-4xl xl:text-7xl mb-10 font-title   px-5 md:px-10 py-4 ">
          Discover Delicious Meals
        </h1>
        <div className="flex w-full px-[15%] items-center justify-center gap-2  md:gap-5">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-mint-500 z-10 text-sm md:text-base bg-slate-900 min-w-[160px] focus:outline-none border-pink-500 rounded-md py-2 md:py-3 px-6 w-full text-white"
            placeholder="Search for meals..."
          />
          <button className="bg-gradient-to-br text-sm md:text-base from-purple-700 to-pink-700 text-white font-semibold py-2 md:py-3 px-6 ml-2 rounded-md focus:outline-none hover:scale-110 duration-300 ease-in-out">
            Search
          </button>
        </div>
      </div>
      <div className="absolute z-40 flex px-4   flex-wrap top-1/2 mt-32  bg-slate-900 mx-4 md:mx-[15%] rounded-md">
        {searchResults.map(
          (meal, index) => index < 15 && <MealCard key={index} meal={meal} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;

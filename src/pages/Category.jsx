import React from 'react';
import RecipeCategoryFilter from '../components/RecipeCategoryFilter';

const Category = () => {
  return (
    <div className="w-full relative flex flex-col  items-center pt-72 pb-80 px-4 md:px-[15%] bg-slate-900 text-center">
      <h2 className=" border-b-8 z-40 border-x-4  bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent text-4xl xl:text-7xl mb-10 font-title   px-5 md:px-10 py-4 ">
        Category
      </h2>
      <h2 className="text-pink-200/80 text-xl mb-4 z-40">Select Category:</h2>
      <img
        className="absolute w-full z-20 h-screen object-cover top-0 left-0"
        src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="food"
      />
      <div className="absolute w-full h-screen object-cover top-0 left-0 z-20 bg-gradient-to-t from-slate-900 to-slate-50/0"></div>
      <div className="absolute w-full h-screen object-cover top-0 left-0 z-20 bg-gradient-to-b from-slate-900 to-slate-50/0"></div>
      <RecipeCategoryFilter />;
    </div>
  );
};

export default Category;

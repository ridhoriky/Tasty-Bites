import React from 'react';
import SearchBar from '../components/SearchBar';
import ImageGallery from '../components/ImageGallery';
import UserTestimonials from '../components/UserTestimonials';
import NutritionCalculator from '../components/NutritionCalculator';
import NutritionOverview from '../components/NutritionOverview';
import Header from '../components/Header';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className=" bg-slate-900 mx-auto w-full px-5 md:px-[15%]">
        <ImageGallery />

        <div className="my-4">
          <UserTestimonials />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4 md:col-span-2 ]">
            <NutritionCalculator />
          </div>
          <div className="md:col-span-1">
            <NutritionOverview />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

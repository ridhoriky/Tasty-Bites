import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col h-screen items-center">
      <h2 className="mt-36 border-b-8 z-20 border-x-4  bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent text-4xl xl:text-7xl mb-10 font-title   px-5 md:px-10 py-4 ">
        About Us
      </h2>
      <img
        className="absolute z-[-1] w-full h-full object-cover top-0 left-0"
        src="https://images.unsplash.com/photo-1616486447077-f8d3f7bae6b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="food"
      />
      <div className="absolute w-full h-screen object-cover top-0 left-0 z-10 bg-gradient-to-b from-slate-900 to-slate-50/0"></div>
      <div className="absolute w-full h-screen object-cover top-0 left-0 z-10 bg-gradient-to-t from-slate-900 to-slate-50/0"></div>

      <p className=" text-pink-200/90 z-20 font-bold max-w-xl mb-4">
        Welcome to Foodle, your go-to source for delicious and easy-to-follow
        recipes. We&aposre passionate about providing you with a wide range of
        mouth-watering dishes that cater to all tastes and skill levels.
      </p>
      <p className="text-pink-200/90 z-20 font-bold max-w-xl mb-4">
        Whether you&aposre a seasoned chef or just starting your culinary
        journey, Foodle is here to inspire and guide you in creating delightful
        meals for yourself and your loved ones.
      </p>
      <p className="text-pink-200/90 z-20 font-bold max-w-xl mb-4">
        Our team of experienced chefs and food enthusiasts is dedicated to
        sharing their knowledge and love for cooking. Explore our recipe
        collection, cooking tips, and culinary insights to elevate your cooking
        experience.
      </p>
      <p className="text-pink-200/90 z-20 font-bold max-w-xl">
        Thank you for being a part of the Foodle community. Happy cooking!
      </p>
    </div>
  );
};

export default AboutUs;

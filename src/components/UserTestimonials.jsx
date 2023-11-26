// src/components/UserTestimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserTestimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      comment: '"I love the recipes! Very easy to follow and delicious."',
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jane Smith',
      comment: '"Amazing food! The recipes make the dishes feel special."',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="mb-8 border-y-4 py-4">
      <h2 className="text-3xl text-center font-title mb-4 text-pink-500">
        User Testimonials
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center flex-col">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-36 h-36 object-cover rounded-full mr-4 mb-5"
              />
              <div className="text-center">
                <strong className="text-pink-200/70">
                  {testimonial.name}:
                </strong>
                <p className="text-pink-600/80 italic">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserTestimonials;

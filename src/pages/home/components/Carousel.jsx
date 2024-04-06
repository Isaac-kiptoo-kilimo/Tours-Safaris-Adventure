
import React, { useState, useEffect } from 'react';
import carouselItems from './carouselItems';
import { Link } from 'react-router-dom';
import { lazy } from 'react';

const HomeHeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="relative h-[60vh] lg:h-[100vh] w-full overflow-hidden">
      {carouselItems.map((item, index) => (
        <img
          key={item.id}
          src={item.image} 
          alt={`Kenya ${index + 1}`}
          className={`block w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`} onLoad={lazy}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-6  sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-4xl text-white mt-2 font-bold tracking-tight sm:text-6xl">
            Karibu Kenya.
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-xl sm:leading-relaxed">
            African Grand Expeditions welcomes you to explore Kenya with our
            unique and tailored safari experiences
          </p>
          <div className="mt-8 flex flex-wrap gap-[3rem] text-center">
            <Link
              to={"/safaris"}
              className="block w-full rounded bg-zinc-800 px-8 py-3 text-md font-medium text-white shadow hover:text-yellow-500 focus:outline-none focus:ring active:bg-zinc-900 sm:w-auto"
            >
              Browse Safaris
            </Link>
            <Link
              to={"/contact"}
              className="block w-full rounded bg-white px-8 py-3 text-md font-medium text-zinc-800 shadow hover:text-yellow-500 focus:outline-none focus:ring active:text-C88E50 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroCarousel;

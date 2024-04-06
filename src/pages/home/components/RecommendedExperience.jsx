import React from "react";

const RecommendedExperience = ({ name, count, rating }) => {
  return (
    <a href="#" className="group relative block bg-black">
      <img
        alt="Developer"
        src="https://bit.ly/3FuAiOP"
        className="absolute inset-0 h-full w-full object-cover opacity-50 md:opacity-75 md:transition-opacity md:group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-800">
          📍 Diani
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">Surfing</p>

        <div className="mt-12 sm:mt-48 lg:mt-64">
          <div className="md:translate-y-8 md:transform md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <p className="text-sm text-white line-clamp-3">
              Indulge yourself in surfing lessons hosted by expert surfer and
              retired olympic medalist Serge Kimenyi Mucyo
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RecommendedExperience;

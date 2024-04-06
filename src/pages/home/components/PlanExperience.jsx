import React from "react";

const PlanExperience = ({ image, name, description }) => {
  return (
    <div className="group relative block h-72 md:h-64 border-2 border-black/40 border-dashed md:border-none">
      <span className="hidden md:block absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex flex-col md:flex-row justify-center md:justify-start h-full md:transform md:items-end md:border-2 md:border-black md:bg-white md:transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2">
        <div className="p-4 !pt-0 md:transition-opacity md:group-hover:absolute md:group-hover:opacity-0 sm:p-6 md:p-8">
          <img src={image} className="h-[90px]" />

          <h1 className="mt-4 text-xl font-medium sm:text-2xl">{name}</h1>
        </div>

        <div className="relative md:absolute px-6 md:opacity-0 md:transition-opacity md:group-hover:relative md:group-hover:opacity-100 md:p-4 lg:p-8">
          <h3 className="hidden md:block mt-4 text-xl font-medium sm:text-2xl">{name}</h3>

          <p className="md:mt-4 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanExperience;

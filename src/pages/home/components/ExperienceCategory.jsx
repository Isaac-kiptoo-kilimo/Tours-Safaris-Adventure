import React from "react";

const ExperienceCategory = ({ name, img,onClick }) => {
  return (
    <div
      
      className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})`}} onClick={onClick} 
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-xl font-bold sm:text-2xl mb-2 sm:mb-0">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCategory;

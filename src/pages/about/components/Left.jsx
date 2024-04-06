
import React from "react";
import ATV from "../assets/hero/atv.png";
import { useNavigate } from "react-router-dom";

const Left = () => {
  const navigate=useNavigate()
  const handleContactNavigation=()=>{
    navigate('/contact')
  }
  return (
    <div className="py-16">
      <div className=" m-auto text-gray-600 ">
        <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2 h-[60vh] overflow-hidden">
            <img src={ATV} alt="image" loading="lazy" width=""/>
          </div>
          <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              African Grand Expeditions:
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
            African Grand Expeditions is a distinguished safari operator based in Africa Continent, with a heritage steeped in The world. Our expertise lies in meticulously crafting bespoke safari experiences amidst the awe-inspiring landscapes of Africa. With a seasoned team of professionals dedicated to excellence, we ensure every facet of your journey is meticulously planned and executed to perfection.
            </p>

            <a
              onClick={handleContactNavigation}
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0  before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                Let's Plan Your next Adventure
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;

import React from "react";
import AdventureImage from "../../../assets/images/adventure.jpg";
import safariImage from "../../../assets/images/safaris.jpg";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";


const AboutAdventure = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-50 lg:flex w-full lg:h-[70vh] md:h-full sm:full mt-5 border-t border-gray-100">
        <LazyLoad height={200} once>
          <div className="img lg:w-[60em] md:w-full h-full sm:w-full flex justify-center slideFromLeft">
            <img
              src={AdventureImage}
              className="w-10/12 sm-1 translate-on-load md:h-[30vh] lg:h-[65vh]"
              alt="adventure img"
            />
          </div>
        </LazyLoad>
        <div className="lg:w-1/3 sm:w-full md:w-full px-5 sm:px-2 mx-auto mt-[2rem] items-center flex flex-col">
          <div className="py-4 rounded-lg">
            <h2 className="text-2xl flex gap-1 items-center text-yellow-500 tracking-tight text-gray-600 md:text-4xl">
              ADVENTURES
            </h2>
            <p className="text-[18px] text-gray-600">
              African Grand Expeditions: Hosts craft authentic adventures,
              exploring cultures and embracing unconventional joy beyond
              traditional tourist trails.
            </p>
            <div>
              <button
                onClick={() => {
                  navigate("/safaris");
                }}
                className="inline-block bg-white text-1xl hover:bg-yellow-500 hover:text-white rounded-md border border-transparent text-yellow-500 py-3 mt-4 px-4 border border-yellow-500 text-center font-medium hover:text-dark-300"
              >
                Find Adventures
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 lg:flex w-full lg:h-[70vh] md:h-full sm:full mt-0 border-t border-gray-100">
        <div className="lg:w-1/3 sm:w-full md:w-full md:px-2 sm:px-2 mx-auto mt-[2rem] items-center flex flex-col">
          <div className=" rounded-lg gap-6 text-center flex flex-col ">
            <h2 className="text-2xl text-yellow-500 tracking-tight text-gray-600 md:text-4xl">
              Safaris
            </h2>
            <p className="text-[18px] text-gray-600">
              African Grand Expeditions: Hosts craft authentic adventures,
              exploring cultures and embracing unconventional joy beyond
              traditional tourist trails.
            </p>
            <div className="mb-3">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="inline-block bg-white text-1xl hover:bg-yellow-500 hover:text-white rounded-md border border-transparent text-yellow-500 py-3 mt-4 px-4 border border-yellow-500 text-center font-medium hover:text-dark-300"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
        <LazyLoad height={200} once>
          <div className="img slide-from-left2 lg:w-[60em] md:w-full sm:w-full flex items-center justify-center">
            <img
              src={safariImage}
              className="w-10/12 ms-3 md:h-[30vh] lg:h-[65vh]"
              alt="adventure img"
            />
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default AboutAdventure;

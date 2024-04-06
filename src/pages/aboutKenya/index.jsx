import React from "react";
import Layout from "../../global";
import AboutKenyaCarousel from "./AboutKenyaCarousel";
import { useState } from "react";

const AboutKenya = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  return (
    <Layout title="Kenya Highlights">
 <div
        className="relative overflow-hidden bg-no-repeat bg-cover h-56 sm:h-64 md:h-[50vh] lg:h-[30rem] mx-[-1.25rem] md:mx-0"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${backgroundImage})`, 
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full text-white text-center p-6">
            <h1 className="text-lg md:text-6xl xl:text-7xl font-bold tracking-tight">
              Explore <span className="text-yellow-500"> Kenya</span>
            </h1>
            <h4 className="text-base md:text-lg xl:text-2xl font-medium tracking-tight mt-2">
              Explore deals, travel guides and things to do in Kenya
            </h4>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
            <div className="p-4 md:p-5">
              <div className="grow ml-5">
                <h3 className="group-hover:text-black font-semibold text-gray-800">
                  Country Flag
                </h3>
                <img
                  src="https://flagcdn.com/w320/ke.png"
                  alt="kenya_flag"
                  className="h-7"
                />
              </div>
            </div>
          </div>

          <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
            <div className="p-4 md:p-5">
              <div className="grow ml-5">
                <h3 className="group-hover:text-black font-semibold text-gray-800">
                  Currency
                </h3>
                <p className="text-sm text-gray-500">Kenyan Shilling (Ksh)</p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
            <div className="p-4 md:p-5">
              <div className="grow ml-5">
                <h3 className="group-hover:text-black font-semibold text-gray-800">
                  Rates (USD)
                </h3>
                <p className="text-sm text-gray-500">$120 to $493 pp/day</p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
            <div className="p-4 md:p-5">
              <div className="grow ml-5">
                <h3 className="group-hover:text-black font-semibold text-gray-800">
                  Best Time to Visit
                </h3>
                <p className="text-sm text-gray-500">Jun - Oct | Jan - Feb</p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
            <div className="p-4 md:p-5">
              <div className="grow ml-5">
                <h3 className="group-hover:text-black font-semibold text-gray-800">
                  High Season
                </h3>
                <p className="text-sm text-gray-500">Jul - Nov | Jan - Feb</p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
            <div className="p-4 md:p-5">
              <div className="grow ml-5">
                <h3 className="group-hover:text-black font-semibold text-gray-800">
                  Size
                </h3>
                <p className="text-sm text-gray-500">580,367km²</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-2 flex justify-center mb-8 mx-4 text-4xl font-bold md:text-4xl">
        What To Know Before Visiting Kenya
      </h2>

     
      <AboutKenyaCarousel setBackgroundImage={setBackgroundImage}/>
    </Layout>
  );
};

export default AboutKenya;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
        <div className="absolute md:hidden inset-0 bg-white/50"></div>


          <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative container mx-auto px-6 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          
          <div className="max-w-xl text-center sm:text-left">
          
            <h1 className="text-4xl text-white mt-2 font-bold tracking-tight sm:text-6xl">
              Karibu Kenya.
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl sm:leading-relaxed">
              African Grand Expeditions welcomes you to explore Kenya with our
              unique and tailored safari experiences
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={"/tours"}
                className="block w-full rounded bg-zinc-800 px-12 py-3 text-sm font-medium text-white shadow hover:text-yellow-500 focus:outline-none focus:ring active:bg-zinc-900 sm:w-auto"
              >
                Browse Tours
              </Link>

              <Link
                to={"/contact"}
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-zinc-800 shadow hover:text-yellow-500 focus:outline-none focus:ring active:text-C88E50 sm:w-auto"
                >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default Hero;

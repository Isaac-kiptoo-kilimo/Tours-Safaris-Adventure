import React, { useState } from "react";
import Balloon from "../assets/hero/balloon.png";
import Banner from "./Banner";
import { IoChevronForward } from "react-icons/io5";

const Hero = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleSectionHover = (section) => {
    setHoveredSection(section);
  };

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative h-[80vh]">
        {/* <Navbar /> */}
        <img
          src={Balloon}
          alt="Single"
          className="absolute inset-0 w-full h-full object-cover transform animate-zoom-in"
        />
        <div className="absolute bottom-[1rem] left-0 ms-10 p-5 bg-black bg-opacity-75 w-3/4 h-1/4 flex items-center">
          <Banner
            desc="Join African Grand Expeditions for unforgettable safaris!"
            btnMsg="Discover Safaris"
            alignment="start"
          />
        </div>
      </div>
 <div className="px-4 md:px-0 max-w-7xl mt-10 mx-auto relative z-10">
 <div className="flex flex-col md:flex-row md:justify-center md:gap-8">
  <div className="w-full md:w-1/3 mb-4 md:mb-0">
    <div className="bg-white shadow-md rounded-md p-6 h-full cursor-pointer ring-yellow-500" onMouseEnter={() => handleSectionHover("mission")} onMouseLeave={() => handleSectionHover(null)}>
      <div className="text-center mb-6">
        <p className={`font-futura text-xl ${hoveredSection === "mission" ? "text-yellow-500" : ""}`}>OUR MISSION:</p>
      </div>
      <ul className="text-gray-800">
        <li className="mb-3">To provide award-winning safari experiences that exceed traveler expectations.</li>
        <li>To foster a community of adventurers and nature lovers passionate about exploring the wild.</li>
      </ul>
    </div>
  </div>
  <div className="w-full md:w-1/3 mb-4 md:mb-0">
    <div className="bg-white shadow-md rounded-md p-6 h-full cursor-pointer ring-yellow-500" onMouseEnter={() => handleSectionHover("vision")} onMouseLeave={() => handleSectionHover(null)}>
      <div className="text-center mb-6">
        <p className={`font-futura text-xl text-bantu-red ${hoveredSection === "vision" ? "text-yellow-500" : ""}`}>OUR VISION:</p>
      </div>
      <ul className="text-gray-800">
        <li className="mb-3">To be the leading provider of exceptional safari adventures worldwide.</li>
        <li>To inspire travelers to embark on transformative journeys and connect with nature.</li>
      </ul>
    </div>
  </div>
  <div className="w-full md:w-1/3">
    <div className="bg-white shadow-md rounded-md p-6 h-full cursor-pointer ring-yellow-500" onMouseEnter={() => handleSectionHover("values")} onMouseLeave={() => handleSectionHover(null)}>
      <div className="text-center mb-6">
        <p className={`font-futura text-xl text-bantu-red ${hoveredSection === "values" ? "text-yellow-500" : ""}`}>OUR VALUES:</p>
      </div>
      <ul className="text-gray-800">
        <li className="mb-3">Respect for wildlife, local cultures, and the environment.</li>
        <li>Dedication to creating memorable and authentic safari experiences.</li>
        <li>Transparency, integrity, and ethical business practices.</li>
      </ul>
    </div>
  </div>
</div>

</div>


    </div>
  );
};

export default Hero;

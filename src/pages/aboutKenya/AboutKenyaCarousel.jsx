import React, { useState, useEffect } from "react";
import aboutKenyaImg1 from "../../assets/images/about-kenya.png";
import aboutKenyaImg2 from "../../assets/images/about-kenya2.png";
import aboutKenyaImg3 from "../../assets/images/about-kenya3.jpg";
import aboutKenyaImg4 from "../../assets/images/about-kenya4.jpg";
import aboutKenyaImg5 from "../../assets/images/about-kenya5.jpg";
import aboutKenyaImg10 from "../../assets/images/about-kenya10.jpg";
import Culture from "../../assets/images/culture.jpg";
import Season from "../../assets/images/season2.jpg";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";

const AboutKenyaCarousel = ({ setBackgroundImage }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    aboutKenyaImg1,
    aboutKenyaImg2,
    aboutKenyaImg3,
    aboutKenyaImg4,
    aboutKenyaImg5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setBackgroundImage(images[currentIndex]);
  }, [currentIndex, setBackgroundImage, images]);

  return (
    <div className="w-full h-full  mt-[4rem]">
      <div className=" flex lg:flex-row flex-col w-full  lg:mt-[4rem] mt-[1rem]">
        <div className="lg:w-1/3 w-full mx-auto  flex flex-col">
          <div className="py-4 rounded-lg">
            <p className="lg:text-[18px] text-[14px] text-gray-600">
              It's highly likely that you are familiar with the look of Kenya's
              savanna even if you haven't visited the country. This iconic
              landscape has been featured in various forms of media such as
              movies, TV shows, books, and commercials. It's the quintessential
              African terrain that comes to mind for many when they think of the
              continent.
            </p>
          </div>
        </div>
        <div className="lg:w-[53rem] w-full  px-[2rem] flex items-center justify-center">
          <img src={aboutKenyaImg10} alt="About Kenya" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse w-full   lg:mt-[4rem] mt-[1rem] ">
        <div className="lg:w-[53rem] w-full  px-[2rem] flex items-center justify-center">
        <img src={aboutKenyaImg1} alt="About Kenya" />

        </div>
        <div className="lg:w-1/3 w-full mx-auto  flex flex-col ">
          <div className="py-4 rounded-lg">
            <p className="lg:text-[18px] text-[14px] text-gray-600">
              It stands out as one of the most abundant safari destinations,
              with its wildlife thriving in its many savannas. Herds of
              herbivores, including elephants, buffaloes, and giraffes, are
              widespread across the country, while big rivers serve as habitats
              for hippos and crocodiles. Large populations of big cats also roam
              the plains. Although rhinos are scarce in the Masai Mara, they are
              common in the Laikipia plateau. But it's the wildebeest and zebra
              that truly steal the show, as they put on a spectacular annual
              migration that is simply awe-inspiring.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col w-full lg:mt-[4rem] mt-[1rem]">
        <div className="lg:w-1/2 lg:ps-10 ps:0 w-full mx-auto  flex flex-col  ">
          <h2 className="text-2xl flex  gap-1 text-yellow-500 tracking-tight text-gray-600 md:text-4xl">
            Culture & Heritage
          </h2>
          <div className="py-4 rounded-lg">
            <p className="lg:text-[18px] text-[14px] text-gray-600">
              Kenya's landscape is enriched by some of the most well-known
              peoples in Africa, whose histories and daily lives contribute to
              the country's rich cultural tapestry. Among them are the Maasai,
              the Samburu, the Turkana, the Swahili, and the Kikuyu, whose
              stories are integral to the country's narrative and to that of the
              continent as a whole. Their struggles to preserve their traditions
              while navigating a rapidly changing world, their daily battles for
              survival in some of the harshest environments on the planet, and
              the age-old conflicts between farmers and pastoralists all
              contribute to their complex and fascinating stories. Exploring
              these cultures could be one of the most rewarding experiences of
              your visit.
            </p>
          </div>
        </div>
        <div className="lg:w-[53rem] w-full  px-[2rem] flex items-center justify-center ">
        <img src={Culture}  className="lg:w-11/12 w-full  h-full lg:ms-3 ms-0" alt="About Kenya"
            />

        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse w-full  lg:mt-[4rem] mt-[1rem]">
        <div className="lg:w-[53rem] w-full  px-[2rem] flex items-center justify-center">
          <img
            src={Season}
            className="w-full lg:h-[25rem] h-full lg:ms-3 ms-0"
            alt="adventure img"
          />
        </div>
        <div className="lg:w-1/3 lg:ps-10 ps:0 w-full mx-auto  flex flex-col">
          <h2 className="text-2xl flex gap-1 items-center text-yellow-500 tracking-tight text-gray-600 md:text-4xl">
            Seasons
          </h2>
          <div className="py-4 rounded-lg">
            <p className="lg:text-[18px] text-[14px] text-gray-600">
              To maximize your chances of witnessing Kenya's wildlife, it's
              advisable to visit during the Dry season, which lasts from June to
              October. During this time, the bush becomes less dense, making it
              easier to spot animals as they migrate towards the nearest water
              sources. However, the Wet season from November to May has its own
              unique offerings. The scenery is lush and vibrant, and it's a time
              when newborn animals abound.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex lg:mt-10 mt-5 justify-center p-5">
  <button
    className="border border-yellow-500 bg-white text-gray-500 px-10 py-3 rounded-lg focus:outline-none text-2xl hover:bg-yellow-500 hover:text-white"
    onClick={() => {
      navigate("/contact");
    }}
  >
    Reach Us 
  </button>
</div>

    </div>
  );
};

export default AboutKenyaCarousel;

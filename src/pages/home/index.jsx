import React, { useEffect } from "react";
import Features from "./components/Features";
import ExperienceCategory from "./components/ExperienceCategory";
import PlanExperience from "./components/PlanExperience";
import Browse from "../../assets/images/browse.jpg";
import Book from "../../assets/images/book.jpg";
import Go from "../../assets/images/go.jpg";
import { Footer } from "../../global/footer";

import HomeHeroCarousel from "./components/Carousel";
import Header from "./components/Header";
import PauseOnHoverTours from "./components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutAdventure from "./components/AboutAdventure";
import Destinations from '../../data/popularDestination.json'
import { useNavigate } from "react-router-dom";

const Home = () => {
  console.log(Destinations);
  const navigate=useNavigate()
  const handleDestinationNav=(name)=>{
    console.log("clicked");
    navigate(`destination/${name}`)
    
  }
  useEffect(() => {
    document.title = "African Grand Expeditions";
  }, []);

  return (
    < div className="overflow-hidden">
      <Header />

      <HomeHeroCarousel />

      <Features />
      <AboutAdventure />
      {/* experiences near you */}
      <div className=" mx-auto">
        <div className="container py-2 flex justify-center md:max-w-lg mx-auto mt-5 lg:my-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Adventures For You
          </h1>
        </div>
        <PauseOnHoverTours />
      </div>

      {/* popular destinations */}
      <div className="bg-gray-50 py-2 ">
        <div className="container py-2 px-6 md:px-0 md:max-w-lg mx-auto mt-10 lg:mt-20">
          <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900 md:text-5xl">
            Popular Destinations
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-12 px-12 md:px-20">
       {
        Destinations && Destinations.map((destination)=>(
          <ExperienceCategory
            name={destination.name}
            img={destination.summary_image}
            onClick={() => handleDestinationNav(destination.name)}
          />
        ))
       }
          
         
        </div>
      </div>

      {/* plan your experience in 3 steps */}
      <div className="container text-center px-6 md:px-0 md:max-w-lg mx-auto mt-10 lg:mt-20">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Experience in 3 easy steps
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-12 px-12 md:px-20">
        <PlanExperience
          image={Browse}
          name="Browse"
          description="Choose from hundreds of experiences designed by expert hosts with deep local knowledge and outdoor credentials."
        />
        <PlanExperience
          image={Book}
          name="Book"
          description="With Mpesa one-tap payments, you never have to worry about entering credit card details ever with us."
        />
        <PlanExperience
          image={Go}
          name="Go"
          description="Show up where you agreed to meet with the host and enjoy your experience. You can review your experience after you are done"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

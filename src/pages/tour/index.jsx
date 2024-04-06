import React from "react";
import Layout from "../../global";
import ListingCard from "../../global/components/ListingCard";
import ToursData from "../../data/tours.json";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";

const Tours = () => {

const navigate=useNavigate()
console.log(ToursData);
const handleSingleTour = (tourId) => {
  navigate(`/tour/${tourId}`);
};


  return (
    <Layout title="Tours">
              
              <HeroCarousel/>
             

      <div className="container mx-auto px-4 mt-0 md:mt-1">
        <h2 className=" mb-8 mx-4 text-4xl font-bold md:text-4xl">
          African Grand Expeditions Safaris
        </h2>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[881px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {ToursData.map((tour, index) => (
            <ListingCard
              key={index}
              index={index}
              name={tour.name}
              location={"Nairobi, Kenya"}
              type="tour"
              image={tour.imageCover}
              // price={tour.price?.toLocaleString("en-US")}
              id={index}
              ratings={tour.ratingsAverage}
              onClick={() => handleSingleTour(index)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tours;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../global";
import { Card } from "flowbite-react";
import Spinner from "../../../global/components/Spinner";
import CustomLoader from "../../customLoaders/index";
import { FaStar } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DestinationsData from '../../../data/popularDestination.json';

const Destinations = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [destination, setDestination] = useState(null);
  
  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      const selectedDestination = DestinationsData.find(dest => dest.name === name);
      setDestination(selectedDestination);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [name]);

  if (isLoading) {
    return (
      <div>
        <CustomLoader />
      </div>
    );
  }

  if (!destination) {
    return (
      <div>
        Destination not found
      </div>
    );
  }

  return (
    <Layout>
      <div className="px-4 py-5 lg:px-10">
        <h2 className="text-4xl font-bold tracking-tight py-4 text-yellow-500 b-r dark:text-white border-bottom-hover ">
          {destination.name} Destination
        </h2>
        <div>
          {destination.popular_attractions.map(area => (
            <div key={area.name} className="mt-8">
              <h2 className="text-4xl font-bold tracking-tight pb-4 text-gray-900 dark:text-white">
                {area.name}
              </h2>
              <div className="text-2xl flex gap-6">
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  {area.ratingsAverage}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    className="w-full h-auto object-cover"
                    src={area.image}
                    alt="destination image"
                  />
                </div>
                <div>
                  <Card className="p-6">
                    <p className="text-2xl font-semi-bold tracking-tight text-gray-900 dark:text-white">
                      {area.description}
                    </p>
                    <button
                      className="mt-4 bg-yellow-500 text-white rounded-lg py-2 w-full"
                      onClick={() => {
                        navigate("/contact");
                      }}
                    >
                      Enquire Now
                    </button>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Destinations;

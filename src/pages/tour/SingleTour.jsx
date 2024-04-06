import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToursData from "../../data/tours.json";
import Layout from "../../global";
import { Card } from "flowbite-react";
import Spinner from "../../global/components/Spinner";
import CustomLoader from "../customLoaders";
import Logo from "../../assets/images/logo-icon.png";
import { FaStar } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SingleTour() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const tour = ToursData[tourId];

  const routeData = tour.tour_data.overview;
  const numberOfDays = Object.keys(routeData.route_data[0]).length;
  const [truncatedDescription, setTruncatedDescription] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    handleLoading();
  }, []);

  if (!tour) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  const toggleDescription = () => {
    setTruncatedDescription(!truncatedDescription);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    const truncated = description.substring(0, maxLength);
    return truncated + " ...";
  };

  return (
    <>
      {isLoading ? (
        <div>
          <CustomLoader />
        </div>
      ) : (
        <Layout>
          <div className="px-4 py-5 lg:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              {tour.name}
            </h2>
            <div className="text-2xl lg:mt-4 flex lg:flex-row flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                {tour.ratingsAverage}
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineCalendarMonth className="text-yellow-500" />
                {numberOfDays} day(s)
              </span>
              <span>{tour.tour_data.overview.route_data[0].days_route}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
              <div>
                <img
                  className="w-full object-cover h-72 lg:h-[60vh]"
                  src={tour.imageCover}
                  alt=""
                />
                <div className="text-2xl mt-4 py-2">
                  <h3>About This Adventure</h3>
                </div>
                <p className="text-gray-700 text-[18px] dark:text-gray-400">
                  {truncatedDescription
                    ? truncateDescription(
                        tour.tour_data.overview.route_description,
                        200
                      )
                    : tour.tour_data.overview.route_description}
                  {tour.tour_data.overview.route_description.length > 200 && (
                    <button
                      className="block mt-2 bg-transparent text-yellow-500"
                      onClick={toggleDescription}
                    >
                      {truncatedDescription ? "View More" : "View Less"}
                    </button>
                  )}
                </p>
              </div>
              <div>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Duration:{" "}
                    <span className="text-yellow-500">
                    {numberOfDays} day(s)
                    </span>
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400">
                    Rating {tour.ratingsAverage}
                  </p>
                  <span className="mt-4 p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md">
                    When do you want to go
                  </span>
                  <button
                    className="block mt-4 bg-yellow-500 text-white rounded-lg py-1 w-full"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Enquire Now
                  </button>
                </Card>
              </div>
              <div>
                <h5 className="text-xl font-bold mt-5 ">Hosted By:</h5>
                <Card className="mt-3">
                  <div className="flex items-center">
                    <img
                      src={Logo}
                      alt="African GE"
                      className="w-20 h-20 rounded-full p-2"
                    />
                    <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                      African Grandexpeditions
                    </p>
                  </div>
                  <Card className="mt-1 w-full">
                    <p className="text-gray-700 text-[18px] dark:text-gray-400">
                      {truncatedDescription
                        ? truncateDescription(
                            tour.tour_data.overview.route_description,
                            200
                          )
                        : tour.tour_data.overview.route_description}
                      {tour.tour_data.overview.route_description.length >
                        200 && (
                        <button
                          className="block mt-2 bg-transparent text-yellow-500"
                          onClick={toggleDescription}
                        >
                          {truncatedDescription ? "View More" : "View Less"}
                        </button>
                      )}
                    </p>
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default SingleTour;

// <h5 className="text-2xl mt-5 font-bold tracking-tight text-gray-900 dark:text-white">
// Hosted By:
// </h5>

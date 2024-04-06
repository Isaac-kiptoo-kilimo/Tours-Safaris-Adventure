import React from "react";
import User1 from "../assets/headshots/user1.jpg";
import User2 from "../assets/headshots/user2.jpg";
import User3 from "../assets/headshots/user3.jpg";
import Slider from "react-slick";
import ImageCard from "../../home/components/ImageCard";

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  var responsiveSettings = [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        centerPadding: "5px",

      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        centerPadding: "5px",
      },
    },
  ];

  return (

    <div className="py-16">
      
    <div className="slider-container w-11/12 mx-auto ">
    <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          What's our safaris are saying
        </h2>
      <Slider {...settings} {...settings} responsive={responsiveSettings} className="lg:mx-0 mx-5 ">
      <div class="max-w-sm rounded p-3 overflow-hidden shadow-lg">
        <img
                className="mx-auto h-20 w-20 rounded-full"
                src={User1}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />

          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
           " Having recently embarked on multiple tours with African Grand Expeditions, particularly to renowned destinations like Maasai Mara, I can confidently say that my experiences have been nothing short of exceptional. The ease and affordability of arranging these adventures through African Grand Expeditions have truly stood out to me."
            </p>
          </div>
          <div className="px-6 w-full flex justify-end">

          <div>
                <h6 className="text-lg font-semibold leading-none">
                  Jaffer Padrino
                </h6>
                <span className="text-xs text-gray-500">Product Designer</span>
              </div>
              </div>
        </div>
        <div class="max-w-sm rounded p-3 overflow-hidden shadow-lg">
        <img
                className="mx-auto h-20 w-20 rounded-full"
                src={User2}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />

          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
            "Having just returned from several tours with African Grand Expeditions, including Maasai Mara, I must say, the experience was beyond amazing.I was able to immerse myself fully in the magic of these distinct environments. The seamless planning and reasonable pricing made the adventures truly unforgettable."            </p>

          </div>
          <div className="px-6 w-full flex justify-end">
          <div >
                <h6 className="text-lg font-semibold leading-none">
                Hanan Noor
                </h6>
                <span className="text-xs text-gray-500">Artist</span>
              </div>
          </div>
        </div>
        <div class="max-w-sm rounded p-3 overflow-hidden shadow-lg">
        <img
                className="mx-auto h-20 w-20 rounded-full"
                src={User3}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />

          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
            "Exploring Kenya's diverse landscapes with African Grand Expeditions was a journey of discovery. From the golden sands of Kenya's stunning beaches to the wild wonders of Nairobi Game Park, every moment was an adventure.Thanks to African Grand Expeditions' expert guidance, I was able to immerse myself & creating memories that will last a lifetime."            </p>
          </div>
          <div className="px-6 w-full flex justify-end">

          <div>
                <h6 className="text-lg font-semibold leading-none">
                Kevin Kahura
                </h6>
                <span className="text-xs text-gray-500">Local Tourist</span>
              </div>
              </div>
        </div>


  
      </Slider>
    </div>
      {/* <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          What's our hosts are saying
        </h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 rounded-3xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex h-full flex-col justify-center space-y-4">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={User2}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <p className="md:text-xl">
                <span className="font-serif">"</span>As an indie artist, growing
                my fanbase can be a real challenge. But with African Grand
                Expeditions, it's been so easy. The platform has allowed me to
                connect with new fans and showcase my music to a wider audience.
                The team at African Grand Expeditions has been incredibly
                supportive and has helped me to promote my events and reach more
                people. I would highly recommend African Grand Expeditions to
                any other indie artists looking to grow their fanbase.
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  Hanan Noor
                </h6>
                <span className="text-xs text-gray-500">Artist</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={User3}
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
              <p>
                <span className="font-serif">"</span> Getting paid on African
                Grand Expeditions is incredibly easy thanks to the Mpesa one tap
                cash out method. I didn't have to worry about complicated
                payment processes or delays. The payment was processed quickly
                and I was able to get paid in no time. I really appreciate the
                ease and convenience of the payment system on African Grand
                Expeditions. It's just one more reason why I love hosting
                experiences on this platform.{" "}
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  Jaffer Padrino
                </h6>
                <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={User1}
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
              <p>
                <span className="font-serif">"</span> I recently started hosting
                on African Grand Expeditions and got so many bookings soon after
                creating my experience and it's easy to see why. I would highly
                recommend Tajrba to anyone looking to make a living doing what
                they love
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  Kevin Kahura
                </h6>
                <span className="text-xs text-gray-500">Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;

import React from "react";
import Slider from "react-slick";
import Rectangle23 from "../../../assets/images/Rectangle-23.png";
import ShabaGameReserveImg from "../../../assets/images/bg-18.jpg";
import NakuruReserveImg from "../../../assets/images/bg-32.jpg";
import WilderbestMigrationImg from "../../../assets/images/wilderbest3.jpg";
import LakeNaivashaImg from "../../../assets/images/naivasha5.jpg";
import TsavoWestImg from "../../../assets/images/tsavo-west.jpg";
import TsavoEastImg from "../../../assets/images/tsavo-east.jpg";
import ImageCard from "./ImageCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PauseOnHoverTours = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 text-white p-1 rounded-full" >
        <FaArrowAltCircleLeft   onClick={onClick} />
  
      </div>
    
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 text-white p-1 rounded-full" >
        <FaArrowAltCircleRight  onClick={onClick}/>
       
      </div>
    
    
    );
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    <div className="slider-container text-center relative">
      <Slider {...settings} {...settings} responsive={responsiveSettings} className="lg:mx-16 mx-5 ">
        <div class="max-w-sm rounded pb-1 overflow-hidden shadow-lg">
          <ImageCard ImgUrl={Rectangle23} ImgAlt="Sunset in the mountains" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nairobi</div>
            <p className="text-gray-700 text-base">
              Africa's 4th largest city, offers vibrant attractions. Experience
              wildlife at Nairobi National Park, the world's only urban game
              reserve. Visit The David Sheldrick Wildlife Trust to adopt and
              care for baby elephants. Explore The Giraffe Centre to feed and
              learn about Rothschild giraffes.
            </p>
          </div>
        </div>
        <div className="max-w-sm pb-1 rounded overflow-hidden shadow-lg">
          <ImageCard ImgUrl={Rectangle23} ImgAlt="Sunset in the mountains" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Ol Pejeta Conservancy</div>
            <p className="text-gray-700 text-base">
              Ol Pejeta Conservancy, nestled at Mount Kenya's foothills, is East
              Africa's largest black rhino sanctuary. Home to rare northern
              white rhinos and rescued chimpanzees, it offers safari experiences
              with the 'Big Five' and diverse African wildlife. Enjoy outdoor
              adventures like horse rides and game drives.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded pb-1 overflow-hidden shadow-lg">
          <ImageCard
            ImgUrl={ShabaGameReserveImg}
            ImgAlt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Shaba Game Reserve</div>
            <p className="text-gray-700 text-base">
              Discover Shaba National Reserve near Samburu National Park in
              Kenya, home to Mount Shaba's majestic extinct volcano. Supported
              by the Ewaso Ngiro River, it hosts diverse wildlife like gerenuk
              and Somali ostrich. Enjoy game viewing, cultural tours, and the
              Joy Adamson Museum amidst scenic landscapes of forests and
              volcanic formations.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded pb-1 overflow-hidden shadow-lg">
          <ImageCard
            ImgUrl={NakuruReserveImg}
            ImgAlt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Lake Nakuru National Park</div>
            <p className="text-gray-700 text-base">
              Embark on a thrilling safari adventure at Lake Nakuru National
              Park, renowned for its Lesser Flamingo spectacle and abundant
              wildlife. Indulge in breakfast at Sarova Shaba Game Lodge,
              followed by lunch at Sarova Lion Hill Game Lodge. Experience an
              exhilarating game drive and unwind at Sarova Lion Hill Lodge for a
              memorable stay.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <ImageCard
            ImgUrl={WilderbestMigrationImg}
            ImgAlt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Masai Mara</div>
            <p className="text-gray-700 text-base">
              The Masai Mara and Serengeti offer Africa's most iconic wildlife
              experiences. Witness the breathtaking wildebeest migration,
              alongside lions, elephants, and giraffes roaming the plains. Stay
              at Zebra Plains Mara Camp, featuring deluxe tents with modern
              amenities and cozy lounges. Explore the Mara on game drives and
              relax by the campfire under the stars.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <ImageCard ImgUrl={TsavoWestImg} ImgAlt="Sunset in the mountains" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tsavo West National Park</div>
            <p className="text-gray-700 text-base">
              Explore the diverse landscapes of Tsavo West National Park, known
              for its volcanic scenery and abundant wildlife. Enjoy game drives
              spotting black rhinos, Cape buffalos, elephants, leopards, and
              more. Stay at Severin Safari Camp for an immersive experience
              amidst the Kenyan wilderness, offering adventure, relaxation, and
              culinary delights.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <ImageCard ImgUrl={TsavoEastImg} ImgAlt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tsavo East National Park</div>
            <p className="text-gray-700 text-base">
              Experience the wild beauty of Tsavo East National Park, known for
              its vast elephant and buffalo herds, stunning landscapes, and
              iconic landmarks like the Galana River and Mudanda Rock. Stay at
              Ngutuni Lodge, offering luxury accommodations amidst a private
              game sanctuary teeming with wildlife. Enjoy thrilling game drives
              and tranquil evenings under the starlit African sky.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <ImageCard
            ImgUrl={LakeNaivashaImg}
            ImgAlt="Sunset in the mountains"
          />

          {/* <img class="w-full" src={LakeNaivashaImg} alt="Sunset in the mountains" /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Lake Naivasha</div>
            <p className="text-gray-700 text-base">
              Lake Naivasha, highest of the Great Rift Valley lakes, boasts rich
              birdlife and stunning scenery. Enjoy a morning boat ride after
              breakfast at Zebra Plains Mara Camp, then savor lunch at Sawela
              Lodge. With views of Mt. Longonot and Lake Naivasha, Sawela offers
              luxurious accommodation just a short drive from Nairobi.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <ImageCard ImgUrl={Rectangle23} ImgAlt="Sunset in the mountains" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mombasa</div>
            <p className="text-gray-700 text-base">
              Explore the vibrant culture and rich history of Mombasa, Kenya's
              coastal gem. Wander through the charming Old Town, visit the
              iconic Fort Jesus, and bask in the beauty of coral reefs and
              white-sand beaches. Stay at Voyager Beach Resort, offering
              luxurious accommodations and exciting themed entertainment for the
              whole family.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default PauseOnHoverTours;

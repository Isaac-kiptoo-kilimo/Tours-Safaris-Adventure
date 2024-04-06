import React from "react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

const ListingCard = ({
  image,
  name,
  index,
  price,
  location,
  type,
  id,
  ratings,
}) => {
  return (
    <Link to={`/${type}/${id}`}>
      <div className="group relative rounded-lg items-center justify-center overflow-hidden md:transition-shadow md:hover:shadow-xl md:hover:shadow-black/30">
        <div className="h-96">
          <img
            src={image}
            alt={`${type}_img_${index}`}
            className="h-full w-full object-cover md:transition-transform md:duration-500 md:group-hover:rotate-3 md:group-hover:scale-125"
          />
        </div>
        <div className="absolute bg-black/60 md:bg-transparent inset-0 md:bg-gradient-to-b md:from-transparent md:via-transparent md:to-black md:group-hover:from-black/70 md:group-hover:via-black/60 md:group-hover:to-black/70"></div>

        <div className="absolute inset-0 flex md:translate-y-[60%] flex-col items-center justify-center px-2 text-center md:transition-all md:duration-500 md:group-hover:translate-y-0">
          <h1 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:line-clamp-5">{name}</h1>
          <h3 className="mb-5 text-md text-white/80 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
            {location}
          </h3>
          <Rating>
            <Rating.Star color="#fff" />
            <p className="text-sm font-bold text-white">{ratings}</p>
          </Rating>
          {/* <button className="rounded-lg bg-white/70 py-2 px-3.5 font-bold text-sm capitalize text-black mt-5 shadow shadow-black/60">
            Ksh {price}
          </button> */}
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;

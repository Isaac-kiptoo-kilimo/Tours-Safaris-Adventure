import React from "react";

const ImageCard = ({ ImgUrl, ImgAlt }) => {
  return (
    <div className="w-full h-full bg-cover bg-center relative rounded-lg" style={{ backgroundImage: `url(${ImgUrl})` }}>
      <img className="hidden" src={ImgUrl} alt={ImgAlt} />
      
    </div>
  );
};

export default ImageCard;

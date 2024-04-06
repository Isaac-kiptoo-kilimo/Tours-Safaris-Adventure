import React from "react";

const ImageCard = ({ImgUrl,ImgAlt}) => {
  return (
    <div>
      <img className="w-full h-[15rem]" src={ImgUrl} alt={ImgAlt} />
    </div>
  );
};

export default ImageCard;

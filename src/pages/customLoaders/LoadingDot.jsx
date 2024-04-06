import React from 'react';
import Logo from '../../assets/images/logo-icon.png';

const LoadingDot = () => {
  const numberOfDots = 24;

  return (
    <div className="relative">
      <img
        src={Logo}
        alt="African GE"
        className="w-25 h-25 rounded-full p-2"
      />
{/* looping through the dots */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-yellow-500 rounded-full absolute animate-spin"
            style={{
              transform: `rotate(${(index * 360) / numberOfDots}deg) translateX(5rem)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingDot;

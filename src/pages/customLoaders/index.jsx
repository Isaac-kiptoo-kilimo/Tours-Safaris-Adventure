// LoadingApp.jsx
import React from 'react';
import LoadingDot from './LoadingDot';

const CustomLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center text-2xl gap-4 h-screen">
      
      <LoadingDot />
      <h4 >Karibu Kenya</h4>
    </div>
  );
};

export default CustomLoader;

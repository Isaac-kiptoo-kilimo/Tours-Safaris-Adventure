import React from "react";

const Partners = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-40">
        <div className="mb-8">
          <h6 className="text-lg² text-center font-bold text-cyan-500">
            Trusted by +5 giants
          </h6>
        </div>
        <div className="scrollbar-transparent overflow-x-auto lg:overflow-hidden">
          <div className="-mx-6 flex space-x-6 px-6 md:space-x-12 lg:justify-between">
            <img
              src="https://tailus.io/sources/blocks/application-site/preview/images/clients/airbnb.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/application-site/preview/images/clients/tailus.svg"
              loading="lazy"
              className="w-36 grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/application-site/preview/images/clients/ge.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/application-site/preview/images/clients/coty.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="https://tailus.io/sources/blocks/application-site/preview/images/clients/microsoft.svg"
              loading="lazy"
              className="grayscale transition hover:grayscale-0"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

const Banner = ({ desc, btnMsg }) => {
  return (
    <div className="border-l-4 border-white pl-8">
      <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl">
        {desc}
      </h2>
      <a
        href="/safaris"
        className="relative flex h-12 w-full mx-auto items-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max outline-yellow-500"
      >
        <span className="relative text-base font-semibold text-yellow-500">
          {btnMsg}
        </span>
      </a>
    </div>
  );
};

export default Banner;

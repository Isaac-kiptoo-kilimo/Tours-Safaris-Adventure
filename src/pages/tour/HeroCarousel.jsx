import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Carousel.css';
import TopToursData from "../../data/tours.json";

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const carouselItems = TopToursData.slice(0, 8);

  return (
    <div className='bg-gray-100 py-2'>
      <div className="flex flex-col justify-center pl-[4rem] h-[12vh]">
        <h2 className='text-2xl font-bold lg:text-4xl '>TOP <span className='text-yellow-500'> FEATURED</span> SAFARIS</h2>
      </div>
      <div className="embla w-[90vw] mx-auto" style={{ borderRadius: "2rem" }} ref={emblaRef}>
        <div className="embla__container h-[60vh]">
          {carouselItems.map((item) => (
            <div key={item.id} className="embla__slide relative bg-hero-home bg-cover md:bg-center bg-no-repeat">
              <img src={item.imageCover} alt="top-safaris images" className="w-full h-full object-cover" />
              <div className="text-center absolute text-2xl font-bold lg:text-4xl inset-0 flex flex-col justify-center lg:pl-20 gap-5 w-1/2">
                <div className="bg-gray-900 p-1" style={{ opacity: '0.6' }}>
                  <h2 className='text-3xl font-semi-bold text-white text-left'>{item.name}</h2>
                  <h2 className='text-1xl font-semi-bold text-white text-left'>KSH {item.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;

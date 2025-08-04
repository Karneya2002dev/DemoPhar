import React from 'react';
import banner1 from '../assets/text1.png';
import banner2 from '../assets/text2.png';
import banner3 from '../assets/text3.png';
import banner4 from '../assets/text4.png';
import banner5 from '../assets/text5.png';
import banner6 from '../assets/text6.png';
import banner7 from '../assets/text7.png';
import banner8 from '../assets/text8.png';

const images = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];

const ImageCarousel = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 bg-gray-100">
      {/* Gradient Masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Scrolling Track */}
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="mx-3 p-2 sm:p-3 transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <img
              src={img}
              alt={`carousel-img-${index}`}
              className="w-48 sm:w-64 h-28 sm:h-40 object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

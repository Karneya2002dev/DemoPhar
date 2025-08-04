import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const banners = [
  {
    image: banner3,
    title: 'Safe Hands for Your Health',
  },
  {
    image: banner2,
    title: 'Pharmaceutical Excellence',
  },
  {
    image: banner1,
    title: 'Innovate for Wellness',
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={banners[index].image}
          initial={{ opacity: 0, scale: 1.05, borderRadius: '2rem' }}
          animate={{ opacity: 1, scale: 1, borderRadius: '0.75rem' }}
          exit={{ opacity: 0, scale: 1.05, borderRadius: '2rem' }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={banners[index].image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* Caption on Left Side with Floating Animation */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-left w-full max-w-[600px] px-4 sm:px-10">
            <motion.h2
              animate={{
                y: [0, -10, 0], // float animation
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              }}
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00c6ff] via-[#ff61d2] to-[#845ec2] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] tracking-wide"
            >
              {banners[index].title}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              i === index
                ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                : 'bg-white/30'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

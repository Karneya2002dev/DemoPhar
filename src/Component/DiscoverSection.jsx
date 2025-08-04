import React from 'react';
import { motion } from 'framer-motion';

// Replace this with the actual video path or URL
import bgVideo from '../assets/blueline.mp4'; // make sure the path is correct

const DiscoverSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-20 max-w-2xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Discover Our Innovative Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base md:text-lg leading-relaxed text-white/90"
        >
          <span className="font-semibold text-sky-200">
            "Beyond Boundaries, Ahead in Healthcare."
          </span>
          <br />
          We're changing healthcare with simpler, smarter innovations.
          At Fourmax Pharmaceuticals, we build{' '}
          <span className="text-purple-300 font-medium">reliable, forward-thinking solutions</span>{' '}
          to support better patient care through strong research, quality production,
          and a global reach — all in a fast-moving world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8"
        >
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md">
            LEARN MORE
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiscoverSection;

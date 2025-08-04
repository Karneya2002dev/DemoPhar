// components/GlobalLoader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import loaderImg from '../assets/Dna.json'
const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <motion.img
        src={loaderImg}
        alt="Loading..."
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-32 h-32"
      />
    </div>
  );
};

export default GlobalLoader;

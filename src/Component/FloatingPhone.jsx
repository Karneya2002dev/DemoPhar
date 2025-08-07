import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi';

const FloatingPhone = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0, rotate: -20 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-16 left-1/2 transform -translate-x-1/2 z-[100] cursor-pointer animate-bounce"
      onClick={() => navigate('/contact')}
    >
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full shadow-2xl">
        <FiPhoneCall className="text-white text-3xl" />
      </div>
    </motion.div>
  );
};

export default FloatingPhone;

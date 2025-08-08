// ProductModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  if (!product) return null;

  const handleImageClick = () => {
    setFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % product.images.length);
      setFlipping(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-xl shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition text-3xl font-bold z-10"
            >
              &times;
            </button>

            {/* Left - Image with 3D flip */}
            <div className="bg-gray-100 flex flex-col items-center justify-center p-4">
              <motion.img
                key={currentIndex}
                src={product.images[currentIndex]}
                alt={product.title}
                className="max-h-[400px] object-contain rounded-lg cursor-pointer"
                animate={{
                  rotateY: flipping ? 90 : 0,
                  scale: flipping ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={handleImageClick}
              />

              {/* Dot indicators */}
              <div className="flex gap-2 mt-4">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === currentIndex
                        ? "bg-gray-800"
                        : "bg-gray-400 hover:bg-gray-600"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Right - Details */}
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;

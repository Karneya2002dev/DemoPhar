import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = ['All Products', 'Cardiovascular', 'Respiratory', 'Infectious Disease', 'Diabetics'];

const products = [
  {
    id: 1,
    category: 'Cardiovascular',
    title: 'Cardiovascular Care',
    description: 'Advanced medications for heart health and blood pressure management.',
    image: 'https://cpea.neocities.org/FOURMAX/images/Product.jpg',
  },
  {
    id: 2,
    category: 'Respiratory',
    title: 'Respiratory Solutions',
    description: 'Treatments for asthma, COPD, and other respiratory conditions.',
    image: "https://cpea.neocities.org/FOURMAX/images/Product.jpg",
  },
  {
    id: 3,
    category: 'Infectious Disease',
    title: 'Antibiotics',
    description: 'Broad-spectrum and targeted antibiotics for various infections.',
    image: "https://cpea.neocities.org/FOURMAX/images/Product.jpg",
  },
  {
    id: 4,
    category: 'Diabetics',
    title: 'Diabetes Management',
    description: 'Comprehensive solutions for effective blood sugar control and diabetic care.',
    image: "https://cpea.neocities.org/FOURMAX/images/Product.jpg",
  },
];

const ProductCard = ({ product, isFlipped, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group [perspective:1000px] w-full h-64 sm:h-72 md:h-80 cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
          <h4 className="text-2xl font-bold text-sky-500">{product.category}</h4>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center transform rotate-y-180 [backface-visibility:hidden]">
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3 rounded-xl"
          />
          <h3 className="text-base sm:text-lg font-semibold text-purple-700 mb-1">
            {product.title}
          </h3>
          <p className="text-gray-800 text-xs sm:text-sm">{product.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [flippedCardId, setFlippedCardId] = useState(null);

  useEffect(() => {
    if (flippedCardId !== null) {
      const timeout = setTimeout(() => setFlippedCardId(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [flippedCardId]);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleCardClick = (id) => {
    setFlippedCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="relative text-white py-16 px-4 sm:px-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://img.pikbest.com/wp/202347/capsule-pill-pharmacy-and-healthcare-concept-blue-background-with-pills-in-panoramic-layout-3d-render_9763081.jpg!sw800')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Products
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setFlippedCardId(null);
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full font-medium transition shadow-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-blue-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isFlipped={flippedCardId === product.id}
              onClick={() => handleCardClick(product.id)}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

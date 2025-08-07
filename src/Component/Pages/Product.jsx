import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = ['All Products', 'Cardiovascular', 'Respiratory', 'Infectious Disease', 'Diabetics'];

const products = [
  {
    id: 1,
    category: 'Cardiovascular',
    title: 'Cardiovascular Care',
    description: 'Advanced medications for heart health and blood pressure management.',
    image: 'https://t3.ftcdn.net/jpg/08/85/78/36/360_F_885783672_vvLOoaSazODo7JLje6A9UXpMXXv5cgJu.jpg',
  },
  {
    id: 2,
    category: 'Respiratory',
    title: 'Respiratory Solutions',
    description: 'Treatments for asthma, COPD, and other respiratory conditions.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfLDVDnysmI_yrvwUwJrpLl0ua5W7G5VRtw&s",
  },
  {
    id: 3,
    category: 'Infectious Disease',
    title: 'Antibiotics',
    description: 'Broad-spectrum and targeted antibiotics for various infections.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHAS1LriHiKou-yvxPeZa717EbtWet6e6hA&s",
  },
  {
    id: 4,
    category: 'Diabetics',
    title: 'Diabetes Management',
    description: 'Comprehensive solutions for effective blood sugar control and diabetic care.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOtAAA_pbZyXov4OCCjLrKpC0lzvQaMpZ5g&s",
  },
];

const categoryBackgrounds = {
  'All Products': 'https://img.pikbest.com/wp/202347/capsule-pill-pharmacy-and-healthcare-concept-blue-background-with-pills-in-panoramic-layout-3d-render_9763081.jpg!sw800',
  'Cardiovascular': 'https://media.istockphoto.com/id/454238423/photo/stethoscope-heart-shape.jpg?s=612x612&w=0&k=20&c=1jtvb5aCwdR7nY1prW11mNwW0Wla3bUSkc17_C6YfK8=',
  'Respiratory': 'https://media.istockphoto.com/id/816819352/photo/the-inhaler-and-mask-pairs-antiallergic-drugs-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=fbu9ol4ibS_0sV5S83WL4DsI2FYVdzwdse_hz2H8yJ4=',
  'Infectious Disease': 'https://png.pngtree.com/background/20250212/original/pngtree-texture-of-geometry-and-microbiology-in-medical-particle-elements-picture-image_13456132.jpg',
  'Diabetics': 'https://www.slideegg.com/image/multi-slide/47857/82163-diabetes-powerpoint-background-01.png',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ProductCard = ({ product, isFlipped, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={delay + 1}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
          <h4 className="text-2xl font-bold text-gray-900">{product.category}</h4>
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
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${categoryBackgrounds[selectedCategory]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Products
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              custom={index}
              onClick={() => {
                setSelectedCategory(category);
                setFlippedCardId(null);
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full font-medium transition shadow-md
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-gray-800 to-black text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

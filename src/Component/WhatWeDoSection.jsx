import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaIndustry, FaCheckCircle, FaTruckMoving } from 'react-icons/fa';

const services = [
  {
    icon: <FaFlask size={40} className="text-blue-700" />,
    title: 'Research & Development',
    description:
      'Developing breakthrough medications through innovative scientific research and clinical trials.',
  },
  {
    icon: <FaIndustry size={40} className="text-blue-700" />,
    title: 'Manufacturing',
    description:
      'Producing high-quality pharmaceutical products in state-of-the-art facilities.',
  },
  {
    icon: <FaCheckCircle size={40} className="text-blue-700" />,
    title: 'Quality Control',
    description:
      'Ensuring all products meet rigorous safety and efficacy standards.',
  },
  {
    icon: <FaTruckMoving size={40} className="text-blue-700" />,
    title: 'Distribution',
    description:
      'Global supply chain ensuring our products reach patients worldwide.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      type: 'spring',
    },
  }),
};

const WhatWeDoSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#0b1e3d] bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{
        backgroundImage: `url('/your-background.jpg')`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-12 relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            What We Do
          </span>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-2 mx-auto rounded-full" />
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative group rounded-2xl transition-all duration-500"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
              <div className="relative z-10 bg-[#0e1235] text-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between min-h-[360px]">
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <div className="bg-white rounded-full p-4 shadow-md">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2 text-center">
                    {service.title}
                  </h3>
                  <div className="h-1 w-10 bg-purple-400 mx-auto mb-4 rounded-full" />
                  <p className="text-sm text-center text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;

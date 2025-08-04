import React from 'react';
import { motion } from 'framer-motion';
import doctorImage from '../../assets/docanimi.png'; // Your actual image path

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const About = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 relative">
      {/* Page Title */}
      <div className="text-center mb-16">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Who We Are
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="h-1 mt-3 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
        />
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold leading-tight text-blue-700"
          >
            C. PRABU
          </motion.h1>

          <motion.div
            variants={fadeIn}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition duration-300">
              Managing Director
            </span>
          </motion.div>

          <motion.p
            variants={fadeIn}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            C. PRABU brings over 20 years of pharmaceutical industry experience to Fourmax. Under his
            leadership, the company has pioneered several breakthrough medications and expanded its global
            presence.
          </motion.p>

          <motion.ul
            variants={fadeIn}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-blue-700 space-y-2 text-sm sm:text-base font-medium list-disc list-inside"
          >
            <li>🎓 Ph.D. in Pharmaceutical Sciences</li>
            <li>💼 Former Research Director at Global Pharma Institute</li>
            <li>👥 Board Member of International Pharmaceutical Association</li>
          </motion.ul>
        </div>

        {/* Right Doctor Image */}
        <motion.div
          variants={fadeIn}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full max-w-md mx-auto"
        >
          <motion.img
            src={doctorImage}
            alt="Doctor"
            whileHover={{ scale: 1.03 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
              ease: 'easeInOut',
            }}
            className="w-full rounded-xl shadow-2xl hover:shadow-blue-300 transition-shadow duration-500"
          />
        </motion.div>
      </div>

      {/* 👇 Mission, Vision, Values Section */}
     {/* 👇 Mission, Vision, Values Section */}
<div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Mission */}
  <motion.div
    variants={fadeIn}
    custom={5}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-blue-900 bg-opacity-60 backdrop-blur-md text-white rounded-2xl p-6 text-center shadow-lg"
  >
    <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Mission</h3>
    <p>
      To provide innovative pharmaceutical solutions that improve the quality of life for people worldwide.
    </p>
  </motion.div>

  {/* Vision */}
  <motion.div
    variants={fadeIn}
    custom={6}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-blue-900 bg-opacity-60 backdrop-blur-md text-white rounded-2xl p-6 text-center shadow-lg"
  >
    <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Vision</h3>
    <p>
      To be a leading force in global healthcare, known for excellence in pharmaceutical research and development.
    </p>
  </motion.div>

  {/* Values */}
  <motion.div
    variants={fadeIn}
    custom={7}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-blue-900 bg-opacity-60 backdrop-blur-md text-white rounded-2xl p-6 text-center shadow-lg"
  >
    <h3 className="text-xl font-semibold text-blue-400 mb-4">Our Values</h3>
    <ul className="space-y-2 text-left ml-4">
      <li>✅ Quality</li>
      <li>💡 Innovation</li>
      <li>⚖️ Integrity</li>
      <li>🛡️ Patient Safety</li>
    </ul>
  </motion.div>
</div>

   
    </section>
  );
};

export default About;

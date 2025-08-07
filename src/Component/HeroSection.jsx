import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaFlask, FaIndustry, FaCheckCircle, FaTruckMoving } from 'react-icons/fa';
import doctorImg from '../assets/Doctor.png';
import bgVideo from '../assets/dna.mp4';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

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

const CombinedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div
        ref={ref}
        className="relative z-10 px-4 py-16 space-y-32 bg-gradient-to-b from-[#0e1235]/90 to-[#0b0f28]/95"
      >
        {/* Hero Section */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Left Text Block */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.h1
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="text-4xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300"
            >
              Beyond Boundaries, Ahead{' '}
              <span className="text-blue-400">in Healthcare</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-gray-200 leading-relaxed"
            >
              <strong>We treat</strong> not only symptoms — we care about each person. <br />
              Pharmaceuticals isn’t just evolving—it's revolutionizing how healthcare operates. <br />
              At <span className="font-semibold text-white">Fourmax Pharmaceuticals</span>, we deliver{' '}
              <span className="text-purple-300">innovative, reliable, and future-ready solutions</span>.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.08, backgroundColor: '#2563eb' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/products')}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold shadow-md w-fit"
            >
              Explore Our Products
            </motion.button>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 mt-6 text-center text-sm text-gray-200"
            >
              <div>
                <p className="text-blue-400 text-xl font-bold">10+</p>
                <p>Years of Experience</p>
              </div>
              <div>
                <p className="text-blue-400 text-xl font-bold">200+</p>
                <p>Different Medicines</p>
              </div>
              <div>
                <p className="text-blue-400 text-xl font-bold">100%</p>
                <p>Digital Diagnostics</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full md:w-1/2 relative flex justify-center items-center z-20"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="relative p-4 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-300 shadow-xl"
            >
              <motion.img
                src={doctorImg}
                alt="Doctor"
                className="w-[280px] md:w-[400px] object-contain z-20"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </motion.div>

            {/* Floating Labels */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-[10%] left-[15%] bg-white text-gray-800 shadow-md px-4 py-1 rounded-full text-sm font-medium z-30"
            >
              Reliability
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], opacity: 1 }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-[38%] right-[10%] bg-white text-gray-800 shadow-md px-4 py-1 rounded-full text-sm font-medium z-30"
            >
              Experience
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-[2%] md:bottom-[-10px] bg-blue-600 text-white text-xs p-4 w-64 rounded-xl shadow-lg leading-tight z-30"
            >
              <strong>With Advanced Technologies</strong> <br />
              The latest generation equipment, digital diagnostics, advanced techniques – all of this works for your health.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* What We Do Section */}
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 relative inline-block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
              What We Do
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-300 mt-2 mx-auto rounded-full" />
          </motion.h2>

          <div className="grid gap-8 md:grid-cols=2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                }}
                className="relative group rounded-2xl transition-all duration-500"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
                <div className="relative z-10 bg-[#0e1235]/80 text-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between min-h-[360px]">
                  <div>
                    <div className="flex justify-center items-center mb-4">
                      <div className="bg-white rounded-full p-4 shadow-md">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-purple-300 mb-2 text-center">
                      {service.title}
                    </h3>
                    <div className="h-1 w-10 bg-purple-400 mx-auto mb-4 rounded-full" />
                    <p className="text-sm text-center text-gray-200">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedSection;

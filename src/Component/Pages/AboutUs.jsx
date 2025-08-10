import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import doctorImage from '../../assets/docanimi.png';

// Import your actual team images
import team1 from '../../assets/docanimi.png';
import team2 from '../../assets/docanimi.png';
import team3 from '../../assets/docanimi.png';
import team4 from '../../assets/docanimi.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Head of Research',
    image: team1,
    desc: 'Leading groundbreaking research in pharmaceutical sciences for over 15 years.',
  },
  {
    name: 'Michael Lee',
    role: 'Chief Operations Officer',
    image: team2,
    desc: 'Ensuring smooth global operations with efficiency and excellence.',
  },
  {
    name: 'Anita Rao',
    role: 'Marketing Director',
    image: team3,
    desc: 'Building strong brand presence and customer trust worldwide.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Quality Assurance Lead',
    image: team4,
    desc: 'Dedicated to maintaining the highest standards of product quality.',
  },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const headingClass = "text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent";

  return (
    <section className="bg-white text-gray-900 py-20 px-6 relative">
      {/* Page Title */}
      <div className="text-center mb-16">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className={headingClass}
        >
          Who We Are
        </motion.h2>
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
            C. PRABU brings over 20 years of pharmaceutical industry experience to Fourmax...
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
            animate={{ y: [0, -10, 0] }}
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
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-1 my-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full max-w-5xl mx-auto"
      />

      {/* Team Carousel */}
      <div className="mt-20 max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          className={headingClass}
        >
          Meet Our Team
        </motion.h2>
        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-gradient-to-r from-blue-700 via-purple-700 to-purple-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{ scale: 1.03 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                  className="w-full h-64 object-contain bg-white"
                />
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-blue-300 text-sm mb-3">{member.role}</p>
                  <p className="text-sm">{member.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-1 my-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full max-w-5xl mx-auto"
      />

      {/* Mission, Vision, Values */}
      <div className="mt-20 max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${headingClass} mb-12 text-center`}
        >
          Our Mission, Vision & Values
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              🚀 To <span className="font-semibold text-blue-600">revolutionize healthcare</span>
              by delivering <span className="italic">innovative, life-changing</span>
              pharmaceutical solutions that inspire trust, ensure quality, and
              transform lives worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              🌍 To be a <span className="font-semibold text-blue-600">global leader</span>
              in pharmaceutical innovation, known for our
              <span className="italic"> uncompromising integrity</span>,
              cutting-edge research, and <span className="font-semibold">patient-first approach</span>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Values</h3>
            <ul className="space-y-2 text-left ml-4 text-gray-700">
              <li>✅ <span className="font-semibold">Quality</span> – Excellence in every product.</li>
              <li>💡 <span className="font-semibold">Innovation</span> – Pushing boundaries for better solutions.</li>
              <li>⚖️ <span className="font-semibold">Integrity</span> – Ethical, transparent, and responsible.</li>
              <li>🛡️ <span className="font-semibold">Patient Safety</span> – Protecting lives is our top priority.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


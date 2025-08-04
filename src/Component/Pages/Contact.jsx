import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCk9MTsj5pE-i-GeCcNBfs-ae6xP4-xkyidA&s"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-20 max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-200 inline-block px-6 py-2 bg-[#0f172a]/80 rounded-xl shadow-xl">
            Contact Us
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Form */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#0f172a]/90 rounded-2xl p-8 shadow-xl backdrop-blur-md transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">
              Send us a Message
            </h3>
            <form className="space-y-5">
              {["Your Name", "Email Address", "Subject"].map((label, i) => (
                <div key={i}>
                  <label className="text-purple-300 text-sm font-medium block mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full p-3 rounded-lg bg-transparent border border-purple-500 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="text-purple-300 text-sm font-medium block mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full p-3 rounded-lg bg-transparent border border-purple-500 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all"
              >
                Send Message
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.94 2.94a1.5 1.5 0 012.12 0L10 7.88l4.94-4.94a1.5 1.5 0 012.12 2.12L12.12 10l4.94 4.94a1.5 1.5 0 01-2.12 2.12L10 12.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.12L7.88 10 2.94 5.06a1.5 1.5 0 010-2.12z" />
                </svg>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#0f172a]/90 rounded-2xl p-8 shadow-xl backdrop-blur-md transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-200">
              Get In Touch
            </h3>
            <ul className="space-y-6 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-white text-lg">📍</span>
                <div>
                  <span className="text-purple-300 font-medium block">
                    Our Location
                  </span>
                  9-B 1st Floor, Sidco Nagar, Villivakkam, Chennai - 600049,
                  Tamil Nadu, India
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-lg">📞</span>
                <div>
                  <span className="text-purple-300 font-medium block">
                    Call Us
                  </span>
                  +91 76959 43457
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-lg">✉️</span>
                <div>
                  <span className="text-purple-300 font-medium block">
                    Email Us
                  </span>
                  fourmaxpharma@gmail.com
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-lg">⏰</span>
                <div>
                  <span className="text-purple-300 font-medium block">
                    Business Hours
                  </span>
                  Mon – Fri: 9AM – 5PM
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

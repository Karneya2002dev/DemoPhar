import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const slideIn = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl md:text-5xl font-bold text-white inline-block px-8 py-4 bg-blue-700 rounded-2xl shadow-xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Get in Touch With Us
          </motion.h2>
        </motion.div>

        {/* Form + Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >

          {/* Contact Form */}
          <motion.div
            variants={slideIn("left")}
            className="bg-gray-100 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send us a Message
            </h3>
            <form className="space-y-6">
              {["Your Name", "Email Address", "Subject"].map((label, i) => (
                <motion.div key={i} variants={fadeInUp} custom={i + 2}>
                  <label className="text-gray-700 text-sm font-medium block mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </motion.div>
              ))}
              <motion.div variants={fadeInUp} custom={5}>
                <label className="text-gray-700 text-sm font-medium block mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full p-3 rounded-lg border border-gray-300 text-gray-800 placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </motion.div>
              <motion.button
                variants={fadeInUp}
                custom={6}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.94 2.94a1.5 1.5 0 012.12 0L10 7.88l4.94-4.94a1.5 1.5 0 012.12 2.12L12.12 10l4.94 4.94a1.5 1.5 0 01-2.12 2.12L10 12.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.12L7.88 10 2.94 5.06a1.5 1.5 0 010-2.12z" />
                </svg>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideIn("right")}
            className="bg-gray-100 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Our Contact Information
            </h3>
            <ul className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={1}>
                <span className="text-blue-600 text-lg">📍</span>
                <div>
                  <span className="text-gray-900 font-medium block">Address</span>
                  9-B 1st Floor, Sidco Nagar, Villivakkam,<br />
                  Chennai - 600049, Tamil Nadu, India
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={2}>
                <span className="text-blue-600 text-lg">📞</span>
                <div>
                  <span className="text-gray-900 font-medium block">Phone</span>
                  +91 76959 43457
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={3}>
                <span className="text-blue-600 text-lg">✉️</span>
                <div>
                  <span className="text-gray-900 font-medium block">Email</span>
                  fourmaxpharma@gmail.com
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={4}>
                <span className="text-blue-600 text-lg">⏰</span>
                <div>
                  <span className="text-gray-900 font-medium block">Working Hours</span>
                  Monday – Friday: 9:00 AM – 5:00 PM
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

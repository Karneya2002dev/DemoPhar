import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images (consider compressing them for better performance)
import event1 from "../../assets/event1.jpeg";
import event2 from "../../assets/event2.jpeg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpeg";
import event5 from "../../assets/event5.webp";
import event6 from "../../assets/event3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Events = () => {
  const eventData = [
    {
      image: event1,
      caption: "Annual Health Conference 2024",
      description: "A gathering of top medical professionals sharing innovations.",
    },
    {
      image: event2,
      caption: "Community Medical Camp",
      description: "Free health check-ups and awareness programs for the community.",
    },
    {
      image: event3,
      caption: "Pharma Research & Innovation Meet",
      description: "Showcasing groundbreaking pharmaceutical research projects.",
    },
    {
      image: event4,
      caption: "Global Medical Technology Summit",
      description: "Exploring the future of AI, robotics, and healthcare tech.",
    },
    {
      image: event5,
      caption: "Healthcare Leadership Awards",
      description: "Honoring excellence and leadership in healthcare services.",
    },
    {
      image: event6,
      caption: "World Pharmaceutical Expo",
      description: "Global exhibition of pharma innovations and partnerships.",
    },
  ];

  // ✅ Preload all images in background for smoother carousel
  useEffect(() => {
    eventData.forEach((ev) => {
      const img = new Image();
      img.src = ev.image;
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Our Events
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12 text-sm md:text-base"
        >
          From global summits to community health drives, our events bring together experts, innovators, and the community to
          advance healthcare, share knowledge, and inspire positive change.
        </motion.p>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {eventData.map((event, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                {/* Image with lazy loading + blur placeholder */}
                <div className="relative w-full h-64 bg-gray-200 animate-pulse">
                  <motion.img
                    src={event.image}
                    alt={event.caption}
                    loading="lazy"
                    className="w-full h-64 object-cover absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    onLoad={(e) => e.target.parentElement.classList.remove("animate-pulse", "bg-gray-200")}
                  />
                </div>

                <div className="p-4">
                  <p className="text-gray-800 text-center text-base font-semibold">
                    {event.caption}
                  </p>
                  <p className="text-gray-600 text-center text-sm mt-1">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;

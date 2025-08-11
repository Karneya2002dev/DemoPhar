import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Products",
  "Cardiovascular",
  "Respiratory",
  "Infectious Disease",
  "Diabetics",
];

const products = [
  {
    id: 1,
    category: "Cardiovascular",
    title: "Cardiovascular Care",
    description:
      "Advanced medications for heart health and blood pressure management.",
    images: [
      "https://media.istockphoto.com/id/458563393/photo/aspirin-bottle-with-tablets-spilling-out.jpg?s=612x612&w=0&k=20&c=MuRtWxOfp_rA2hWvVxAoJEeOcaWFIQ1xqtieh-W5iG8=",
      "https://dailymed.nlm.nih.gov/dailymed/image.cfm?name=Aspirin-81mg-Kroger-300s+-+Label.jpg&id=569529",
      "https://s7d5.scene7.com/is/image/CentralMarket/000671394-1",
    ],
  },
  {
    id: 2,
    category: "Respiratory",
    title: "Respiratory Solutions",
    description:
      "Treatments for asthma, COPD, and other respiratory conditions.",
    images: [
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/f597b8b14fe546698a759e6603a87f1b.jpg",
      "https://m.media-amazon.com/images/I/81df59+sScL._UF350,350_QL80_.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/500559231/OP/IA/HL/144351487/450-mg-deriphyllin-od-etofylline-and-theophylline-prolonged-release-tablets.jpg",
    ],
  },
  {
    id: 3,
    category: "Infectious Disease",
    title: "Antibiotics",
    description:
      "Broad-spectrum and targeted antibiotics for various infections.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52_0_EgGG4brTrdMRWnXy2hAKJQvV29Kwp10Ylvi6yMgPIXGEKvVhm-eXv6xtx_Va-UQ&usqp=CAU",
      "https://5.imimg.com/data5/SELLER/Default/2023/8/335346102/XW/YA/YR/194714502/griseofulvin-500-mg-tablets-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/4/406854905/DU/WP/MX/99810145/griseofulvin-500mg-tablets-500x500.jpg",
    ],
  },
  {
    id: 4,
    category: "Diabetics",
    title: "Diabetes Management",
    description:
      "Comprehensive solutions for effective blood sugar control and diabetic care.",
    images: [
      "https://ik.imagekit.io/wlfr/wellness/images/products/220782-1.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/11/468317319/WH/CF/NX/226486661/diabetrol-sr-tablet.jpg",
      "https://assets.truemeds.in/Images/ProductImage/TM-TASR1-000192/diabetrol-sr-tablet-10_diabetrol-sr-tablet-10--TM-TASR1-000192_2.png?width=320",
    ],
  },
];

const categoryBackgrounds = {
  "All Products":
    "https://img.pikbest.com/wp/202347/capsule-pill-pharmacy-and-healthcare-concept-blue-background-with-pills-in-panoramic-layout-3d-render_9763081.jpg!sw800",
  Cardiovascular:
    "https://media.istockphoto.com/id/454238423/photo/stethoscope-heart-shape.jpg?s=612x612&w=0&k=20&c=1jtvb5aCwdR7nY1prW11mNwW0Wla3bUSkc17_C6YfK8=",
  Respiratory:
    "https://media.istockphoto.com/id/816819352/photo/the-inhaler-and-mask-pairs-antiallergic-drugs-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=fbu9ol4ibS_0sV5S83WL4DsI2FYVdzwdse_hz2H8yJ4=",
  "Infectious Disease":
    "https://png.pngtree.com/background/20250212/original/pngtree-texture-of-geometry-and-microbiology-in-medical-particle-elements-picture-image_13456132.jpg",
  Diabetics:
    "https://www.slideegg.com/image/multi-slide/47857/82163-diabetes-powerpoint-background-01.png",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const ProductCard = ({ product, delay, onClick }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    custom={delay + 1}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    onClick={() => onClick(product)}
  >
    <LazyImage
      src={product.images[0]}
      alt={product.title}
      className="w-full h-48"
    />
    <div className="p-4 text-center">
      <h4 className="text-lg font-bold text-gray-900">{product.title}</h4>
      <p className="text-sm text-gray-600">{product.category}</p>
    </div>
  </motion.div>
);

const ProductModal = ({ product, onClose }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);

  // Preload all product images when modal opens
  useEffect(() => {
    if (product) {
      product.images.forEach((img) => {
        const image = new Image();
        image.src = img;
      });
    }
  }, [product]);

  useEffect(() => {
    let timer;
    if (zoomImage && product) {
      let shownImages = 0;
      timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % product.images.length;
          shownImages++;
          if (shownImages >= 2) {
            setShowDots(true);
          }
          return next;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [zoomImage, product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <>
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
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition text-3xl font-bold z-10"
              >
                &times;
              </button>

              <div className="bg-gray-100 flex items-center justify-center p-4">
                <motion.img
                  key={currentIndex}
                  src={product.images[currentIndex]}
                  alt={product.title}
                  loading="lazy"
                  className="max-h-[400px] object-contain rounded-lg cursor-pointer"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setZoomImage(true)}
                />
              </div>

              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {zoomImage && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-[60] flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={() => setZoomImage(false)}
                  className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-500 transition z-50"
                >
                  &times;
                </button>

                <motion.img
                  key={currentIndex}
                  src={product.images[currentIndex]}
                  alt={product.title}
                  loading="lazy"
                  className="max-h-[80%] max-w-full rounded-lg shadow-2xl mb-6"
                  initial={{ scale: 0.8, rotateY: 90 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                />

                {showDots && (
                  <div className="flex gap-2 mb-4">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full ${
                          idx === currentIndex
                            ? "bg-white"
                            : "bg-gray-500 hover:bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [modalProduct, setModalProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative text-white py-16 px-4 sm:px-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${categoryBackgrounds[selectedCategory]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              custom={index}
              onClick={() => setSelectedCategory(category)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full font-medium transition shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-gray-800 to-black text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={index}
              onClick={(p) => setModalProduct(p)}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
};

export default Product;

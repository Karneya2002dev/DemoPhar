import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Products",
  "Cardiovascular",
  "Respiratory",
  "Pain / Musculoskeletal",
  "Orthopedic / Bone Health",
  "Orthopedic / Joint Health",
  "Hematology / Anemia",
  "Gynecology / Fertility",
  "Gastrointestinal",
  "Infectious Disease",
];


const products = [
  {
    id: 1,
    category: "Cardiovascular",
    title: "Argiflux",
    description:
      "L-Arginine, Glutathione, Proanthocyanidin Granules – supports blood flow, endothelial function, and antioxidant health.",
    images: ["https://i.postimg.cc/V6WqZV4k/Argiflux.png"],
  },
  {
    id: 2,
    category: "Pain / Musculoskeletal",
    title: "Acpon",
    description:
      "Aceclofenac + Paracetamol – relieves pain and inflammation in musculoskeletal disorders.",
    images: ["https://i.postimg.cc/SK87CsM8/Acpon.jpg"],
  },
  {
    id: 3,
    category: "Orthopedic / Bone Health",
    title: "Cisqtrix",
    description:
      "Cissus quadrangularis, Calcium, Calcitriol, Vitamin K2-7 – promotes bone strengthening and repair.",
    images: ["https://i.postimg.cc/NGb81Z5N/Cisqtrix.jpg"],
  },
  {
    id: 4,
    category: "Pain / Musculoskeletal",
    title: "EC Tap MR",
    description:
      "Etoricoxib + Thiocolchicoside – arthritis and muscle relaxant therapy.",
    images: ["https://i.postimg.cc/90XG6YNt/EC-Tap-MR.jpg"],
  },
  {
    id: 5,
    category: "Hematology / Anemia",
    title: "Ferzi Plus",
    description:
      "Ferrous Bisglycinate, Zinc, Methylcobalamin, L-Methylfolate – advanced formula for anemia and neuropathy support.",
    images: ["https://i.postimg.cc/90xGCw63/Ferzi-Plus.jpg"],
  },
  {
    id: 6,
    category: "Orthopedic / Joint Health",
    title: "FlexmaXX UC",
    description:
      "Collagen peptide, Glucosamine, Chondroitin, Boswellia, Vit D3 – joint repair and mobility enhancer.",
    images: ["https://i.postimg.cc/3JRX99G3/Flexma-XX-UC.jpg"],
  },
  {
    id: 7,
    category: "Orthopedic / Bone Health",
    title: "Magnes D3",
    description:
      "Magnesium Glycine Complex + Vitamin D3 – supports bone strength and muscle function.",
    images: ["https://i.postimg.cc/L8gzFXv7/Magnes-D3.jpg"],
  },
  {
    id: 8,
    category: "Respiratory",
    title: "MontiQik-L",
    description:
      "Montelukast + Levocetirizine – effective in asthma, allergic rhinitis, and respiratory allergies.",
    images: ["https://i.postimg.cc/q7f2JT57/Montiqik-L.jpg"],
  },
  {
    id: 9,
    category: "Gynecology / Fertility",
    title: "OvaFol",
    description:
      "Myo-Inositol, D-Chiro Inositol, Folate, Vit D3, Chromium, Zinc – PCOS, insulin resistance, and fertility support.",
    images: ["https://i.postimg.cc/gJmRhKdF/OvaFol.jpg"],
  },

  // ------------------ NEW UPLOADED PRODUCTS ------------------ //
  {
    id: 10,
    category: "Hematology / Anemia",
    title: "Tri B Max Total",
    description:
      "Advanced B-complex with Iron & Zinc – supports anemia, energy, and neurological function.",
    images: [
      "https://i.postimg.cc/7ZzTQRZr/Tri-B-Max-Total.jpg"
    ],
  },
  {
    id: 11,
    category: "Gynecology / Fertility",
    title: "Tribmax DHA",
    description:
      "Folic Acid, DHA, Vitamins & Minerals – essential formula for pregnancy and fetal development.",
    images: [
      "https://i.postimg.cc/3wHDMZk4/Tribmax-DHA.jpg"
    ],
  },
  {
    id: 12,
    category: "Cardiovascular",
    title: "VFite 5G",
    description:
      "Multivitamin & Antioxidant formula with advanced phytonutrients – supports heart health, immunity, and energy.",
    images: [
      "https://i.postimg.cc/CKHnwf8v/VFite-5G.jpg"
    ],
  },
  {
    id: 13,
    category: "Respiratory",
    title: "Pulmoact",
    description:
      "Acebrophylline & N-Acetylcysteine – mucolytic and bronchodilator for respiratory care.",
    images: ["https://i.postimg.cc/LszLhbc3/Pulmoact.jpg"],
  },
  {
    id: 14,
    category: "Infectious Disease",
    title: "Qikzyme",
    description:
      "Trypsin, Bromelain & Rutoside – anti-inflammatory and wound healing support.",
    images: ["https://i.postimg.cc/9Mb9YqF4/Qikzyme.jpg"],
  },
  {
    id: 15,
    category: "Gastrointestinal",
    title: "Rde DSR",
    description:
      "Rabeprazole Sodium (EC) & Domperidone (SR) – GERD and acid reflux management.",
    images: ["https://i.postimg.cc/D0zXjy8x/Rde-DSR.jpg"],
  },
  {
    id: 16,
    category: "Pain / Musculoskeletal",
    title: "Spaz Tap",
    description:
      "Thiocolchicoside, Aceclofenac, Paracetamol – relieves pain, inflammation, and spasms.",
    images: ["https://i.postimg.cc/J0dB9VXM/Spaz-Tap.jpg"],
  },
  {
    id: 17,
    category: "Orthopedic / Joint Health",
    title: "Tendo Qik 4D",
    description:
      "Collagen Peptide, Rosehip Extract, Sodium Hyaluronate, L-Carnitine, Chondroitin, Vitamin C & D3 – advanced joint care.",
    images: ["https://i.postimg.cc/28VWnyp6/Tendo-Qik.jpg"],
  },
  {
    id: 18,
    category: "Orthopedic / Joint Health",
    title: "Tendo Qik",
    description:
      "Collagen Peptides, Chondroitin, Sodium Hyaluronate, Vitamin C – joint health supplement.",
    images: ["https://i.postimg.cc/L6w1DSRV/Tendo-Qik-4-D.jpg"],
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

  "Pain / Musculoskeletal":
    "https://shahalam.avisena.com.my/wp-content/uploads/2023/09/article-Joint-Health-intro.jpg",

  "Orthopedic / Bone Health":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSTsaAN2ka7gXp7nqjpT7-bBRQciz81uxiW-nwVruaBm6eoRFqSJYOjG2diV0Pknw7RM&usqp=CAU",

  "Orthopedic / Joint Health":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpdr8A4EQfZQ77fQLIlSD-HBzr7aXqtHbcA&s",

  "Hematology / Anemia":
    "https://www.sysmex.com/-/media/project/sysmex/sysmex/images/2-column_content_component-image_and_text/knowledge-card-hematology-image.jpg?iar=0&sc_lang=es-cl&hash=C88576D54F61DBE513C85DA7D2918E96",

  "Gynecology / Fertility":
    "https://www.newhopefertility.com/wp-content/uploads/2023/07/When-to-See-a-Fertility-Specialist.webp",

  Gastrointestinal:
    "https://gemhospitals.com/frontend/assets/images/team/grid/UPPER_GI.jpg",
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

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logoo.png';
import name from '../assets/name.png';

const shootingOrder = [
  { name: 'HOME', path: '/' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CAREERS', path: '/carrers' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [shotLinks, setShotLinks] = useState([]);
  const [showName, setShowName] = useState(false);

  const location = useLocation();
  const logoControls = useAnimation();

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Step 1: Move logo to center with slow coin rotation (Y-axis) + zoom in
      await logoControls.start({
        x: window.innerWidth / 2 - 60,
        scale: 1.5,
        rotateY: 360,
        transition: { duration: 2, ease: 'easeInOut' }, // slower
      });

      // Step 2: Move back to left with slow coin rotation + zoom out
      await logoControls.start({
        x: 0,
        scale: 1,
        rotateY: 720, // continues rotation
        transition: { duration: 2, ease: 'easeInOut' }, // slower
      });

      // Step 3: Show all links together
      setShotLinks(shootingOrder);

      // Step 4: Show name after delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setShowName(true);
    };

    sequence();
  }, [logoControls]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      >
        {/* Scroll Progress Bar */}
        <div className="h-1 bg-blue-400 fixed top-0 left-0 w-full z-50">
          <div
            className="h-full bg-white transition-all duration-300 ease-linear"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Navbar */}
        <nav
          className={`transition-all duration-300 mt-4 w-full max-w-[95%] rounded-xl px-4 ${
            scrolled
              ? 'backdrop-blur-md shadow-lg py-2 bg-transparent'
              : 'bg-transparent py-3'
          }`}
        >
          <div className="flex items-center justify-between gap-x-6">
            {/* Logo + Name */}
            <div className="flex items-center space-x-3 relative overflow-visible">
              <motion.img
                src={logo}
                alt="Logo"
                className="h-12 w-12 object-contain"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ x: 0, scale: 1, rotateY: 0 }}
                animate={logoControls}
              />

              {showName && (
                <motion.img
                  src={name}
                  alt="FourmaX Pharma"
                  className="h-10 md:h-12 object-contain"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {shotLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="group relative text-sm font-medium"
                  >
                    <NavLink to={link.path} end={link.path === '/'}>
                      {isActive ? (
                        <span>
                          <span className="text-[#FF0066] font-bold">
                            {link.name.charAt(0)}
                          </span>
                          <span className="text-sky-500 font-bold">
                            {link.name.slice(1)}
                          </span>
                        </span>
                      ) : (
                        <span className="text-sky-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                          {link.name}
                        </span>
                      )}
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black text-2xl"
                whileTap={{ scale: 0.8 }}
              >
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-2"
              >
                <div className="flex flex-col px-4 py-3 space-y-3 bg-transparent">
                  {shootingOrder.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <NavLink
                          to={link.path}
                          end={link.path === '/'}
                          onClick={() => setMenuOpen(false)}
                          className="group text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FF0066] to-[#9900FF]"
                        >
                          {isActive ? (
                            <span>
                              <span className="text-[#FF0066] font-bold">
                                {link.name.charAt(0)}
                              </span>
                              <span className="text-white font-bold">
                                {link.name.slice(1)}
                              </span>
                            </span>
                          ) : (
                            <span>{link.name}</span>
                          )}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>

      {/* Spacer */}
      <div className="h-[100px]" />
    </>
  );
};

export default Navbar;

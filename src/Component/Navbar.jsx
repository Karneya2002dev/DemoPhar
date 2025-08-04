import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logoo.png';
import name from '../assets/name.png';

const links = [
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
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
            scrolled ? 'backdrop-blur-md shadow-lg py-2 bg-transparent' : 'bg-transparent py-3'
          }`}
        >
          <div className="flex items-center justify-between gap-x-6">
            {/* Logo + Name */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
              <img src={name} alt="FourmaX Pharma" className="h-10 md:h-12 object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-5">
              {links.map(link => {
                const isHomeGroupActive =
                  link.name === 'HOME' &&
                  (location.pathname === '/' || location.pathname === '/about');

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => {
                      const active = isActive || isHomeGroupActive;
                      return `group relative transition-all text-sm font-medium ${
                        active
                          ? 'text-sky-500 font-bold'
                          : 'text-sky-500'
                      } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF0066] hover:to-[#9900FF]`;
                    }}
                  >
                    {link.name}
                    <span className="block h-0.5 bg-gradient-to-r from-[#FF0066] to-[#9900FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1" />
                  </NavLink>
                );
              })}
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl">
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-2"
              >
                <div className="flex flex-col px-4 py-3 space-y-3 bg-transparent">
                  {links.map(link => {
                    const isHomeGroupActive =
                      link.name === 'HOME' &&
                      (location.pathname === '/' || location.pathname === '/about');

                    return (
                      <NavLink
                        key={link.name}
                        to={link.path}
                        end={link.path === '/'}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => {
                          const active = isActive || isHomeGroupActive;
                          return `group relative transition-all text-sm font-medium bg-gradient-to-r from-[#FF0066] to-[#9900FF] bg-clip-text text-transparent ${
                            active ? 'font-bold' : ''
                          }`;
                        }}
                      >
                        {link.name}
                        <span className="block h-0.5 bg-gradient-to-r from-[#FF0066] to-[#9900FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1" />
                      </NavLink>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-[100px]" />
    </>
  );
};

export default Navbar;

import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import marqwonLogo from '../assets/blacklogo.jpg';

const socialIcons = [
  {
    icon: <FaWhatsapp />,
    href: 'https://wa.me/your-number',
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    icon: <FaInstagram />,
    href: 'https://instagram.com/your-handle',
    hoverColor: 'hover:text-[#E1306C]',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://facebook.com/your-page',
    hoverColor: 'hover:text-[#1877F2]',
  },
  {
    icon: <FaXTwitter />,
    href: 'https://twitter.com/your-handle',
    hoverColor: 'hover:text-black',
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-blue-100 via-white/40 to-blue-200 opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="bg-white/5 backdrop-blur-md border-t border-white/20 text-black pt-10 px-6 pb-4 rounded-t-3xl shadow-2xl relative z-[1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
           <img
  src={logo}
  alt="Fourmax Logo"
  className="h-30  w-auto drop-shadow-lg"
/>

            <p className="text-sm text-center md:text-left text-black/80">
              &copy; {new Date().getFullYear()} Fourmax Pharmaceuticals. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold text-lg">Connect With Us</h3>
            <div className="flex space-x-5">
              {socialIcons.map(({ icon, href, hoverColor }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition duration-300 ease-in-out transform hover:scale-125 ${hoverColor}
                    bg-white/10 backdrop-blur-lg rounded-full p-3 shadow-md hover:shadow-xl hover:bg-white/20`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="flex items-start space-x-2 text-sm text-black/90">
              <FaMapMarkerAlt className="mt-1 text-blue-600" />
              <address className="not-italic text-center md:text-right">
                9-B 1st Floor, Sidco Nagar,<br />
                Villivakkam, Chennai - 600049,<br />
                Tamil Nadu, India
              </address>
            </div>
            <div className="flex items-center space-x-2 text-sm text-black/90">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+917695943457" className="transition hover:text-blue-600">
                +91 76959 43457
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-black/90">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:fourmaxpharma@gmail.com" className="transition hover:text-blue-600">
                fourmaxpharma@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Developed by Marqwon */}
       {/* Developed by Marqwon */}
<div className="mt-8 text-center">
  <a
    href="https://marqwon.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium text-black animate-pulse hover:text-blue-400 transition duration-300"
  >
    <span>Developed by</span>
    <img src={marqwonLogo} alt="Marqwon" className="h-7 w-auto" />
    <span className="text-gradient bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
      MarqWon
    </span>
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;

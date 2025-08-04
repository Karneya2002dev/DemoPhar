// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // if you have a navbar
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Optional */}
      <main className="flex-grow">{children}</main>
    <Footer />
    </div>
  );
};

export default Layout;

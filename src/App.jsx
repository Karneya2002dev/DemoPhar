import React from 'react'

import HomeScreen from './Component/HomeScreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout'
import './App.css'
import Product from './Component/Pages/Product';
import AboutUs from './Component/Pages/AboutUs';
import Carrers from './Component/Pages/Carrers';
import Contact from './Component/Pages/Contact';
const App = () => {
  return (
  <>
  {/* <Navbar />

<HomeScreen />
<Footer /> */}

<Layout>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/products' element={<Product />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/carrers' element={<Carrers />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
</Layout>




  
  </>
  )
}

export default App
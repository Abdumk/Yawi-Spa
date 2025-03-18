import { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'; //when i Import Bootstrap CSS the Home page banner not working
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import OurService from './components/OurService/OurService';
import  './App.css'
function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
    
      <Footer />
    </>
  )
}

export default App

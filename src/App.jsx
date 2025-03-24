import 'bootstrap/dist/css/bootstrap.min.css'; //when i Import Bootstrap CSS the Home page banner not working
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
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
import { useLocation } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import  './App.css'
function App() {
 

  return (
    <>
     {/* {!isServicePage && <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />} */}
      <Header />
      <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
      </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

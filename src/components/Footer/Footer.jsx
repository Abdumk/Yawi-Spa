import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import  PrivacyPolicy from '../Privacypolicy/Privacypolicy';
import './Footer.css';

function Footer() {
  const [isUsefulLinksOpen, setIsUsefulLinksOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const usefulLinksRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleUsefulLinks = () => {
    setIsUsefulLinksOpen(!isUsefulLinksOpen);
    if (!isUsefulLinksOpen) {
      usefulLinksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (!isServicesOpen) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer-container">
      <div className="newsletter-section">
        <div className="newsletter-wrapper">
          <div className="newsletter-content">
            {/* Newsletter content */}
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-about">
            <Link to="/" className="footer-logo" onClick={scrollToTop}>
              <span className="site-name">Yawi Spa Services.</span>
            </Link>
            <div className="contact-details">
              {/* <p>Dumfries, VA </p>
              <p>
  Alexandria, VA&nbsp;&nbsp;&nbsp;Fairfax, VA&nbsp;&nbsp;&nbsp;Washington, DC&nbsp;&nbsp;&nbsp;Maryland, United States
</p> */}
<p>Addis Ababa, Ethiopia</p>
<p>
  Bole,&nbsp;&nbsp;&nbsp;4 kilo ,&nbsp;&nbsp;&nbsp;Gotera, &nbsp;&nbsp;&nbsp;Megenagna, 
</p>


              <p>
                <strong>Phone:</strong> +251 943-53-44-44
                <Link to="tel:+251 943-53-44-44" className="phone-link">
                  <i className="bi bi-telephone-fill"></i>
                </Link>
              </p>
              <p>
                <strong>Email:</strong> yawispa4353@gmail.com
                <Link to="mailto:yawispa4353@gmail.com" className="email-link">
                  <i className="bi bi-envelope"></i>
                </Link>
              </p>
            </div>
          </div>

           <div className="footer-links" ref={usefulLinksRef}>
            <h4 onClick={toggleUsefulLinks} className="links-header">Useful Links</h4>
          
            <ul className={isUsefulLinksOpen ? 'links-list open' : 'links-list'}>
  <li><a href="/" onClick={scrollToTop}>Home</a></li>
  <li><a href="/about" onClick={scrollToTop}>About us</a></li>
  <li><a href="/services" onClick={scrollToTop}>Services</a></li>
  <li><a href="/contact" onClick={scrollToTop}>Contact us</a></li>
  <li><a href="/faq" onClick={scrollToTop}>FAQ</a></li>
  <li><a href="/pp" onClick={scrollToTop}>Privacy Policy</a></li>

</ul>

          </div> 




          <div className="footer-services" ref={servicesRef}>
            <h4 onClick={toggleServices} className="services-header">Our Services</h4>
            <ul className={isServicesOpen ? 'services-list open' : 'services-list'}>
  <li>Deep tissue massage</li>
  <li>Swedish massage</li>
  <li>Hot stone massage</li>
  <li>Foot massage </li>
  <li>Aromatherapy </li>
  <li>Head massage</li>

</ul> 
          </div>

          <div className="footer-social">
            <h4 className="social-header">Follow Us</h4>
            <div className="social-icons">
  <Link 
    to="https://www.facebook.com/yawispa"
    className="icon facebook" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-facebook"></i>
  </Link>

  <Link 
    to="https://www.instagram.com/yawispa4353" 
    className="icon instagram" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-instagram"></i>
  </Link>

  <Link 
    to="https://t.me/+M96RYQtaTOAyYjM0" 
    className="icon telegram" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-telegram"></i>
  </Link>

  <Link 
    to="https://wa.me/message/ZOEH2DPHOXJNK1" 
    className="icon whatsapp" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-whatsapp"></i>
  </Link>

  

  <Link 
    to="https://www.tiktok.com/@yawi.spa" 
    className="icon tiktok" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-tiktok"></i>
  </Link>
</div>

            <Link to="/pp" onClick={scrollToTop} className="privacy-link">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Yawi Spa Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
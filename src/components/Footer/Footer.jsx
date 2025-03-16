import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
              <span className="site-name">Nile Financial Services</span>
            </Link>
            <div className="contact-details">
              <p>Dumfries, VA </p>
              <p>
  Alexandria, VA&nbsp;&nbsp;&nbsp;Fairfax, VA&nbsp;&nbsp;&nbsp;Washington, DC&nbsp;&nbsp;&nbsp;Maryland, United States
</p>

              <p>
                <strong>Phone:</strong> +1 571-306-9039
                <Link to="tel:+15713069039" className="phone-link">
                  <i className="bi bi-telephone-fill"></i>
                </Link>
              </p>
              <p>
                <strong>Email:</strong> admin@nilefinancialservices.com
                <Link to="mailto:admin@nilefinancialservices.com" className="email-link">
                  <i className="bi bi-envelope"></i>
                </Link>
              </p>
            </div>
          </div>

          <div className="footer-links " ref={usefulLinksRef}>
            <h4 onClick={toggleUsefulLinks} className="links-header ">Useful Links</h4>
            <ul className={isUsefulLinksOpen ? 'links-list open' : 'links-list'}>
              <li><i className="bi bi-chevron-right"></i> <Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/about" onClick={scrollToTop}>About us</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/services" onClick={scrollToTop}>Services</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/contact" onClick={scrollToTop}>Contact us</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/faq" onClick={scrollToTop}>FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-services" ref={servicesRef}>
            <h4 onClick={toggleServices} className="services-header">Our Services</h4>
            <ul className={isServicesOpen ? 'services-list open' : 'services-list'}>
  <li>Bookkeeping/Accounting</li>
  <li>E-file & Fast Refunds</li>
  <li>Tax Planning & Consultation</li>
  <li>Business Consulting</li>
  <li>Affordable Rates & Personalized Service</li>
  <li>Individual & Business Tax Preparation</li>

</ul> 
          </div>

          <div className="footer-social">
            <h4 className="social-header">Follow Us</h4>
            <p className="social-text">Stay connected with us through our social media channels for the latest updates & insights.</p>
            <div className="social-icons">
              <Link to="https://twitter.com/Nilefinancials1" className="icon twitter" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="https://facebook.com/NILETAXSERVICES" className="icon facebook" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="https://instagram.com/nilefinancialservices_/" className="icon instagram" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="https://linkedin.com/in/king-demissie-5a882191/" className="icon linkedin" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link to="https://wa.me/+15713069039" className="icon whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
              </Link>
            </div>
            <Link to="/pp" onClick={scrollToTop} className="privacy-link">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Nile Financial Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
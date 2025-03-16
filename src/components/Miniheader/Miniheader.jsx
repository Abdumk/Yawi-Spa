import React from 'react';
import './Miniheader.css';
import { Link } from 'react-router-dom';

function Miniheader() {
  return (
    <header id="mini-header" className="mini-header-wrapper">
      <div className="mini-topbar d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          {/* Contact Info */}
          <div className="mini-contact-info d-flex align-items-center">
            <Link to="mailto:admin@nilefinancialservices.com" className="d-flex align-items-center">
              <i className="bi bi-envelope"></i>
              <span className="d-none d-md-inline ms-2">admin@nilefinancialservices.com</span>
            </Link>
            <Link to="tel:+15713069039" className="ms-3 d-flex align-items-center">
              <i className="bi bi-telephone-fill"></i>
              <span className="d-none d-md-inline ms-2">+251 943-53-44-44</span>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mini-social-links d-flex align-items-center">
            <Link
              to="https://twitter.com/Nilefinancials1"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <i className="bi bi-twitter"></i>
            </Link>
            <Link
              to="https://facebook.com/NILETAXSERVICES"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              to="https://instagram.com/nilefinancialservices_/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <i className="bi bi-instagram"></i>
            </Link>
            <Link
              to="https://linkedin.com/in/king-demissie-5a882191/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              to="https://wa.me/+251943534444"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <i className="bi bi-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Miniheader;

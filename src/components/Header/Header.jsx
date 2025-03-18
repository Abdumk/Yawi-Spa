import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Miniheader from '../Miniheader/Miniheader';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Miniheader />
     
      <header>
        {/* <div className="logo">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="Nile Financial Services Logo" />
          </Link>
        </div> */}
        {/* <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button> */}
        <nav>
      <ul>
        <div> 
          <Link to="/"className="homebanner">
          {/* Photo inserted here */}
          </Link>
        </div>
        {/* <span className="logo">
          <h1 className="light">Yawi Massage</h1>
        </span> */}
  <li>
    <Link className="active" to="/">
      <h1>Home</h1>
    </Link>
  </li>
  <li>
    <Link to="/about">
      <h1>About</h1>
    </Link>
  </li>
  <li>
    <Link to="/services">
      <h1>Services</h1>
    </Link>
  </li>
  <li>
    <Link to="/contact">
      <h1>Contact</h1>
    </Link>
  </li>

  <li>
    <Link to="/faq">
      <h1>FAQ</h1>
    </Link>
  </li>
      </ul>
    </nav>
      </header>
    
      
    </>
  );
}

export default Header;


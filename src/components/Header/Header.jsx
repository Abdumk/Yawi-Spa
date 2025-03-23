import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Miniheader from "../Miniheader/Miniheader";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Miniheader />

      <header>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={isOpen ? "nav open" : "nav"}>
          <ul>
            <div>
              <Link to="/" className="homebanner">
                {/* Photo inserted here */}
              </Link>
            </div>

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

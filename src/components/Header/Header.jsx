import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Miniheader from "../Miniheader/Miniheader";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Add the missing ref

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ensure click is outside the nav and hamburger button
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("hamburger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Miniheader />

      <header>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav ref={navRef} className={isOpen ? "nav open" : "nav"}>
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

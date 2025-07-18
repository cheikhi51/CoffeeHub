import React, { useState,useEffect } from 'react';
import WebsiteLogo from "./Coffee Logo.png"

function NavBar({cartCount}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
   const handleScroll = () => {
  const isScrolled = window.scrollY > 10;
  setScrolled(isScrolled);
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav 
  className="navbar fixed top-0 left-0 right-0 z-50"
  style={{
    background: scrolled ? 'linear-gradient(326deg,rgba(0, 0, 0, 1) 0%, rgba(102, 73, 57, 1) 43%, rgba(128, 71, 36, 1) 61%, rgba(89, 36, 18, 1) 80%, rgba(0, 0, 0, 1) 100%)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 10px 15px -3px rgba(231, 224, 215, 0.1)' : 'none'
  }}
>
   <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo fade-up-element">
          <img className='logo-img' src={WebsiteLogo} alt='Website Logo'/>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`nav-menu fade-up-element ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#featured" className="nav-link">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#cart" className="nav-link cart">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartCount}
              </span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
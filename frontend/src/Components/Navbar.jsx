import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';
import Logo from '../assets/Logo.png'; 

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let prevY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < prevY) {
        setShowNavbar(true); // Scrolling up
      } else {
        setShowNavbar(false); // Scrolling down
      }

      prevY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${showNavbar ? 'show' : 'hide'}`}>
      <nav className="navbar-container" aria-label="Main Navigation">
        <div className="navbar-logo">
          <NavLink to="/cleen-foundation-ngo" end aria-label="Home">
            <img src={Logo} alt="Cleen Foundation Logo" />
          </NavLink>
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/cleen-foundation-ngo" end>Home</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/employee">Employee</NavLink></li>
          <li className="cta"><NavLink to="/cleen-foundation-ngo/donation">+Donation</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/blog">Blog</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/about">About</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/contact">Contact</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/apply">Apply</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/admin">Admin</NavLink></li>
          <li><NavLink to="/cleen-foundation-ngo/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

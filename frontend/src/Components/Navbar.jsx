<<<<<<< HEAD
import React, {use, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Navbar.css'

import Logo from '/Logo.png'

const Navbar = () => {

    
    useEffect(() => {        
        let prevY = window.scrollY;
        const handleScroll = () => {
            let currentY = window.scrollY;

            if ( currentY < prevY ) {
                document.querySelector('nav ul').style.top = '0';
            }
            else {
                document.querySelector('nav ul').style.top = '-150px';
            }

            prevY = currentY;
        }
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <nav>
            <ul>
                <li><NavLink to='employee'>Employee</NavLink></li>
                <li><NavLink to='donation'>Donation</NavLink></li>
                <li><NavLink to='blog'>Blog</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
                <li><NavLink to='' style={{backgroundColor: 'transparent'}}><img src={Logo} alt="" /></NavLink></li>                
                <li><NavLink to='contact'>Contact</NavLink></li>
                <li><NavLink to='apply'>Apply</NavLink></li>
                <li><NavLink to='admin'>Admin</NavLink></li>
                <li><NavLink to='login'>Login</NavLink></li>
            </ul>
        </nav>
=======
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        <div className="navbar-logo">
          <NavLink to="/cleen-foundation-ngo" end aria-label="Home">
            <img src={Logo} alt="Cleen Foundation Logo" />
          </NavLink>
        </div>
>>>>>>> 9bc2bbb (Add navbar and footer)

        <ul className="navbar-links">
          <li>
            <NavLink to="/cleen-foundation-ngo" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/employee">
              Employee
            </NavLink>
          </li>
          <li className="cta">
            <NavLink to="/cleen-foundation-ngo/donation">
              +Donation
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/apply">
              Apply
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/admin">
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/cleen-foundation-ngo/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

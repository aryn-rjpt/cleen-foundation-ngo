import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='employee'>Employee</NavLink></li>
                <li><NavLink to='donation'>Donation</NavLink></li>
                <li><NavLink to='blog'>Blog</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
                <li><NavLink to='home'>Home</NavLink></li>                
                <li><NavLink to='contact'>Contact</NavLink></li>
                <li><NavLink to='apply'>Apply</NavLink></li>
                <li><NavLink to='admin'>Admin</NavLink></li>
                <li><NavLink to='login'>Login</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar



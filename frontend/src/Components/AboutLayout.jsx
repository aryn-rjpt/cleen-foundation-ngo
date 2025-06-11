// src/Components/AboutLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/About.css'; // Optional custom CSS

export default function AboutLayout() {
  return (
    <div className="about-layout">
      <h1>About Cleen Foundation</h1>
      <nav className="about-nav">
        <NavLink to="/about">Introduction</NavLink>
        <NavLink to="/about/journey">Journey</NavLink>
        <NavLink to="/about/founder">Founder</NavLink>
        <NavLink to="/about/team">Team</NavLink>
        <NavLink to="/about/gallery">Gallery</NavLink>
        <NavLink to="/about/partners">Partners</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

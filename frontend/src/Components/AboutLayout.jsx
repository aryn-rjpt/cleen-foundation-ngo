// src/Components/AboutLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/About.css'; // Custom styles

export default function AboutLayout() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'active' : '';

  return (
    <div className="about-layout">
      <h1>About Cleen Foundation</h1>
      <nav className="about-nav">
        <NavLink to="/about" end className={getNavLinkClass}>
          Introduction
        </NavLink>
        <NavLink to="/about/journey" className={getNavLinkClass}>
          Journey
        </NavLink>
        <NavLink to="/about/founder" className={getNavLinkClass}>
          Founder
        </NavLink>
        <NavLink to="/about/team" className={getNavLinkClass}>
          Team
        </NavLink>
        <NavLink to="/about/gallery" className={getNavLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="/about/partners" className={getNavLinkClass}>
          Partners
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

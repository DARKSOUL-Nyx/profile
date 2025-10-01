import React from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink instead of Link
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar holo">
      <div className="navbar-logo">
        <NavLink to="/">VSS NISHWAN </NavLink>
      </div>
      <ul className="navbar-links">
        {/* 2. Use NavLink for all links */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink instead of Link
import './navBar.css';
import { useSound } from '../../hooks/useSound.js'; // <-- NEW IMPORT
import { useTheme } from '../../ThemeContext'; // <-- NEW: Import useTheme
import { FaSun, FaMoon } from 'react-icons/fa'; // <-- NEW: Import icons
const NavBar = () => {
  const playClickSound = useSound('/audio/click-sound.mp3');
  const { theme, toggleTheme } = useTheme(); // <-- NEW: Get theme and toggleTheme
  const handleThemeClick = () => {
    toggleTheme(); // Switch the theme
    playClickSound(); // Play the sound
  };
  return (
    <nav className="navbar holo">
      <div className="navbar-logo">
        <NavLink to="/">DARK SOUL</NavLink>
      </div>
      <ul className="navbar-links">
        {/* 2. Use NavLink for all links */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">Philosophy</NavLink></li>
        <li><NavLink to="/blog">Laboratory</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {/* <li><NavLink to="/projects">Featured Blueprints</NavLink></li> */}
        <li><NavLink to="/products">The Digital Arsenal</NavLink></li>
          {/* --- NEW: Theme Toggle Button --- */}
          <li>
            <button className="theme-toggle-button" onClick={handleThemeClick}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </li>
      </ul>
    </nav>
  );
};

export default NavBar;
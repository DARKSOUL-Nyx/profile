// src/components/Cursor/Cursor.js
import React, { useState, useEffect } from 'react';
import './Cursor.css';
import { useTheme } from '../../ThemeContext'; // <-- NEW: Import useTheme

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme(); // <-- NEW: Get the current theme

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div 
      // NEW: Add a class based on the theme
      className={`cursor-dot ${theme === 'light' ? 'light-theme' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
// src/components/WelcomeOverlay/WelcomeOverlay.js
import React, { useState } from 'react';
import './WelcomeOverlay.css';

const WelcomeOverlay = ({ onEnter }) => {
  const [fading, setFading] = useState(false);

  const handleClick = () => {
    setFading(true);
    // Call the 'onEnter' function passed from App.js
    onEnter();
  };

  return (
    // If 'fading' is true, the 'fade-out' class is added
    <div className={`welcome-overlay ${fading ? 'fade-out' : ''}`}>
      <div className="welcome-content">
        <h1 className="welcome-title">DARKSOUL</h1>
        <p className="welcome-subtitle">A digital experience. Best with sound.</p>
        <button className="welcome-button" onClick={handleClick}>
          [ Enter ]
        </button>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
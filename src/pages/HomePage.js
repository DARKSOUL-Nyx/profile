// src/pages/HomePage.js
import React from 'react';
import Profile from '../components/Profile/Profile.js';
import Blog from '../components/Blog/Blog';
import Newsletter from '../components/Newsletter/Newsletter';
import Scene from '../components/Scene/Scene.js'; // Import the Scene component
import './HomePage.css'; // We'll create this file for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="scene-container">
        <Scene />
      </div>
      <main className="content-container">
        <Profile />
        <hr style={{ margin: '2rem 0' }} />
        <Blog />
        <hr style={{ margin: '2rem 0' }} />
        <Newsletter />
      </main>
    </div>
  );
};

export default HomePage;
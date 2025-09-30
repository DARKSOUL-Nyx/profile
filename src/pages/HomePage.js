import React from 'react';
import Profile from '../components/Profile/Profile.js';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">

      <main className="content-container">
        <Profile />

      </main>
    </div>
  );
};

export default HomePage;
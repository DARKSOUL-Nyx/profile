import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import './App.css';
import Scene from './components/Scene/Scene.js';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar/navBar.js';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <div className="scene-container">
        <Scene />
      </div>

      <NavBar />
      
      <main className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add a route for Products when you create the page */}
        </Routes>

      </main>
    </div>
  );
}

export default App;
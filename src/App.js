import React, { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import './App.css';

// Page Imports
import HomePage from './pages/HomePage';
import ShowcasePage from './pages/ShowcasePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Projects from './pages/ProjectsPage.js';
import ProductsPage from './pages/ProductsPage.js';

// Component Imports
import NavBar from './components/NavBar/navBar.js';
import Scene from './components/Scene/Scene.js';
import WelcomeOverlay from './components/WelcomeOverlay/WelcomeOverlay.js'; // <-- NEW
import MusicPlayer from './components/MusicPlayer/MusicPlayer.js';     // <-- NEW
import Cursor from './components/Cursor/Cursor.js';                   // <-- NEW (for next step)
// We no longer need BlogDetail
// import BlogDetail from './components/BlogDetail/BlogDetail.js'; 

function App() {
  const [isSiteActive, setIsSiteActive] = useState(false);

  // This function is passed to the WelcomeOverlay
  // It will start the music and fade out the overlay
  const handleEnter = () => {
    setIsSiteActive(true);
  };

  return (
    <div className="App" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- NEW: Custom Cursor (from Step 2) --- */}
      <Cursor />

      {/* --- NEW: Welcome Overlay --- */}
      {/* This dark screen shows first. When 'isSiteActive' is true, it fades away. */}
      {!isSiteActive && <WelcomeOverlay onEnter={handleEnter} />}

      {/* --- NEW: Music Player (Mute Button) --- */}
      {/* This only shows *after* you've entered the site */}
      {isSiteActive && <MusicPlayer src="/audio/ambience.mp3" />}

      {/* --- 3D SCENE --- */}
      {/* This canvas holds the 3D scene and is fixed in the background */}
      <Canvas className="scene-canvas">
        {/* ScrollControls wraps the scene and connects scroll to animations */}
        {/* Pages=4 means the scroll "distance" is 4x the viewport height */}
        <ScrollControls pages={4} damping={0.1}>
          <Scene />
        </ScrollControls>
      </Canvas>

      {/* --- 2D HTML CONTENT --- */}
      {/* This div scrolls *over* the 3D scene */}
      <div className="html-content">
        <NavBar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* The unused BlogDetail route is now removed */}
            {/* <Route path="/blog/:postId" element={<BlogDetail />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
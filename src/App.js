import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar/navBar.js';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <NavBar />
      <header>
        <h1>My Developer Profile</h1>
      </header>
      
      {/* The main content is now managed by HomePage */}
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
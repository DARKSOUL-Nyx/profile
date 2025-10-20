import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import './App.css';
import HomePage from './pages/HomePage';
import Scene from './components/Scene/Scene.js';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar/navBar.js';
import Projects from './pages/ProjectsPage.js';
import ProductsPage from './pages/ProductsPage.js';
import ShowcasePage from './pages/ShowcasePage.js'; // NEW IMPORT
import BlogDetail from './components/BlogDetail/BlogDetail.js'; // NEW IMPORT

function App() {
  const location = useLocation();

  // Logic to hide the scene on "detail" pages.
  // We assume a detail page is any route with 3 or more segments (e.g., /blog/1)
  const isDetailRoute = location.pathname.split('/').filter(Boolean).length > 2;

  return (
    <div className="App" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className={`scene-container ${isDetailRoute ? 'hidden' : ''}`}>
        {/* <Scene /> */}
      </div>

      <NavBar />
      
      <main className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* New Central Hub Page */}
          <Route path="/showcase" element={<ShowcasePage />} /> 

          {/* Sub-Pages linked from Showcase */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* DETAIL ROUTE: This is where the scene will hide */}
          <Route path="/blog/:postId" element={<BlogDetail />} /> 
          {/* You can add another detail route like: <Route path="/products/:productId" element={<ProductDetail />} /> */}
        </Routes>

      </main>
    </div>
  );
}

export default App;

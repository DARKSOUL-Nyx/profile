import React from 'react';
import { Link } from 'react-router-dom';
import './ShowcasePage.css';

const ShowcasePage = () => {
  const categories = [
    { title: "Projects", path: "/projects", description: "My engineering and data science blueprints, from AI models to full-stack applications." },
    { title: "Blog", path: "/blog", description: "In-depth articles, tutorials, and thoughts on technology, business, and philosophy." },
    { title: "Products", path: "/products", description: "Digital assets, templates, and tools designed to streamline your workflow." },
  ];

  return (
    <div className="showcase-container content-container">
      <h1 className="showcase-title">The Exploration Hub</h1>
      <p className="showcase-subtitle">Dive into my latest work, creations, and insights.</p>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="category-card">
            <h2 className="card-title">{cat.title}</h2>
            <p className="card-description">{cat.description}</p>
            <span className="card-link">Explore $\rightarrow$</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowcasePage;

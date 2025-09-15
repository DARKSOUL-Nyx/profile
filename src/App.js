import React from 'react';
import './App.css';
import Profile from './components/Profile';
import ProductCard from './components/ProductCard';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';

function App() {
  const products = [
    {
      id: 1,
      title: "React UI Kit",
      description: "A collection of reusable React components for building beautiful UIs.",
      image: "https://via.placeholder.com/300x200", // Replace with your product image
      link: "#" // Replace with your product's Gumroad/Shopify link
    },
    {
      id: 2,
      title: "E-book: The React Handbook",
      description: "A guide for beginners to master the basics of React development.",
      image: "https://via.placeholder.com/300x200", // Replace with your product image
      link: "#" // Replace with your product's Gumroad/Shopify link
    }
  ];

  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <header>
        <h1>My Developer Profile</h1>
      </header>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <Profile />
        
        <hr style={{ margin: '2rem 0' }} />

        <section>
          <h2>My Products</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map(product => (
              <ProductCard 
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
              />
            ))}
          </div>
        </section>

        <hr style={{ margin: '2rem 0' }} />

        <Blog />

        <hr style={{ margin: '2rem 0' }} />
        
        <Newsletter />
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import { products } from '../data/productsData';
import ProductCard from '../components/ProductCard/ProductCard.js';
// Don't forget to create a ProductsPage.css for styling!

const ProductsPage = () => {
  return (
    <div className="products-page-container">
      <h1>The Digital Arsenal</h1>
      <p>A collection of resources, templates, and tools I've built to help others.</p>
      
      <div className="products-grid">
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
    </div>
  );
};

export default ProductsPage;
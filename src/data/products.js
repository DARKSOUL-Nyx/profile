import React from 'react';
import { products } from '../../data/productsData';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';

const Products = () => {
  return (
    <section className="products-section">
      <h2>My Products</h2>
      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
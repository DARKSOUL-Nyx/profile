import React from 'react';
import './ProductCard.css'; // We will create this CSS file next

const ProductCard = ({ title, description, image, link }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="buy-link"
        >
          Check it out
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
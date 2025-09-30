import React from 'react';
import './ProductCard.css'; // We will create this CSS file next

const ProductCard = ({ name, description, imageUrl, link }) => {
  return (
    <div className="product-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={`${name} thumbnail`} className="product-image" />
        <div className="product-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
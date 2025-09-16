import React from 'react';

const ProductCard = ({ title, description, image, link }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More / Buy</a>
    </div>
  );
};

export default ProductCard;
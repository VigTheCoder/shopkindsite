import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || ''} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.price ? `$${product.price}` : ''}</p>
    </div>
  );
};

export default ProductCard;

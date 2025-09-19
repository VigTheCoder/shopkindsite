import React from 'react';
import ProductCard from './ProductCard';
import './Section.css';

const Section = ({ title, products }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="section-products">
        {products.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Section;

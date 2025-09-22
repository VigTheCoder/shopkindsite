import React, { useState } from 'react';
import { chocolates } from '../data/chocolates';
import CategoriesNav from '../components/CategoriesNav';

const ChocolatesPage = () => {
  const [selectedImage, setSelectedImage] = useState({});

  const handleThumbnailClick = (id, image) => {
    setSelectedImage(prev => ({ ...prev, [id]: image }));
  };

  return (
    <div className="products-container max-w-6xl mx-auto p-4 sm:p-6">
      <CategoriesNav />

      <h3 className="text-2xl sm:text-xl font-bold mb-4 text-center sm:text-left">Chocolates</h3>

      {/* Sort / Filter row */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 gap-3">
        <span className="text-gray-700 font-medium text-sm sm:text-base">Sort by: Recommended</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {chocolates.map(product => (
          <div key={product.id} className="product-card w-full sm:w-auto max-w-xs border rounded-lg p-3 flex flex-col hover:shadow-lg transition">
            <div className="product-image mb-2">
              <img
                src={selectedImage[product.id] || product.images[0]}
                alt={product.name}
                className="w-full h-40 sm:h-48 object-cover rounded-md"
              />
            </div>
            <div className="product-thumbnails flex gap-2 mb-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(product.id, img)}
                  className="w-12 h-12 object-cover cursor-pointer border rounded"
                />
              ))}
            </div>
            <h2 className="font-semibold text-base sm:text-lg">{product.name}</h2>
            <p className="text-sm text-gray-600 flex-grow line-clamp-2">{product.description}</p>
            <p className="text-amber-600 font-bold mt-2">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded mt-3">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChocolatesPage;

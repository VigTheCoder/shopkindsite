import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCard = ({ product, category }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [added, setAdded] = useState(false); // visual feedback state
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart({ productId: product.id, quantity: 1, category }));

    setAdded(true);
    setTimeout(() => setAdded(false), 1200); // reset after 1.2s
  };

  return (
    <div className="product-card border rounded-lg p-3 hover:shadow-lg transition relative">
      {/* Product image */}
      <div className="product-image">
        <img src={selectedImage} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      </div>

      {/* Thumbnails */}
      <div className="product-thumbnails flex gap-1 mt-2">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} thumbnail ${idx+1}`}
            onClick={() => setSelectedImage(img)}
            className="w-12 h-12 object-cover cursor-pointer border rounded-md"
          />
        ))}
      </div>

      {/* Product info */}
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-amber-600 font-bold mt-1">${product.price.toFixed(2)}</p>

      {/* Add to Cart button */}
      <button
        onClick={handleAddToCart}
        className={`mt-2 w-full py-2 rounded transition flex justify-center items-center relative
          ${added ? 'bg-gray-300 text-gray-800 cursor-default' : 'bg-yellow-400 hover:bg-yellow-500 text-white'}`}
        disabled={added}
      >
        {added && (
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-600 font-bold text-lg">
            ✓
          </span>
        )}
        {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;

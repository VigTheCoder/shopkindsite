import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import './ProductCart.css';

const ProductCart = ({ data }) => {
  const { id, name, price, images, slug } = data;
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false); // feedback state

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart({ productId: id, quantity: 1 }));

    setAdded(true);
    setTimeout(() => setAdded(false), 1200); // reset after 1.2s
  };

  return (
    <div className="product-card border rounded-lg p-2 bg-white hover:shadow-md transition relative">

      {/* Only the image is clickable */}
      <Link to={slug} className="product-image block mb-2">
        <img src={images[0]} alt={name} className="w-full h-40 object-cover rounded-md" />
      </Link>

      {/* Product details */}
      <div className="product-details mb-2">
        <h3 className="text-sm font-medium truncate">{name}</h3>
        <p className="text-sm font-semibold">${price.toFixed(2)}</p>
      </div>

      {/* Add to Cart button */}
      <div className="product-actions">
        <button
          className={`add-to-cart-btn w-full py-2 rounded transition flex justify-center items-center relative
            ${added ? 'bg-gray-300 text-gray-800 cursor-default' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
          onClick={handleAddToCart}
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
    </div>
  );
};

export default ProductCart;

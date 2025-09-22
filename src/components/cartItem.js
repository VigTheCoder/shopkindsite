// src/components/cartItem.js
import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import { calculateRoundedDonation } from '../utils/donation';

const CartItem = ({ data, showDonation = true }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const donationPercentage = 10;

  // Load product details based on productId
  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail || {});
  }, [productId]);

  // Decrease quantity (allow 0 to remove item)
  const handleMinusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: Math.max(quantity - 1, 0) }));
  };

  // Increase quantity
  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity + 1 }));
  };

  const price = detail?.price || 0;
  const suggestedDonation = calculateRoundedDonation(price * quantity, donationPercentage);
  const thumbnail = detail?.images?.[0] || 'https://via.placeholder.com/50';

  return (
    <div className="flex flex-col bg-slate-600 text-white p-3 border-b-2 border-slate-700 rounded-md gap-2">
      <div className="flex justify-between items-center gap-5">
        <img
          src={thumbnail}
          alt={detail?.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{detail?.name}</h3>
          <p>${(price * quantity).toFixed(2)}</p>
          {showDonation && (
            <p className="text-sm text-amber-400">
              Suggested Donation: ${suggestedDonation.toFixed(2)}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';
import { calculateRoundedDonation } from '../utils/donation';
import { useNavigate } from 'react-router-dom';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const donationPercentage = 10;
  const [includeDonation, setIncludeDonation] = useState(false);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const totalDonation = carts.reduce(
    (sum, item) => sum + calculateRoundedDonation(item.price * item.quantity, donationPercentage),
    0
  );

  const totalCartAmount = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-800 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_auto] 
        transform transition-transform duration-500
        ${statusTab === false ? 'translate-x-full' : ''}
      `}
    >
      {/* Header */}
      <h2 className="p-5 text-white text-lg font-semibold border-b border-gray-600">
        Shopping Cart
      </h2>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto">
        {carts.map((item, key) => {
          const suggestedDonation = calculateRoundedDonation(item.price * item.quantity, donationPercentage);
          return (
            <div key={key} className="bg-gray-700 p-3 rounded-lg text-white">
              <CartItem data={item} />
              <p className="text-xs text-amber-400 mt-1">
                Suggested Donation: ${suggestedDonation}
              </p>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="p-5 border-t border-gray-600 space-y-2">
        <div className="flex justify-between text-gray-300 text-sm">
          <span>Total Cart Amount:</span>
          <span>${totalCartAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-amber-400 text-sm font-medium">
          <span>Total Suggested Donation:</span>
          <span>${totalDonation}</span>
        </div>

        <label className="flex items-center gap-2 mt-2 bg-yellow-50 p-2 rounded-lg border border-amber-200 cursor-pointer hover:bg-yellow-100">
          <input
            type="checkbox"
            checked={includeDonation}
            onChange={(e) => setIncludeDonation(e.target.checked)}
            className="w-4 h-4 accent-amber-500"
          />
          <span className="text-gray-800 text-sm">I would like to add this donation to my order ❤️</span>
        </label>

        <div className="flex justify-between items-center mt-3 text-lg font-bold text-gray-900">
          <span>Final Total:</span>
          <span>${(totalCartAmount + (includeDonation ? totalDonation : 0)).toFixed(2)}</span>
        </div>

        <button
          className="w-full bg-amber-600 text-white py-2 mt-3 rounded-md text-sm font-medium hover:bg-amber-700 transition"
          onClick={() => navigate('/payment')}
        >
          Proceed to Checkout
        </button>

        <button
          className="w-full bg-gray-600 text-white py-2 mt-1 rounded-md text-sm font-medium hover:bg-gray-700 transition"
          onClick={handleCloseTabCart}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartTab;

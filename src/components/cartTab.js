import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab, changeQuantity } from '../stores/cart';
import { calculateRoundedDonation } from '../utils/donation';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items || []);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const donationPercentage = 10;
  const [includeDonation, setIncludeDonation] = useState(false);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  // Update quantity or remove item if quantity reaches 0
  const handleMinusQuantity = (productId, quantity) => {
    dispatch(changeQuantity({ productId, quantity: Math.max(quantity - 1, 0) }));
  };

  const handlePlusQuantity = (productId, quantity) => {
    dispatch(changeQuantity({ productId, quantity: quantity + 1 }));
  };

  // Only consider items with quantity > 0 for calculations
  const validItems = carts.filter((item) => item.quantity > 0);

  const totalCartAmount = validItems.reduce((sum, item) => {
    const productDetail = products.find((p) => p.id === item.productId);
    const price = productDetail?.price || 0;
    return sum + price * item.quantity;
  }, 0);

  const totalDonation = validItems.reduce((sum, item) => {
    const productDetail = products.find((p) => p.id === item.productId);
    const price = productDetail?.price || 0;
    return sum + calculateRoundedDonation(price * item.quantity, donationPercentage);
  }, 0);

  const finalTotal = totalCartAmount + (includeDonation ? totalDonation : 0);

  const handleCheckout = () => {
    navigate('/payment', { state: { finalTotal, includeDonation } });
  };

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
        {validItems.map((item, idx) => {
          const productDetail = products.find((p) => p.id === item.productId);
          const price = productDetail?.price || 0;
          const suggestedDonation = calculateRoundedDonation(price * item.quantity, donationPercentage);

          return (
            <div key={idx} className="bg-gray-700 p-3 rounded-lg text-white flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <CartItem data={item} showDonation={true} />

                <div className="flex flex-col items-center gap-1">
                  <button
                    className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
                    onClick={() => handleMinusQuantity(item.productId, item.quantity)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
                    onClick={() => handlePlusQuantity(item.productId, item.quantity)}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-xs text-amber-400">Suggested Donation: ${suggestedDonation.toFixed(2)}</p>
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
          <span>${totalDonation.toFixed(2)}</span>
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
          <span>${finalTotal.toFixed(2)}</span>
        </div>

        <button
          className="w-full bg-amber-600 text-white py-2 mt-3 rounded-md text-sm font-medium hover:bg-amber-700 transition"
          onClick={handleCheckout}
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

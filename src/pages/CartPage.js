import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/cartItem';
import { calculateRoundedDonation } from '../utils/donation';
import { products } from '../data/products';

const CartPage = () => {
  const carts = useSelector((store) => store.cart.items || []);
  const donationPercentage = 10;
  const navigate = useNavigate();
  const [includeDonation, setIncludeDonation] = useState(false);

  useEffect(() => {
    const savedDonation = localStorage.getItem('donationSelected') === 'true';
    setIncludeDonation(savedDonation);
  }, []);

  const handleDonationChange = (checked) => {
    setIncludeDonation(checked);
    localStorage.setItem('donationSelected', checked);
  };

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

  if (validItems.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-5 text-center py-20">
        <p className="text-xl mb-4">Your cart is empty.</p>
        <Link to="/" className="text-blue-600 underline">Continue Shopping</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    const checkoutData = {
      items: validItems.map(item => ({
        productId: item.productId,
        category: item.category,
        quantity: item.quantity,
      })),
      totalCartAmount,
      totalDonation: includeDonation ? totalDonation : 0,
      finalTotal
    };

    navigate('/payment', { state: checkoutData });
  };

  return (
    <div className="max-w-5xl mx-auto p-5 flex flex-col md:flex-row gap-10">
      
      {/* CART ITEMS */}
      <div className="flex-1 flex flex-col gap-4">
        {validItems.map((item, idx) => (
          <CartItem key={idx} data={item} showDonation={true} />
        ))}
      </div>

      {/* CART SUMMARY */}
      <div className="w-full md:w-80 bg-gray-100 p-5 rounded-2xl flex flex-col gap-5 shadow-md md:sticky md:top-5 self-start">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Cart Summary 🛒</h3>

        <div className="flex justify-between text-gray-700 text-sm">
          <span>Total Cart Amount:</span>
          <span className="font-semibold">${totalCartAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-amber-500 text-sm font-medium">
          <span>Suggested Donation:</span>
          <span>${totalDonation.toFixed(2)}</span>
        </div>

        <label className="flex items-center gap-2 mt-2 bg-yellow-50 p-2 rounded-lg border border-amber-200 cursor-pointer hover:bg-yellow-100">
          <input
            type="checkbox"
            checked={includeDonation}
            onChange={(e) => handleDonationChange(e.target.checked)}
            className="w-4 h-4 accent-amber-500"
          />
          <span className="text-gray-800 text-sm">I would like to add this donation to my order ❤️</span>
        </label>

        <div className="flex justify-between items-center mt-3 text-lg font-bold text-gray-900">
          <span>Final Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>

        <button
          className="bg-amber-600 text-white py-3 px-4 rounded hover:bg-amber-700 transition"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

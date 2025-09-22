import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Receive totals from CartPage
  const { items, totalCartAmount, totalDonation, finalTotal } = location.state || {};

  const [address, setAddress] = useState({ name: '', street: '', city: '', state: '', zip: '' });
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!items || items.length === 0) {
    return <p className="text-center mt-10 text-lg">Your cart is empty.</p>;
  }

  const handleAddressChange = (e) => setAddress({ ...address, [e.target.name]: e.target.value });
  const handleCardChange = (e) => setCard({ ...card, [e.target.name]: e.target.value });

  const handleDemo = () => {
    setAddress({
      name: 'John Doe',
      street: '123 React St.',
      city: 'Redux City',
      state: 'CA',
      zip: '90001',
    });
    setCard({
      number: '4111 1111 1111 1111',
      name: 'John Doe',
      expiry: '12/25',
      cvv: '123',
    });
  };

  const handlePlaceOrder = () => {
    const allCardFilled = Object.values(card).every((val) => val.trim() !== '');
    if (!allCardFilled) {
      alert('Please fill all card details to place the order.');
      return;
    }

    setOrderPlaced(true);

    // Clear cart
    items.forEach((item) => dispatch(changeQuantity({ productId: item.productId, quantity: 0 })));
    localStorage.removeItem('donationSelected');

    setTimeout(() => {
      alert('🎉 Transaction Completed! Thank you for your order.');
      navigate('/'); // redirect to IntroPage
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-5">Payment & Shipping</h2>

      {/* Address Form */}
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Shipping Address</h3>
        <div className="grid grid-cols-1 gap-2">
          {['name', 'street', 'city', 'state', 'zip'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={address[field]}
              onChange={handleAddressChange}
              className="border p-2 rounded"
              required
            />
          ))}
        </div>
      </div>

      {/* Card Form */}
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Card Details</h3>
        <div className="grid grid-cols-1 gap-2">
          {['number', 'name', 'expiry', 'cvv'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={
                field === 'number'
                  ? 'Card Number'
                  : field === 'name'
                  ? 'Cardholder Name'
                  : field === 'expiry'
                  ? 'Expiry MM/YY'
                  : 'CVV'
              }
              value={card[field]}
              onChange={handleCardChange}
              className="border p-2 rounded"
              required
            />
          ))}
        </div>
        <button
          onClick={handleDemo}
          className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Fill Demo Card & Address
        </button>
      </div>

      {/* Order Summary */}
      <div className="mb-5 border p-3 rounded">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        <div className="flex justify-between mb-1">
          <span>Total Cart Amount:</span>
          <span>${totalCartAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1 text-amber-500">
          <span>Donation:</span>
          <span>${totalDonation.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
          <span>Final Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-yellow-500 text-white py-3 rounded font-semibold hover:bg-yellow-600 transition"
      >
        Place Order
      </button>

      {orderPlaced && (
        <div className="mt-5 text-center text-green-600 text-lg font-bold animate-bounce">
          🎉 Transaction Completed! Thank you! 🎉
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

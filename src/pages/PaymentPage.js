import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';
import { products } from '../products';
import { calculateRoundedDonation } from '../utils/donation';

const PaymentPage = () => {
  const carts = useSelector((store) => store.cart.items || []);
  const donationPercentage = 10;

  // Form state
  const [address, setAddress] = useState({ name: '', street: '', city: '', state: '', zip: '' });
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [saved, setSaved] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [includeDonation, setIncludeDonation] = useState(false);

  // Load donation selection from localStorage on mount
  useEffect(() => {
    const savedDonation = localStorage.getItem('donationSelected') === 'true';
    setIncludeDonation(savedDonation);
  }, []);

  // Calculate totals
  const totalCartAmount = carts.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    const price = product?.price || 0;
    return sum + price * item.quantity;
  }, 0);

  const totalDonation = carts.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    const price = product?.price || 0;
    return sum + calculateRoundedDonation(price * item.quantity, donationPercentage);
  }, 0);

  const finalTotal = totalCartAmount + (includeDonation ? totalDonation : 0);

  // Handlers
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleCancel = () => {
    setCard({ number: '', name: '', expiry: '', cvv: '' });
    setAddress({ name: '', street: '', city: '', state: '', zip: '' });
    setSaved(false);
    setOrderPlaced(false);
  };

  const handleDemo = () => {
    setAddress({ name: 'John Doe', street: '123 React St.', city: 'Redux City', state: 'CA', zip: '90001' });
    setCard({ number: '4111 1111 1111 1111', name: 'John Doe', expiry: '12/25', cvv: '123' });
    setSaved(false);
    setOrderPlaced(false);
  };

  const handleAddCard = () => {
    localStorage.setItem('savedCard', JSON.stringify(card));
    localStorage.setItem('savedAddress', JSON.stringify(address));
    setSaved(true);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      alert('🎉 Transaction Completed! Thank you for your order.');
      handleCancel();
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-5">Payment & Shipping</h2>

      {/* Shipping Address */}
      <section className="mb-6">
        <h3 className="font-semibold mb-2">Shipping Address</h3>
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {['name', 'street', 'city', 'state', 'zip'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={address[field]}
              onChange={handleAddressChange}
              className="border p-2 rounded-full shadow-sm"
              required
            />
          ))}
        </form>
      </section>

      {/* Card Information */}
      <section className="mb-6">
        <h3 className="font-semibold mb-2">Card Information</h3>
        <div className="flex gap-3 mb-3 text-3xl text-gray-700">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcDiscover />
        </div>

        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              className="border p-2 rounded-full shadow-sm"
              required
            />
          ))}
        </form>

        <div className="flex gap-3 mt-3">
          <button type="button" onClick={handleCancel} className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-full hover:bg-gray-400 transition">
            Cancel
          </button>
          <button type="button" onClick={handleAddCard} className="flex-1 bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600 transition">
            Add Your Card
          </button>
          <button type="button" onClick={handleDemo} className="flex-1 bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition">
            Fill Demo Card & Address
          </button>
        </div>

        {saved && <p className="mt-2 text-green-600 font-medium animate-pulse">Card & Address saved successfully!</p>}
      </section>

      {/* Order Summary */}
      <section className="mb-6">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        <ul className="border p-3 rounded mb-2 space-y-2">
          {carts.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            const price = product?.price || 0;
            return (
              <li key={item.productId} className="flex justify-between">
                <span>{product?.name || item.name} x {item.quantity}</span>
                <span>${(price * item.quantity).toFixed(2)}</span>
              </li>
            );
          })}
          {includeDonation && (
            <li className="flex justify-between text-amber-500 font-medium">
              <span>Donation ❤️</span>
              <span>${totalDonation}</span>
            </li>
          )}
        </ul>

        <div className="flex justify-between font-bold text-lg mt-3 mb-3">
          <span>Final Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>

        <button
          type="button"
          onClick={handlePlaceOrder}
          className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition transform active:scale-95"
        >
          Place Order
        </button>

        {orderPlaced && <div className="mt-5 text-center text-green-600 text-xl font-bold animate-bounce">🎉 Transaction Completed! Thank you! 🎉</div>}
      </section>
    </div>
  );
};

export default PaymentPage;

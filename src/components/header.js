// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import iconCart from '../assets/images/iconCart.png';
import { chocolates } from '../data/chocolates';
import { cookies } from '../data/cookies';
import { icecreams } from '../data/icecreams';
import { chips } from '../data/chips';

const allProducts = [
  ...chocolates.map(p => ({ ...p, category: 'chocolates' })),
  ...cookies.map(p => ({ ...p, category: 'cookies' })),
  ...icecreams.map(p => ({ ...p, category: 'icecreams' })),
  ...chips.map(p => ({ ...p, category: 'chips' })),
];

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const carts = useSelector(store => store.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    const total = carts.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenCartPage = () => navigate('/cart');

  const handleSearch = e => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const found = allProducts.find(p =>
      p.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      navigate(`/category/${found.category}/${found.slug}`);
      setSearchTerm('');
      setSuggestions([]);
    } else {
      alert('Product not found!');
    }
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5)); // show top 5 suggestions
  };

  const handleSuggestionClick = product => {
    navigate(`/category/${product.category}/${product.slug}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 bg-white shadow-md rounded-xl relative">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold">
        ShopKind
      </Link>

      {/* Search bar */}
      <div className="flex-1 max-w-full sm:max-w-xl relative">
        <form
          onSubmit={handleSearch}
          className="flex bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 focus:outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-amber-600 text-white px-4 py-2 hover:bg-amber-700 text-sm sm:text-base"
          >
            Search
          </button>
        </form>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
            {suggestions.map(product => (
              <li
                key={product.slug}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(product)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cart Icon */}
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer"
        onClick={handleOpenCartPage}
      >
        <img src={iconCart} alt="Cart" className="w-6 sm:w-6" />
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs sm:text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {totalQuantity}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;

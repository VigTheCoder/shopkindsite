// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductCart from '../components/productCart';
import { FaIceCream, FaCookieBite, FaCandyCane, FaBoxOpen } from 'react-icons/fa';

import { chocolates } from '../data/chocolates';
import { cookies } from '../data/cookies';
import { icecreams } from '../data/icecreams';
import { chips } from '../data/chips';

// Combine all products into a single array
const allProducts = [
  ...chocolates.map(p => ({ ...p, category: 'chocolates' })),
  ...cookies.map(p => ({ ...p, category: 'cookies' })),
  ...icecreams.map(p => ({ ...p, category: 'icecreams' })),
  ...chips.map(p => ({ ...p, category: 'chips' })),
];

// Categories for homepage cards
const categories = [
  { name: 'Chocolates', path: 'chocolates', icon: <FaCandyCane size={40} /> },
  { name: 'Chips', path: 'chips', icon: <FaBoxOpen size={40} /> },
  { name: 'Cookies', path: 'cookies', icon: <FaCookieBite size={40} /> },
  { name: 'Icecreams', path: 'icecreams', icon: <FaIceCream size={40} /> },
];

const Home = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('Recommended');
  const [openSort, setOpenSort] = useState(false);

  // Apply sorting
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOption === 'Price: Low to High') return a.price - b.price;
    if (sortOption === 'Price: High to Low') return b.price - a.price;
    if (sortOption === 'Newest') return b.id - a.id; // assuming higher id = newer
    return 0; // Recommended / default
  });

  const handleSortSelect = (option) => {
    setSortOption(option);
    setOpenSort(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      {/* Categories Section */}
      <h1 className="text-3xl font-bold mb-6 text-center">Shop by Category</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 mb-10">
        {categories.map((cat) => (
          <div
            key={cat.path}
            className="flex flex-col items-center justify-center p-6 bg-yellow-50 rounded-xl cursor-pointer hover:bg-yellow-100 transition"
            onClick={() => navigate(`/category/${cat.path}`)}
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h2 className="text-xl font-semibold">{cat.name}</h2>
          </div>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Products</h2>
        <div className="relative inline-block">
          <button
            className="flex items-center gap-1 font-medium hover:text-gray-700"
            onClick={() => setOpenSort(!openSort)}
          >
            Sort by {sortOption}
            <span className="ml-1 text-sm">▼</span>
          </button>

          {openSort && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
              {['Recommended', 'Price: Low to High', 'Price: High to Low', 'Newest'].map(option => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {sortedProducts.map(product => (
          <Link 
            key={product.id} 
            to={`/category/${product.category}/${product.slug}`} 
            className="no-underline"
          >
            <ProductCart data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

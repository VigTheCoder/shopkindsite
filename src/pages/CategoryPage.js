// src/pages/CategoryPage.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCart from '../components/productCart';

import { chocolates } from '../data/chocolates';
import { chips } from '../data/chips';
import { cookies } from '../data/cookies';
import { icecreams } from '../data/icecreams';

// Combine all products into a single array
const allProducts = [...chocolates, ...chips, ...cookies, ...icecreams];

// Function to get unique categories
const getUniqueCategories = (products) => {
  const categories = {};
  products.forEach(product => {
    if (product.category) {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    }
  });
  return categories;
};

const CategoryPage = () => {
  const { category } = useParams();
  const categories = getUniqueCategories(allProducts);
  const items = categories[category] || [];
  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  const [sortOption, setSortOption] = useState('Recommended');
  const [openSort, setOpenSort] = useState(false);

  // Apply sorting
  const sortedItems = [...items].sort((a, b) => {
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
      {/* Page Header + Sort Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{title || 'Category'}</h1>

        {/* Sort Dropdown */}
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
      {sortedItems.length === 0 ? (
        <p className="text-center text-lg">No products found.</p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {sortedItems.map(product => (
            <Link 
              key={product.id} 
              to={`/category/${category}/${product.slug}`} 
              className="no-underline"
            >
              <ProductCart data={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

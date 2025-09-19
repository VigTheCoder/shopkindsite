import React, { useState } from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';

const Home = () => {
  const [sortOption, setSortOption] = useState('Recommended');
  const [openSort, setOpenSort] = useState(false);

  // Simple sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'Price: Low to High') return a.price - b.price;
    if (sortOption === 'Price: High to Low') return b.price - a.price;
    return 0; // Recommended / default
  });

  const handleSortSelect = (option) => {
    setSortOption(option);
    setOpenSort(false);
  };

  return (
    <div className="p-5 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
       

        {/* Sort Dropdown mimicking H&M */}
        <div className="relative inline-block">
          <button
            className="flex items-center gap-1 font-medium hover:text-gray-700"
            onClick={() => setOpenSort(!openSort)}
          >
            Sort by {sortOption}
            <span className="ml-1 text-sm">▼</span> {/* Down arrow */}
          </button>

          {openSort && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
              {['Recommended', 'Price: Low to High', 'Price: High to Low', 'Newest'].map((option) => (
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
        {sortedProducts.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

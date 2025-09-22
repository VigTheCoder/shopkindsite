import React from 'react';
import { chips } from '../data/chips';
import { Link } from 'react-router-dom';
import CategoriesNav from '../components/CategoriesNav';

const ChipsPage = () => {
  return (
    <div className="chips-page max-w-6xl mx-auto p-4 sm:p-6">
      <CategoriesNav />

      <h3 className="text-2xl sm:text-xl font-bold mb-4 text-center sm:text-left">Chips</h3>

      {/* Sort / Filter row */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 gap-3">
        <span className="text-gray-700 font-medium text-sm sm:text-base">Sort by: Recommended</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {chips.map((chip) => (
          <Link
            key={chip.id}
            to={`/ShopKind/category/chips/${chip.slug}`}
            className="chip-card border rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col w-full sm:w-auto max-w-xs"
          >
            <img
              src={chip.images[0]}
              alt={chip.name}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 bg-white flex flex-col flex-grow">
              <h2 className="font-semibold text-base sm:text-lg">{chip.name}</h2>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{chip.description}</p>
              <p className="text-amber-600 font-bold mt-auto">${chip.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChipsPage;

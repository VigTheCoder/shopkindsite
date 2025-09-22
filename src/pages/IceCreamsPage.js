import React from 'react';
import { icecreams } from '../data/icecreams';
import CategoriesNav from '../components/CategoriesNav';

const IcecreamsPage = () => {
  return (
    <div className="icecreams-page max-w-6xl mx-auto p-4 sm:p-6">
      <CategoriesNav />

      <h3 className="text-2xl sm:text-xl font-bold mb-4 text-center sm:text-left">Ice Creams</h3>

      {/* Sort / Filter row */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 gap-3">
        <span className="text-gray-700 font-medium text-sm sm:text-base">Sort by: Recommended</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {icecreams.map((icecream) => (
          <div key={icecream.id} className="icecream-card border rounded-lg p-3 hover:shadow-lg transition flex flex-col w-full sm:w-auto max-w-xs">
            <img
              src={icecream.images[0]}
              alt={icecream.name}
              className="w-full h-40 sm:h-48 object-cover rounded-md mb-3"
            />
            <h2 className="text-base sm:text-lg font-semibold">{icecream.name}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{icecream.description}</p>
            <span className="text-amber-600 font-bold mt-auto">${icecream.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IcecreamsPage;

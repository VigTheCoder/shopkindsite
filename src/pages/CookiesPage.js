import React from 'react';
import { cookies } from '../data/cookies';

const CookiesPage = () => {
  return (
    <div className="cookies-page max-w-6xl mx-auto p-4 sm:p-6">
      <h3 className="text-2xl sm:text-xl font-bold mb-6 text-center sm:text-left">Cookies</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cookies.map((cookie) => (
          <div key={cookie.id} className="cookie-card border rounded-lg p-3 hover:shadow-lg transition flex flex-col">
            <img
              src={cookie.images[0]}
              alt={cookie.name}
              className="w-full h-40 sm:h-48 object-cover rounded-md mb-3"
            />
            <h2 className="text-base sm:text-lg font-semibold">{cookie.name}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{cookie.description}</p>
            <span className="text-amber-600 font-bold mt-auto">${cookie.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookiesPage;

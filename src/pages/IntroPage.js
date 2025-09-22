import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { FaCandyCane, FaCookie, FaCookieBite, FaIceCream } from 'react-icons/fa';

const categories = [
  { name: 'Chocolates', path: 'chocolates', icon: <FaCandyCane size={40} />, color: 'bg-yellow-200' },
  { name: 'Chips', path: 'chips', icon: <FaCookie size={40} />, color: 'bg-green-200' },
  { name: 'Cookies', path: 'cookies', icon: <FaCookieBite size={40} />, color: 'bg-pink-200' },
  { name: 'Icecreams', path: 'icecreams', icon: <FaIceCream size={40} />, color: 'bg-blue-200' },
];

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 p-6 sm:p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Welcome to ShopKind 🍫🍪🍦</h1>
        <p className="mb-6 text-base sm:text-lg text-gray-700">
          Choose a category to explore products and support charity!
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {categories.map(cat => (
            <div
              key={cat.path}
              className={`p-6 sm:p-10 rounded-lg cursor-pointer hover:scale-105 transition ${cat.color} flex flex-col items-center`}
              onClick={() => navigate(`/category/${cat.path}`)}
            >
              <div className="mb-3 sm:mb-4">{cat.icon}</div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 break-words text-center">
                {cat.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (pushed down) */}
      <footer className="mt-auto py-4 bg-gray-100 text-gray-600 text-sm text-center shadow-inner">
        © {new Date().getFullYear()} ShopKind. All rights reserved.
      </footer>
    </div>
  );
};

export default IntroPage;

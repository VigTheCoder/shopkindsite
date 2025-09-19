import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './header';
import Footer from './Footer/Footer';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-200">
      {/* Main content */}
      <main
        className={`flex-1 max-w-[1200px] w-full mx-auto p-5 transform transition-transform duration-500
          ${statusTabCart ? '-translate-x-56' : ''}`}
      >
        <Header />
        <Outlet /> {/* Nested routes render here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

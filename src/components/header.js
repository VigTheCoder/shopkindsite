import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector } from 'react-redux';
import { products } from '../products'; // import products array

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const carts = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenCartPage = () => {
    navigate('/cart'); // navigate to the full-page cart
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Find the first product that matches search
    const found = products.find((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (found) {
      navigate(`/${found.slug}`); // navigate to product detail
    } else {
      alert('Product not found!');
    }
    setSearchTerm('');
  };

  return (
    <header className="flex justify-between items-center mb-5 gap-4">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold">
        ShopKind
      </Link>

      {/* Search bar */}
<form
  onSubmit={(e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return; // do nothing if empty
    const found = products.find((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (found) {
      navigate(`/${found.slug}`);
    } else {
      alert('Product not found!');
    }
    setSearchTerm('');
  }}
  className="flex flex-1 max-w-xl bg-white border border-gray-300 rounded-full overflow-hidden"
>
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="flex-1 px-4 py-2 focus:outline-none"
  />
  <button
    type="submit"
    className="bg-amber-600 text-white px-4 py-2 hover:bg-amber-700"
  >
    Search
  </button>
</form>

      {/* Cart Icon */}
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer"
        onClick={handleOpenCartPage}
      >
        <img src={iconCart} alt="" className="w-6" />
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;

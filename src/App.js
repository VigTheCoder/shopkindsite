// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import IntroPage from './pages/IntroPage';
import Home from './pages/home';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router basename="/ShopKind">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/category/:category/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

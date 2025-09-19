import './App.css';
import { Routes, Route } from 'react-router-dom';

// Layout & Pages
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
      <Routes>
        {/* Main Layout Route wraps pages with header/footer */}
        <Route path='/' element={<Layout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Detail Page (dynamic slug) */}
          <Route path='/:slug' element={<Detail />} />

          {/* Cart Page */}
          <Route path='cart' element={<CartPage />} />

          {/* Payment Page */}
          <Route path='payment' element={<PaymentPage />} />
        </Route>
      </Routes>
  );
}

export default App;

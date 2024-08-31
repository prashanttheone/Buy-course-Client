import './App.css';
import Product from './components/products/Product';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
// import PaymentPage from './components/paymentPage/PaymentPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Product route */}
        <Route path="/course" element={<Product />} />

        {/* Checkout route */}
        <Route path="/course/checkout" element={<Checkout />} />
      </Routes>
      
      {/* Footer is outside of Routes so it appears on all pages */}
      <Footer />
      {/* <PaymentPage /> */}
    </>
  );
}

export default App;

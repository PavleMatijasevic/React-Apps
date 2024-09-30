import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Header from './components/Header'; 
import { Product } from './types/Product';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Dodajem Header komponentu i prosledjujem broj proizvoda u korpi */}
        <Header cartItemCount={cart.length} />

        {/* Glavni sadržaj */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

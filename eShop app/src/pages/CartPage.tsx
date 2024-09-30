import React from 'react';
import Cart from '../components/Cart';
import { Product } from '../types/Product';

interface CartPageProps {
  cart: Product[];
  removeFromCart: (id: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart }) => {
  return (
    <div className="p-6">
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;

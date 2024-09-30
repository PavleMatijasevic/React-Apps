import React from 'react';
import { Product } from '../types/Product';

interface CartProps {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price per item: ${item.price}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4 font-bold text-xl">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

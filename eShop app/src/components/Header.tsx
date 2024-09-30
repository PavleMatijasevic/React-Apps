import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ili naziv shopa */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-3xl font-bold">Pavle Online Shop</Link>
        </div>

        {/* Navigacija */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300 transition duration-200">About</Link>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-gray-300 transition duration-200">Products</Link>
            </li>
          </ul>
          
          {/* Korpa sa brojem stavki */}
          <div>
            <Link to="/cart" className="text-white hover:text-gray-300 transition duration-200 flex items-center">
              <span>Cart</span>
              <span className="ml-2 bg-red-600 text-white px-3 py-1 rounded-full">
                {cartItemCount}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p>Price: ${product.price}</p>
      <div className="flex items-center space-x-2">
        <label>Qty:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-1 w-16"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 mt-4 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;

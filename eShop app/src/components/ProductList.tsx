import React from 'react';
import { Product } from '../types/Product';

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
          {/* Postavljam fiksnu velicinu slike */}
          <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types/Product';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Shoes',
      price: 59.99,
      image: '/product1.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Shirt ',
      price: 29.99,
      image: '/product2.jpg',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bag',
      price: 39.99,
      image: '/product3.jpg',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Ball',
      price: 9.99,
      image: '/product4.jpg',
      quantity: 1,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Products;

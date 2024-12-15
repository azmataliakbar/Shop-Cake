"use client"
import { useState } from 'react';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, name: 'Chocolate Cake 1', price: 2500, image: '/ck1.png'},
  { id: 2, name: 'Chocolate Cake 2', price: 2200, image: '/ck2.png'},
  { id: 3, name: 'Chocolate Cake 3', price: 2000, image: '/ck3.png'},
  { id: 4, name: 'Chocolate Cake 4', price: 3000, image: '/ck4.png'},
  { id: 5, name: 'Multi Cream Cake 5', price: 2500, image: '/ck5.png'},
  { id: 6, name: 'Strawberry Cake 6', price: 3000, image: '/ck6.png'},
  { id: 7, name: 'Vanilla Cake 7', price: 2500, image: '/ck7.png'},
  { id: 8, name: 'Strawberry Cake 8', price: 2500, image: '/ck8.png'},
];

export default function Home() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="shop1  text-5xl text-red-500 font-bold text-center mb-8">Shop Cakes</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-amber-600 product">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="cart1 font-bold  text-2xl text-green-500 mb-4">Cart Summary</h2>
        <p className='cart2  text-blue-500 text-xl'>
          <strong>Total Items:</strong> {totalItems}
        </p>
        <p className='cart3  text-red-500 text-xl'>
          <strong>Total Price:</strong> Rs. {totalPrice}
        </p>
      </div>
      <div>
        <h4 className='author  text-gray-400 text-center'>Auathor; Azmat Ali</h4>
      </div>
    </div>
  );
}

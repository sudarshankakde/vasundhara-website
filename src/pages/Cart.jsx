import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, Search } from 'lucide-react';
import placeholder from '../assets/placeholder.svg';

const initialCartItems = [
  { id: 1, name: 'Traditional A2 Cow Ghee', price: 29.99, quantity: 2, image: placeholder },
  { id: 2, name: 'Organic Honey', price: 15.99, quantity: 1, image: placeholder },
];

const orderHistory = [
  { id: 12345, date: 'May 15, 2023', total: 59.98, status: 'Delivered' },
  { id: 12346, date: 'June 2, 2023', total: 45.99, status: 'Processing' },
  { id: 12347, date: 'June 10, 2023', total: 32.50, status: 'Shipped' },
];

export default function Cart() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredOrderHistory = orderHistory.filter(order => 
    order.id.toString().includes(searchTerm) ||
    order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#355F2E] mb-8">Your Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.length === 0 ? (
              <p className="text-[#355F2E] bg-white p-4 rounded-lg shadow-md">Your cart is empty.</p>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-[#A8CD89] py-4 last:border-b-0">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-[#355F2E]">{item.name}</h3>
                <p className="text-[#355F2E]">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => updateQuantity(item.id, -1)} 
                  className="bg-[#F4E0AF] text-[#355F2E] p-2 rounded-full hover:bg-[#A8CD89] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="mx-2 text-[#355F2E]">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)} 
                  className="bg-[#F4E0AF] text-[#355F2E] p-2 rounded-full hover:bg-[#A8CD89] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => removeItem(item.id)} 
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="lg:w-1/3">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-[#355F2E] mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-[#355F2E]">Subtotal</span>
          <span className="text-[#355F2E]">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-[#355F2E]">Shipping</span>
          <span className="text-[#355F2E]">$5.00</span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="text-[#355F2E]">Total</span>
          <span className="text-[#355F2E]">${(total + 5).toFixed(2)}</span>
        </div>
        <button className="w-full bg-[#355F2E] text-white py-2 px-4 rounded-full mt-6 hover:bg-[#A8CD89] transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>

  {/* Order History Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-bold text-[#355F2E] mb-4">Order History</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full p-2 pl-10 border border-[#A8CD89] rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#355F2E] opacity-50" />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#A8CD89]">
            <th className="text-left py-2 text-[#355F2E]">Order ID</th>
            <th className="text-left py-2 text-[#355F2E]">Date</th>
            <th className="text-left py-2 text-[#355F2E]">Total</th>
            <th className="text-left py-2 text-[#355F2E]">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrderHistory.map((order) => (
            <tr key={order.id} className="border-b border-[#A8CD89] last:border-b-0">
              <td className="py-2 text-[#355F2E]">#{order.id}</td>
              <td className="py-2 text-[#355F2E]">{order.date}</td>
              <td className="py-2 text-[#355F2E]">${order.total.toFixed(2)}</td>
              <td className="py-2 text-[#355F2E]">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
);
}


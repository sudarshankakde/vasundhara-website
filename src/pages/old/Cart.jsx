import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const initialCartItems = [
  { id: 1, name: 'Pure A2 Ghee', price: 599, quantity: 1, image: '/placeholder.svg' },
  { id: 2, name: 'Raw Honey', price: 399, quantity: 2, image: '/placeholder.svg' },
];

function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = id => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-[#ffe4e1] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-4"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </Button>
                </div>
              ))}
            </div>
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>₹50</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{total + 50}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-[#e9967a] hover:bg-[#e9967a]/90">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;

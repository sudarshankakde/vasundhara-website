import React, { useState } from 'react';
import { Button } from '@/components/ui/button';  // Assuming Button is a custom component
import { Input } from '@/components/ui/input';    // Assuming Input is a custom component

export default function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('1234567890');
  const [activeTab, setActiveTab] = useState('profile');  // Track the active tab

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile update', { name, email, phone });
  };

  const orders = [
    { id: '1', date: '2023-05-01', total: 1299, status: 'Delivered' },
    { id: '2', date: '2023-05-15', total: 899, status: 'Processing' },
    { id: '3', date: '2023-06-01', total: 1599, status: 'Shipped' },
  ];

  return (
    <div className="bg-[#ffe4e1] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Account</h1>
        <div className="max-w-3xl mx-auto">
          <div className="grid w-full grid-cols-2">
            <button
              className={`py-2 px-4 text-center ${activeTab === 'profile' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              className={`py-2 px-4 text-center ${activeTab === 'orders' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              Order History
            </button>
          </div>
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-8 mt-4">
              <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="bg-[#e9967a] hover:bg-[#e9967a]/90">
                  Update Profile
                </Button>
              </form>
            </div>
          )}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow-md p-8 mt-4">
              <h2 className="text-2xl font-semibold mb-6">Order History</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Order ID</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Total</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="px-4 py-2">{order.id}</td>
                        <td className="px-4 py-2">{order.date}</td>
                        <td className="px-4 py-2">₹{order.total}</td>
                        <td className="px-4 py-2">{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

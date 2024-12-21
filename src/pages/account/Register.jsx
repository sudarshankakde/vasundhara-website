import React, { useState } from 'react';
import { Button } from '@/components/ui/button';  // Assuming Button is a custom component
import { Input } from '@/components/ui/input';    // Assuming Input is a custom component
import { Link } from 'react-router-dom'; // Use react-router-dom's Link for navigation

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt', { name, email, password });
  };

  return (
    <div className="bg-[#ffe4e1] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-[#e9967a] hover:bg-[#e9967a]/90">
              Register
            </Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account? 
            <Link to="/account/login" className="text-[#e9967a] hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

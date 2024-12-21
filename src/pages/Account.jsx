import React, { useState } from 'react';
import { User, Package, MapPin, LogOut, Search, Pencil, Plus, Upload } from 'lucide-react';
import placeholder from '../assets/placeholder.svg';

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');
  const [searchTerm, setSearchTerm] = useState('');
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', address: '123 Main St, Anytown, ST 12345' },
    { id: 2, type: 'Work', address: '456 Office Blvd, Worktown, ST 67890' },
  ]);
  const [newAddress, setNewAddress] = useState({ type: '', address: '' });
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [profileImage, setProfileImage] = useState(placeholder);

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress.type && newAddress.address) {
      setAddresses([...addresses, { id: Date.now(), ...newAddress }]);
      setNewAddress({ type: '', address: '' });
      setIsAddingAddress(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#355F2E] mb-6 flex items-center">
              <User className="w-8 h-8 mr-2 text-[#A8CD89]" />
              Your Profile
            </h2>
            <div className="flex items-center mb-6">
              <div className="relative">
                <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mr-6 object-cover" />
                <label htmlFor="profile-image-upload" className="absolute bottom-0 right-0 bg-[#355F2E] text-white p-2 rounded-full cursor-pointer">
                  <Upload className="w-4 h-4" />
                </label>
                <input
                  type="file"
                  id="profile-image-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#355F2E]">John Doe</h3>
                <p className="text-[#355F2E] opacity-75">Member since 2023</p>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#355F2E] mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-[#A8CD89] rounded-md" defaultValue="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#355F2E] mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-[#A8CD89] rounded-md" defaultValue="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#355F2E] mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full p-2 border border-[#A8CD89] rounded-md" defaultValue="+1 (555) 123-4567" />
              </div>
              <button className="bg-[#355F2E] text-white py-2 px-6 rounded-full hover:bg-[#A8CD89] transition-colors">
                Update Profile
              </button>
            </form>
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#355F2E] mb-6 flex items-center">
              <Package className="w-8 h-8 mr-2 text-[#A8CD89]" />
              Your Orders
            </h2>
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
            {['Order #12345', 'Order #12346'].filter(order => order.toLowerCase().includes(searchTerm.toLowerCase())).map((order, index) => (
              <div key={index} className="bg-[#F4E0AF] p-4 rounded-lg mb-4 transition-all hover:shadow-md">
                <p className="font-bold text-[#355F2E]">{order}</p>
                <p className="text-[#355F2E] opacity-75">Date: {index === 0 ? 'May 15, 2023' : 'June 2, 2023'}</p>
                <p className="text-[#355F2E]">Total: ${index === 0 ? '59.98' : '45.99'}</p>
                <p className="text-[#355F2E]">Status: {index === 0 ? 'Delivered' : 'Processing'}</p>
              </div>
            ))}
          </div>
        );
      case 'addresses':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#355F2E] mb-6 flex items-center">
              <MapPin className="w-8 h-8 mr-2 text-[#A8CD89]" />
              Your Addresses
            </h2>
            <div className="space-y-4">
              {addresses.map((address) => (
                <div key={address.id} className="bg-[#F4E0AF] p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#355F2E]">{address.type}</h3>
                      <p className="text-[#355F2E]">{address.address}</p>
                    </div>
                    <button className="text-[#355F2E] hover:text-[#A8CD89]">
                      <Pencil className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              {isAddingAddress ? (
                <form onSubmit={handleAddAddress} className="bg-[#F4E0AF] p-4 rounded-lg">
                  <div className="mb-2">
                    <label htmlFor="address-type" className="block text-[#355F2E] mb-1">Address Type</label>
                    <input
                      type="text"
                      id="address-type"
                      className="w-full p-2 border border-[#A8CD89] rounded-md"
                      value={newAddress.type}
                      onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="block text-[#355F2E] mb-1">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="w-full p-2 border border-[#A8CD89] rounded-md"
                      value={newAddress.address}
                      onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(false)}
                      className="bg-gray-300 text-[#355F2E] py-2 px-4 rounded-full hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#355F2E] text-white py-2 px-4 rounded-full hover:bg-[#A8CD89] transition-colors"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setIsAddingAddress(true)}
                  className="w-full bg-[#355F2E] text-white py-2 px-6 rounded-full hover:bg-[#A8CD89] transition-colors flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add New Address
                </button>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#355F2E] mb-8 text-center">My Account</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <nav className="bg-white p-4 rounded-lg shadow-lg space-y-2">
              {[
                { id: 'profile', icon: User, label: 'Profile' },
                { id: 'orders', icon: Package, label: 'Orders' },
                { id: 'addresses', icon: MapPin, label: 'Addresses' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-2 rounded-full ${
                    activeTab === item.id ? 'bg-[#355F2E] text-white' : 'text-[#355F2E] hover:bg-[#A8CD89] hover:text-white'
                  } transition-colors`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </button>
              ))}
              <button
                className="flex items-center w-full p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </nav>
          </div>
          <div className="md:w-3/4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

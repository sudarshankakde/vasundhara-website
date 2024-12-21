import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for routing in React
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming Button is a custom component

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="bg-[#e9967a] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">Vasundhara</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            <div className="relative group">
              <button className="text-white hover:text-gray-200 flex items-center">
                Shop
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Products</Link>
                  <Link to="/category/ghee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ghee</Link>
                  <Link to="/category/honey" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Honey</Link>
                  <Link to="/category/oil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stone Pressed Oils</Link>
                </div>
              </div>
            </div>
            <Link to="/our-story" className="text-white hover:text-gray-200">Our Story</Link>
            <Link to="/contact" className="text-white hover:text-gray-200">Contact Us</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="link" className='' size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5  text-white " />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-white" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5 text-white" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-4">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full p-2 rounded-md text-black"
            />
          </div>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#e9967a] px-4 py-2">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-white hover:text-gray-200 py-2">Home</Link>
            <div className="relative">
              <button
                className="text-white hover:text-gray-200 py-2 flex items-center justify-between w-full"
                onClick={() => setIsShopOpen(!isShopOpen)}
              >
                Shop
                <ChevronDown className="h-4 w-4" />
              </button>
              {isShopOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/products" className="block text-white hover:text-gray-200 py-1">All Products</Link>
                  <Link to="/category/ghee" className="block text-white hover:text-gray-200 py-1">Ghee</Link>
                  <Link to="/category/honey" className="block text-white hover:text-gray-200 py-1">Honey</Link>
                  <Link to="/category/oils" className="block text-white hover:text-gray-200 py-1">Stone Pressed Oils</Link>
                </div>
              )}
            </div>
            <Link to="/our-story" className="text-white hover:text-gray-200 py-2">Our Story</Link>
            {/* <Link to="/community" className="text-white hover:text-gray-200 py-2">Community</Link> */}
            <Link to="/contact" className="text-white hover:text-gray-200 py-2">Contact Us</Link>
            {/* <Link to="/account/login" className="text-white hover:text-gray-200 py-2">Login / Register</Link> */}
          </nav>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { Filter, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.svg';

const products = [
  { id: 1, name: 'Traditional Ghee', price: 19.99, category: 'Ghee', image: placeholder },
  { id: 2, name: 'Herbal Ghee', price: 24.99, category: 'Ghee', image: placeholder },
  { id: 3, name: 'A2 Cow Ghee', price: 29.99, category: 'Ghee', image: placeholder },
  { id: 4, name: 'Organic Honey', price: 15.99, category: 'Honey', image: placeholder },
  { id: 5, name: 'Coconut Oil', price: 12.99, category: 'Oil', image: placeholder },
  { id: 6, name: 'Ayurvedic Ghee', price: 34.99, category: 'Ghee', image: placeholder },
];

export default function Shop() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('name');

  const filteredProducts = products
    .filter(product => filter === 'All' || product.category === filter)
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#F4E0AF] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#355F2E] mb-6">
            Our Products
          </h1>
          <p className="text-xl mb-8 text-[#355F2E] max-w-2xl mx-auto">
            Discover our range of pure, traditional, and natural products
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-[#355F2E] mr-2" />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white border border-[#A8CD89] text-[#355F2E] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#355F2E]"
              >
                <option value="All">All Products</option>
                <option value="Ghee">Ghee</option>
                <option value="Honey">Honey</option>
                <option value="Oil">Oil</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-[#355F2E] mr-2">Sort by:</label>
              <select 
                id="sort"
                value={sort} 
                onChange={(e) => setSort(e.target.value)}
                className="bg-white border border-[#A8CD89] text-[#355F2E] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#355F2E]"
              >
                <option value="name">Name</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-[#A8CD89] rounded-lg overflow-hidden transition-transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#355F2E] mb-2">{product.name}</h3>
                  <p className="text-[#355F2E] mb-4">${product.price.toFixed(2)}</p>
                  <Link to={`/product/${product.id}`} className="block w-full bg-[#355F2E] text-white py-2 px-4 rounded-md hover:bg-[#A8CD89] transition-colors text-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


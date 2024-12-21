import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import placeholder from '../assets/placeholder.svg';

const categoryProducts = {
  'ghee': [
    { id: 1, name: 'Traditional Ghee', price: 19.99, image: placeholder },
    { id: 2, name: 'Herbal Ghee', price: 24.99, image: placeholder },
    { id: 3, name: 'A2 Cow Ghee', price: 29.99, image: placeholder },
    { id: 6, name: 'Ayurvedic Ghee', price: 34.99, image: placeholder },
  ],
  'honey': [
    { id: 4, name: 'Organic Honey', price: 15.99, image: placeholder },
    { id: 7, name: 'Raw Forest Honey', price: 18.99, image: placeholder },
    { id: 8, name: 'Manuka Honey', price: 39.99, image: placeholder },
  ],
  'oil': [
    { id: 5, name: 'Coconut Oil', price: 12.99, image: placeholder },
    { id: 9, name: 'Olive Oil', price: 14.99, image: placeholder },
    { id: 10, name: 'Sesame Oil', price: 11.99, image: placeholder },
  ],
};

export default function ProductCategory() {
  const { category } = useParams();
  const products = categoryProducts[category] || [];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-[#F4E0AF] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#355F2E] mb-6 capitalize">
            {category} Products
          </h1>
          <p className="text-xl mb-8 text-[#355F2E] max-w-2xl mx-auto">
            Explore our range of high-quality {category} products
          </p>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
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

      {/* Category Navigation */}
      <section className="bg-[#F4E0AF] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#355F2E] mb-6 text-center">Explore Other Categories</h2>
          <div className="flex justify-center space-x-4">
            {Object.keys(categoryProducts).map(cat => (
              <Link
                key={cat}
                to={`/category/${cat}`}
                className={`px-6 py-3 rounded-full ${
                  cat === category ? 'bg-[#355F2E] text-white' : 'bg-white text-[#355F2E]'
                } hover:bg-[#A8CD89] hover:text-white transition-colors`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


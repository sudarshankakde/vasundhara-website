import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// This would typically come from a database or API
const initialProducts = [
  { id: 1, name: 'Pure Honey', price: 399, image: '/placeholder.svg' },
  { id: 2, name: 'Raw Honey', price: 449, image: '/placeholder.svg' },
  { id: 3, name: 'Manuka Honey', price: 699, image: '/placeholder.svg' },
  { id: 4, name: 'Acacia Honey', price: 549, image: '/placeholder.svg' },
];

export default function CategoryPage({ match }) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(true);
  const category = match.params.category; // Using react-router's match to get category from URL

  useEffect(() => {
    // Simulate API call to fetch products
    const fetchProducts = async () => {
      // In a real application, you would fetch products based on the category
      // For now, we'll just use our initial products and add a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(initialProducts);
      setIsLoading(false);
    };

    fetchProducts();
  }, [category]);

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="bg-[#ffe4e1] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 capitalize">{category} Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">₹{product.price}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/products/${product.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Button className="bg-[#e9967a] hover:bg-[#e9967a]/90">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

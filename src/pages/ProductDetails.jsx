import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.svg';

const product = {
  id: 1,
  name: 'Traditional A2 Cow Ghee',
  price: 29.99,
  description: `Our premium Traditional A2 Cow Ghee is made using the ancient Bilona method. Rich in flavor and packed with nutrients, it's perfect for cooking, spreading, or as a healthy addition to your daily diet.`,
  image: placeholder,
  rating: 4.8,
  reviews: [
    { id: 1, user: 'John D.', rating: 5, comment: 'Excellent quality ghee! The taste is rich and authentic.' },
    { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great product, but the packaging could be improved.' },
    { id: 3, user: 'Rahul P.', rating: 5, comment: 'Reminds me of homemade ghee. Will definitely buy again!' },
  ],
  features: [
    'Made from A2 cow milk',
    'Traditional Bilona process',
    'Rich in vitamins A, D, E, and K',
    'No preservatives or additives',
  ],
};

const relatedProducts = [
  { id: 2, name: 'Herbal Ghee', price: 24.99, image: placeholder },
  { id: 3, name: 'Organic Honey', price: 15.99, image: placeholder },
  { id: 4, name: 'Coconut Oil', price: 12.99, image: placeholder },
];

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full bg-white">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Product Image */}
              <div className="md:w-1/2">
                <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
              </div>
              {/* Product Details */}
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold text-[#355F2E] mb-4">{product.name}</h1>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-[#355F2E]">{product.rating} ({product.reviews.length} reviews)</span>
                </div>
                <p className="text-2xl font-bold text-[#355F2E] mb-6">${product.price.toFixed(2)}</p>
                <p className="text-[#355F2E] mb-6">{product.description}</p>
                <div className="mb-6">
                  <h3 className="font-bold text-[#355F2E] mb-2">Key Features:</h3>
                  <ul className="list-none">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-[#355F2E] mb-2">
                        <Check className="w-5 h-5 text-[#A8CD89] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center mb-6 border w-max rounded-md border-[#F4E0AF] bg-gray-100">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-[#F4E0AF] text-[#355F2E] py-2 px-4 rounded-l-md hover:bg-[#A8CD89] transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center outline-none  bg-transparent " 
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-[#F4E0AF] text-[#355F2E] py-2 px-4 rounded-r-md hover:bg-[#A8CD89] transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <button className="w-full bg-[#355F2E] text-white py-3 px-6 rounded-md hover:bg-[#A8CD89] transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#F4E0AF] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">Customer Reviews</h2>
          <div className="max-w-4xl mx-auto">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="ml-2 font-bold text-[#355F2E]">{review.user}</span>
                </div>
                <p className="text-[#355F2E]">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(product => (
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


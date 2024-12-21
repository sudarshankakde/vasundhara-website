import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, X, Leaf, Heart, Shield, Sun } from 'lucide-react';
import placeholder from '../assets/placeholder.svg';
import ghee from '../assets/ghee.png';
import ghee3 from '../assets/ghee3.png';
import organic from '../assets/organic.webp';
import ghee2 from '../assets/ghee2.png';
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#F4E0AF] pt-20 pb-32">
        <div className="absolute top-10 left-10">
          <img 
            src={placeholder} 
            alt="Decorative leaf" 
            className="w-24 h-24 opacity-20"
          />
        </div>
        <div className="absolute bottom-10 right-10">
          <img 
            src={placeholder} 
            alt="Decorative spice" 
            className="w-24 h-24 opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#355F2E] mb-6 max-w-3xl mx-auto">
            All the goodness of traditional ghee, none of the processing you don't want
          </h1>
          <Link
            to="/shop"
            className="inline-block bg-[#355F2E] text-white px-8 py-3 rounded-full text-lg hover:bg-[#A8CD89] transition-colors"
          >
            Discover Our Products
          </Link>
          <div className="mt-5 relative">
            <img
              src={ghee}
              alt="Traditional Ghee Making Process"
              className="w-full max-w-2xl mx-auto rounded-lg  drop-shadow-[0px_0px_60px_white]   transition-grayscale duration-300 ease-in-out delay-100" 
            />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="text-[#355F2E] font-medium">100% Pure & Natural</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-[#355F2E] mb-8">Trusted by leading wellness brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Organic Certified', 'FSSAI Approved', 'ISO Certified', 'Export Quality'].map((partner) => (
              <div key={partner} className="grayscale opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={placeholder}
                  alt={partner}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="relative bg-[#A8CD89] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#355F2E] mb-4">
            Living life in balance calls for pure & natural ghee
          </h2>
          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[#F4E0AF] rounded-full transform -rotate-6"></div>
            <div className="relative grid grid-cols-2 gap-8 md:gap-12">
              <div className="col-span-2 md:col-span-1">
                <img
                  src={ghee3}
                  alt="Premium Ghee Product"
                  className="w-full max-w-xs mx-auto"
                />
                <div className="absolute -left-8 top-3/4 transform -translate-y-1/2 md:block hidden">
                  <img 
                    src={organic} 
                    alt="Decorative element" 
                    className="w-full h-16 opacity-90"
                  />
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-6">
                {[
                  { icon: Leaf, text: 'Made from A2 Cow Milk' },
                  { icon: Heart, text: 'Rich in Omega-3 & Vitamins' },
                  { icon: Shield, text: 'No Preservatives Added' },
                  { icon: Sun, text: 'Traditional Bilona Process' }
                ].map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <div className="bg-[#355F2E] rounded-full p-2">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#355F2E] font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">
            Why choose our traditional ghee?
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 mb-6 text-center font-medium text-[#355F2E] bg-gray-300/75 rounded-lg p-4 ">
              <div>Features</div>
              <div>Our Ghee</div>
              <div>Regular Ghee</div>
            </div>
            {[
              { feature: 'Traditional Bilona Process', hasFeature: true },
              { feature: 'Hand-churned from A2 Milk', hasFeature: true },
              { feature: 'Chemical-free Processing', hasFeature: true },
              { feature: 'Rich in Vitamins A, D, E & K', hasFeature: true },
              { feature: 'Natural Aroma & Taste', hasFeature: true }
            ].map((item, index) => (
              <div
                key={item.feature}
                className={`flex items-center gap-4 p-4 rounded-lg mb-4 ${
                  index % 2 === 0 ? 'bg-[#F4E0AF]' : 'bg-[#F9C0AB]'
                }`}
              >
                <div className="w-1/3 font-medium text-[#355F2E]">{item.feature}</div>
                <div className="w-1/3 text-center">
                  <Check className="w-5 h-5 text-[#355F2E] mx-auto" />
                </div>
                <div className="w-1/3 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-[#F4E0AF] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Traditional Ghee', size: '500ml' , Image: ghee2 },
              { name: 'Premium Ghee', size: '1L', Image: ghee },
              { name: 'Herbal Ghee', size: '250ml', Image: ghee3 }
            ].map((product) => (
              <div key={product.name} className="w-64 group relative">
                <img
                  src={product.Image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105 bg-gray-200/50 p-4"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="font-medium text-[#355F2E]">{product.name}</h3>
                  <p className="text-sm text-[#355F2E]/70">{product.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#A8CD89] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">
            What our customers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Priya S.',
                role: 'Wellness Coach',
                comment: "The traditional bilona process really makes a difference. You can taste the purity in every spoonful!"
              },
              {
                name: 'Rahul M.',
                role: 'Home Chef',
                comment: "I've been using this ghee for all my traditional recipes. The aroma and taste are exactly like homemade ghee."
              },
              {
                name: 'Anjali P.',
                role: 'Ayurveda Practitioner',
                comment: "Finally found a ghee that maintains the traditional quality while meeting modern safety standards."
              }
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F4E0AF] rounded-full flex items-center justify-center">
                    <span className="text-[#355F2E] font-medium">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#355F2E]">{testimonial.name}</h3>
                    <p className="text-sm text-[#355F2E]/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#355F2E]">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#355F2E] mb-6">
                Our traditional ghee-making story
              </h2>
              <p className="text-[#355F2E] mb-6">
                We preserve the ancient bilona process, where cream is hand-churned into butter and then slowly clarified into pure ghee. This traditional method ensures all the natural goodness is retained.
              </p>
              <Link
                to="/our-story"
                className="inline-block bg-[#355F2E] text-white px-6 py-3 rounded-full hover:bg-[#A8CD89] transition-colors"
              >
                Discover Our Process
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src={placeholder}
                alt="Traditional Ghee Making Process"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6">
                <img 
                  src={placeholder} 
                  alt="Decorative element" 
                  className="w-24 h-24 opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F4E0AF] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-[#A8CD89] p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
              <img 
                src={placeholder} 
                alt="Decorative leaf" 
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#355F2E] mb-4">
              Join our pure food journey and GET 10% OFF
            </h2>
            <p className="text-[#355F2E] mb-6">
              Subscribe for traditional recipes and wellness tips
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#355F2E]"
              />
              <button
                type="submit"
                className="bg-[#355F2E] text-white px-6 py-2 rounded-full hover:bg-[#F9C0AB] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-medium text-[#355F2E] mb-8">
            Follow us for daily wellness inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'Traditional ghee making process',
              'Recipe tips with our ghee',
              'Customer testimonials'
            ].map((video, index) => (
              <div
                key={index}
                className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden relative group"
              >
                <img
                  src={placeholder}
                  alt={video}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm">{video}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Shield, Sun } from 'lucide-react';
import placeholder from '../assets/placeholder.svg';

export default function AboutUs() {
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
            Our Journey to Preserve Tradition
          </h1>
          <p className="text-xl mb-8 text-[#355F2E] max-w-2xl mx-auto">
            Discover how we're bringing the ancient wisdom of ghee-making to modern kitchens
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#355F2E] mb-6">
                Our Story
              </h2>
              <p className="text-[#355F2E] mb-6">
                Founded in 2015, HealthyNaturals began with a simple mission: to bring the purest, most authentic ghee to health-conscious consumers. Our journey started in the heart of rural India, where we rediscovered the traditional Bilona process of ghee-making.
              </p>
              <p className="text-[#355F2E] mb-6">
                Inspired by the rich heritage and nutritional wisdom of Ayurveda, we set out to create a product that not only tastes great but also provides numerous health benefits. Our commitment to quality and tradition has made us a trusted name in natural foods.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src={placeholder}
                alt="Founders in traditional setting"
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

      {/* Our Process Section */}
      <section className="bg-[#A8CD89] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">
            Our Traditional Process
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Sourcing A2 Milk", description: "We work with local farmers to source the purest A2 milk from indigenous cow breeds." },
              { title: "Cream Separation", description: "The milk is naturally separated to obtain rich, creamy malai (cream)." },
              { title: "Hand Churning", description: "Using the traditional Bilona method, the cream is hand-churned into butter." },
              { title: "Slow Clarification", description: "The butter is slowly heated to create golden, nutrient-rich ghee." }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#355F2E] mb-4">{step.title}</h3>
                <p className="text-[#355F2E]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#F4E0AF] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">
            Our Core Values
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Purity", description: "We ensure our ghee is free from additives and preservatives." },
              { icon: Heart, title: "Tradition", description: "We honor ancient wisdom in our production methods." },
              { icon: Shield, title: "Quality", description: "We maintain the highest standards in every jar of ghee." },
              { icon: Sun, title: "Sustainability", description: "We support eco-friendly practices in our entire process." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-[#355F2E] rounded-full p-4 inline-block mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#355F2E] mb-2">{value.title}</h3>
                <p className="text-[#355F2E]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">
            Meet Our Team
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Amit Patel", role: "Founder & CEO", bio: "With 20 years in the food industry, Amit is passionate about bringing traditional foods to modern kitchens." },
              { name: "Priya Sharma", role: "Head of Production", bio: "Priya ensures that every batch of our ghee meets our high standards of quality and purity." },
              { name: "Dr. Rajesh Kumar", role: "Ayurvedic Consultant", bio: "Dr. Kumar brings his extensive knowledge of Ayurveda to guide our product development." }
            ].map((member, index) => (
              <div key={index} className="bg-[#F4E0AF] p-6 rounded-lg shadow-lg text-center">
                <img
                  src={placeholder}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#355F2E] mb-2">{member.name}</h3>
                <p className="text-[#355F2E] font-medium mb-2">{member.role}</p>
                <p className="text-[#355F2E]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-[#A8CD89] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">
            Our Certifications
          </h2>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8">
            {['Organic Certified', 'FSSAI Approved', 'ISO 22000', 'Non-GMO Project Verified'].map((cert) => (
              <div key={cert} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src={placeholder}
                  alt={cert}
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-[#355F2E] font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F4E0AF] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#355F2E] mb-6">
              Experience the Purity of Traditional Ghee
            </h2>
            <p className="text-[#355F2E] mb-8">
              Join us in our mission to bring the goodness of authentic, traditionally-made ghee to your table.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#355F2E] text-white px-8 py-3 rounded-full text-lg hover:bg-[#A8CD89] transition-colors"
            >
              Shop Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


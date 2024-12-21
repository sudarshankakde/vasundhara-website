import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import placeholder from '../assets/placeholder.svg';

export default function ContactUs() {
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#355F2E] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 text-[#355F2E] max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for any questions about our products or just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email Us", info: "info@healthynaturals.com" },
              { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Visit Us", info: "123 Ghee Lane, Butter City, 12345" }
            ].map((item, index) => (
              <div key={index} className="bg-[#A8CD89] p-6 rounded-lg shadow-lg text-center">
                <div className="bg-[#355F2E] rounded-full p-4 inline-block mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#355F2E] mb-2">{item.title}</h3>
                <p className="text-[#355F2E]">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F4E0AF] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-[#355F2E] mb-6 text-center">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#355F2E] font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-[#A8CD89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#355F2E]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#355F2E] font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-[#A8CD89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#355F2E]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-[#355F2E] font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-[#A8CD89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#355F2E]" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#355F2E] text-white py-2 px-4 rounded-md hover:bg-[#A8CD89] transition-colors flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#355F2E] mb-12">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <img src={placeholder} alt="Map" className="w-full h-96 object-cover rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}


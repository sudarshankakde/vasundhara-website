import React, { useState } from 'react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="py-16 bg-[#ffe4e1]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-center mb-12">
            We'd love to hear about your experience with Vasundhara. Please get in touch with any comments, suggestions, or questions you might have.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold mb-2">Contact Number</h3>
              <p>+91-9711580581</p>
              <p>+91 120-4244430</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Location</h3>
              <p>Village - Gosapur janubi, Kithore,</p>
              <p>Mawana, Meerut, Uttar Pradesh-250406</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Email</h3>
              <p>care@vasundhara.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, Leaf, Droplet, Sun } from 'lucide-react';
import { Input } from '../ui/input';

export default function Home() {
  const collections = [
    {
      title: "Ghee",
      image: "/placeholder.svg",
      link: "/products/category/ghee"
    },
    {
      title: "Honey",
      image: "/placeholder.svg",
      link: "/products/category/honey"
    },
    {
      title: "Nut Butters",
      image: "/placeholder.svg",
      link: "/products/category/nut-butters"
    },
    {
      title: "Stone Pressed Oils",
      image: "/placeholder.svg",
      link: "/products/category/oils"
    },
    {
      title: "Gifting",
      image: "/placeholder.svg",
      link: "/products/category/gifting"
    },
    {
      title: "Super Saver Combos",
      image: "/placeholder.svg",
      link: "/products/category/combos"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[#ffd700]">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              THE GOLDEN GOODNESS
            </h1>
            <p className="text-xl mb-8">
              Sweet Love लेते जाइए
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-[#e9967a] hover:bg-[#e9967a]/90">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-[#e9967a] border-[#e9967a] hover:bg-[#e9967a] hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 bg-[#ffe4e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link 
                key={collection.title} 
                to={collection.link}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{collection.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#9ab573]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <Leaf className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Pure & Natural</h3>
              <p>100% pure and natural ingredients sourced directly from farmers</p>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Traditional Methods</h3>
              <p>Products made using traditional methods preserving the goodness</p>
            </div>
            <div className="flex flex-col items-center">
              <Sun className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">Quality Assured</h3>
              <p>Rigorous quality checks to ensure premium products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#ffe4e1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Subscribe to our Newsletter</h2>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-[#e9967a] hover:bg-[#e9967a]/90">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


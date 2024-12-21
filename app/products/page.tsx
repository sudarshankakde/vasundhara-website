import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const products = [
  { id: 1, name: 'Pure A2 Ghee', price: 599, image: '/placeholder.svg', category: 'ghee' },
  { id: 2, name: 'Raw Honey', price: 399, image: '/placeholder.svg', category: 'honey' },
  { id: 3, name: 'Almond Butter', price: 499, image: '/placeholder.svg', category: 'nut-butters' },
  { id: 4, name: 'Coconut Oil', price: 349, image: '/placeholder.svg', category: 'oils' },
  { id: 5, name: 'Mustard Oil', price: 299, image: '/placeholder.svg', category: 'oils' },
  { id: 6, name: 'Peanut Butter', price: 249, image: '/placeholder.svg', category: 'nut-butters' },
]

export default function ProductsPage() {
  return (
    <div className="bg-[#ffe4e1] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
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
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Link href={`/products/category/${product.category}`}>
                    <Button variant="secondary">View Category</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


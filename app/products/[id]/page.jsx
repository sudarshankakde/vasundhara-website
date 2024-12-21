import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useParams } from 'react-router-dom'

// This would typically come from a database or API
const products = [
  {
    id: '1',
    name: 'Pure A2 Ghee',
    price: 599,
    description: 'Our Pure A2 Ghee is made from the milk of indigenous cows, processed using traditional methods to retain all its natural goodness. Rich in flavor and packed with nutrients, it\'s perfect for cooking, spreading, or as a healthy addition to your diet.',
    image: '/placeholder.svg',
    features: [
      'Made from A2 milk of indigenous cows',
      'Processed using traditional bilona method',
      'Rich in CLA, Omega-3, and Vitamin A, D, E, and K',
      'No preservatives or additives',
      'Suitable for lactose-intolerant individuals'
    ]
  },
  // Add more products here...
]

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-[#ffe4e1] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold mb-4">₹{product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <Button className="w-full mb-4 bg-[#e9967a] hover:bg-[#e9967a]/90">Add to Cart</Button>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


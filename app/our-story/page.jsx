import Image from 'next/image'
import { Leaf, Droplet, Sun } from 'lucide-react'

export default function OurStory() {
  return (
    <div className="bg-[#ffe4e1] min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Story</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg"
                alt="Vasundhara Story"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Reviving Traditional Ways</h2>
              <p className="mb-4">
                At Vasundhara, we are on a mission to revive the traditional ways of old Bharat. Our journey began with a simple idea: to bring pure, natural, and traditionally-made products to modern households.
              </p>
              <p>
                We work directly with local farmers and artisans, ensuring that every product we offer is not only of the highest quality but also supports sustainable farming practices and rural livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="h-16 w-16 mx-auto mb-4 text-[#9ab573]" />
              <h3 className="text-xl font-semibold mb-2">Purity</h3>
              <p>We ensure that all our products are 100% pure and free from adulterants.</p>
            </div>
            <div className="text-center">
              <Droplet className="h-16 w-16 mx-auto mb-4 text-[#9ab573]" />
              <h3 className="text-xl font-semibold mb-2">Tradition</h3>
              <p>We use time-honored traditional methods to create our products.</p>
            </div>
            <div className="text-center">
              <Sun className="h-16 w-16 mx-auto mb-4 text-[#9ab573]" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>We are committed to sustainable practices that benefit both people and planet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us in Our Journey</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We invite you to be a part of our mission to bring the goodness of traditional products to modern homes. With every purchase, you're not just buying a product, you're supporting a vision of a healthier, more sustainable future.
          </p>
          <button className="bg-[#e9967a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e9967a]/90 transition-colors">
            Explore Our Products
          </button>
        </div>
      </section>
    </div>
  )
}


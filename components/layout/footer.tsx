import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-[#e9967a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p>"We are reviving the traditional ways of old Bharat"</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/shipping">Shipping Policy</Link>
              <Link href="/refund">Refund Policy</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <p>Village - Gosapur janubi, Kithore, Mawana, Meerut, Uttar Pradesh-250406</p>
            <p>+91-9711580581</p>
            <p>care@vasundhara.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h4>UNADULTRATED</h4>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>
            <h4>LOCALLY PRODUCED</h4>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h4>NO ARTIFICIAL FLAVOURS</h4>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <h4>POSITIVE IMPACT</h4>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p>&copy; {new Date().getFullYear()} Vasundhara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


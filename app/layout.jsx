import { Inter } from 'next/font/google'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vasundhara - Natural and Traditional Products',
  description: 'Discover pure and natural products made using traditional methods.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Router>
          <Header />
          <main>{children}</main>
          <Footer />
        </Router>
      </body>
    </html>
  )
}


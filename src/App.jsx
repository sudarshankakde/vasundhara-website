import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import ProductPage from './components/ProductPage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import Contact from './components/Contact';
import OurStory from './components/OurStory';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPage />} />
          <Route path="/account/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


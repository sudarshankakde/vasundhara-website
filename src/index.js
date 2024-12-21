import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import Home from './pages/Home';
// import CategoryPage from './pages/old/ProductCategory';
// import ProductDetails from './pages/ProductDetails';
// import ProductsPage from './pages/old/Products';
// import Contact from './pages/old/Contact';
// import OurStory from './pages/old/OurStory';
// import CartPage from './pages/old/Cart';
import Cart from 'pages/Cart';
import Shop from 'pages/Shop';
import ContactUs from 'pages/ContactUs';
import ProductDetails from 'pages/ProductDetails';
import CategoryPage from './pages/ProductCategory';
import Account from './pages/Account';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/account/Login';
import RegisterPage from './pages/account/Register';
import ProfilePage from './pages/account/Profile';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-story" element={<AboutUs />} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPage />} />
          <Route path="/account/profile" element={<ProfilePage />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
import React from 'react';
import { Header } from './header';  // Assuming Header is a separate component
import { Footer } from './footer';  // Assuming Footer is a separate component
export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

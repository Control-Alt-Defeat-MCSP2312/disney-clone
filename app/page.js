'use client'
import React from 'react';
import ProductDetails from './components/ProductDetails.jsx';
import Header from './components/Header.jsx';
import { ActiveProvider } from './context/context.jsx';

export default function Home() {
  return (
    <div className="antialiased">
      <Header />
      <ActiveProvider>
        <ProductDetails />
      </ActiveProvider>
    </div>
  );
}


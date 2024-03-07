'use client'
import React from 'react';
import ProductDetails from './components/ProductDetails.jsx';
import Header from './components/Header.jsx';
import { ReviewProvider } from './context/context';

export default function Home() {
  return (
    <ReviewProvider>
        <Header />
        <ProductDetails />
    </ReviewProvider>
  );
}


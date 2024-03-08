'use client'
import React from 'react';
import ProductDetails from './components/ProductDetails.jsx';
import AdvertisementBanner from './components/AdvertisementBanner.jsx';
import StickySidebar from './components/StickySidebar.jsx';
import Header from './components/Header.jsx';
import { ActiveProvider, ReviewProvider } from './context/context.jsx';

export default function Home() {
  return (
    <div className="flex flex-col h-screen antialiased">
      <Header />
      <div className="flex flex-1">
        <div className="flex flex-col flex-1">
          <PrimaryImage />
        </div>
        <ReviewProvider>
          <ActiveProvider>
            <ProductDetails />
          </ActiveProvider>
        </ReviewProvider>
        <StickySidebar />
      </div>
      <AdvertisementBanner />
      <Footer />
    </div>
  );
}
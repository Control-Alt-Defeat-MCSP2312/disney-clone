'use client'
import React from 'react';
import ProductDetails from './components/ProductDetails.jsx';
import AdvertisementBanner from './components/AdvertisementBanner.jsx';
import StickySidebar from './components/StickySidebar.jsx';
import Header from './components/Header.jsx';
import PrimaryImage from './components/PrimaryImage.jsx';
import Footer from './components/Footer.jsx';
import Shipping from './components/Shipping.jsx';

import MoreToExplore from "./components/CarouselComponents/MoreToExplore.jsx";
import YMAL from "./components/CarouselComponents/YMAL.jsx";
import ShopMore from "./components/ShopMore.jsx";
import { ActiveProvider, ReviewProvider, StickySidebarProvider } from './context/context.jsx';


export default function Home() {
  return (
      <div className="antialiased">
        <StickySidebarProvider>
      <Header />
      <div className="pdp-detail max-w-full m-0 p-0 relative ">
        <div className="product-detail-content-section relative flex flex-col">
          <div className="product-detail-media-section block mr-424px relative">
            <PrimaryImage />
            <ReviewProvider>
              <ActiveProvider>
                <ProductDetails />
              </ActiveProvider>
            </ReviewProvider>
            <YMAL />
          </div>
          <div className="sticky-side-rail-content block w-424px bg-sticky-gradient z-899 absolute top-0 bottom-0 right-0 m-0 shadow-none">
            <StickySidebar />
          </div>
        </div>
        <Shipping />
      </div>
      <MoreToExplore />
      <ShopMore />
      <AdvertisementBanner />
      <Footer />
       </StickySidebarProvider>
    </div>
    
   
    
    
  );
}


import ProductDetails from './components/ProductDetails.jsx';
import AdvertisementBanner from './components/AdvertisementBanner.jsx';
import StickySidebar from './components/StickySidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { ST } from 'next/dist/shared/lib/utils.js';

import { ActiveProvider } from './context/context.jsx';

export default function Home() {
  return (
    <div className="antialiased">
      <Header />
      <StickySidebar />
      <ActiveProvider>
        <ProductDetails />
      </ActiveProvider>
      <AdvertisementBanner />
      <Footer />
    </div>

  );
}


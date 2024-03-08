import ProductDetails from './components/ProductDetails.jsx';
import AdvertisementBanner from './components/AdvertisementBanner.jsx';
import StickySidebar from './components/StickySidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PrimaryImage from './components/PrimaryImage.jsx';
import YouMayLikeCarousel from './components/YouMayLikeCarousel.jsx';

import { ActiveProvider } from './context/context.jsx';

export default function Home() {
  return (
    <div className="flex flex-col h-screen antialiased">
      <ActiveProvider>
        <Header />
        <div className="flex flex-1">
          <div className="flex flex-col flex-1">
            <PrimaryImage />
            <ProductDetails />
            {/* <YouMayLikeCarousel/> */}
          </div>
          <StickySidebar />
        </div>
        <AdvertisementBanner />
        <Footer />
      </ActiveProvider>
    </div>
  );
}
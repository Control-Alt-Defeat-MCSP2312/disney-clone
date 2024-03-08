import ProductDetails from './components/ProductDetails.jsx';
import Header from './components/Header.jsx';
import { ActiveProvider, ReviewProvider } from './context/context.jsx';

export default function Home() {
  return (
    <div className="antialiased">
      <Header />
      <ReviewProvider>
        <ActiveProvider>
          <ProductDetails />
        </ActiveProvider>
      </ReviewProvider>
    </div>
  );
}


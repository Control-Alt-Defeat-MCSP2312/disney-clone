import ProductDetails from './components/ProductDetails.jsx';
import AdvertisementBanner from './components/AdvertisementBanner.jsx';
import StickySidebar from './components/StickySidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { ST } from 'next/dist/shared/lib/utils.js';

const AppContent = () => {
  const { state } = useAppContext();

  if (state.loading) {
    return <p>Loading...</p>;
  }
  console.log(state)
  return (
    <div>
      <h1 className='text-white'>Reviews</h1>
      <ul>
        {state.reviews.map((review) => {
          console.log(review.text)
          return (
            <li key={review.id}>{review.review_body}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header/>
      <StickySidebar/>
      <AdvertisementBanner/>
      <ProductDetails/>
      <Footer/>
    </div>
  );
}


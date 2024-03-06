'use client'
import ProductDetails from './components/ProductDetails.jsx';
import { AppProvider, useAppContext } from './context';

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
      <AppProvider>
        <AppContent />
      </AppProvider>
    </div>
  );
}


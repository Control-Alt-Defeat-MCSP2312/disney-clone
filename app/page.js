'use client'
import ProductDetails from './components/ProductDetails.jsx'
import { AppProvider, useAppContext } from './context';

const AppContent = () => {
  const { state } = useAppContext();

  if (state.loading) {
    return <p>Loading...</p>;
  }
  console.log(state)
  return (
    <ProductDetails />
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


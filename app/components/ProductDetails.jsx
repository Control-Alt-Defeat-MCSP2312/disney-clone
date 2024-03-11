'use client'
import { useContext } from 'react';
import AppContext from '../context/context.jsx';
import ProductDetailsText from './ProductDetailsText.jsx';
import ProductDetailsButtons from './ProductDetailsButtons.jsx';
import ShippingText from './ShippingText.jsx';
// import Reviews from './Reviews.jsx';

// Component that displays the Product Details Button bar and conditionally renders relevant information.
export default function ProductDetails() {
  const { isActive } = useContext(AppContext) // Active change to render text based on what button is pressed.

  return (
    <div className="product__details_background border-b-0 p-0 border-t-0 mt-0 w-full ">
      <div className="product__details_container border-b border-white mx-20 pt-50px pb-10 max-w-unset w-unset relative">
        <div className="product-details block mx-70px ">
          <div className="product-tabs flex justify-between max-w-full p-0 pb-4 border-b-4 border-slate-200 mb-10">
            <ProductDetailsButtons />
          </div>
          {/* Below div is unchanging parent div for conditional text */}
          <div className="products-tabs-details-container relative max-w-full pl-0 font-light">
            {isActive === "details" && <ProductDetailsText />}
            {isActive === "shipping" && <ShippingText />}
          </div>
        </div>
      </div>
    </div>
  )
}
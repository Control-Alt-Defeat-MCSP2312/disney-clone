'use client'
import { useContext } from 'react';
import AppContext from '../context/context.jsx';
import ProductDetailsText from './ProductDetailsText.jsx';
import ProductDetailsButtons from './ProductDetailsButtons.jsx';
import Shipping from './Shipping.jsx';
import Reviews from './Reviews.jsx';
import { ReviewProvider } from '../context/context.jsx';

export default function ProductDetails() {
	const { isActive } = useContext(AppContext)

	return (
		<div className="product__details_background border-b-0">
			<div className="product__details_container border-b border-white mx-10">
				<div className="product-details block m-0">
					<div className="product-tabs flex justify-between max-w-full p-0 pb-4 border-b-4 border-slate-200 mb-10">
						<ProductDetailsButtons />
					</div>
					{/* Below div is unchanging parent div for conditional text */}
					<div className="products-tabs-details-container relative max-w-full pl-0 font-light">
						{isActive === "details" && <ProductDetailsText />}
						{isActive === "shipping" && <Shipping />}
						<ReviewProvider>
							{isActive === "reviews" && <Reviews />}
						</ReviewProvider>
					</div>
				</div>
			</div>
		</div>
	)
}
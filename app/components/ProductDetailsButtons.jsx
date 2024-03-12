import { useContext } from 'react';
import AppContext from '../context/context';

export default function ProductDetailsButtons() {
	const { isActive, changeIsActive } = useContext(AppContext);

	// Handler to update active state with clicked button
	const handleActive = (e) => {
		changeIsActive(e.currentTarget.id);
	}

	return (
		<>
			<button id="details" onClick={handleActive} className={`product-tabs__tab block w-auto mt-0 no-underline cursor-pointer p-0 ${isActive === "details" ? " relative after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color" : ""}`}>
				<h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg text-zinc-grey-header font-sans leading-6">
					<div className="product-details-container flex">
						<span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Product Details</span>
					</div>
				</h2>
			</button>
			<button id="shipping" onClick={handleActive} className={`product-tabs__tab block w-auto mt-0 no-underline cursor-pointer p-0 ${isActive === "shipping" ? " relative after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color" : ""}`}>
				<h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg text-zinc-grey-header font-sans leading-6">
					<div className="product-details-container flex">
						<span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Shipping & Delivery</span>
					</div>
				</h2>
			</button>
			<button id="reviews" onClick={handleActive} className={`product-tabs__tab block w-auto mt-0 no-underline cursor-pointer p-0 ${isActive === "reviews" ? "relative after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color" : ""}`}>
				<h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg text-zinc-grey-header font-sans leading-6">
					<div className="product-details-container flex">
						<span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Reviews</span>
						<div className="ratings">
							<div className="BVInlineRatings-container text-xs">
								<div className="bv_main_container_row_flex flex flex-row justify-center cursor-default w-full">
									<div className="bv_stars_component_container font-times clip-text ml-10px text-star leading-star before:content-['\2605\2605\2605\2605\2605'] inline-block before:bg-custom-gradient before:tracking-3px before:bg-clip-text" style={{ "--percent": "calc(var(--rating) / 5* 100%)", "--rating": "4.5" }}></div>
									<div className="review_number text-base leading-review-number ml-1 font-normal text-start-color">(10)</div>
								</div>
							</div>
						</div>
					</div>
				</h2>
			</button>
		</>
	)
}
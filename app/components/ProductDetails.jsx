'use client'
import { useState } from 'react'
export default function ProductDetails() {
    const [isActive, setIsActive] = useState('1');
    const changeIsActive = (id) => {
        setIsActive(id);
    }

    return (
        <div className="product__details_background border-b-0">
            <div className="product__details_container border-b border-white mx-10">
                <div className="product-details block m-0">
                    <div className="product-tabs flex justify-between max-w-full p-0 pb-4 border-b-4 border-slate-200 mb-10">
                        {/* active class give position relative */}
                        <button id="details" className="product-tabs__tab_active relative block w-auto mt-0 no-underline cursor-pointer p-0 after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color">
                            <h2 className="product-tabs__header flex font-semibold flex-row justify-center items-start p-0 mb-0 text-lg text-zinc-grey font-sans leading-6">
                                <div className="product-details-container flex">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Product Details</span>
                                </div>
                            </h2>
                        </button>
                        <button id="shipping" className="product-tabs__tab_active block w-auto mt-0 no-underline cursor-pointer p-0">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold text-zinc-grey font-sans leading-6">
                                <div className="product-details-container flex">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Shipping & Delivery</span>
                                </div>
                            </h2>
                        </button>
                        <button id="reviews" className="product-tabs__tab_active block w-auto mt-0 no-underline cursor-pointer p-0">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold text-zinc-grey font-sans leading-6">
                                <div className="product-details-container flex">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Reviews</span>
                                    <div className="ratings">
                                        <div className="BVInlineRatings-container text-xs">
                                            <div className="bv_main_container_row_flex flex flex-row justify-center cursor-default w-full">
                                                <div className="bv_stars_component_container font-times clip-text ml-10px text-star leading-star before:content-['\2605\2605\2605\2605\2605'] inline-block before:bg-custom-gradient before:tracking-3px before:bg-clip-text" style={{ "--percent": "calc(var(--rating) / 5* 100%)", "--rating": "4.5" }}>
                                                    <div className="stars "></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
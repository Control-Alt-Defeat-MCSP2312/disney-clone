export default function ProductDetails() {

    return (
        <div className="product__details_background border-b-0">
            <div className="product__details_container border-b border-white mx-10">
                <div className="product-details display: block m-0">
                    <div className="product-tabs flex justify-between max-w-full p-0 pb-4 border-b-4 border-slate-200 my-10">
                        {/* active class give position relative */}
                        <button className="product-tabs__tab_active block relative w-auto mt-0 no-underline cursor-pointer p-0 after:content-none h-1 after:w-full after:absolute">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold text-zinc-grey font-sans leading-6">
                                <div className="product-details-container display: block">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Product Details</span>
                                </div>
                            </h2>
                        </button>
                        <button className="product-tabs__tab_active block position: relative w-auto mt-0 no-underline cursor-pointer p-0">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold text-zinc-grey font-sans leading-6">
                                <div className="product-details-container block">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Shipping & Delivery</span>
                                </div>
                            </h2>
                        </button>
                        <button className="product-tabs__tab_active display: block position: relative w-auto mt-0 no-underline cursor-pointer p-0">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold text-zinc-grey font-sans leading-6">
                                <div className="product-details-container block">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Reviews</span>
                                    <div className="ratings">
                                        <div className="BVInlineRatings-container text-xs">
                                            <div className="bv_main_container_row_flex flex flex-row justify-center cursor-default w-full">
                                                {/* Linear gradient complete */}
                                                <div className="bv_stars_component_container font-times bg-custom-gradient clip-text ml-10px text-star leading-star display: inline-block before:content-['\2605\2605\2605\2605\2605'] before:tracking-3px before:bg-clip-text" style={{ "--percent": "calc(var(--rating) / 5* 100%)", "--rating": "4.5" }}>

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
export default function ProductDetails() {
    return (
        <div className="product__details_background border-b-0">
            <div className="product__details_container border-b border-white mx-10">
                <div className="product-details display: block m-0">
                    <div className="product-tabs flex justify-between max-w-full pb-4 border-b-2 border-white my-10">
                        <button className="product-tabs__tab_active display: block position: relative w-auto mt-0 no-underline">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold font-sans leading-6">
                                <div className="product-details-container display: block">
                                    <span className="product__details text-base leading-6 tracking-wider uppercase font-bold">Product Details</span>
                                </div>
                            </h2>
                        </button>
                        <button className="product-tabs__tab_active display: block position: relative w-auto mt-0 no-underline">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold font-sans leading-6">
                                <div className="product-details-container display: block">
                                    <span className="product__details text-base leading-6 tracking-wider uppercase font-bold">Shipping & Delivery</span>
                                </div>
                            </h2>
                        </button>
                        <button className="product-tabs__tab_active display: block position: relative w-auto mt-0 no-underline">
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg font-semibold font-sans leading-6">
                                <div className="product-details-container display: block">
                                    <span className="product__details text-base leading-6 tracking-wider uppercase font-bold">Reviews</span>
                                </div>
                            </h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
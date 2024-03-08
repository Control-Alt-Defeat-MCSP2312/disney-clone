'use client'
import { useContext } from 'react';
import AppContext, { ReviewProvider } from '../context/context.jsx';
import Reviews from './Reviews';

export default function ProductDetails() {
    const { changeIsActive, isActive } = useContext(AppContext)
    const handleClick = (e) => {
        console.log(e.currentTarget.id);
        changeIsActive(e.currentTarget.id);
    }

    // const [productDetailText, setProductDetailText] = useState('')
    return (
        <div className="product__details_background border-b-0">
            <div className="product__details_container border-b border-white mx-10">
                <div className="product-details block m-0">
                    <div className="product-tabs flex justify-between max-w-full p-0 pb-4 border-b-4 border-slate-200 mb-10">
                        {/* active class give position relative */}
                        <button id="details" onClick={handleClick} className={`product-tabs__tab block w-auto mt-0 no-underline cursor-pointer p-0 ${isActive === "details" ? " relative after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color" : ""}`}>
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg text-zinc-grey-header font-sans leading-6">
                                <div className="product-details-container flex">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Product Details</span>
                                </div>
                            </h2>
                        </button>
                        <button id="shipping" onClick={handleClick} className={`product-tabs__tab block w-auto mt-0 no-underline cursor-pointer p-0 ${isActive === "shipping" ? " relative after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color" : ""}`}>
                            <h2 className="product-tabs__header flex flex-row justify-center items-start p-0 mb-0 text-lg text-zinc-grey-header font-sans leading-6">
                                <div className="product-details-container flex">
                                    <span className="product__details text-lg leading-6 tracking-wider uppercase font-bold">Shipping & Delivery</span>
                                </div>
                            </h2>
                        </button>
                        <button id="reviews" onClick={handleClick} className={`product-tabs__tab block w-auto mt-0 no-underline cursor-pointer p-0 ${isActive === "reviews" ? "relative after:content-[''] after:h-4px after:w-full after:absolute after:bottom-19px after:left-0 after:bg-start-color" : ""}`}>
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
                    </div>
                    <div className="products-tabs-details-container relative max-w-full pl-0 font-light">
                        <div className="read-more-show relative">
                            <div className={`wrapper-collapsed max-h-300px mb-15px overflow-hidden tracking-tight font-sans font-light text-lg text-zinc-grey leading-6 text-left ${isActive === "details" ? "after:absolute after:content-[''] after:w-full after:h-5 after:bg-white" : ""}`}>
                                <p className="text-header visible text-xl leading-7 w-auto mb-0 pb-10px"></p>
                                <p aria-hidden="false" className="visible mb-4">
                                    Relive the adventure of <em aria-hidden="false" className="visible">Star Wars: The Force Awakens </em>
                                    with some of your favorite heroes (and antihero) featured on this simulated leather backpack by Loungefly.
                                    Dramatic screen art on the front shows three different scenes inspired by the film: Poe Dameron on&nbsp;Ajan Kloss,
                                    Finn battling Kylo Ren on the Starkiller base, and Rey Skywalker with BB-8 on Jakku. Part of the Disney100 Decades:
                                    The 2010s Collection, this stylish carryall celebrates the film with style and substance thanks to a double zip main compartment,
                                    two front zip pockets, side slip pockets and interior lining featuring a repeat of the colorful screen art.&nbsp;&nbsp;
                                </p>
                                <p aria-hidden="false" className="separator visible mb-4 "></p>
                                <label aria-hidden="false" className="prod-description-label visible font-500 mb-2 inline-block">Magic in the details</label>
                                <p aria-hidden="false" className="prod-content visible mb-0 "></p>
                                <ul aria-hidden="false" className="visible w-588px mb-4 list-disc list-inside">
                                    <li aria-hidden="false" className="visible">Simulated leather backpack</li>
                                    <li aria-hidden="false" className="visible">Screen art on front features scenes from <em> Star Wars: The Force Awakens</em></li>
                                    <li aria-hidden="true" className="invisible">Characters include Poe Dameron, Finn and Kylo Ren, Rey Skywalker and BB-8</li>
                                    <li aria-hidden="true" className="invisible"><em>Star Wars: The Force Awakens</em> screen logo on back</li>
                                    <li aria-hidden="true" className="invisible">Double zipper main compartment</li>
                                    <li aria-hidden="true" className="invisible">Two front zip pockets</li>
                                    <li aria-hidden="true" className="invisible">Side slip pockets</li>
                                    <li aria-hidden="true" className="invisible">Loungefly logo metal pulls</li>
                                    <li aria-hidden="true" className="invisible">Goldtone hardware</li>
                                    <li aria-hidden="true" className="invisible">Adjustable straps with padded shoulders</li>
                                    <li aria-hidden="true" className="invisible">Top carry loop</li>
                                    <li aria-hidden="true" className="invisible">Same screen art featured on lining</li>
                                    <li aria-hidden="true" className="invisible">Disney100 Decades label on back</li>
                                    <li aria-hidden="true" className="invisible"><em>Star Wars</em> Loungefly logo label plate on front</li>
                                    <li aria-hidden="true" className="invisible">Inspired by<em> Star Wars: The Force Awakens</em> (2015)&nbsp;&nbsp;</li>
                                    <li aria-hidden="true" className="invisible">Part of the Disney100 Decades: The 2010s Collection</li>
                                    <li aria-hidden="true" className="invisible">Part of the Disney100 Celebration Collections</li>
                                </ul>
                                <p aria-hidden="true" className="separator hidden mb-4 "></p>
                                <label aria-hidden="true" className="prod-description-label hidden font-semibold mb-2 inline-block">The bare necessities</label>
                                <ul aria-hidden="true" className="hidden w-588px mb-4 list-disc list-inside">
                                    <li aria-hidden="false" className="visible">Polyurethane</li>
                                    <li aria-hidden="false" className="visible">Approx. 11 2/5'' x 13 3/4'' x 4 1/2''</li>
                                    <li aria-hidden="false" className="visible">Imported</li>
                                </ul>
                                <p aria-hidden="true" className="separator hidden mb-4 "></p>
                                <p aria-hidden="true" className="prod-partnumber hidden mt-30px mb-5 text-prop-details-grey">
                                    <span aria-hidden="false" className="prod-partnumber__label visible mr-10px ">Item No.</span>
                                    <span aria-hidden="false" className="prod-partnumber__text visible">442031181363</span>
                                </p>
                            </div>
                            <div className="readmore-link h-113px bg-read-more-gradient absolute flex w-full items-end bottom-15px underline">
                                <button type="button" className="read-more-btn relative bottom-neg-30px text-lg leading-6 font-extralight text-deep-grey text-left cursor-pointer overflow-visible rounded-none">
                                    <span className="read-more block h-full">Read More</span>
                                    <span className="read-less hidden h-full">Read Less</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
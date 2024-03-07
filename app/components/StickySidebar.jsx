"use client";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
import { useState } from "react";

const product = {
  name: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
  price: "$88.00",
  discounted: "$39.98",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Disney Store", href: "#" },
    { id: 2, name: "Accessories", href: "#" },
    { id: 3, name: "Adults", href: "#" },
    { id: 4, name: "Backpacks", href: "#" },
  ],
};
const reviews = { href: "#", average: 4.5, totalCount: 10 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StickySidebar() {
  const rating = reviews.average;
  const [quantity, setQuantity] = useState(1);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 2));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  const handleHeartClick = () => {
    setIsHeartClicked((prevValue) => !prevValue);
  };
  return (
    <div className="flex justify-end ">
      <div className="flex-grow max-w-[500px]">
        <div className="relative bg-stone-50 p-10 font-sans">
          <div className="sm:pr-12 lg:pr-24">
            {/* Breadcrumbs and Title */}
            <div className="m-6">
              <ol className="flex mb-6 sm:mb-4">
                {product.breadcrumbs.map((crumb, index) => (
                  <li
                    key={index}
                    className="text-stone-500 tracking-wide text-lg font-light"
                  >
                    {index > 0 && <span className="px-1">/</span>}
                    <a
                      href={crumb.href}
                      className="text-stone-500 hover:underline"
                    >
                      <span>{crumb.name}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            {/* Title */}
            <div className="mx-auto max-w-sm sm:px-6">
              <h1 className="text-6xl font-light tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>
          </div>
          <span className="flex gap-5 text-2xl px-4 font-extralight">
            <p className="text-gray-900 line-through">{product.price}</p>
            <p className="text-red-500">{product.discounted}</p>
          </span>
          {/* Reviews */}
          <div
            id="reviews"
            className="mt-6 mx-auto max-w-2xl px-4 bg-gray text-[#0063e5] mb-6"
          >
            {/* Reviews content */}
            <h3 className="sr-only">Reviews</h3>
            <div className="flex">
              {/* Stars */}
              <div className="flex">
                <ReactStars
                  count={5}
                  value={4.5}
                  color1={"white"}
                  color2={"#0063e5"}
                  edit={false}
                  size={32}
                />{" "}
                {rating}
              </div>
              {/* Average rating and reviews link */}
              <p className="sr-only">{rating} out of 5 stars</p>
              <a href={reviews.href} className="ml-3 text-md font-light">
                ({reviews.totalCount})
              </a>
            </div>
          </div>
          {/* Quantity Section */}
          <div className="mx-auto max-w-2xl px-4 p-4 mb-6">
            <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
            <p className="text-gray-600">The item is limited to 2 per Guest.</p>
            <div className="flex mt-4">
              <button
                onClick={handleDecrement}
                className="border-solid border-2 border-slate-300 text-slate-500 rounded-full px-3 py-1"
              >
                -
              </button>
              <span className="mx-3 font-bold text-gray-900">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="border-solid border-2 border-slate-300 text-slate-500 rounded-full px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-2xl px-4">
            {/* Price and Button content */}
            <span className="flex">
              <button
                type="submit"
                className="mt-6 mb-0 text-white rounded-full py-5 px-8 text-xl font-bold  bg-gradient-to-r  from-[#00aaf2] from-98.4 to-[#0063e5] to-6.4% hover:bg-sign-up-hover"
              >
                ADD TO BAG - {product.discounted}
              </button>
              <div
  onClick={handleHeartClick}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isHeartClicked ? "#0063e5" : "white"}
                viewBox="0 -7 28 20"
                strokeWidth="1"
                stroke="#0063e5"
                className="w-20 h-24 ml-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              </div>
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

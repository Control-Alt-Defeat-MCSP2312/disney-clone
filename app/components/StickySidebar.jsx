"use client";

import AddToBagbutton from "./sidebarComponents/AddToBagbutton";
import FavoritesButton from "./sidebarComponents/FavoritesButton";
import Quantity from "./sidebarComponents/Quantity";
import ReviewsButton from "./sidebarComponents/ReviewsButton";

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


export default function StickySidebar() {
  return (
    <div className="bg-stone-50 h-screen">
    <div className="sticky top-0 overflow-y-auto">
      <div className="flex-grow max-w-[500px]">
        <div className="relative p-10 font-sans">
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
                <h1 className="text-9xl font-light tracking-tight leading-tight text-gray-900 sm:text-3xl mb-4">
                  {product.name}
                </h1>
              </div>
            </div>
            <span className="flex gap-5 text-2xl px-4 font-extralight">
              <p className="text-gray-900 line-through">{product.price}</p>
              <p className="text-red-500">{product.discounted}</p>
            </span>
            {/* Reviews */}
            <ReviewsButton />
            {/* Quantity Section */}
            <Quantity />
            <div className="mx-auto max-w-2xl px-4">
              {/* Price and Button content */}
              <span className="flex">
                <AddToBagbutton />
                <FavoritesButton />
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

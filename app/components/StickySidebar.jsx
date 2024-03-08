import { StickySidebarProvider } from "../context/context";
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
    <StickySidebarProvider>
<div className="bg-stone-50 h-full col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 place-content-start">
  <div className="sticky top-0 overflow-y-auto ">
    <div className="flex-grow max-w-full relative p-10 font-sans">
          {/* Breadcrumbs and Title */}
          <div>
            <ol className="flex mb-6 p-8 sm:mb-4">
              {product.breadcrumbs.map((crumb, index) => (
                <li
                  key={index}
                  className="text-stone-500 tracking-wide text-lg font-light"
                >
                  {index > 0 && <span className="px-1">/</span>}
                  <a href={crumb.href} className="text-stone-500">
                    <span>{crumb.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          {/* Title */}
          <div className="mx-auto max-w-sm p-8 sm:px-6">
            <h1 className="text-6xl font-light tracking-tight text-left text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Price and Discount */}
          <span className="flex gap-5 text-2xl px-4 font-extralight">
            <p className="text-gray-900 line-through">{product.price}</p>
            <p className="text-red-500">{product.discounted}</p>
          </span>

          {/* Reviews */}
          <ReviewsButton />
        </div>

        {/* Quantity Section */}
        <Quantity />

        {/* Price and Button content */}
        <div className="mx-auto max-w-2xl px-4">
          <span className="flex">
            <AddToBagbutton />
            <FavoritesButton />
          </span>
        </div>

      </div>
    </div>

    </StickySidebarProvider>
    
  );
}

import { StarIcon } from "@heroicons/react/20/solid";

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
  images: [
    {
      id: 1,
      src: "/main1.png",
      alt: "",
    },
    {
      id: 2,
      src: "/main2.png",
      alt: "",
    },
    {
      id: 3,
      src: "/main3.png",
      alt: "",
    },
    {
      id: 4,
      src: "/main4.png",
      alt: "",
    },
  ],
};
const reviews = { href: "#", average: 4.9, totalCount: 10 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StickySidebar() {
    return (
        <div className="relative">
          <div className="sticky top-0 right-0 flex flex-col items-end">
            {/* Your existing sidebar content */}
            {/* ... */}<div className="mr-4 pr-72">
            {/* Breadcrumbs */}
            <ol className="flex items-center mb-3 sm:mb-0">
              {product.breadcrumbs.map((crumb, index) => (
                <li key={index}>
                  {crumb.name}
                  {index < product.breadcrumbs.length - 1 && "/"}
                </li>
              ))}
            </ol>
            {/* Title */}
            <div className="mx-auto max-w-2xl px-4 pt-2 sm:px-6">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>
            {/* Reviews */}
            <div id="reviews" className="mt-6 mx-auto max-w-2xl px-4">
              {/* Reviews content */}
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                {/* Stars */}
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                {/* Average rating and reviews link */}
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            {/* Price and Button */}
            <div className="mx-auto max-w-2xl px-4 pb-16">
              {/* Price and Button content */}
              <div className="flex flex-col items-center">
                <p className="text-gray-900">{product.price}</p>
                <button
                  type="submit"
                  className="mt-4 mb-0 border-4 text-white rounded-full py-3 px-6 text-xl font-bold bg-gradient-to-r from-[#00aaf2] from-98.4 to-[#0063e5] to-6.4% hover:bg-sky-900"
                >
                  ADD TO BAG - {product.discounted}
                </button>
              </div>
            </div>
          </div>
          {/* Main content, adjust the padding/margin as needed */}
          
          </div>
        </div>
      );
    }
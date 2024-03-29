
import QuantityAndAddToBag from "./sidebarComponents/QuantityAndAddToBag";
import ReviewsButton from "./sidebarComponents/ReviewsButton";

const product = {
  name: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
  price: "$88.00",
  discounted: "$39.98",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Disney Store", href: "https://www.disneystore.com/" },
    { id: 2, name: "Accessories", href: "https://www.disneystore.com/accessories/" },
    { id: 3, name: "Adults", href: "https://www.disneystore.com/accessories/adults/" },
    { id: 4, name: "Backpacks", href: "https://www.disneystore.com/accessories/adults/backpacks/" },
  ],
};
export default function StickySidebar() {
  return (
    <div className="h-full col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 place-content-start">
      <div className="sticky top-0 overflow-y-auto ">
        <div className="flex-grow relative p-10 font-sans text-left flex flex-col ">
          <div>
            <ol className="flex mb-6 p-6 sm:mb-4">
              {product.breadcrumbs.map((crumb, index) => (
                <li
                  key={index}
                  className="text-stone-500 tracking-wide text-md font-light"
                >
                  {index > 0 && <span className="px-1">/</span>}
                  <a href={crumb.href} className="text-stone-500">
                    <span>{crumb.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-auto max-w-fit  sm:px-6">
            <h1 className="text-6xl font-medium tracking-tight text-left text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>
          <span className="flex gap-5 text-lg px-6 pt-4 font-extralight">
            <p className="text-gray-900 line-through">{product.price}</p>
            <p className="text-red-500">{product.discounted}</p>
          </span>
          <ReviewsButton />
        </div>
        <div className="flex">
          <QuantityAndAddToBag />
        </div>
      </div>
    </div>
  );
}



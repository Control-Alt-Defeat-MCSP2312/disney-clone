"use client";

export default function ShopMore() {
  const id = { url: "https://www.disneystore.com/franchises/star-wars/" };

  function handleClick(url) {
    window.open(url, "_blank"); //opens url in a new tab
  }

  return (
    <div className="border-t border-gray-300 shop-more-container px-20 py-10">
      <div className="categories list ">
        <p className="text-2xl font-sans">Shop More</p>
        <div className="flex mt-4">
          <ul className="list-none flex font-sans text-sm">
            <li className="mr-4" onClick={() => handleClick(id.url)}>
              <a className="bg-blue-50 rounded-full py-2 px-4 cursor-pointer">
                <span className="text-gray-700 hover:text-gray-400">
                  Star Wars
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

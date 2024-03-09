"use client";

export default function ShopMore() {
  const id = [
    { url: "https://www.disneystore.com/brands/loungefly/" },
    { url: "https://www.disneystore.com/characters/marvel/scarlet-witch/" },
    { url: "https://www.disneystore.com/movies-shows/marvel/wandavision/" },
  ];

  function handleClick(url) {
    window.open(url, "_blank"); //opens url in a new tab
  }

  return (
    <div className="border-t border-gray-300 shop-more-container px-20 py-10">
      <div className="categories list ">
        <p className="text-sm font-sans">SHOP MORE</p>
        <div className="flex mt-4">
          <ul className="list-none flex font-sans text-sm">
            <li className="mr-4" onClick={() => handleClick(id[0].url)}>
              <a className="bg-blue-50 rounded-full py-2 px-4 cursor-pointer">
                <span className="text-gray-700 hover:text-gray-400">
                  Loungefly
                </span>
              </a>
            </li>
            <li className="mr-4 " onClick={() => handleClick(id[1].url)}>
              <a className="bg-blue-50 rounded-full text-gray-100 py-2 px-4 cursor-pointer">
                <span className="text-gray-700 hover:text-gray-400">
                  Scarlet Witch
                </span>
              </a>
            </li>
            <li className="mr-4 " onClick={() => handleClick(id[2].url)}>
              <a className="bg-blue-50 rounded-full text-gray-900 py-2 px-4 cursor-pointer">
                <span className="text-gray-700 hover:text-gray-400">
                  WandaVision
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

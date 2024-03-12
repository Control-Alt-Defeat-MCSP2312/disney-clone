import React, { useState } from 'react';

const menu = [
  {
    name: 'ACCESSORIES',
    subcategories: [
      {
        name: 'ADULTS',
        items: ['Backpacks', 'Bags & Wallets', 'Ear Hats & Headbands', 'Hats', 'Jewelry & Watches', 'Luggage & Travel', 'Magic Bands', 'Shoes & Socks', 'Tech Accessories', 'Ties & Cufflinks']
      },
      {
        name: 'KIDS',
        items: ['Backpacks & Lunch Boxes', 'Bags & Wallets', 'Costume Accessories', 'Hats', 'Jewelry & Watches', 'Luggage & Travel', 'Magic Bands', 'Shoes & Socks', 'Tech Accessories'],
        additional: [
          { name: 'SHOP ALL ACCESSORIES', items: ['null'] }
        ],
      },
    ],
  },
];

const AccessoriesNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
      <ul className="flex justify-between items-center font-avenir font-base font-normal w-full">
        {menu.map((category) => (
          <li
            key={category.name}
            onMouseEnter={toggleDrawer}
            onMouseLeave={toggleDrawer}
            className="relative"
          >
            <button
              onClick={toggleDrawer}
              className={`a-tag text-sm block after:block after:content-[''] after:absolute after:h-[5px] after:bg-blue-500 after:w-full ${isOpen
                ? 'after:scale-x-100 after:transition-transform duration-1000'
                : 'after:scale-x-0  after:transition-none'
              } after:origin-center`}
            >
              <button className="uppercase font-semibold text-sm hover:text-blue-500 leading-6 font-avenir">
                {category.name}
              </button>
            </button>
            {isOpen && (
              <div className="flex absolute left-0 mt-2 w-full pt-10 pb-10 pl-8 pr-8 border-b border-white">
                <div className="border-none box-border text-gray-900 cursor-pointer block w-72 h-48 pr-7 pointer-events-auto text-left text-base font-normal leading-6 list-none max-w-72 antialiased">
                  <img src="/36418_nt_20240205_2x.webp" alt="Your image description" className="w-full h-full object-cover" />
                </div>
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="flex flex-col px-4 py-2 ">
                    <h3 className="font-semibold mb-2 text-lg">{subcategory.name}</h3>
                    <ul className="text-base list-none">
                      {subcategory.items.map((item) => (
                        <li key={item} className="py-1 hover:text-blue-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {subcategory.additional && subcategory.additional.map((additionalItem) => (
                      <div key={additionalItem.name}>
                        <h3 className="font-semibold mb-2">{additionalItem.name}</h3>
                        <ul className="text-base list-none">
                          {additionalItem.items.map((item) => (
                            <li key={item} className="py-1 hover:text-blue-500">
                              {item !== 'null' ? item : ''}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
  );
};

export default AccessoriesNavBar;

import React, { useState } from 'react';

function Navbar() { 
  // State to manage which dropdown is active
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categories = [
    { name: 'NEW & TRENDING', items: ['CATEGORIES', 'SHOP', 'OUR STORIES','DISNEY PARK', 'GIFT CARDS', 'SHOP ALL NEW & TRENDING' ] },
    { name: 'VACATION', items: ['SWIM SHOP', 'SHOP ALL SWIM ', 'VACATION ESSENTIALS', 'SHOP ALL VACATION', 'DISNEY PARKS GETAWAY', 'SHOP ALL PARKS'] },
    { name: 'CLOTHING', items: ['WOMEN', 'MEN', 'GIRLS', 'BOYS', 'UNISEX', 'FEATURED', 'SHOP ALL CLOTHING'] },
    { name: 'ACCESSORIES', items: ['ADULTS', 'KIDS', 'SHOP ALL ACCESSORIES'] },
    { name: 'TOY SHOP', items: ['TOYS', 'TOYS BY AGE', 'PLUSH', 'FEATURED', 'SHOP ALL TOYS &PLUSH'] },
    { name: 'COLLECTIBLES', items: ['null']},
    { name: 'HOME', items: ['TABLE TOP', 'HOME DECOR', 'BED & BATH', 'DESK & STATIONARY', 'BOOKS', 'SHOP ALL HOME'] },
    { name: 'SALE', items: ['LIMITED TIME OFFER', 'SHOP BY CATEGORY', 'SHOP BY AGE', 'DEALS UNDER $15', 'SHOP ALL SALE' ] },
    { name: 'SEARCH', items: ['null']},
  ];

  return (
    <nav className="bg-gray-800">
      <ul className="flex">
        {categories.map((category) => (
          <li
            key={category.name}
            className="relative"
            onMouseEnter={() => setActiveDropdown(category.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a href="#" className="text-white px-4 py-2">
              {category.name}
            </a>
            {activeDropdown === category.name && (
              <div className="absolute left-0 bg-white shadow-md mt-1">
                <ul>
                  {category.items.map((item, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
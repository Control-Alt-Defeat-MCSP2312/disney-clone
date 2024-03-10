'use client'
import { list } from 'postcss';
import React, { useState } from 'react';

function Navbar() {
  // Local state to track the active dropdown
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      name: 'NEW & TRENDING',
      subcategories: [
        {
          name: 'CATEGORIES',
          items: ['Accessories', 'Clothing', 'Collecticle', 'Home', 'Toys & Plush']
        },
        {
          name: 'SHOPS',
          items: ['Disney Baby', 'Disney Eats Collections', 'Easter Gift Guide', 'Gift Guide', 'Graduation Gift Guide', 'Personalization Shop', 'Stitch Attacks Snacks Collection', 'Vacation Shop']
        },
        {
          name: 'OUR STORIES',
          items: ['Disney', 'Pixar', 'Marvel', 'Star Wars', 'National Geographic', 'Lucasfilm', '20th Century', 'Disney +', 'D23: The Official Disney Fan Club']
        },
        {
          name: 'DISNEY PARK',
          items: ['Disneyland', 'Walt Disney World'],
          additional: [  // Additional subcategories within DISNEY PARK column
            { name: 'GIFT CARDS', items: ['null'] },  // 
            { name: 'SHOP ALL NEW & TRENDING', items: ['null'] },  // 
          ],
        },
      ],
    },
  ];

  return (
    <nav className="border">
      <ul className="flex justify-between items-center font-avenir font-base font-normal w-full">
        <div className="flex justify-center flex-grow">
          {menu.map((category) => (
            <li key={category.name}
              onMouseEnter={() => setIsOpen(category.name)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <a href="#" className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-1000 after:origin-center">
                <button className="uppercase font-semibold text-sm hover:text-blue-500 leading-6 font-avenir">
                  {category.name}
                </button>
              </a>
              {isOpen === category.name && (
                <div className="absolute bg-white border-t border-gray-200 w-full left-0 right-0 z-10">
                  <div className="flex">
                    {/* Image container */}
                    <div className="flex-none w-1/3 max-w-xs pr-7">
                      {/* Make sure your image filenames match this logic */}
                      <img src={`/36418_nt_20240205_2x.webp`} alt={category.name} />
                    </div>
                    {/* Subcategories Container */}
                    <div className="flex justify-between w-2/3">
                      {category.subcategories.map((subcategory, index) => (
                        <div key={index} className="flex flex-col">
                          <h3 className="font-bold text-lg mb-2">{subcategory.name}</h3>
                          <ul className="space-y-2">
                            {subcategory.items.map((item, idx) => (
                              <li key={idx} className="hover:text-blue-500">
                                {/* Make sure to replace this with your routing logic if needed */}
                                <a href={`/categories/${item.toLowerCase()}`} className="block">{item}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;


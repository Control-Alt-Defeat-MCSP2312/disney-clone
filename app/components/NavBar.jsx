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
    // Parent container for the entire nav bar
    <nav className="border p-5 mt-18">
      <ul className="flex justify-between items-center font-avenir font-base font-normal w-full">
        {/* Map over each category in the menu array */}
        {menu.map((category) => (
          <li
            key={category.name}
            onMouseEnter={() => setIsOpen(category.name)}
            onMouseLeave={() => setIsOpen(false)}
            className="relative"
          >
            {/* Animated blue bar and category name */}
            <a
              href="#"
              className={`a-tag text-sm block after:block after:content-[''] after:absolute after:h-[5px] after:bg-blue-500 after:w-full ${isOpen === category.name
                ? 'after:scale-x-100 after:transition-transform duration-1000'
                : 'after:scale-x-0  after:transition-none'
                } after:origin-center`}
            >
              <button className="uppercase font-semibold text-sm hover:text-blue-500 leading-6 font-avenir">
                {category.name}
              </button>
            </a>
            {/* Render the dropdown if the category is active */}
            {isOpen === category.name && (
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
                    {/* Render additional items if they exist */}
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
    </nav>
  )
}

export default Navbar;


// 36418_nt_20240205_2x.webp
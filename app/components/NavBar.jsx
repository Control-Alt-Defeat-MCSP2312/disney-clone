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
    <nav className="border p-5"> {/* Wraps entire nav bar */}
      <ul className="flex justify-between items-center font-avenir font-base font-normal w-full"> {/* Container for nav bar content */}
        <div className="flex justify-center flex-grow"> {/* wraps list items  */}
          {menu.map((category) => (
            <li key={category.name}
              onMouseEnter={() => setIsOpen(category.name)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <a href="#" className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-blue-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-500 after:origin-center">
                <button className="uppercase font-semibold text-sm hover:text-blue-500 leading-6 font-avenir">
                  {category.name}
                </button>
              </a>
              {isOpen === category.name && (
                <div style={{
                  maxHeight: '100vh',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  position: 'absolute',
                  transition: 'max-height 1.2s',
                  zIndex: 1200,
                  lineHeight: '24px',
                  display: 'flex',
                }}>
                  {category.subcategories.map((sub, index) => (
                    <div key={index} className="flex flex-col px-4 py-2" style={{ /* Add individual styles here */ }}>
                      <h3 className="font-bold text-lg mb-2">{sub.name}</h3>
                      <hr className="mb-2" />
                      <ul className="text-base list-none">
                        {sub.items.map((item, idx) => (
                          <li key={idx} className="py-1 hover:text-blue-500">
                            {item !== 'null' ? item : ''}
                          </li>
                        ))}
                      </ul>
                      {/* Render additional categories for the last subcategory (Disney Park in this case) */}
                      {index === category.subcategories.length - 1 && category.subcategories[index].additional && (
                        <div className="mt-4">
                          {category.subcategories[index].additional.map((additionalSub, additionalIdx) => (
                            <div key={additionalIdx}>
                              <h3 className="font-bold text-lg mb-2">{additionalSub.name}</h3>
                              <ul className="text-base list-none">
                                {additionalSub.items.map((additionalItem, itemIdx) => (
                                  <li key={itemIdx} className="py-1 hover:bg-gray-100">
                                    {additionalItem !== 'null' ? additionalItem : ''}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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



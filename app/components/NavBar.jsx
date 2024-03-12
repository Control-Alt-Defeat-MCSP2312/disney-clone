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
    <nav className="border p-5 mt-18">
      <ul className="font-avenir">
        {menu.map((category) => (
          <li key={category.name} className="relative">
            <div
              className="inline-block relative"
              onMouseEnter={() => setIsOpen(category.name)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <a
                href="#"
                className={`a-tag text-sm after:block after:content-[''] after:absolute after:h-[5px] after:bg-blue-500 after:left-0 after:right-0
            ${isOpen === category.name ? 'after:scale-x-100 after:transition-transform duration-1000' : 'after:scale-x-0  after:transition-none'
                  } after:origin-center`}
              >
                <button className="uppercase font-semibold text-sm hover:text-blue-500 leading-6 font-avenir">
                  {category.name}
                </button>
              </a>
            </div>

            {isOpen === category.name && (
              <div style={{ left: '65%', transform: 'translateX(-50%)', top: '200%' }} className="absolute w-full pt-1 pb-40 pl-30 pr-30 border-b border-white flex">
                {/*image and text overlay*/}
                <div style={{ width: '320px', height: '229px' }} className="pr-7 overflow-hidden relative block">
                  <img src="/36418_nt_20240205_2x.webp" alt="Featured" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <h2 className="text-2">What's New and Trending</h2>
                      <a href="/#" className="underline mt-4">Shop All New</a>
                    </div>
                  </div>
                </div>
                <div style={{ width: '1780px', height: '370px' }} className="flex flex-row">
                  {category.subcategories.map((subcategory, index) => (
                    <React.Fragment key={subcategory.name}>
                      {index === 1 && <div style={{ height: '60px' }}></div>}
                      {/* div that wraps each subcategory */}
                      <div className="p-0 pb-7 pl-3 pr-3 flex flex-col mr-12">
                        {/*Subcategories*/}
                        <h3 className="font-semibold mb-2 text-lg border-b border-black space-y-2">{subcategory.name}</h3>
                        {/*Items*/}
                        <ul className="bottom-0 box-content text-black float-none left-0 leading-6 mb-0 mt-0 right-0 text-left top-0 items-start flex-nowrap max-w-full pl-0 relative text-base list-none">
                          {subcategory.items.map((item) => (
                            <li key={item} className="py-1 hover:text-blue-500">
                              <a href="/#" className="text-sm">{item}</a>
                            </li>
                          ))}
                        </ul>
                        {subcategory.additional && subcategory.additional.length > 0 ? (
                          subcategory.additional.map((additionalItem) => (
                            <div key={additionalItem.name} className="mt-9">
                              <h3 className="font-semibold">{additionalItem.name}</h3>
                              <ul className="text-base list-none">
                                {additionalItem.items.map((item, index) => (
                                  <li
                                    key={item}
                                    className={`py-1 hover:text-blue-500`}
                                    style={{ maxWidth: '150px' }}
                                  >
                                    {item !== 'null' ? item : ''}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : null}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar


// 36418_nt_20240205_2x.webp
import React, { useState } from 'react';



function Navbar() {
    // Local state to track the active dropdown
    const [activeDropdown, setActiveDropdown] = useState(null);


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
                        { name: 'GIFT CARDS', items: ['null'] },  // Replace with actual items
                        { name: 'SHOP ALL NEW & TRENDING', items: ['null'] },  // Replace with actual items
                    ],
                },
            ],
        },
    ];

    return (
        <nav className="bg-blue-800 p-4">
          <ul className="flex justify-between text-white">
            {menu.map((category) => (
              <li
                key={category.name}
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative"
              >
                <button
                  className="uppercase tracking-wide font-semibold hover:text-blue-300"
                  style={{ fontFamily: 'AvenirNext, Helvetica, Arial, sans-serif', fontSize: '16px' }}
                >
                  {category.name}
                </button>
                {activeDropdown === category.name && (
                  <div 
                    className="dropdown-content absolute left-0 bg-white text-black shadow-md z-50 w-max" 
                    style={{ top: '100%' }}
                  >
                    <div className="grid grid-cols-4 gap-4 p-4"> 
                      {category.subcategories.map((sub, index) => (
                        <div key={index} className="px-4 py-2"> 
                          <h3 className="font-bold text-lg mb-2">{sub.name}</h3>
                          <ul className="text-base">
                            {sub.items.map((item, idx) => (
                              <li key={idx} className="py-1 hover:bg-gray-100">
                                {item !== 'null' ? item : ''}
                              </li>
                            ))}
                          </ul>
                          {sub.additional && (
                            <div>
                              {sub.additional.map((additionalSub, idx) => (
                                <div key={idx}>
                                  <h3 className="font-bold text-lg mb-2">{additionalSub.name}</h3>
                                  <ul className="text-gray-700 mb-4">
                                    {additionalSub.items.map((item) => (
                                      <li key={item} className="py-1">
                                        {item !== 'null' ? item : ''}
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
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      );
}

export default Navbar;
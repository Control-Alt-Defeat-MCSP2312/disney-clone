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
                    items: ['Disneyland', 'Walt Disney World']
                },

                {
                    name: 'GIFT CARDS',
                    items: ['null']
                },

                {
                    name: 'SHOP ALL NEW & TRENDING',
                    items: ['null']
                }
            ],
        },
        // ...More main categories
    ];

    //   const categories = [
    //     { name: 'NEW & TRENDING', items: ['CATEGORIES', 'SHOP', 'OUR STORIES','DISNEY PARK', 'GIFT CARDS', 'SHOP ALL NEW & TRENDING' ] },
    //     { name: 'VACATION', items: ['SWIM SHOP', 'SHOP ALL SWIM ', 'VACATION ESSENTIALS', 'SHOP ALL VACATION', 'DISNEY PARKS GETAWAY', 'SHOP ALL PARKS'] },
    //     { name: 'CLOTHING', items: ['WOMEN', 'MEN', 'GIRLS', 'BOYS', 'UNISEX', 'FEATURED', 'SHOP ALL CLOTHING'] },
    //     { name: 'ACCESSORIES', items: ['ADULTS', 'KIDS', 'SHOP ALL ACCESSORIES'] },
    //     { name: 'TOY SHOP', items: ['TOYS', 'TOYS BY AGE', 'PLUSH', 'FEATURED', 'SHOP ALL TOYS &PLUSH'] },
    //     { name: 'COLLECTIBLES', items: ['null']},
    //     { name: 'HOME', items: ['TABLE TOP', 'HOME DECOR', 'BED & BATH', 'DESK & STATIONARY', 'BOOKS', 'SHOP ALL HOME'] },
    //     { name: 'SALE', items: ['LIMITED TIME OFFER', 'SHOP BY CATEGORY', 'SHOP BY AGE', 'DEALS UNDER $15', 'SHOP ALL SALE' ] },
    //     { name: 'SEARCH', items: ['null']},
    //   ];

    return (
        <nav className="bg-blue-800 p-4 text-white">
            <ul className="flex justify-between">
                {menu.map((category) => (
                    <li
                        key={category.name}
                        onMouseEnter={() => setActiveDropdown(category.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="relative"
                    >
                        <button className="uppercase tracking-wide font-semibold hover:text-blue-300">{category.name}</button>
                        {activeDropdown === category.name && (
                            <div className="dropdown-content absolute left-0 right-0 bg-white shadow-md mt-1 py-2 z-10">
                                {category.subcategories.map((sub) => (
                                    <div key={sub.name} className="text-gray-700 px-4 py-2">
                                        <h3 className="font-bold">{sub.name}</h3>
                                        <ul className="mt-1">
                                            {sub.items.map((item) => (
                                                <li key={item} className="py-1 hover:bg-gray-100">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
import React, { useState } from 'react';
import ClothingComponent from './NavBarComponents/ClothingComponent';
import StandardComponent from './NavBarComponents/StandardComponent';

const MegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const newTrendMenu = [
        {
            name: 'New & Trending',
            image: '/navbar-pics/newTrending.webp',
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

    const vacationMenu = [
        {
            name: 'Vacation',
            image: '/navbar-pics/vacation.webp',
            subcategories: [
                {
                    name: 'SWIM SHOP',
                    items: ['Swimwear & Cover-Ups', 'Swim Accessories', 'Beach Towels'],
                    additional: [
                        { name: 'SHOP ALL SWIM', items: ['null'] },
                    ]
                },
                {
                    name: 'VACATION ESSENTIALS',
                    items: ['Vacation Accessories', 'Vacation Clothing', 'Luggage & Travel'],
                    additional: [
                        { name: 'SHOP ALL VACATION', items: ['null'] },
                    ]
                },
                {
                    name: 'MAGIC WORLD PARKS GETAWAY',
                    items: ['Magic World', 'Magicland', 'Ear Hats & Headbands', 'MagicBands', 'Spirit Jerseys'],
                    additional: [  // Additional subcategories within DISNEY PARK column
                        { name: 'SHOP ALL PARKS', items: ['null'] },  // 
                    ],
                },
            ],
        },
    ];

    const clothingMenu = [
        {
            name: 'Clothing',
            image: '/navbar-pics/clothing.webp',
            subcategories: [
                {
                    name: 'WOMEN',
                    items: ['Dresses & Skirts', 'Jackets & Sweaters', 'Shorts & Pants', 'Sleepwear & Loungewear', 'Spirit Jerseys', 'T-Shirts & Tops'],
                },
                {
                    name: 'MEN',
                    items: ['Jackets & Sweaters', 'Shorts & Pants', 'Sleepwear & Loungewear', 'Spirit Jerseys', 'T-Shirts & Tops'],
                },
                {
                    name: 'BOYS',
                    items: ['Baby Boy', 'Costumes', 'Jackets & Sweaters', 'Sleepwear', 'Swimwear', 'T-Shirts & Tops'],
                },
                {
                    name: 'UNISEX',
                    items: ['Adult Unisex Clothing', 'Kids\' Unisex Clothing', 'Baby Unisex Clothing'],
                },
                {
                    name: 'FEATURED',
                    items: ['Magic World Baby', 'Graphic Tee Shop', 'Sleep Shop'],
                    additional: [
                        { name: 'SHOP ALL CLOTHING', item: ['null'] },
                    ],
                },
            ],
        },
    ];

    const accessoriesMenu = [
        {
            name: 'Accessories',
            image: '/navbar-pics/accessories.webp',
            subcategories: [
                {
                    name: 'ADULTS',
                    items: ['Backpacks', 'Bags & Wallets', 'Ear Hats & Headbands', 'Hats', 'Jewelry & Watches', 'Luggage & Travel', 'MagicBands', 'Shoes & Socks', 'Tech Accessories', 'Ties & Cufflinks'],
                },
                {
                    name: 'KIDS',
                    items: ['Backpacks & Lunch Boxes', 'Bags & Wallets', 'Costume Accessories', 'Hats', 'Jewelry & Watches', 'Luggage & Travel', 'Shoes & Socks', 'Tech Accessories'],
                    additional: [
                        { name: 'SHOP ALL ACCESSORIES', item: ['null'] }
                    ]
                },
            ],
        },
    ];

    const toyShopMenu = [
        {
            name: 'Toy Shop',
            image: '/navbar-pics/toys.webp',
            subcategories: [
                {
                    name: 'TOYS',
                    items: ['Action Figures', 'Cars, Trains & RC Toys', 'Dolls', 'Games & Puzzles', 'LEGO', 'Play Sets', 'Pretend Play & Costumes', 'Sports & Outdoor Toys'],
                },
                {
                    name: 'TOYS BY AGE',
                    items: ['0-2 Years', '3-4 Years', '5-7 Years', '8-13 Years', '14 Years +'],
                },
                {
                    name: 'PLUSH',
                    items: ['Magic World Plush', 'Marvel Plush', 'PIXAR Plush', 'Star Wars Plush', 'Magic World NuMOs'],
                },
                {
                    name: 'FEATURED',
                    items: ['Magic World ily 4EVER', 'Magic World Lorcana', 'Magic World Munchings', 'Magic World Story Dolls', 'Top Toys'],
                    additional: [
                        { name: 'SHOP ALL TOYS & PLUSH', item: ['null'] },
                    ],
                },
            ],
        },
    ];

    const collectiblesMenu = [
        {
            name: 'Collectibles',
        }
    ];

    const homeMenu = [
        {
            name: 'Home',
            image: '/navbar-pics/home.webp',
            subcategories: [
                {
                    name: 'TABLETOP',
                    items: ['Dinnerware', 'Drinkware & Mugs', 'Kitchen Tools & Accessories'],
                },
                {
                    name: 'HOME DECOR',
                    items: ['Art', 'Home Accents', 'Ornaments', 'Photo & Memories'],
                },
                {
                    name: 'BED & BATH',
                    items: ['Bath Accessories', 'Bedding', 'Towels'],
                    additional: [
                        { name: 'DESK & STATIONERY', item: ['null'] },
                        { name: 'BOOKS', item: ['null'] },
                        { name: 'SHOP ALL HOME', item: ['null'] },
                    ]
                }
            ],
        },
    ];

    const saleMenu = [
        {
            name: 'Sale',
            image: '/navbar-pics/sale.webp',
            subcategories: [
                {
                    name: 'LIMITED TIME OFFERS',
                    items: ['Spring Toy Savings Event: Toys & Plush Starting at $12', 'Free Bubble Solution Refill With Select Bubble Wands', '25% Off Wish']
                },
                {
                    name: 'SHOP BY CATEGORY',
                    items: ['Accessories', 'Clothing', 'Collectibles', 'Home & Decor', 'Toys']
                },
                {
                    name: 'SHOP BY AGE',
                    items: ['Adults', 'Kids\''],
                    additional: [  // Additional subcategories within DISNEY PARK column
                        { name: 'DEALS UNDER $15', items: ['null'] },  // 
                        { name: 'SHOP ALL SALE', items: ['null'] },  // 
                    ],
                },
            ],
        },
    ];

    const categoryArray = [newTrendMenu, vacationMenu, clothingMenu, accessoriesMenu, toyShopMenu, collectiblesMenu, homeMenu, saleMenu];

    return (
        <nav className="bg-white border-gray-200 border-b dark:border-gray-600 dark:bg-gray-900 z-1250">
            <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                <div
                    id="mega-menu-full"
                    className="flex items-center justify-between w-full md:flex md:w-auto md:order-1"
                >
                    <ul className="flex flex-col font-AvenirNext uppercase text-sm text-zinc-grey font-extrabold mt-4 md:flex-row md:mt-0 md:space-x-8">
                        {categoryArray.map((category, index) => (
                            category[0].subcategories && category[0].subcategories.length > 0 ?
                                <li
                                    key={index}
                                    onMouseEnter={() => {
                                        setIsOpen(category[0].name)
                                        setHoveredItem(index);
                                    }}
                                    onMouseLeave={(e) => {
                                        const relatedTarget = e.relatedTarget || e.toElement;
                                        if (!relatedTarget || !relatedTarget.closest('#mega-menu-full-dropdown')) {
                                            setIsOpen(false);
                                            setHoveredItem(null);
                                        }
                                    }}
                                    className="relative group p-25px"
                                >
                                    <button
                                        id="mega-menu-full-dropdown-button"
                                        data-collapse-toggle="mega-menu-full-dropdown"
                                        className="uppercase justify-between w-full p-50px font-extrabold border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                        {category[0].name}
                                    </button>
                                    {hoveredItem === index && (
                                        <div className='absolute w-full h-2 bg-start-color bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom duration-500'></div>
                                    )}
                                </li>
                                :
                                <li
                                    key={index}
                                    className='relative group p-25px'
                                    onMouseEnter={() => {
                                        setHoveredItem(index);
                                    }}
                                    onMouseLeave={(e) => {
                                        const relatedTarget = e.relatedTarget || e.toElement;
                                        if (!relatedTarget || !relatedTarget.closest('#mega-menu-full-dropdown')) {
                                            setHoveredItem(null);
                                        }
                                    }}
                                >
                                    <a href="#" className="block font-extrabold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">{category[0].name}</a>
                                    {hoveredItem === index && (
                                        <div className='absolute w-full h-2 bg-start-color bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom duration-500'></div>
                                    )}
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && (() => {
                const selectedCategory = categoryArray.filter(category => category[0].name === isOpen);
                if (selectedCategory && selectedCategory[0].name === 'CLOTHING') {
                    return <ClothingComponent isOpen={isOpen} setIsOpen={setIsOpen} categoryList={selectedCategory[0]} />;
                } else if (selectedCategory && selectedCategory[0].name !== 'COLLECTIBLES') {
                    return <StandardComponent isOpen={isOpen} setIsOpen={setIsOpen} categoryList={selectedCategory[0]} />;
                }
                return null;
            })()}
        </nav>
    )
}

export default MegaMenu;
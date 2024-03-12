'use client'
import { list } from 'postcss';
import React, { useState } from 'react';

function NewTrendingComponent({ isOpen, setIsOpen }) {
  	// Local state to track the active dropdown
  	const newTrendList = [
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
    	<>
      		{/* Your commented-out nav code */}
      		{newTrendList.map((category) => (
				<div id="mega-menu-full-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
					<div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
						{category.subcategories.map((subcategory) => (
							<div>
								<h3 className="font-semibold">{subcategory.name}</h3>
								<ul aria-labelledby="mega-menu-full-dropdown-button">
									{subcategory.items.map((item) => (
										<li>
											<a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
											<span className="text-sm text-gray-500 dark:text-gray-400">{item}</span>
											</a>
										</li>
										)
									)}
								</ul>
								{subcategory.additional && subcategory.additional.map((additionalItem) => {
									<h3 className="font-semibold">{additionalItem.name}</h3>
								})}
							</div>
							)
						)}
					</div>
				</div>
			))}
   		</>
	)
}

export default NewTrendingComponent;


// 36418_nt_20240205_2x.webp
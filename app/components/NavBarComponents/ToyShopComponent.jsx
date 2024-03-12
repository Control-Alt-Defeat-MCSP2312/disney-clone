import React, { useState } from 'react';

const ToyShopComponent = ({ isOpen, setIsOpen }) => {
    
    const toyShopList = [
    	{
			name: 'Toy Shop',
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
                        { name: 'SHOP ALL TOYS & PLUSH', item: ['null']},
                    ],
				},
			],
    	},
  	];

	return (
    	<>
      		{/* Your commented-out nav code */}
      		{toyShopList.map((category) => (
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

export default ToyShopComponent;
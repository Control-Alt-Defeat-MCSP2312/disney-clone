import React, { useState } from 'react';

const HomeComponent = ({ isOpen, setIsOpen }) => {
    
    const homeList = [
    	{
			name: 'Home',
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
                        { name: 'DESK & STATIONERY', item: ['null']},
                        { name: 'BOOKS', item: ['null']},
                        { name: 'SHOP ALL HOME', item: ['null']},
                    ]
                }
			],
    	},
  	];

	return (
    	<>
      		{/* Your commented-out nav code */}
      		{homeList.map((category) => (
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

export default HomeComponent;
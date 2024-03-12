import React, { useState } from 'react';

const ClothingComponent = ({ isOpen, setIsOpen, categoryList }) => {
    
    const clothingList = [
    	{
			name: 'Clothing',
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
                        { name: 'SHOP ALL CLOTHING', item: ['null']},
                    ],
				},
			],
    	},
  	];

	return (
    	<>
      		{/* Your commented-out nav code */}
      		{categoryList.map((category) => (
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

export default ClothingComponent;
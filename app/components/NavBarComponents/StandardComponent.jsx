import React, { useState } from 'react';
import Image from 'next/image';

const StandardComponent = ({ isOpen, setIsOpen, categoryList }) => {
    
	return (
    	<>
      		{/* Your commented-out nav code */}
      		{categoryList.map((category, index) => (
				<div 
                    key={index}
                    id="mega-menu-full-dropdown"
                    className="flex justify-center transition-opacity ease-in duration-300 opacity-100 hover:opacity-0 py-41px mx-10 px-30px bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 z-1250"
                >
					<div
                        className="flex justify-center max-w-screen-xl mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6"
                    >
                        <div className='image-container relative pr-30px'>
                            <img
                                src={category.image}
                                alt={category.name}
                                width={329}
                                height={229}
                            />
                            <div className='flex items-center p-15px justify-center top-0 bottom-0 left-0 right-0 absolute'>
                                <div className='flex flex-col items-center mx-auto'>
                                    <div className='mb-2'>
                                        <p className='mb-4'>
                                            <span className='text-white text-xl font-AvenirNext'>
                                                What's New&nbsp;
                                                <br></br>
                                                 and Trending
                                            </span>
                                        </p>
                                        <p className='mb-4'>
                                            <span className='text-white text-lg font-AvenirNext'>
                                                <u>Shop All New</u>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            {category.subcategories.map((subcategory) => (
                                <div className='pb-7.5 px-15px'>
                                    <div className="font-semibold font-AvenirNext uppercase break-normal text-sm text-zinc-grey">{subcategory.name}</div>
                                    <ul className="border-t border-dark-charcoal font-AvenirNext mt-2 pt-13px break-normal pb-30px space-y-2.5" aria-labelledby="mega-menu-full-dropdown-button">
                                        {subcategory.items.map((item) => (
                                            <li className='font-AvenirNextLight font-normal'>
                                                <a href="#" className="block rounded-lg">
                                                <div className="text-sm text-zinc-grey font-normalfont font-AvenirNext">{item}</div>
                                                </a>
                                            </li>
                                            )
                                        )}
                                    </ul>
                                    {subcategory.additional && subcategory.additional.map((additionalItem, index) => (
                                        <div key={index} className="font-bold font-AvenirNext text-sm pb-30px">{additionalItem.name}</div>
                                    ))}
                                </div>
                                )
                            )}
                        </div>
					</div>
				</div>
			))}
   		</>
	)
}

export default StandardComponent;
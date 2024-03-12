import React, { useContext } from 'react';
import UserComponent from '../../public/header/user.svg';
import DisneyBagComponent from '../../public/header/disney-bag.svg';
import WishListComponent from '../../public/header/wish-list-heart.svg';
import DisneyLogoComponent from '../../public/disney-store-logo.svg'
import AppContext from '../context/context';

const Header = () => {
    const { wishlistCount, bagCount } = useContext(AppContext)
    // wishlistCount and bagCount are what I plan on using to update the number next to My Wish List / My Bag
    return (
        <div className='border-b'>
            <div className='flex justify-between ml-10 mr-10 bg-white text-black font-sans font-light'>
                <div className='flex items-center py-header pl-15px pr-15px'>
                    <ul className='flex text-sm space-x-3.5'>
                        <li>
                            <span>
                                <a href='https://support.disneystore.com/hc/en-us'>Guest Support</a>
                            </span>
                        </li>
                        <li>•</li>
                        <li>
                            <span>
                                <a href='https://www.disneystore.com/disney-visa-card.html?CELL=63NG06'>Magic World<span className='text-xs'><sup>&reg;</sup></span> Visa<span className='text-xs'><sup>&reg;</sup></span> Card</a>
                            </span>
                        </li>
                        <li>•</li>
                        <li>
                            <span>
                                <a href='https://www.disneystore.com/store-locator'>Store Locator</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='flex py-4 items-center'>
                    <DisneyLogoComponent />
                </div>
                <div className='flex items-center font-sans text-sm py-header'>
                    <button className='flex items-center mr-5'>
                        <UserComponent width='21px' height='22px' className='mr-2 text-start-color' />
                        <div className='mx-1'>Sign In</div>
                    </button>
                    {/*  Planning on using wishlistCount state here for when heart is clicked */}
                    <a className='flex items-center mr-5' href='https://www.disneystore.com/wish-list'>
                        <WishListComponent className='mr-2 text-start-color' width='21px' height='22px' />
                        <div className='mx-1'>My Wish List ({wishlistCount})</div>
                    </a>
                    {/*  Planning on using bagCount state here for add to bag is clicked */}
                    <a className='flex ml-2 items-center' href='https://www.disneystore.com/my-bag'>
                        <DisneyBagComponent className='text-start-color' width='24px' height='24px' />
                        <div className='mx-1'>My Bag ({bagCount})</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
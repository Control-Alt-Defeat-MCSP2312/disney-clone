import React, { useContext } from 'react';
import DisneyLogoComponent from '../../public/disney-store-logo.svg'
import AppContext from '../context/context';

const Header = () => {
    const { wishlistCount, bagCount } = useContext(AppContext)
    // wishlistCount and bagCount are what I plan on using to update the number next to My Wish List / My Bag
    return (
        <div className='flex items-center justify-between p-4 bg-white text-black w-full'>
            <div className='flex items-center font-avenir'>
                <a href='https://support.disneystore.com/hc/en-us' className='mx-2'>
                    <></>
                    <div className='mx-1'>Guest Support</div>
                </a>
                <div className='mx-2'>•</div>
                <a href='https://www.disneystore.com/disney-visa-card.html?CELL=63NG06' className='mx-2'>
                    <></>
                    <div className='mx-1'>Magic World&reg; Visa&reg; Card</div>
                </a>
                <div className='mx-2'>•</div>
                <a href='https://www.disneystore.com/store-locator' className='mx-2'>
                    <></>
                    <div className='mx-1'>Store Locator</div>
                </a>
            </div>
            <div className='flex items-center'>
                <DisneyLogoComponent />
            </div>
            <div className='flex items-center'>
                <button>
                    <></>
                    <div className='mx-1'>Sign In</div>
                </button>
                {/*  Planning on using wishlistCount state here for when heart is clicked */}
                <a href='https://www.disneystore.com/wish-list' className='mx-2'>
                    <></>
                    <div className='mx-1'>My Wish List ({wishlistCount})</div>
                </a>
                {/*  Planning on using bagCount state here for add to bag is clicked */}
                <a href='https://www.disneystore.com/my-bag' className='mx-2'>
                    <></>
                    <div className='mx-1'>My Bag ({bagCount})</div>
                </a>
            </div>
        </div>
    )
}

export default Header;
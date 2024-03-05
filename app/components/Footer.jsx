import React from 'react';
import Image from 'next/image';

const Footer = () => {

    return (
        <footer className='bg-visa-blue'>
            <div>
                <a href='https://www.disneystore.com/disney-visa-card.html?CELL=63NG06'>
                    <div className='flex justify-evenly items-center'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center'>
                                <div>$100</div>
                                <div className='flex flex-col items-center'>
                                    <div>Statement</div>
                                    <div>Credit</div>
                                </div>
                            </div>
                            <div>after first purchase with a new Disney&reg; Visa&reg; Card.</div>
                            <div>Restrictions apply. Member FDIC</div>
                            <div>Learn More</div>
                        </div>
                        <Image 
                            src='/2024card-array-with-reflection.png'
                            alt='$100 Statement Credit'
                            width={650}
                            height={159.25}
                        />
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
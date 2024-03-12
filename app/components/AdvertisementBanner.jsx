import React from 'react';
import Image from 'next/image';

const AdvertisementBanner = () => {

    return (
        <>
            <div className='bg-visa-blue'>
                <a className='flex justify-center' href='https://www.disneystore.com/disney-visa-card.html?CELL=63NG06'>
                    <div className='font-AvenirNext justify-start items-center bg-visa-blue text-container flex flex-col pr-81px my-3.5 text-white'>
                        <div className='headline flex mb-5px text-3xl'>
                            <span className='currency pt-8 -mr-2'>$</span>
                            <span className='mr-3 font text-hundred tracking-tighter'>100</span>
                            <div className='flex flex-col justify-center items-left'>
                                <span>Statement</span>
                                <span className='-mt-2'>Credit</span>
                            </div>
                        </div>
                        <p className='mb-4 -mt-8 text-base'>after first purchase with a new Disney<sup>&reg;</sup> Visa<sup>&reg;</sup> Card.</p>
                        <span className='text-sm'>Restrictions apply. Member FDIC</span>
                        <button className='button-text text-sm'>
                            <span><u>Learn More</u></span>
                        </button>
                    </div>
                    <div className='image-container flex pt-21px items-center justify-center'>
                        <Image 
                            src='/2024card-array-with-reflection.png'
                            alt='$100 Statement Credit'
                            width={650}
                            height={100}
                        />
                    </div>
                </a>
            </div>
        </>
    )
}

export default AdvertisementBanner;
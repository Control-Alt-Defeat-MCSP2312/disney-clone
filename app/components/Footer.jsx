import React from 'react';
import FacebookIcon from '../../public/socials/facebook-icon.svg'
import InstagramIcon from '../../public/socials/instagram-icon.svg'
import TwitterIcon from '../../public/socials/twitter-icon.svg'
import PinterestIcon from '../../public/socials/pinterest-icon.svg'
import YouTubeIcon from '../../public/socials/youtube-icon.svg'

const Footer = () => {
    
    return (
        <footer className='flex justify-center items-center bg-white'>
            <div className='flex flex-col bg-white'>
                {/* div containing upper left and upper right quadrants of footer */}
                <div className='flex justify-center py-6'>
                    {/* div containing upper left */}
                    <div className='flex flex-col flex-wrap'>
                        <span>Sign up for our emails to get the inside scoop on special offers and new products.</span>
                        <div className='flex py-4'>
                            <button className='bg-sign-up-blue hover:bg-sign-up-hover text-white px-4'>Sign up</button>
                            <div className='flex flex-col px-6'>
                                <span>Stay in Touch</span>
                                <a href='https://privacy.thewaltdisneycompany.com/en/'>Privacy Policy</a>
                            </div>
                        </div>
                        <div className='py-4'>
                            <ul className='flex space-x-2'>
                                <li>
                                    <a href='https://www.facebook.com/disneystore/'>
                                        <FacebookIcon alt='Facebook Icon' width={24} height={24} />
                                    </a> 
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/disneystore/'>
                                        <InstagramIcon alt='Instagram Icon' width={24} height={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://twitter.com/disneystore/'>
                                        <TwitterIcon alt='Twitter Icon' width={24} height={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.pinterest.com/disneystore/'>
                                        <PinterestIcon alt='Pinterest Icon' width={24} height={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/disneystore'>
                                        <YouTubeIcon alt='Youtube Icon' width={24} height={24} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* div containing upper right quadrants of footer */}
                    <div className='flex'>
                        <ul className='border-r-2 border-black mx-6 px-6'>
                            <li><a href='https://www.disneystore.com/characters.html' className='hover:text-footer-blue'>Characters</a></li>
                            <li><a href='https://www.disneystore.com/disney-parks/' className='hover:text-footer-blue'>Parks</a></li>
                            <li><a href='https://www.disneystore.com/franchises/disney/' className='hover:text-footer-blue'>Magic World</a></li>
                            <li><a href='https://www.disneystore.com/franchises/pixar/' className='hover:text-footer-blue'>Pixar</a></li>
                            <li><a href='https://www.disneystore.com/franchises/star-wars/' className='hover:text-footer-blue'>Star Wars</a></li>
                            <li><a href='https://www.disneystore.com/franchises/marvel/' className='hover:text-footer-blue'>Marvel</a></li>
                            <li><a href='https://www.disneystore.com/franchises/national-geographic/' className='hover:text-footer-blue'>National Geographic</a></li>
                        </ul>
                        <ul className='mx-8'>
                            <li><a href='https://support.disneystore.com/hc/en-us' className='hover:text-footer-blue'>Guest Support</a></li>
                            <li><a href='https://www.disneystore.com/order-status' className='hover:text-footer-blue'>Order Tracking</a></li>
                            <li><a href='https://support.disneystore.com/hc/en-us/sections/5610094909715-Return-Info' className='hover:text-footer-blue'>Return/Exchange</a></li>
                            <li><a href='https://support.disneystore.com/hc/en-us/articles/5610110183955-Shipping-Delivery' className='hover:text-footer-blue'>Shipping Info</a></li>
                            <li><a href='https://www.disneystore.com/account' className='hover:text-footer-blue'>Account Info</a></li>
                            <li><a href='https://www.disneystore.com/store-locator' className='hover:text-footer-blue'>Store Locator</a></li>
                        </ul>
                        <ul className='mx-8'>
                            <li><a href='https://www.disneystore.com/gift-cards.html' className='hover:text-footer-blue'>Magic World Gift Cards</a></li>
                            <li><a href='https://www.disneystore.com/affiliates.html' className='hover:text-footer-blue'>Affiliate Program</a></li>
                            <li><a href='https://www.disneystore.com/about-us.html' className='hover:text-footer-blue'>About Magic World Store</a></li>
                            <li><a href='https://www.disneystore.com/disney-visa-card.html?CELL=63NG06' className='hover:text-footer-blue'>Magic World&reg; Visa&reg; Card</a></li>
                            <li><a href='https://www.disneystore.com/personalization/' className='hover:text-footer-blue'>Personalization Shop</a></li>
                        </ul>
                        <ul>
                            <li><a href='https://www.disneystore.com/d23-the-official-disney-fan-club/' className='hover:text-footer-blue'>M23</a></li>
                            <li><a href='https://jobs.disneycareers.com/' className='hover:text-footer-blue'>Careers</a></li>
                            <li><a href='https://www.disneystore.com/site-map.html' className='hover:text-footer-blue'>Site Map</a></li>
                            <li><a href='https://www.disneystore.com/new-content/' className='hover:text-footer-blue'>New</a></li>
                            <li><a href='https://www.disneystore.com/sale-content/' className='hover:text-footer-blue'>Sale</a></li>
                        </ul>
                    </div>
                </div>
                {/* div containing bottom terms of use info etc */}
                <div>
                    <ul className='flex justify-center flex-wrap space-x-6 text-slate-400'>
                        <li className='hover:text-footer-blue'>&copy; Magic World, All Rights Reserved</li>
                        <li><a href='https://disneytermsofuse.com/' className='hover:text-footer-blue'>Terms of Use</a></li>
                        <li><a href='https://support.disneystore.com/hc/en-us/articles/7347170254867-Legal-Notices' className='hover:text-footer-blue'>Additional Content Information</a></li>
                        <li><a href='https://privacy.thewaltdisneycompany.com/en/' className='hover:text-footer-blue'>Privacy Policy</a></li>
                        <li><a href='https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/' className='hover:text-footer-blue'>Your US State Privacy Rights</a></li>
                        <li><a className='hover:text-footer-blue'>Do Not Sell or Share My Personal Information</a></li>
                        <li><a href='https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/' className='hover:text-footer-blue'>Children's Online Privacy Policy</a></li>
                        <li><a href='https://thewaltdisneycompany.com/?ppLink=pp_ds' className='hover:text-footer-blue'>About Magic World</a></li>
                        <li><a href='https://preferences-mgr.truste.com/?aid=disneystore01&pid=disney01&type=disneystore' className='hover:text-footer-blue'>Internet-Based Ads</a></li>
                        <li><a href='https://impact.disney.com/app/uploads/2022/01/California-Transparency-in-Supply-Chains-Act-1.pdf' className='hover:text-footer-blue'>California Transparency in Supply Chains Act</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
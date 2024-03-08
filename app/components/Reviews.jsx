import React, { useState, useContext, useEffect } from 'react';
import SingleReview from './Reviews/SingleReview';
import AppContext from '../context/context';

const Reviews = () => {
    const { reviews, fetchReviews } = useContext(AppContext);
    const [sortBy, setSortBy] = useState('most-recent')
    const [displayedReviews, setDisplayedReviews] = useState([]);
    const [displayedCount, setDisplayedCount] = useState(8);
    const [dropdownToggle, setDropdownToggle] = useState(false);


    useEffect(() => {
        fetchReviews();
    }, [])

    useEffect(() => {
        //Set displayed reviews based on startIndex and endIndex
        setDisplayedReviews(reviews.reviews.slice(0, displayedCount));
    }, [reviews.reviews, displayedCount])

    // Set total item reviews and how many reviews to display initially
    const totalReviews = reviews.reviews.length; // 10
    const reviewsPerPage = 8;

    // Function for Load More button to display more reviews
    const handleLoadMore = () => {
        const newCount = Math.min(displayedCount + reviewsPerPage, totalReviews);
        setDisplayedCount(newCount);
    }

    const handleDropdownToggle = () => {
        setDropdownToggle(!dropdownToggle);
    }

    const handleSortingChange = (sortingOption) => {
        setSortBy(sortingOption);
        setDropdownToggle(false);
        sortReviews(sortingOption);
    }

    const sortReviews = (sortingOption) => {
        const sortedReviews = [...reviews.reviews];
        switch (sortingOption) {
            case 'most-helpful':
                sortedReviews.sort((a, b) => b.helpful_yes - a.helpful_yes);
                break;
            case 'most-recent':
                sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'high-to-low':
                sortedReviews.sort((a, b) => b.rating - a.rating);
                break;
            case 'low-to-high':
                sortedReviews.sort((a, b) => a.rating - b.rating);
                break;
            default:
                // What it will sort to upon loading
                sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        setDisplayedReviews(sortedReviews.slice(0, displayedCount));
    }

    const sortByDisplay = (sortBy) => {
        if (sortBy === 'most-recent') {
            return 'Most Recent';
        } else if (sortBy === 'most-helpful') {
            return 'Most Helpful';
        } else if (sortBy === 'high-to-low') {
            return 'Highest to Lowest Rating';
        } else {
            return 'Lowest to Highest Rating';
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='write-review-button pb-5 flex justify-end'>
                <button className='bg-start-color text-white py-2 px-4 rounded-full'>Write a review</button>
            </div>
            <div className='review-display-bar flex justify-between pb-2.5'>
                <span className='mx-4'>1 - {displayedCount} of {reviews.reviews.length} Reviews</span>
                {/* Implement drop down menu on hover, click turns on/off as well, set sortBy state depending on what is clicked, changes order components are rendered. */}
                <div className='sort-by relative pl-2.5 pb-2.5 pt-2.5 pr-25px'>
                    <div className='flex'>
                        <div
                            className='cursor-pointer flex'
                            onMouseEnter={handleDropdownToggle}
                            onClick={() => setDropdownToggle(false)}
                        >
                            <span>Sort by: {sortByDisplay(sortBy)}</span>
                        </div>
                        <span className='text-xs font-times ml-1 mt-1'>&#9660;</span>
                    </div>
                    {dropdownToggle && (

                        <div className='absolute bg-white border border-gray-300'>
                            <div onClick={() => handleSortingChange('most-helpful')}>Most Helpful</div>
                            <div onClick={() => handleSortingChange('high-to-low')}>Highest to Lowest Rating</div>
                            <div onClick={() => handleSortingChange('low-to-high')}>Lowest to Highest Rating</div>
                            <div onClick={() => handleSortingChange('most-recent')}>Most Recent</div>
                        </div>)}
                </div>
            </div>
            {displayedReviews.map((review) => {
                return <SingleReview key={review.id} review={review} />
            })}
            <div className='flex justify-center'>
                <button className='text-black bg-load-more w-64 rounded-x1 my-8' onClick={handleLoadMore}>Load more</button>
            </div>
        </div>
    )
}

export default Reviews;
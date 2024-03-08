import React, { useState, useContext } from 'react';
import SingleReview from './Reviews/SingleReview';
import AppContext from '../context';

const Reviews = () => {
    const { reviews } = useContext(AppContext);
    const [sortBy, setSortBy] = useState('most-recent')

    return (
        <div className='flex flex-col'>
            <div className='flex justify-end'>
                <button className='bg-sign-up-blue text-white mx-4'>Write a review</button>
            </div>
            <div className='flex justify-between'>
                {/* Figure out how to turn 8 into number of SingleReview components currently being displayed (Conditional Rendering?)*/}
                <span className='mx-4'>1-8 of {state.reviews.length} Reviews</span>
                {/* Implement drop down menu on hover, click turns on/off as well, set sortBy state depending on what is clicked, changes order components are rendered. */}
                <span className='mx-4'>Sort by: Most Recent</span>
            </div>
            {state.reviews.map((review) => {
                return <SingleReview review={review} />
            })}
        </div>
    )
}

export default Reviews;
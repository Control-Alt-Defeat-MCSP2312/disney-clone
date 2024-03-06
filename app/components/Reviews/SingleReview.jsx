import React from 'react';

const SingleReview = ({ review }) => {

    const starRating = (rating) => {
        const stars = [];
        const maxRating = 5;

        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span
                    key={i}
                    className={i <= rating ? 'text-sign-up-blue' : 'text-gray-300'}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    }

    const dateCalculator = (review) => {
        // String date at time of review
        const dateString = review.date;
        // Convert string date to milliseconds
        const dateFromString = new Date(dateString);
        // Rounded down time difference in seconds
        const secondsDiff = Math.floor((new Date() - dateFromString) / 1000);
        
        const years = Math.floor(secondsDiff / 31536000);
        if (years >= 1) {
            return years === 1 ? `${years} year ago` : `${years} years ago`
        }

        const months = Math.floor(secondsDiff / 2592000);
        if (months >= 1) {
            return months === 1 ? `${months} month ago` : `${months} months ago`
        }

        const weeks = Math.floor(secondsDiff / 604800);
        if (weeks >= 1) {
            return weeks === 1 ? `${weeks} week ago` : `${weeks} weeks ago`
        }

        const days = Math.floor(secondsDiff / 86400);
        if (days >= 1) {
            return days === 1 ? `${days} year ago` : `${days} years ago`
        }

        const hours = Math.floor(secondsDiff / 3600);
        if (hours >= 1) {
            return hours === 1 ? `${hours} year ago` : `${hours} years ago`
        }

        const minutes = Math.floor(secondsDiff / 60);
        if (minutes >= 1) {
            return minutes === 1 ? `${minutes} year ago` : `${minutes} years ago`
        }

        return `${Math.floor(secondsDiff)} seconds ago`;

    }

    return (
        <div className='flex flex-col my-4 mx-4'>
            <div className='flex justify-between'>
                <div className='my-2'>
                    <span>{starRating(review.rating)}</span>
                    <span className='mx-2'>{review.username}</span>
                    <span className='mx-2'>{dateCalculator(review)}</span>
                </div>
                <span>employee</span>
            </div>
            <div className='flex justify-start my-2'>{review.title}</div>
            <div className='flex justify-start my-2'>{review.review_body}</div>
            {/* Conditionally render based on whether or not recommended */}
            {review.recommended === true && ( <div className='flex justify-start my-2'>Recommended ✔ Yes</div>)}
            <div className='flex justify-start my-2'>
                <span>Helpful?</span>
                <button className='mx-2'>Yes • {review.helpful_yes}</button>
                <button className='mx-2'>No • {review.helpful_no}</button>
                <button className='mx-2'>Report</button>
            </div>
        </div>
    )
}

export default SingleReview;
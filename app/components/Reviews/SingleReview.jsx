import React from 'react';

const SingleReview = ({ review }) => {

	const starRating = (rating) => {
		const stars = [];
		const maxRating = 5;

		for (let i = 1; i <= maxRating; i++) {
			stars.push(
				<span
					key={i}
					className={i <= rating ? 'text-start-color' : 'text-gray-300'}
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
		<>
			<div className='flex flex-col my-4 mx-4 font-sans'>
				<div className='flex justify-between'>
					<div className='my-2 font-sans'>
						<span>{starRating(review.rating)} {review.username} • {dateCalculator(review)}</span>
						{/* <span className='mx-2'>{review.username}</span>
                    <span className='mx-2'>{dateCalculator(review)}</span> */}
					</div>
					<span>employee</span>
				</div>
				<div className='flex justify-start my-2 font-bold font-sans'>{review.title}</div>
				<div className='flex justify-start my-2 font-sans'>{review.review_body}</div>
				{/* Conditionally render based on whether or not recommended */}
				{review.recommended === true && (<div className='flex justify-start my-2'><b>Recommends this product ✔ </b>Yes</div>)}
				<div className='flex justify-start my-2'>
					<div className='pl-0.5 pr-2.5 pt-0.5'>
						<span>Helpful?</span>
					</div>
					<button className='cursor-pointer text-start-color bg-helpful-color mr-5px px-2.5 py-0.5 rounded-full hover:shadow-inner'><span className='text-sm'>Yes • {review.helpful_yes}</span></button>
					<button className='cursor-pointer text-start-color bg-helpful-color px-2.5 py-0.5 rounded-full hover:shadow-inner'><span className='text-sm'>No • {review.helpful_no}</span></button>
					<button className='cursor-pointer text-start-color bg-helpful-color px-2.5 py-0.5 rounded-full hover:shadow-inner'><span className='text-sm'>Report</span></button>
				</div>
			</div>
			{/* <div className='bv-content-item flex flex-col pt-2.5 pb-5'>
            <div className='bv-content-item-avatar-offset-off'>
                <div className='bv-content-container'>
                    <div className='bv-content-header py-2.5'>
                        <div className='bv-content-header-meta my-0.5'>
                            <span className='bv-content-rating'>
                                <span className='bv-rating-stars-container mr-1'></span>
                            </span>
                            <div className='bv-content-meta-wrapper'>
                                <div className='by-content-reference-data py-px'>
                                    <span className='bv-author py-px'>
                                        <button className='bv-avatar-popup-target'>
                                            <span></span>
                                        </button>
                                    </span>
                                    <div className='bv-content-datetime py-px'>
                                        <span className='bv-content-datetime-dot'>•</span>
                                        <span className='bv-content-datetime-stamp'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bv-content-title-container '></div>
                    </div>
                    <div className='bv-content-summary py-2.5'>
                        <div className='bv-content-summary-body-text mb-4'></div>
                        <div className='bv-content-data mb-5'></div>
                    </div>
                </div>
                <div className='bv-content-actions-container mb-5px pr-2.5 py-2.5'>
                    <div className='bv-content-feedback-vote flex'>
                        <div className='bv-content-feedback-vote-request py-0.5 pr-2.5'>Helpful?</div>
                    </div>
                </div>
                <div className='bv-secondary-content-list'></div>
                <div className='bv-content-feedback-btn-container mr-5px'>
                    <button className='btn-yes mr-5px py-0.5 px-2.5 cursor-pointer text-start-color bg-helpful-color rounded-full hover:shadow-inner'></button>
                    <button className='btn-yes py-0.5 px-2.5 cursor-pointer text-start-color bg-helpful-color rounded-full hover:shadow-inner'></button>
                </div>
                <div className='btn-report py-0.5 px-2.5 cursor-pointer text-start-color bg-helpful-color rounded-full hover:shadow-inner'>
                    <button className=''></button>
                </div>
            </div>
        </div> */}
		</>
	)
}

export default SingleReview;
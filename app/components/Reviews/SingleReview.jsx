import React, { useContext } from 'react';
import AppContext from '../../context/context';

const SingleReview = ({ review }) => {
	const { loading, reviews, fetchReviews } = useContext(AppContext);
	
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
			return months === 1 ? `a month ago` : `${months} months ago`
		}

		const weeks = Math.floor(secondsDiff / 604800);
		if (weeks >= 1) {
			return weeks === 1 ? `a week ago` : `${weeks} weeks ago`
		}

		const days = Math.floor(secondsDiff / 86400);
		if (days >= 1) {
			return days === 1 ? `one day ago` : `${days} days ago`
		}

		const hours = Math.floor(secondsDiff / 3600);
		if (hours >= 1) {
			return hours === 1 ? `an hour ago` : `${hours} hours ago`
		}

		const minutes = Math.floor(secondsDiff / 60);
		if (minutes >= 1) {
			return minutes === 1 ? `a minute ago` : `${minutes} minutes ago`
		}

		return `${Math.floor(secondsDiff)} seconds ago`;

	}

	if (loading) {
		console.log(loading)
		return <p>Loading reviews...</p>;
	}

	return (
		<>
			<div className='flex flex-col my-4 mx-4 font-sans'>
				<div className='flex justify-between'>
					<div className='my-2 font-AvenirNext'>
						<span>{starRating(review.rating)} {review.username} <span className='font-xs'>·</span> {dateCalculator(review)}</span>
						{/* <span className='mx-2'>{review.username}</span>
                    <span className='mx-2'>{dateCalculator(review)}</span> */}
					</div>
				</div>
				<div className='flex justify-start my-2 font-bold font-AvenirNext'>{review.title}</div>
				<div className='flex justify-start my-2 font-sans'>{review.review_body}</div>
				{/* Conditionally render based on whether or not recommended */}
				{review.recommended === true && (<div className='flex justify-start my-2'><b>Recommends this product ✔</b><span className='pr-1'>Yes</span></div>)}
				<div className='flex justify-start my-2'>
					<div className='pl-0.5 pr-2.5 pt-0.5'>
						<span>Helpful?</span>
					</div>
					<button className='cursor-pointer text-start-color bg-helpful-color mr-5px px-2.5 py-0.5 rounded-full hover:shadow-inner'><span className='text-sm'>Yes • {review.helpful_yes}</span></button>
					<button className='cursor-pointer text-start-color bg-helpful-color px-2.5 py-0.5 rounded-full hover:shadow-inner'><span className='text-sm'>No • {review.helpful_no}</span></button>
					<button className='cursor-pointer text-start-color bg-helpful-color px-2.5 py-0.5 rounded-full hover:shadow-inner'><span className='text-sm'>Report</span></button>
				</div>
			</div>
		</>
	)
}

export default SingleReview;
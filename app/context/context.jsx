'use client'
import { createContext, useState } from 'react';

// Import AppContext into your component along with useContent to access state
const AppContext = createContext();

/****************Context functions****************/
// Function that stores fetch data from review API hit into state.
export function ReviewProvider({ children }) {
    const [reviews, setReviews] = useState({
        reviews: [],
        loading: true
    });

    // Function to fetch reviews from the database and add them to state
    const fetchReviews = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/reviews');
            const data = await response.json();
            setReviews({
                reviews: data,
                loading: false
            });
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setReviews({
                reviews: [],
                loading: false
            });
        }
    };
    // Return review data and fetch function.
    return (
        <AppContext.Provider value={{
            reviews,
            fetchReviews
        }}>
            {children}
        </AppContext.Provider>
    );
}

// Context for Product Details Button Bar
export function ActiveProvider({ children }) {
    const [isActive, setIsActive] = useState('shipping');

    const changeIsActive = (id) => {
        setIsActive(id);
    }

    return (
        <AppContext.Provider value={{
            isActive,
            changeIsActive
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
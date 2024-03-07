import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [state, setState] = useState({
        reviews: [],
        loading: true,
        activeNavbarItem: null,
    });

    // Function to fetch reviews from the database
    const fetchReviews = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/reviews');
            const data = await response.json();
            // console.log(data)
            setState({ reviews: data, loading: false });
        }
        catch (error) {
            console.error('Error fetching reviews:', error);
            setState({ reviews: [], loading: false });
        }
    };

    // Function to set active navbar item
    const setActiveNavbarItem = (itemName) => {
        // Update the state
        setState((currentState) => ({
            ...currentState,
            activeNavbarItem: itemName,  // Set the active navbar item
        }));
    };

    // Fetch reviews when the component mounts
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <AppContext.Provider value={{ state, fetchReviews, setActiveNavbarItem }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}


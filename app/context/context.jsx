'use client'
import { createContext, useState } from 'react';

// Import AppContext into your component along with useContext to access state
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
    const [isActive, setIsActive] = useState('details');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const changeIsActive = (id) => {
        setIsActive(id);
    }
    const changeCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <AppContext.Provider value={{
            isActive,
            changeIsActive,
            isCollapsed,
            changeCollapsed,
        }}>
            {children}
        </AppContext.Provider>
    );
}



export const StickySidebarProvider = ({ children }) => {
    const [favoriteClicked, setFavoriteClicked] = useState(false);
    const [addCartClicked, setAddCartClicked] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [bagCount, setBagCount] = useState(0);
    const [quantity, setQuantity] = useState(1)

    const addToFavorites = () => {
        if(!favoriteClicked){
            setWishlistCount(1)
        } else {
            setWishlistCount(0)
        }
        setFavoriteClicked((prevValue) => !prevValue);
    }
  
    const handleIncrement = () => {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 2));
      };
    
      const handleDecrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
      };
    
      const addToBag = () => {
        console.log("Button clicked!S")
        if(bagCount >= 2){
            alert("This item is limited to 2 per Guest. Please change the quantity in your bag.");
            return;
        }
        setBagCount((prevValue) => prevValue + quantity);
        
  };
  
    const values = {
      favoriteClicked,
      addCartClicked,
      quantity,
      setFavoriteClicked,
      setAddCartClicked,
      wishlistCount,
      setWishlistCount,
      bagCount,
      setQuantity,
      setBagCount,
      addToFavorites,
    handleIncrement,
    handleDecrement,
    addToBag,
    };
  
    return (
      <AppContext.Provider value={values}>
        {children}
      </AppContext.Provider>
    );
  };
  
  
export default AppContext;
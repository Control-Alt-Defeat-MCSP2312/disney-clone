// MainContainer.jsx
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const MainContainer = () => {
  return (
    <div flex flex-col w-full> 
        <Header />
        <Navbar />
    </div>
  );
};

export default MainContainer;

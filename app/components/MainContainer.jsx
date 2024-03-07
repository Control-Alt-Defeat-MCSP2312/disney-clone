// MainContainer.jsx
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const MainContainer = () => {
  return (
    <div className="border-b border-gray-200 box-border text-gray-900 font-sans leading-6 text-left focus:outline-none">
        <div className="max-w-full h-39...">
        <Header />
        <Navbar />
        {/* Additional styles can be applied here to match your .nav__container */}
        </div>
    </div>
  );
};

export default MainContainer;

'use client'
import React, { useContext } from 'react';
import AppContext from '../../context/context';
import FavoritesButton from './FavoritesButton';

const QuantityAndAddToBag = () => {
  const { quantity, handleIncrement, handleDecrement, addToBag } = useContext(AppContext);
  const handleButtonClick = () => {
    addToBag();
  }

  return (
    <div className="px-4 p-2 mb-2 flex flex-col">
      <div className="mb-4 ml-12">
        <h3 className="text-md font-light text-black">Quantity</h3>
        <p className="text-gray-600 text-xs">The item is limited to 2 per Guest.</p>
        <div className="flex mt-2">
          <button
            onClick={handleDecrement}
            className="border-solid border-2 border-slate-300 text-slate-300 rounded-full px-2 h-6 w-6"
          >
            -
          </button>
          <span className="mx-2 font-normal text-sm text-gray-900">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="border-solid border-2 border-slate-300 text-slate-300 rounded-full px-2 h-6 w-6"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between ml-12">
        <button
          onClick={handleButtonClick}
          type="submit"
          className="mb-4 text-white rounded-full py-4 px-6 text-sm font-bold bg-gradient-to-r from-[#00aaf2] from-98.4 to-[#0063e5] to-6.4% hover:from-sign-up-hover hover:to-sign-up-hover sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 xl:py-4 xl:px-24"
        >
          ADD TO BAG - $39.98
        </button>
        <FavoritesButton />
      </div>
    </div>
  );
};

export default QuantityAndAddToBag;
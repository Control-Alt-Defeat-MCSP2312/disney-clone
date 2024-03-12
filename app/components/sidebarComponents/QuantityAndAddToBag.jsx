'use client'
import React, { useContext } from 'react';
import AppContext from '../../context/context';

const QuantityAndAddToBag = () => {
  const { quantity, handleIncrement, handleDecrement, addToBag } = useContext(AppContext);
  const handleButtonClick = () => {
    addToBag();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
      <p className="text-gray-600">The item is limited to 2 per Guest.</p>
      <div className="flex mt-4">
        <button
          onClick={handleDecrement}
          className="border-solid border-2 border-slate-300 text-slate-300 rounded-full px-3 py-1"
        >
          -
        </button>
        <span className="mx-3 font-normal text-lg text-gray-900">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="border-solid border-2 border-slate-300 text-slate-300 rounded-full px-3 py-1"
        >
          +
        </button>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="mt-8 mb-0 text-white rounded-full py-5 px-12 text-xl font-bold bg-gradient-to-r from-[#00aaf2] from-98.4 to-[#0063e5] to-6.4% hover:from-sign-up-hover hover:to-sign-up-hover sm:py-6 sm:px-14 md:py-8 md:px-16 lg:py-10 lg:px-20 xl:py-12 xl:px-24"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default QuantityAndAddToBag;
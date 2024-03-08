'use client'
import React, {useState} from 'react'

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 2));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  return (
    <>
    <div className="mx-auto max-w-2xl px-4 p-4 mb-6">
            <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
            <p className="text-gray-600">The item is limited to 2 per Guest.</p>
            <div className="flex mt-4">
              <button
                onClick={handleDecrement}
                className="border-solid border-2 border-slate-300 text-slate-500 rounded-full px-3 py-1"
              >
                -
              </button>
              <span className="mx-3 font-bold text-gray-900">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="border-solid border-2 border-slate-300 text-slate-500 rounded-full px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
    </>
  )
}

export default Quantity;
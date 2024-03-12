"use client";
import React from "react";
import { useState } from "react";

export default function CarouselDetail({ product, key }) {
  const [hover, setHover] = useState(false);

  function handleClick() {
    window.open(product.url, "_blank");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Ensure flex column layout */}
      <div className="flex items-center justify-center ">
        <img
          className="size-80 mr-1"
          key={key}
          src={product.src}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={handleClick}
        />
      </div>
      {hover ? (
        <h2 className="hover: text-blue-500 transition ease-in-out">
          {product.itemName}
        </h2>
      ) : (
        <h2>{product.itemName}</h2>
      )}
      <div className="flex justify-between">
        {/* Use a wrapper div for text */}
        <p className="text-gray-900 line-through mr-2">{product.itemPrice}</p>
        <p className="text-red-500">{product.discounted}</p>
      </div>
    </div>
  );
}

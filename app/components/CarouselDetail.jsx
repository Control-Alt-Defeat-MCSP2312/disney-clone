"use client";

import React from "react";

export default function CarouselDetail({ product }) {
  return (
    <div className=" flex-col items-center justify-center mx-4">
      <img className="item" src={product.src} />

      <h2>{product.itemName}</h2>
      <span className="flex gap-5 text-2xl px-4 font-extralight">
        <p className="text-gray-900 line-through">{product.priceName}</p>
        <p className="text-red-500">{product.discounted}</p>
      </span>
    </div>
  );
}

"use client";
import AppContext from "@/app/context/context";
import React, { useContext, useState } from "react";

const FavoritesButton = () => {
  const {favoriteClicked, addToFavorites} = useContext(AppContext)

  const handleHeartClick = () => {
    addToFavorites();
    };
  return (
    <>
      <div onClick={handleHeartClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={favoriteClicked ? "#0063e5" : "white"}
          viewBox="0 -10 50 50"
          strokeWidth="1"
          stroke="#0063e5"
          className="w-18 h-24 ml-6 sm:w-24 sm:h-28 md:w-28 md:h-32"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    </>
  );
};

export default FavoritesButton;

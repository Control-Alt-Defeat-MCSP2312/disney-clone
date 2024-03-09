"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselDetail from "./CarouselDetail";
import { useState } from "react";

//npm install react-multi-carousel --save

export default function YMAL() {
  const productData = [
    {
      id: 1,
      itemName: "Scarlet Witch loungefly Mini Backpack",
      itemPrice: "$88",
      src: "/moreToExplore1.jpeg",
      discounted: "61.00",
      url: "https://www.disneystore.com/scarlet-witch-loungefly-mini-backpack-420143544443.html",
    },
    {
      id: 2,
      itemName: "Spider-man Faux Fur loungefly Mini Backpack",
      itemPrice: "$88",
      src: "/shopeMore1.jpeg",
      discounted: "$39.98",
      url: "https://www.disneystore.com/spider-man-faux-fur-loungefly-mini-backpack-442031181448.html?isProductSearch=1&searchType=autosuggest-popular&siteSearchTopProduct=1",
    },
    {
      id: 3,
      itemName: "Captain America loungefly Mini Backpack",
      itemPrice: "$88",
      src: "/moreToExplore9.jpeg",
      discounted: "61.60",
      url: "https://www.disneystore.com/captain-america-loungefly-mini-backpack-420145116969.html",
    },
    {
      id: 4,
      itemName: "The Marvels Backpack",
      itemPrice: "$40",
      src: "/moreToExplore6.jpeg",
      discounted: "$34.98",
      url: "https://www.disneystore.com/the-marvels-backpack-420145064239.html?isProductSearch=1&searchType=regular",
    },
    {
      id: 5,
      itemName: "Marvel The Avenger loungefly Mini Backpack",
      itemPrice: "$78.00",
      src: "/shopeMore5.jpeg",
      url: "https://www.disneystore.com/marvel-the-avengers-loungefly-mini-backpack-442031856971.html",
    },
    {
      id: 6,
      itemName: "Wish loungefly Mini Backpack",
      itemPrice: "$75",
      src: "/moreToExplore8.jpeg",
      discounted: "$56.25",
      url: "https://www.disneystore.com/wish-loungefly-mini-backpack-442031181288.html",
    },
    {
      id: 7,
      itemName: "Mickey Mouse and Friends loungefly Mini Backpack",
      itemPrice: "$78",
      src: "/shopeMore2.jpeg",
      discounted: "54.98",
      url: "https://www.disneystore.com/mickey-mouse-and-friends-loungefly-mini-backpack-442031852591.html",
    },
    {
      id: 8,
      itemName: "Mickey Mouse Woven loungefly Mini Backpack",
      itemPrice: "$88.00",
      src: "/shopeMore6.jpeg",
      url: "https://www.disneystore.com/mickey-mouse-woven-loungefly-mini-backpack-442031858128.html",
    },
    {
      id: 9,
      itemName: "Frozen loungefly Mini Backpack",
      itemPrice: "$88",
      src: "/moreToExplore7.jpeg",
      discounted: "59.98",
      url: "https://www.disneystore.com/frozen-loungefly-mini-backpack-442031180786.html",
    },
    {
      id: 10,
      itemName:
        "Chip 'n Dale's Rescue Rangers Loungefly Mini Backpack-Disney100",
      itemPrice: "$88",
      src: "/shopeMore8.jpeg",
      discounted: "$39.98",
      url: "https://www.disneystore.com/chip-n-dales-rescue-rangers-loungefly-mini-backpack-disney100-420145000794.html?isProductSearch=1&searchType=autosuggest-popular&siteSearchTopProduct=1",
    },
    {
      id: 11,
      itemName:
        "Darth Vader Glow-in-the-Dark Loungefly Mini Backpack-Star Wars",
      itemPrice: "$88",
      src: "/shopeMore9.jpeg",
      discounted: "$59.98",
      url: "https://www.disneystore.com/darth-vader-glow-in-the-dark-loungefly-mini-backpack-star-wars-420145001371.html",
    },
    {
      id: 12,
      itemName: "Grogu Loungefly Mini Backpack - Star Wars: The Mandalorian",
      itemPrice: "$78",
      src: "/shopeMore7.jpeg",
      discounted: "$54.60",
      url: "https://www.disneystore.com/grogu-loungefly-mini-backpack-star-wars-the-mandalorian-442031864891.html?isProductSearch=1&searchType=autosuggest-popular&siteSearchTopProduct=1",
    },
    {
      id: 13,
      itemName: "Mickey Mouse and Friends Backpack",
      itemPrice: "$29.99",
      src: "/moretoExplore5.jpeg",
      url: "https://www.disneystore.com/mickey-mouse-and-friends-backpack-442031852836.html",
    },
  ];

  const [carouselRef, setCarouselRef] = useState(null);

  // making the arrows funciton
  function moveLeft() {
    if (carouselRef) {
      carouselRef.previous();
    }
  }
  function moveRight() {
    if (carouselRef) {
      carouselRef.next();
    }
  }
  // this is where the .map was
  const product = productData
    .slice(7, 13)
    .map((item) => <CarouselDetail product={item} />);

  return (
    <div className="flex flex-col mt-9">
      <div className="flex items-center justify-between mb-4">
        <div className="text pl-4">
          <h1 className="text-2xl">You May Also Like</h1>
        </div>
        <div className="flex flex-1 justify-end">
          <button onClick={moveLeft}>
            {
              <svg
                class="h-12 w-12 text-slate-100 hover:text-blue-500 ease-in-out"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="15 6 9 12 15 18" />
              </svg>
            }
          </button>
          <button onClick={moveRight}>
            {" "}
            <svg
              class="h-12 w-12 text-slate-100 hover:text-blue-500 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        draggable={true}
        slidesToSlide={1}
        ref={(ref) => setCarouselRef(ref)}
      >
        {product}
      </Carousel>
    </div>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

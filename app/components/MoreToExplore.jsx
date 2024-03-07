import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselDetail from "./CarouselDetail";

export default function MoreToExplore() {
  const productData = [
    {
      id: 1,
      itemName: "Scarlet Witch loungefly Mini Backpack",
      itemPrice: "$61.00",
      src: "/moreToExplore1.jpeg",
    },
    {
      id: 2,
      itemName: "Spider-man Faux Fur loungefly Mini Backpack",
      itemPrice: "$39.98",
      src: "/shopeMore1.jpeg",
    },
    {
      id: 3,
      itemName: "Captain America loungefly Mini Backpack",
      itemPrice: "$61.60",
      src: "/moreToExplore9.jpeg",
    },
    {
      id: 4,
      itemName: "The Marvels Backpack",
      itemPrice: "$34.98",
      src: "/moreToExplore6.jpeg",
    },
    {
      id: 5,
      itemName: "Marvel The Avenger loungefly Mini Backpack",
      itemPrice: "$78.00",
      src: "/shopeMore5.jpeg",
    },
    {
      id: 6,
      itemName: "Wish loungefly Mini Backpack",
      itemPrice: "$56.25",
      src: "/moreToExplore8.jpeg",
    },
    {
      id: 7,
      itemName:
        "Mickey Mouse and Friends loungefly Mini Backpack - Disney Parks - Disney100",
      itemPrice: "$54.98",
      src: "/shopeMore2.jpeg",
    },
    {
      id: 8,
      itemName: "Mickey Mouse Woven loungefly Mini Backpack",
      itemPrice: "$88.00",
      src: "/shopeMore6.jpeg",
    },
    {
      id: 9,
      itemName: "Frozen loungefly Mini Backpack",
      itemPrice: "$59.98",
      src: "/moreToExplore7.jpeg",
    },
    {
      id: 10,
      itemName:
        "Chip 'n Dale's Rescue Rangers Loungefly Mini Backpack-Disney100",
      itemPrice: "$39.98",
      src: "/shopeMore8.jpeg",
    },
    {
      id: 11,
      itemName:
        "Darth Vader Glow-in-the-Dark Loungefly Mini Backpack-Star Wars",
      itemPrice: "$59.98",
      src: "/shopeMore9.jpeg",
    },
    {
      id: 12,
      itemName: "Grogu Loungefly Mini Backpack - Star Wars: The Mandalorian",
      itemPrice: "$54.60",
      src: "/shopeMore7.jpeg",
    },
    {
      id: 13,
      itemName: "Mickey Mouse and Friends Backpack",
      itemPrice: "$29.99",
      src: "/moretoExplore5.jpeg",
    },
  ];

  const product = productData.map((item) => <CarouselDetail product={item} />);

  return (
    <div className="housing-container">
      <div className="flex items-center justify-between h-32">
        <div className="text">
          <h1>More to explore</h1>
        </div>
      </div>

      <Carousel responsive={responsive}>{product}</Carousel>
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

'use client'

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const images = {
  images: [
    {
      id: 1,
      src: "/shopMore1.jpeg",
      alt: "Shop More",
      name: "Marvel The Avengers Loungefly Mini Backpack",
      price: "$78",
      discounted: " ",
    },
    {
      id: 2,
      src: "/shopMore2.jpeg",
      alt: "Shop More",
      name: "Mickey Mouse and Friends Loungefly Mini Backpack",
      price: "$78",
      discounted: "$54.98",
    },
    {
      id: 3,
      src: "/moreToExplore10.jpeg",
      alt: "Shop More",
      name: "Walt Disney Tote",
      price: "$50",
      discounted: " ",
    },
    {
      id: 4,
      src: "/shopMore4.jpeg",
      alt: "Shop More",
      name: "Lilo and Stitch Loungefly Mini Backpack",
      price: "$78",
      discounted: "$54.60",
    },
    {
      id: 5,
      src: "/shopMore5.jpeg",
      alt: "Shop More",
      name: "Marvel and Friends Loungefly Mini Backpack",
      price: "$78",
      discounted: "$54.60",
    },
    {
      id: 6,
      src: "/shopMore6.jpeg",
      alt: "Shop More",
      name: "Star Wars Darth Vader LoungeFly Backpack - Disney 123",
      price: "$78",
      discounted: " ",
    },
    {
      id: 7,
      src: "/shopMore7.jpeg",
      alt: "Shop More",
      name: "Star Wars: Baby Yoda Loungefly Mini Backpack",
      price: "39.99",
      discounted: " ",
    },
    {
      id: 8,
      src: "/shopMore8.jpeg",
      alt: "Shop More",
      name: "Chip 'n Dale's Rescue Loungefly Mini Backpack",
      price: "$88",
      discounted: "$64.20",
    },
    {
      id: 9,
      src: "/shopMore9.jpeg",
      alt: "Shop More",
      name: "Star Wars Darth Vader LoungeFly Backpack - Disney 123",
      price: "$78",
      discounted: " ",
    },
  ],
};

const YouMayLikeCarousel = ({ images }) => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image 
                src={image.src}
                height={50}
                width={50}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default YouMayLikeCarousel;
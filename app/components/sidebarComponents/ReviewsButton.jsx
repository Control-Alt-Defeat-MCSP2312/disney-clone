"use client";

import React from "react";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
const reviews = { href: "#", average: 4.5, totalCount: 10 };

const ReviewsButton = () => {
  const rating = reviews.average;
  return (
    <>
      <div
        id="reviews"
        className="mt-4 mx-auto max-w-2xl px-4 bg-gray text-[#0063e5] mb-6"
      >

        <div className="flex">
          {/* Stars */}
          <div className="flex">
            <ReactStars
              count={5}
              value={4.5}
              color1={"white"}
              color2={"#0063e5"}
              edit={false}
              size={32}
            />
          </div>
          <a href={reviews.href} className="ml-3 text-md font-light">
            ({reviews.totalCount})
          </a>
        </div>
      </div>
    </>
  );
};

export default ReviewsButton;

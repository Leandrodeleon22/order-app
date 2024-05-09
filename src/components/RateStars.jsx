"use client";

import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";

const RateStars = () => {
  const [rate, setRate] = useState(5);
  const arrayOfStarIcon = Array.from({ length: 5 }, (_, index) => index + 1);
  //   console.log(rate);
  //   const rate = 5;

  const handleClick = (rate) => {
    setRate(rate);
  };
  return (
    <>
      {arrayOfStarIcon.map((numOfStar) => {
        return (
          <MdStarRate
            key={numOfStar}
            className={`${
              rate < numOfStar ? "text-gray-300" : "text-yellow-400"
            } cursor-pointer text-[1.75rem] `}
            onClick={() => handleClick(numOfStar)}
          />
        );
      })}
    </>
  );
};

export default RateStars;

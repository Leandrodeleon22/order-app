"use client";

import React from "react";
import { MdStarRate } from "react-icons/md";


const RateStars = ({ rate, setRate }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => index + 1).map((numOfStar) => (
        <MdStarRate
          key={numOfStar}
          className={`${rate < numOfStar ? "text-gray-300" : "text-yellow-400"} cursor-pointer text-[1.75rem]`}
          onClick={() => setRate(numOfStar)}
        />
      ))}
    </>
  );
};

export default RateStars;
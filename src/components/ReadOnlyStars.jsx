import React from "react";
import { MdStarRate } from "react-icons/md";

const ReadOnlyStars = ({ rate }) => {
  return (
    <>
      <span className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((numOfStar) => (
          <MdStarRate
            key={numOfStar}
            className={`${rate < numOfStar ? "text-gray-300" : "text-yellow-400"} text-[1.75rem]`}
          />
        ))}
      </span>
    </>
  );
};

export default ReadOnlyStars;

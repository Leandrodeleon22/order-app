import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const Counter = () => {
  return (
    <div className="flex">
      <button className="bg-gray-200 px-2 rounded-[5px]">
        <FaPlus />
      </button>
      <div>1</div>
      <button>
        <FaMinus />
      </button>
    </div>
  );
};

export default Counter;

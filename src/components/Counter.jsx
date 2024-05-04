import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const Counter = () => {
  return (
    <div className="flex">
      <button className="bg-gray-200 px-2 rounded-[5px]">
        <FaMinus />
      </button>

      <div className="w-7 bg-slate-50 text-center">1</div>

      <button className="bg-gray-200 px-2 rounded-[5px]">
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;

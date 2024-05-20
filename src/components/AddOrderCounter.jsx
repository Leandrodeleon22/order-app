"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AddOrderCounter = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
  isAvailable,
}) => {
  return (
    <div className="flex">
      <button
        className="bg-gray-200 px-2 rounded-[5px]"
        onClick={() => {
          decrementQuantity();
        }}
        disabled={!isAvailable}
      >
        <FaMinus />
      </button>

      <div className="w-11 bg-slate-50 text-center">{quantity}</div>

      <button
        className="bg-gray-200 px-2 rounded-[5px]"
        onClick={() => {
          incrementQuantity();
        }}
        disabled={!isAvailable}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddOrderCounter;

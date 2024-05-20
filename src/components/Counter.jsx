"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { decrementQuantity, incrementQuantity } from "../lib/actions";
import { useRouter } from "next/navigation";
const Counter = ({ quantity, tableId, orderId, isAvailable }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <button
        className="bg-gray-200 px-2 rounded-[5px]"
        onClick={async () => {
          await decrementQuantity({ quantity, tableId, orderId });
          router.refresh();
        }}
        disabled={!isAvailable}
      >
        <FaMinus />
      </button>

      <div className="w-11 bg-slate-50 text-center">{quantity}</div>

      <button
        className="bg-gray-200 px-2 rounded-[5px]"
        onClick={async () => {
          await incrementQuantity({ quantity, tableId, orderId });
          router.refresh();
        }}
        disabled={!isAvailable}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;

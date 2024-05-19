"use client";
// import { toast } from "react-toastify";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { orderStore } from "../store/order";
const ConfirmOrderBtn = () => {
  //   const [isDisable, setIsDisable] = useState(false);
  //   const isOrder = orderStore((state) => state.order);
  //   console.log(isOrder.orders);

  //   const updateOrder = orderStore((state) => state.updateOrder);

  const confirmOrder = async () => {
    // toast.success("Thank you for your order");

    toast("Thank you for your order", {
      icon: "😍",
      style: {
        background: "#e42a2a",
        color: "white",
        position: "relative",
        scale: 1.35,
        top: "100px",
        right: "100px",
      },
    });
    console.log("test");
  };
  return (
    <>
      <button
        className="bg-red-500 rounded-md py-3 font-bold text-white mt-5 hover:bg-red-600 text-[1.1rem] mb-7 disabled:bg-slate-400"
        onClick={confirmOrder}
        // disabled={isOrder.orders}
      >
        Confirm Order
      </button>
    </>
  );
};

export default ConfirmOrderBtn;

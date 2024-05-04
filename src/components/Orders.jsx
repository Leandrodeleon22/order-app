import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import Counter from "./Counter";

const Orders = () => {
  return (
    <div className="bg-white w-1/4 flex flex-col p-3 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-medium">My Orders</h1>
        <MdDeleteOutline />
      </div>
      <div className="bg-slate-100 rounded-md p-3">
        <div className="flex justify-between items-center">
          <p>Toronto Burger</p>
          <IoIosClose className="text-2xl cursor-pointer" />
        </div>
        <p>Delicious toronto burger</p>
        <div className="flex justify-between">
          <span>$50</span>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Orders;

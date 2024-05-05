import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Counter from "./Counter";

const Orders = () => {
  return (
    <div className="bg-white w-[30%] h-min flex flex-col p-3 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-medium text-[1.2rem] text-red-500 ">My Orders</h1>
        <MdDeleteOutline className="cursor-pointer" />
      </div>
      <div className="bg-slate-100 p-2 rounded-md">
        <p className="font-semibold">Toronto Burger</p>
        <p className="italic text-gray-500">Delicious toronto burger</p>
        <div className="flex justify-between mt-6">
          <span className="font-bold">$60</span>
          <Counter />
        </div>
      </div>

      <div className="flex flex-col  items-center mt-14">
        <span className="font-bold text-[1.5rem]">TOTAL</span>
        <span>$60.00</span>
      </div>

      <button className="bg-red-500 rounded-md py-3 text-white mt-5 hover:bg-red-600 text-[1.1rem]">
        Confirm Order
      </button>
    </div>
  );
};

export default Orders;

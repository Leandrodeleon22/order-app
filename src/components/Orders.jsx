import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Counter from "./Counter";

const Orders = () => {
  return (
    <div className="bg-white w-[30%] h-min flex flex-col p-3 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-medium text-[1.2rem] text-red-500 ">My Orders</h1>
        <MdDeleteOutline className="cursor-pointer" />
      </div>
      <div className="bg-slate-100 p-2 rounded-md">
        <div className="flex justify-between">
          <p className="font-semibold">Regina Burger</p>
          <IoCloseSharp className="cursor-pointer" />
        </div>
        {/* <p className="italic text-gray-500">Delicious toronto burger</p> */}
        <div className="flex justify-between mt-4">
          <span className="font-bold">$7</span>
          <Counter />
        </div>
      </div>

      <div className="flex flex-col  items-center mt-14">
        <span className="font-bold text-[1.5rem]">TOTAL</span>
        <span>$70.00</span>
      </div>

      <button className="bg-red-500 rounded-md py-3 text-white mt-5 hover:bg-red-600 text-[1.1rem]">
        Confirm Order
      </button>
    </div>
  );
};

export default Orders;

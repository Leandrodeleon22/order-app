import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Counter from "./Counter";

const Orders = () => {
  return (
    <div className="bg-white w-1/4 flex flex-col p-3 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-medium">My Orders</h1>
        <MdDeleteOutline />
      </div>
      <div className="bg-slate-100 p-2 rounded-md">
        <p>Toronto Burger</p>
        <p>Delicious toronto burer</p>
        <div className="flex justify-between">
          <span>$50</span>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Orders;

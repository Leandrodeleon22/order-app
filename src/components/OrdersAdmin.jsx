"use client";
import React from "react";

const OrdersAdmin = ({ order }) => {
  // console.log(order);
  return (
    <>
      <div className="bg-white px-5 py-4 rounded-md my-5">
        <table className="w-full ">
          <thead>
            <tr className="text-left">
              <th>Product</th>
              <th className="text-right">Quantity</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[1.2rem]">
              <td>Cheesebuger</td>
              <td className="text-right pr-8">1</td>
              <td className="text-right pr-2">40</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>desription of the burger</p>
        </div>
        <div className="flex justify-between  ">
          <div>
            <h1>Note</h1>
            <p>I want my burger to be half cooked</p>
          </div>

          <div className="flex items-end">
            <button className="mr-4">edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersAdmin;

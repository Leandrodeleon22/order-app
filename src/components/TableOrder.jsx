import React, { useContext } from "react";
import { getAllOrders } from "../lib/data";
import { OrderContext } from "../lib/orderContext";
import { orderStore } from "../store/order";
import { formattedPrice } from "../utils/utils";
import ClearAllBtn from "../components/ClearAllBtn";
import DeleteOrderAdminBtn from "../components/DeleteOrderAdminBtn";

export default async function TableOrder({ tableNum }) {
  // const allOrders = await getAllOrders(tableNum);

  // const { orders } = useContext(OrderContext);
  // const orderss = orderStore((state) => state.order);
  // console.log(orderss.orders);
  const allOrders = await getAllOrders(tableNum);
  console.log(allOrders);
  const accPrice = allOrders.reduce((accumulator, order) => {
    return accumulator + order.quantity * order.product.price;
  }, 0);

  const formattedAccPrice = formattedPrice(accPrice);

  return (
    <>
      <section className="bg-slate-100 w-4/5 my-7 p-6 rounded-md">
        <div className="flex justify-between  ">
          <h1 className="text-red-500"> Table {tableNum}</h1>
          <div>
            <span className="mr-3 text-red-600 font-bold">status</span>
            <span>pending</span>
          </div>
        </div>

        {allOrders.map((order) => {
          const totalPrice = order.quantity * order.product.price;
          // allTotalPrice.push(totalPrice);
          const formattedTotalPrice = formattedPrice(totalPrice);
          return (
            <div
              key={order.orderId}
              className="bg-white px-5 py-4 rounded-md my-5 shadow-md"
            >
              <table className="w-full ">
                <thead>
                  <tr className="text-left">
                    <th>Product</th>
                    <th className="text-right">Quantity</th>
                    <th className="text-right pr-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[1.2rem]">
                    <td>{order.product.name}</td>
                    <td className="text-right pr-8">{order.quantity}</td>
                    <td className="text-right pr-2">{formattedTotalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-1/2">
                <p className="italic text-gray-400">
                  {order.product.description}
                </p>
              </div>
              <div className="flex justify-between  ">
                <div>
                  <h1>Note</h1>
                  <p className="text-red-500">
                    I want my burger to be half cooked
                  </p>
                </div>

                <div className="flex items-end">
                  {/* <button className="mr-4">edit</button> */}
                  <DeleteOrderAdminBtn orderId={order.orderId} />
                </div>
              </div>
            </div>
          );
        })}
        {/* 
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
        </div> */}

        <div className="flex justify-between items-center">
          <div>
            {/* <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
              clear all
            </button> */}
            <ClearAllBtn tableNum={tableNum} name="Clear All" />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">Total Price</span>
            <span>{formattedAccPrice}</span>
          </div>
        </div>
      </section>
    </>
  );
}

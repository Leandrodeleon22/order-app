// "use client";
// import React, { useContext, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Counter from "./Counter";
import {
  getAllOrders,
  getOrders,
  getProductsOrder,
  getSingleTableNumber,
} from "../lib/data";
import SingleOrder from "../components/SingleOrder";
import { headers } from "next/headers";
import DeleteAllOrdersButton from "./DeleteAllOrdersButton";
import { formattedPrice } from "../utils/utils";
import { OrderContext } from "../lib/orderContext";
import { orderStore } from "../store/order";
import ConfirmOrderBtn from "../components/ConfirmOrderBtn";

const Orders = async ({ tableId, urlString }) => {
  // const { orders, setAllOrders } = useContext(OrderContext);
  // const headerList = headers();
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  // console.log(searchParams);

  // const updateOrder = orderStore((state) => state.updateOrder);

  // updateOrder({

  // })

  // useEffect(() => {
  //   // Assuming you fetch allOrders here and set it in the context

  //   setAllOrders(allOrders);
  // }, [tableId, allOrders]);
  // const tableNum = parseInt(fullUrl[fullUrl.length - 1]);

  // const num = await getTableNum();
  // console.log(tableNum);
  // console.log(searchParams);
  // console.log(tableId);
  const allOrders = await getAllOrders(tableId);
  // const orders = await getOrders(tableId);
  console.log(allOrders);
  const table = await getSingleTableNumber(tableId);

  const { isAvailable, orderStatus } = table[0];

  const totalPrice = allOrders
    .map((order) => {
      const actualPrice = formattedPrice(order.product.price);
      const price = order.quantity * actualPrice;
      return price;
    })
    .reduce((total, num) => total + num, 0);

  const ordersLength = allOrders.length;
  // console.log(totalPrice);
  // console.log(allOrders);
  // const products = allOrders.map((obj) => {
  //   return obj.productId;
  // });
  // allOrders.forEach((order) => {
  //   console.log(order.product);
  // });
  // console.log(products);
  // const productsOrder = await getProductsOrder(products);
  // console.log(productsOrder);
  return (
    <div className="bg-white w-[30%] h-min flex flex-col p-3 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-medium text-[1.2rem] text-red-500 ">My Orders</h1>
        {/* <MdDeleteOutline className="cursor-pointer" /> */}

        <DeleteAllOrdersButton tableId={tableId} isAvailable={isAvailable} />
      </div>

      {/* <div className="bg-slate-100 p-2 rounded-md">
        <div className="flex justify-between">
          <p className="font-semibold">Regina Burger</p>
          <IoCloseSharp className="cursor-pointer" />
        </div>
       
        <div className="flex justify-between mt-4">
          <span className="font-bold">$7</span>
          <Counter />
        </div>
      </div> */}

      {allOrders.map((order) => {
        // console.log(order.table.isAvailable);
        return (
          <SingleOrder
            key={order.orderId}
            name={order.product.name}
            price={order.product.price}
            quantity={order.quantity}
            orderId={order.orderId}
            tableId={order.tableId}
            isAvailable={order.table.isAvailable}
            // urlString={urlString}
          />
        );
      })}

      <div className="flex flex-col  items-center mt-14">
        <span className="font-bold text-[1.7rem] text-red-500 ">TOTAL</span>
        <span className="font-bold text-[1.25rem]">${totalPrice}.00</span>
      </div>

      {/* <button className="bg-red-500 rounded-md py-3 font-bold text-white mt-5 hover:bg-red-600 text-[1.1rem]">
        Confirm Order
      </button> */}
      <ConfirmOrderBtn
        ordersLength={ordersLength}
        isAvailable={isAvailable}
        orderStatus={orderStatus}
        tableId={tableId}
      />
    </div>
  );
};

export default Orders;

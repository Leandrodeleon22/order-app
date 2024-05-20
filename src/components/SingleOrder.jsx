// "use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Counter from "../components/Counter";
import { formattedPrice } from "../utils/utils";
import { deleteOrder } from "../lib/actions";
import DeleteOrderButton from "../components/DeleteOrderButton";
// import { useRouter } from "next/navigation";

const SingleOrder = ({
  name,
  price,
  quantity,
  orderId,
  tableId,
  urlString,
  isAvailable,
}) => {
  const actualPrice = formattedPrice(price);
  //   await deleteOrder(orderId);
  //   const router = useRouter();
  //   console.log(orderId);
  // console.log(isAvailable);
  return (
    <>
      <div className="bg-slate-100 p-2 rounded-md mb-5">
        <div className="flex justify-between">
          <p className="font-semibold">{name}</p>

          <DeleteOrderButton
            orderId={orderId}
            tableId={tableId}
            isAvailable={isAvailable}
          />

          {/* <IoCloseSharp
            className="cursor-pointer"
            onClick={async () => {
              await deleteOrder(orderId);
              router.refresh();
            }}
          /> */}
        </div>
        {/* <p className="italic text-gray-500">Delicious toronto burger</p> */}
        <div className="flex justify-between mt-4">
          <span className="font-bold">${actualPrice}</span>
          <Counter
            quantity={quantity}
            tableId={tableId}
            orderId={orderId}
            isAvailable={isAvailable}
          />
        </div>
      </div>
    </>
  );
};

export default SingleOrder;

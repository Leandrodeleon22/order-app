"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { deleteOrder } from "../lib/actions";
import { useRouter } from "next/navigation";

const DeleteOrderButton = ({ orderId, tableId, isAvailable }) => {
  const router = useRouter();

  return (
    <>
      <button
        // className={`${!isAvailable ? "cursor-pointer" : ""}`}
        onClick={async () => {
          await deleteOrder({ orderId, tableId });
          router.refresh();
        }}
        disabled={!isAvailable}
      >
        <IoCloseSharp />
      </button>
    </>
  );
};

export default DeleteOrderButton;

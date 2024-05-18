"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { deleteOrder } from "../lib/actions";
import { useRouter } from "next/navigation";

const DeleteOrderButton = ({ orderId, tableId }) => {
  const router = useRouter();

  return (
    <>
      <IoCloseSharp
        className="cursor-pointer"
        onClick={async () => {
          await deleteOrder({ orderId, tableId });
          router.refresh();
        }}
      />
    </>
  );
};

export default DeleteOrderButton;

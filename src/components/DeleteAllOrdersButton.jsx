"use client";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

import { deleteAllOrder } from "../lib/actions";
import { useRouter } from "next/navigation";
const DeleteAllOrdersButton = ({ tableId, isAvailable }) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={async () => {
          await deleteAllOrder(tableId);
          router.refresh();
        }}
        disabled={!isAvailable}
      >
        <MdDeleteOutline />
      </button>
    </>
  );
};

export default DeleteAllOrdersButton;

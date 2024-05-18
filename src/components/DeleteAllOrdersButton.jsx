"use client";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

import { deleteAllOrder } from "../lib/actions";
import { useRouter } from "next/navigation";
const DeleteAllOrdersButton = ({ tableId }) => {
  const router = useRouter();
  return (
    <>
      <MdDeleteOutline
        className="cursor-pointer"
        onClick={async () => {
          await deleteAllOrder(tableId);
          router.refresh();
        }}
      />
    </>
  );
};

export default DeleteAllOrdersButton;

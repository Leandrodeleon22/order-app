"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteOrder } from "../lib/actions";

const DeleteOrderAdminBtn = ({ orderId }) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={async () => {
          await deleteOrder({ orderId });
          router.refresh();
        }}
      >
        delete
      </button>
    </>
  );
};

export default DeleteOrderAdminBtn;

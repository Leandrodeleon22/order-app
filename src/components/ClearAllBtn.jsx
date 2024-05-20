"use client";
import React from "react";
import {
  deleteAllOrder,
  updateOrderStatus,
  updateTableIsAvailable,
} from "../lib/actions";
import { useRouter } from "next/navigation";

const ClearAllBtn = ({ tableNum, name }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
        onClick={async () => {
          await deleteAllOrder(tableNum);
          await updateTableIsAvailable({ tableId: tableNum, available: true });
          await updateOrderStatus({ tableId: tableNum, strMessage: "pending" });
          router.refresh();
        }}
      >
        {name}
      </button>
    </>
  );
};

export default ClearAllBtn;

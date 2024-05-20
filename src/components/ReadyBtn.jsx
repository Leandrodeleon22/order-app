"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { updateOrderStatus } from "../lib/actions";

const ReadyBtn = ({ tableNum }) => {
  const router = useRouter();

  const handleClickBtn = async () => {
    let strMessage = "Ready";

    await updateOrderStatus({ tableId: tableNum, strMessage });
    router.refresh();
  };
  return (
    <>
      <button
        className="bg-red-500 mr-2 text-white px-5 rounded-sm hover:bg-green-500 py-1"
        onClick={handleClickBtn}
      >
        Ready
      </button>
    </>
  );
};

export default ReadyBtn;

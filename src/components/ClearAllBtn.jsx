"use client";
import React from "react";
import { deleteAllOrder } from "../lib/actions";
import { useRouter } from "next/navigation";

const ClearAllBtn = ({ tableNum, name }) => {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
        onClick={async() => {
          await deleteAllOrder(tableNum);
          router.refresh();
        }}
      >
        {name}
      </button>
    </>
  );
};

export default ClearAllBtn;

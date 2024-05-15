"use server";

import { redirect } from "next/navigation";
import { getSingleTableNumber } from "./data";

export async function navigate(data) {
  //   console.log(data.get("id"));
  const tableNumber = data.get("id");

  const dataTableNumber = await getSingleTableNumber(parseInt(tableNumber));
  console.log(dataTableNumber);
  if (!Number(tableNumber)) {
    return;
  }

  redirect(`/home`);
}

export async function getTable(data) {
  //   console.log(data.get("id"));
  const tableNumber = data.get("id");

  const dataTableNumber = await getSingleTableNumber(parseInt(tableNumber));
  console.log(dataTableNumber);
  if (!Number(tableNumber)) {
    return;
  }

  redirect(`/home`);
}

"use server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { cache } from "react";

export async function navigate(data) {
  //   console.log(data.get("id"));
  const tableNumber = data.get("id");

  // const dataTableNumber = await getSingleTableNumber(parseInt(tableNumber));
  // console.log(dataTableNumber);
  const tableNum = parseInt(tableNumber);
  if (!tableNum) {
    return;
  }

  redirect(`/home/?table=${tableNumber}`);
}

export const addOrder = async (data) => {
  // const order = data.get("tableNum");
  // // data;
  // const d = await data;

  // const { tableNum, productId } = await data;

  // if (data) {
  //   console.log(data.tableNum, data.productId);
  // }
  noStore();

  try {
    // console.log(data.tableNum, data.productId);

    // const tableNumStr = data.tableNum;
    const orders = await prisma.order.create({
      data: {
        tableId: data.tableNum,
        productId: data.productId,
        orderStatus: "pending",
        quantity: data.quantity || 1,
        note: data.customerNote,
      },
    });

    // revalidatePath(`/home?table=${data.tableNum}`);
    console.log("Order created. About to revalidate path...");
    // redirect("/admin");
    console.log("Path revalidated.");
    console.log("order created");
    return orders;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (data) => {
  try {
    await prisma.order.delete({
      where: {
        orderId: data.orderId,
      },
    });

    // revalidatePath(`/home?table=${data.tableId}`);
  } catch (error) {
    console.log("order deleted");
  }
};

export const deleteAllOrder = async (tableId) => {
  try {
    await prisma.order.deleteMany({
      where: {
        tableId: tableId,
      },
    });

    // revalidatePath(`/home?table=${tableId}`);
  } catch (error) {
    console.log("order deleted");
  }
};

export const incrementQuantity = async (data) => {
  try {
    const product = await prisma.order.update({
      where: {
        tableId: data.tableId,
        orderId: data.orderId,
      },
      data: {
        quantity: data.quantity + 1,
      },
    });
    console.log(product);
    // return product;
    // revalidatePath(`/home?table=${data.tableId}`);
  } catch (error) {
    console.log("increment order");
  }
};

export const decrementQuantity = async (data) => {
  try {
    if (data.quantity <= 0) {
      return;
    }

    const product = await prisma.order.update({
      where: {
        tableId: data.tableId,
        orderId: data.orderId,
      },
      data: {
        quantity: data.quantity - 1,
      },
    });
    console.log(product);
    // return product;
    // revalidatePath(`/home?table=${data.tableId}`);
  } catch (error) {
    console.log("decrement order");
  }
};

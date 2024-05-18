// "use server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { prisma } from "./prisma";
import { cache } from "react";
// import { revalidate } from "../components/Product";

export const fetchAllProduct = async () => {
  // noStore();

  try {
    const data = await prisma.product.findMany();

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllTables = async () => {
  // noStore();
  try {
    const data = await prisma.table.findMany();
    return data;
  } catch (error) {
    console.log("error");
  }
};

export const getSingleTableNumber = async (num) => {
  try {
    const data = await prisma.table.findMany({
      where: {
        tableNumber: num,
      },
    });
    return data;
  } catch (error) {
    console.log("error");
  }
};

export async function fetchAllBurger() {
  // noStore();

  try {
    const data = await prisma.product.findMany({
      where: {
        productCategoryId: 1,
      },
    });

    return data;
  } catch (error) {
    console.log("error");
  }
}

export async function fetchAllPizza() {
  // noStore();

  try {
    const data = await prisma.product.findMany({
      where: {
        productCategoryId: 2,
      },
    });

    return data;
  } catch (error) {
    console.log("error");
  }
}

export async function fetchAllDesserts() {
  // noStore();

  try {
    const data = await prisma.product.findMany({
      where: {
        productCategoryId: 3,
      },
    });

    return data;
  } catch (error) {
    console.log("error");
  }
}

export async function fetchAllBeverages() {
  // noStore();

  try {
    const data = await prisma.product.findMany({
      where: {
        productCategoryId: 4,
      },
    });

    return data;
  } catch (error) {
    console.log("error");
  }
}

export const getAllOrders = async (tableId) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        tableId: tableId,
      },
      // distinct: ["productId"],
      include: {
        product: true,
      },
    });

    // if (data.length === 0) {
    //   return [];
    // }
    // const { productId } = data[0];

    // const dataProduct = await prisma.product.findMany({
    //   where: {
    //     productId: productId,
    //   },
    // });
    // console.log(data);
    // const products = orders.map((order) => order.product);
    // const ordersWithQuantity = orders.map((order) => ({
    //   product: order.product,
    //   quantity: order.quantity, // Assuming quantity is a field in the Order model
    // }));
    // return products;
    orders.sort((a, b) => a.orderId - b.orderId);
    // revalidatePath(`/admin`);
    return orders;
  } catch (error) {
    console.log("error in getall orders");
  }
};

export const getOrders = async (tableId) => {
  try {
    const data = await prisma.order.findMany({
      where: {
        tableId: tableId,
      },
    });

    // if (data.length === 0) {
    //   return [];
    // }
    // const { productId } = data[0];

    // const dataProduct = await prisma.product.findMany({
    //   where: {
    //     productId: productId,
    //   },
    // });
    // console.log(data);
    // const products = data.map((order) => order.product);
    return data;
  } catch (error) {
    console.log("error in getall orders");
  }
};

export const getProductsOrder = async (arr) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        productId: {
          in: arr,
        },
      },
    });

    return products;
  } catch (error) {
    console.log("error in get producrs order");
  }
};

export const fetchAllOrders = async () => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        product: true,
        table: true,
      },
    });

    return orders;
  } catch (error) {
    console.log("error in getall orders");
  }
};

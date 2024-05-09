import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "./prisma";

export async function fetchAllProduct() {
  noStore();

  try {
    const data = await prisma.product.findMany();

    return data;
  } catch (error) {
    console.log("error");
  }
}

export async function fetchAllBurger() {
  noStore();

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
  noStore();

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
  noStore();

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
  noStore();

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

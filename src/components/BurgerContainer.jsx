"use client";
// import Product from "@/components/Product";
// import Product from "../../../components/Product";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import LoadingClient from "./LoadingClient";
// import ProductsWrapper from "@/components/ProductsWrapper";
// import { fetchAllBurger } from "@/lib/data";
// import { fetchAllBurger } from "../../../lib/data";
import { fetchAllBurger } from "../lib/data";

// import ProductsWrapper from "../../../components/ProductsWrapper";
import ProductsWrapper from "../components/ProductsWrapper";

import React from "react";
// import { addOrder } from "../../../lib/actions";

const Burgers = ({ searchParams }) => {
  // console.log(allBurgers);
  // console.log(searchParams);
  // const order = await addOrder()

  const {
    data: allBurgers,

    isLoading,
  } = useQuery({
    queryKey: ["burgers"],
    queryFn: () => fetchAllBurger(),
  });
  if (isLoading) return <LoadingClient />;

  const params = searchParams;

  return (
    <ProductsWrapper>
      <div
        className=" grid grid-cols-3 gap-4 justify-between
      "
      >
        {allBurgers.map((product) => {
          const {
            productId,
            productCategoryId,
            image,
            name,
            weight,
            description,
            price,
            note,
            tableNumber,
          } = product;
          return (
            <Product
              productId={productId}
              tableNumber={params.tableNumber}
              key={productId}
              productCategoryId={productCategoryId}
              image={image}
              name={name}
              weight={weight}
              description={description}
              price={price}
              note={note}
            />
          );
        })}
      </div>
    </ProductsWrapper>
  );
};

export default Burgers;

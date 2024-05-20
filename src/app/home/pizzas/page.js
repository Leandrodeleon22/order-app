// import Product from "@/components/Product";
import Product from "../../../components/Product";
// import ProductsWrapper from "@/components/ProductsWrapper";
import { fetchAllPizza, getSingleTableNumber } from "../../../lib/data";

import ProductsWrapper from "../../../components/ProductsWrapper";

import React from "react";

const Pizzas = async ({ searchParams }) => {
  const allPizzas = await fetchAllPizza();
  const params = searchParams;
  const tableNum = parseInt(params.table);
  const table = await getSingleTableNumber(tableNum);
  const { isAvailable } = table[0];
  return (
    <ProductsWrapper>
      <div
        className=" grid grid-cols-3 gap-4 justify-between
      "
      >
        {allPizzas.map((product) => {
          const {
            productId,

            productCategoryId,
            image,
            name,
            weight,
            description,
            price,
            note,
          } = product;
          return (
            <Product
              key={productId}
              productId={productId}
              tableNumber={params.table}
              isAvailable={isAvailable}
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

export default Pizzas;

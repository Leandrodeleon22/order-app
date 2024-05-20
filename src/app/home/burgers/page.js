// import Product from "@/components/Product";
import Product from "../../../components/Product";
// import ProductsWrapper from "@/components/ProductsWrapper";
// import { fetchAllBurger } from "@/lib/data";
import { fetchAllBurger, getSingleTableNumber } from "../../../lib/data";

import ProductsWrapper from "../../../components/ProductsWrapper";

import React from "react";
// import { addOrder } from "../../../lib/actions";

const Burgers = async ({ searchParams }) => {
  const allBurgers = await fetchAllBurger();
  // console.log(allBurgers);
  // console.log(searchParams);
  // const order = await addOrder()
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
              isAvailable={isAvailable}
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

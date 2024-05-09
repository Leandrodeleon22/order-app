
import Product from "@/components/Product";
// import ProductsWrapper from "@/components/ProductsWrapper";
import { fetchAllBurger } from "@/lib/data";

import ProductsWrapper from "../../../components/ProductsWrapper";

import React from "react";

const Burgers = async () => {
  const allBurgers = await fetchAllBurger();
  // console.log(allBurgers);
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
          } = product;
          return (
            <Product
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

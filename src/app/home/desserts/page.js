// import Product from "@/components/Product";
import Product from "../../../components/Product";
// import ProductsWrapper from "@/components/ProductsWrapper";
import { fetchAllDesserts } from "../../../lib/data";

import ProductsWrapper from "../../../components/ProductsWrapper";

import React from "react";

const Desserts = async () => {
  const allPizzas = await fetchAllDesserts();

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

export default Desserts;

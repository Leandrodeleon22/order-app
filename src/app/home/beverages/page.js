// import Product from "@/components/Product";
import Product from "../../../components/Product";
// import ProductsWrapper from "@/components/ProductsWrapper";
import { fetchAllBeverages } from "../../../lib/data";

import ProductsWrapper from "../../../components/ProductsWrapper";

import React from "react";

const Beverages = async ({ searchParams }) => {
  const allBeverages = await fetchAllBeverages();
  const params = searchParams;

  return (
    <ProductsWrapper>
      <div
        className=" grid grid-cols-3 gap-4 justify-between
      "
      >
        {allBeverages.map((product) => {
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
              productId={productId}
              key={productId}
              productCategoryId={productCategoryId}
              image={image}
              name={name}
              weight={weight}
              description={description}
              price={price}
              note={note}
              tableNumber={params.table}
            />
          );
        })}
      </div>
    </ProductsWrapper>
  );
};

export default Beverages;

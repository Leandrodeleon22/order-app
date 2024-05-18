"use client";

// import Footer from "../../components/Footer";
// import Product from "@/components/Product";
// import ProductsWrapper from "@/components/ProductsWrapper";

import { fetchAllProduct } from "../lib/data";
import LoadingClient from "./LoadingClient";
// import { products } from "@/mock-data/placeholder-data";

// import Footer from "../../components/Footer";
// import Product from "../../components/Product";
// import Product from "../components/Product";

// import ProductsWrapper from "../../components/ProductsWrapper";
import ProductsWrapper from "../components/ProductsWrapper";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
// import { products } from "../../mock-data/placeholder-data";
// import { addOrder } from "../../lib/actions";
// import { Suspense } from "react";

export default function Home({ searchParams }) {
  const tableParams = useSearchParams();
  const tableNum = tableParams.get("table");

  console.log(tableNum);
  // const order = await addOrder();
  // console.log(allProducts);
  //   const params = searchParams;
  //   console.log(params);
  // console.log(params.table);

  const {
    data: allProducts,

    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchAllProduct(),
  });
  if (isLoading) return <LoadingClient />;
  //   console.log(data);

  return (
    <ProductsWrapper>
      <div
        className=" grid grid-cols-3 gap-4 justify-between
      "
      >
        {allProducts.map((product) => {
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
              // order={order}
              tableNumber={tableNum}
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
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
        {/* <div></div> */}
      </div>
    </ProductsWrapper>
  );
}

import Footer from "../../components/Footer";
import {
  fetchAllProduct,
  getAllTables,
  getSingleTableNumber,
} from "../../lib/data";
// import { products } from "@/mock-data/placeholder-data";

// import Footer from "../../components/Footer";
import Product from "../../components/Product";
import ProductsWrapper from "../../components/ProductsWrapper";
import { products } from "../../mock-data/placeholder-data";
import { addOrder } from "../../lib/actions";
import { Suspense } from "react";

export default async function Home({ searchParams }) {
  // console.log(searchParams);

  const allProducts = await fetchAllProduct();
  // const order = await addOrder();
  // console.log(allProducts);
  const params = searchParams;
  // console.log(params.table);

  const tableNum = parseInt(params.table);
  // console.log(tableNum);

  const table = await getSingleTableNumber(tableNum);
  console.log(table);
  const { isAvailable } = table[0];
  return (
    <ProductsWrapper>
      <div className=" grid grid-cols-3 gap-4 justify-between  flex-col min-h-screen">
        {" "}
        {/* Added flex flex-col min-h-screen */}
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
            // <Suspense key={productId} fallback={<h1>Loading from suspense</h1>}>
            <Product
              productId={productId}
              // key={productId}
              // order={order}
              isAvailable={isAvailable}
              tableNumber={params.table}
              key={productId}
              productCategoryId={productCategoryId}
              image={image}
              name={name}
              weight={weight}
              description={description}
              price={price}
              note={note}
            />
            // </Suspense>
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

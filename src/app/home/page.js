import Product from "@/components/Product";
import ProductsWrapper from "@/components/ProductsWrapper";
import { products } from "@/mock-data/placeholder-data";

export default function Home() {
  return (
    <ProductsWrapper>
      <div
        className=" grid grid-cols-3 gap-4 justify-between
      "
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        {/* <div></div> */}
      </div>
    </ProductsWrapper>
  );
}

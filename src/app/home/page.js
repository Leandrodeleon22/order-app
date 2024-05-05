import Product from "@/components/Product";
import ProductsWrapper from "@/components/ProductsWrapper";
import { products } from "@/mock-data/placeholder-data";

export default function Home() {
  console.log(products);
  return (
    <ProductsWrapper>
      <div className="flex justify-between">
        <Product />
        <Product />
        <Product />
      </div>
    </ProductsWrapper>
  );
}

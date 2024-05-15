import Footer from "../../components/Footer";
import { fetchAllProduct } from "../../lib/data";
// import { products } from "@/mock-data/placeholder-data";

// import Footer from "../../components/Footer";
import Product from "../../components/Product";
import ProductsWrapper from "../../components/ProductsWrapper";
// import { products } from "../../mock-data/placeholder-data";

export default async function Home() {
  const allProducts = await fetchAllProduct();
  // console.log(allProducts);
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
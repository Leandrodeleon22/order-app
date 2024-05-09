import Menu from "../../components/Menu";
import Orders from "../../components/Orders";
// import Products from "../../components/ProductsWrapper";

export default function Layout({ children }) {
  return (
    <main className="flex w-11/12 justify-between mt-10 mx-auto">
      <Menu />
      {children}
      <Orders />
    </main>
  );
}

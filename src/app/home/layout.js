import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Orders from "../../components/Orders";
import Products from "../../components/ProductsWrapper";
import { headers } from "next/headers";
import loadingClient from "../../components/LoadingClient";
import { getAllOrders } from "../../lib/data";

export default async function Layout({ children, params }) {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  console.log(header_url);
  const tableNumStr = header_url[header_url.length - 1];
  // console.log(tableNumStr);

  const tableNum = parseInt(tableNumStr);
  const urlString = header_url.slice(0, -1);
  // console.log(tableNum);
  // console.log(urlString);
  // const allOrders = await getAllOrders();
  return (
    <>
      <main className="flex w-11/12 justify-between mt-10 mx-auto min-h-screen min-w-min">
        <Menu urlString={urlString} />
        {children}
        <Orders
          tableId={tableNum}
          urlString={urlString}
          // allOrders={allOrders}
        />
      </main>
      <Footer />
    </>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import { Providers } from "./providers";
import { headers } from "next/headers";
// import { orderContext } from "../lib/orderContext";
import { OrderProvider } from "../lib/orderContext";
// import ToastProvider from "../components/ToastProvider";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intro Foods",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  console.log(header_url);
  const tableNumStr = header_url[header_url.length - 1];
  console.log(tableNumStr);

  const tableNum = parseInt(tableNumStr);
  const urlString = header_url.slice(0, -1);
  // console.log(tableNum);
  // console.log(urlString);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <OrderProvider> */}
        {/* <ToastContainer> */}
        <NavBar />
        {/* {tableNum ? <NavBar /> : ""} */}
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        {/* <Footer /> */}
        {/* </ToastContainer> */}
        {/* </OrderProvider> */}
      </body>
    </html>
  );
}

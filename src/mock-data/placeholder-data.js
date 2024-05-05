import { PiHamburgerDuotone } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { LuDessert } from "react-icons/lu";
import { RiDrinks2Fill } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
const admin = [
  { id: 1, username: "admin", email: "admin@admin.com", password: "admin" },
];

const tables = [
  { id: 1, tableNumber: 1 },
  { id: 2, tableNumber: 2 },
  { id: 3, tableNumber: 3 },
  { id: 4, tableNumber: 4 },
  { id: 5, tableNumber: 5 },
];

const productCategory = [
  {
    id: 1,
    name: "All",
    href: "/home",
    icon: <BiSolidFoodMenu />,
  },
  {
    id: 2,
    name: "Burgers",
    href: "/home/burgers",
    icon: <PiHamburgerDuotone />,
  },
  { id: 3, name: "Pizzas", href: "/home/pizzas", icon: <FaPizzaSlice /> },
  { id: 4, name: "Desserts", href: "/home/desserts", icon: <LuDessert /> },
  {
    id: 5,
    name: "Beverages",
    href: "/home/beverages",
    icon: <RiDrinks2Fill />,
  },
];

const products = [
  {
    product_category_id: productCategory[0].id,
    image: "",
    name: " cheese burger",
    size: "regular",
    description: "This is a cheese burger",
    price: 5,
    note: "",
  },
];

module.exports = {
  admin,
  tables,
  products,
  productCategory,
};

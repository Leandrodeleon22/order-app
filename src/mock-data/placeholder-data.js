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

export const productCategory = [
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
    image:
      "https://res.cloudinary.com/da8jnpdza/image/upload/v1714873725/stjohns_burger_mwth9j.png",
    name: "St John's Burger",
    size: "regular",
    description: "This is St John's Burger",
    price: 7,
    note: "",
  },
];
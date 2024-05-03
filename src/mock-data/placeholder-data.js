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
  { id: 1, name: "Burger" },
  { id: 2, name: "Dessert" },
  { id: 3, name: "Beverages" },
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

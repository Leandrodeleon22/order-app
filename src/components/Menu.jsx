import React from "react";
import { productCategory } from "@/mock-data/placeholder-data";
import Link from "next/link";
import { BiFoodMenu } from "react-icons/bi";
const Menu = () => {
  return (
    <div className="bg-white w-1/4 flex flex-col p-3 rounded-xl">
      <div className="flex items-center mb-4">
        <BiFoodMenu className="text-lg" />
        <h2 className="font-medium  ml-4 text-[1.4rem] ">MENU</h2>
      </div>
      {productCategory.map((product, index) => {
        return (
          <Link
            href={product.href}
            key={product.id}
            className={`flex mb-3 ${
              index !== productCategory.length - 1
                ? "border-b-2 border-gray-200"
                : ""
            } `}
          >
            <span className="mr-4">{product.icon}</span>
            <span>{product.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;

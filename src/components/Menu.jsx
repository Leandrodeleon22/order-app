"use client";

import React, { useState } from "react";
import { productCategory } from "../mock-data/placeholder-data";
import Link from "next/link";
import { BiFoodMenu } from "react-icons/bi";
import { useSearchParams } from "next/navigation";

const Menu = ({ urlString }) => {
  const tableParams = useSearchParams();
  const table = tableParams.get("table");

  const [activeLink, setActiveLink] = useState(null);
  // console.log(urlString);

  const handleLinkClick = (index) => {
    // setActiveLink(index === activeLink ? null : index);
    setActiveLink(index === activeLink ? activeLink : index);
  };

  return (
    <div className="bg-white h-min w-1/4 flex flex-col p-3 rounded-xl">
      <div className="flex items-center mb-4">
        <BiFoodMenu className="text-lg" />
        <h2 className="font-medium  ml-4 text-[1.4rem] text-red-500 ">MENU</h2>
      </div>
      {productCategory.map((product, index) => {
        return (
          <Link
            href={`${product.href}?table=${table}`}
            key={product.id}
            className={`flex mb-3 ${
              index !== productCategory.length - 1
                ? "border-b-2 border-gray-200"
                : ""
            } hover:text-red-500 ${
              activeLink === index
                ? "bg-red-500 text-white hover:text-white"
                : ""
            } items-center pl-2 pt-1 pb-1`}
            onClick={() => handleLinkClick(index)}
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

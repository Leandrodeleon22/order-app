"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// const links = [
//   { name: "Menu", href: "/home" },
//   { name: "About Us", href: "/about" },
//   { name: "Contact Us", href: "/contact" },
//   { name: "Feedback", href: "/feedback" },
// ];

const NavbarList = ({ name, href }) => {
  const tableParams = useSearchParams();
  const table = tableParams.get("table");
  return (
    <Link
      href={`${href}/?table=${table}`}
      // key={name}
      className=" mr-5 
       hover:text-orange-600"
    >
      <span className="font-semibold hover:underline hover:underline-offset-8">
        {name}
      </span>
    </Link>
  );
};

export default NavbarList;

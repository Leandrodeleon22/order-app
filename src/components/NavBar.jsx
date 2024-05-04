import React from "react";
import Link from "next/link";
import logo from "../media/logo.png"
import Image from "next/image";

const links = [
  { name: "Menu", href: "/home" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
];

const NavBar = () => {
  return (
    <div className="bg-white flex justify-between p-3">
      <div>
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <div>
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className="mr-5 hover:text-orange-600"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;

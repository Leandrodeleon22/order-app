import React from "react";
import Link from "next/link";

const links = [
  { name: "Menu", href: "/home" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
];

const NavBar = () => {
  return (
    <nav className="w-full bg-white flex justify-between px-10 py-3">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${
                index !== links.length - 1 ? "mr-5" : ""
              }  hover:text-orange-600`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;

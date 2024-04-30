import React from "react";
import Link from "next/link";

const links = [
  { name: "Menu", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
];

const NavBar = () => {
  return (
    <div className="bg-white flex justify-between">
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        {links.map((link) => {
          return (
            <Link href={link.href} key={link.name} className="mr-5">
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
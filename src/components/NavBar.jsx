import React from "react";
import Link from "next/link";
import logo from "../media/logo.png";
import Image from "next/image";
import NavbarList from "./NavbarList";
import { getServerSession } from "next-auth";
import { LogoutButton } from "../app/auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { protectedPage } from "../utils/utils";

const links = [
  { name: "Menu", href: "/home" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
  { name: "Admin", href: "/admin" },
];

const NavBar = async ({ tableNum }) => {
  const session = await getServerSession(authOptions);

  // protectedPage(tableNum);

  return (
    <nav className="w-full bg-white flex justify-between px-10 py-3">
      <Link href="/" className="cursor-pointer">
        <Image src={logo} alt="logo" width={150} height={150} />
      </Link>
      {/* <NavbarList /> */}

      <div className="flex items-center">
        {session && (
          <div className="flex items-center mr-5">
            <pre className="font-bold text-red-500 mr-2">
              {session?.user?.name}
            </pre>
            <LogoutButton className="text-sm bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-red-700 rounded shadow transition-colors duration-300" />
          </div>
        )}

        {links.map((link, index) => {
          return (
            <NavbarList key={link.name} name={link.name} href={link.href} />
            // <Link
            //   href={link.href}
            //   key={link.name}
            //   className={`${
            //     index !== links.length - 1 ? "mr-5" : ""
            //   }  hover:text-orange-600`}
            // >
            //   <span className="font-semibold hover:underline hover:underline-offset-8">
            //     {link.name}
            //   </span>
            // </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;

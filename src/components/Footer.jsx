import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-full bg-gray-900 text-white py-2 text-center">
      <div className="inline">
        <span>
          &copy; {new Date().getFullYear()} Intro Foods. All rights reserved.
        </span>
      </div>
      <div className="inline">
        <Link href="/dashboard" className="hover:underline ml-10">
          Staff
        </Link>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  // const isHomePage = pathname === "/";
  // const navBackgroundClass = isHomePage ? "" : "bg-orange-500";

  const getLinkClass = (href: string) => {
    return pathname === href ? "bg-orange-500 text-white" : "";
  };

  const routes = [
    { page: "Home", href: "/" },
    { page: "Products", href: "/product" },
    { page: "Product Management", href: "/product-management" },
  ];

  return (
    <nav className="py-10 px-4 flex justify-between mb-24">
      <Link
        href="/"
        className="font-semibold text-3xl text-orange-500 cursor-pointer"
      >
        Sam&apos;s Collection
      </Link>
      <ul className="flex gap-5">
        {routes.map((item, index) => (
          <li className="cursor-pointer relative" key={index}>
            <Link
              href={item.href}
              className={`px-4 py-2 rounded-lg ${getLinkClass(item.href)}`}
            >
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import Link from "next/link";

function Navbar() {
  const routes = [
    {
      page: "Home",
      href: "/",
    },
    {
      page: "Products",
      href: "/Product",
    },
    {
      page: "Carts",
      href: "/carts",
      count: 3,
    },
  ];

  return (
    <nav className="py-10 px-4 flex justify-between mb-24">
      <h1 className="font-semibold text-3xl text-orange-500 cursor-pointer">
        Sam's Collection
      </h1>
      <ul className="flex gap-5">
        {routes.map((item, index) => (
          <li className="cursor-pointer relative" key={index}>
            <Link href={item.href}>{item.page}</Link>
            {item.page === "Carts" && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {item.count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

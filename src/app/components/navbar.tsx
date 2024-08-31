// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function Navbar() {
//   const pathname = usePathname();

//   // const isHomePage = pathname === "/";
//   // const navBackgroundClass = isHomePage ? "" : "bg-orange-500";

//   const getLinkClass = (href: string) => {
//     return pathname === href ? "bg-orange-500 text-white" : "";
//   };

//   const routes = [
//     { page: "Home", href: "/" },
//     { page: "Products", href: "/product" },
//     { page: "Product Management", href: "/product-management" },
//   ];

//   return (
//     <nav className="py-10 px-4 flex justify-between mb-24">
//       <Link
//         href="/"
//         className="font-semibold text-3xl text-orange-500 cursor-pointer"
//       >
//         Sam&apos;s Collection
//       </Link>
//       <ul className="flex gap-5">
//         {routes.map((item, index) => (
//           <li className="cursor-pointer relative" key={index}>
//             <Link
//               href={item.href}
//               className={`px-4 py-2 rounded-lg ${getLinkClass(item.href)}`}
//             >
//               {item.page}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClass = (href: string) => {
    return pathname === href ? "bg-orange-500 text-white" : "";
  };

  const routes = [
    { page: "Home", href: "/" },
    { page: "Products", href: "/product" },
    { page: "Product Management", href: "/product-management" },
  ];

  return (
    <nav className="py-5 px-4 lg:px-10 mb-24 relative">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-semibold text-2xl lg:text-3xl text-orange-500 cursor-pointer"
        >
          Sam&apos;s Collection
        </Link>
        <button
          className="lg:hidden text-2xl text-orange-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row gap-5 lg:gap-10 lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white shadow-md lg:bg-[#fcf8f5] lg:shadow-none px-4 lg:px-0 py-5 lg:py-0`}
        >
          {routes.map((item, index) => (
            <li className="cursor-pointer" key={index}>
              <Link
                href={item.href}
                className={`block px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition ${getLinkClass(
                  item.href
                )}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

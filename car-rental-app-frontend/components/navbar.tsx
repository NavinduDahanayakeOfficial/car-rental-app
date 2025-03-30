"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function Navbar() {
   const pathName = usePathname();
   const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
      { name: "Home", path: "/" },
      { name: "Vehicle", path: "/vehicle" },
      { name: "Details", path: "/details" },
      { name: "About Us", path: "/aboutUs" },
      { name: "Contact Us", path: "/contactUs" },
   ];

   return (
      <nav className="bg-white flex item-center justify-between px-12 py-4 border-b border-gray-200 mb-5 ">
         {/* Logo*/}
         <Link href="/" className="flex items-center space-x-3 font-inter">
            <Image
               src="/images/navbarIcons/carLogo.svg"
               alt="car logo"
               width={48}
               height={48}
            />
            <span className="text-base font-bold font-inter">Car Rental</span>
         </Link>

         {/* desktop menu items */}
         <ul className="hidden md:flex items-center space-x-1 lg:space-x-3 xl:space-x-5 font-inter text-sm lg:text-base xl:text-lg font-medium">
            {navLinks.map(({ name, path }) => (
               <li
                  key={name}
                  className={`px-3 py-1 transition-all duration-300 hover:text-customPurple ${
                     pathName === path ? "font-bold" : ""
                  }`}
               >
                  <Link href={path}>{name}</Link>
               </li>
            ))}
         </ul>

         <div className="hidden md:flex items-center space-x-3 font-inter">
            <Image
               src="/images/navbarIcons/telephone.svg"
               alt="telephone icon"
               width={40}
               height={40}
            />
            <div className="flex-col items-center text-sm lg:text-base">
               <p className="">Need help?</p>
               <p className="">+996 247-1680</p>
            </div>
         </div>

         <div className="md:hidden flex items-center">
            <button className="hover:text" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>
      </nav>
   );
}

export default Navbar;

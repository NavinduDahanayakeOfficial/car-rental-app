"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TextWithIcon from "../ui/TextWithIcon";

function Navbar() {
   const pathName = usePathname();
   const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
      { name: "Home", path: "/home" },
      { name: "Vehicle", path: "/vehicle" },
      { name: "Details", path: "/details" },
      { name: "About Us", path: "/aboutUs" },
      { name: "Contact Us", path: "/contactUs" },
   ];

   return (
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg">
         {/* Logo*/}
         <div className="flex items-center justify-between px-12 py-4 ">
            <Link
               href="/home"
               className="flex items-center space-x-3 font-inter"
            >
               <Image
                  src="/images/layoutIcons/carLogo.svg"
                  alt="car logo"
                  width={48}
                  height={48}
               />
               <span className="text-base font-bold font-inter">
                  Car Rental
               </span>
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
            {/*desktop contact number*/}
            {/* <div className="hidden md:flex items-center space-x-3 font-inter">
               <Image
                  src="/images/layoutIcons/telephone.svg"
                  alt="telephone icon"
                  width={40}
                  height={40}
               />
               <div className="flex-col items-center text-sm lg:text-base">
                  <p className="">Need help?</p>
                  <p className="">+996 247-1680</p>
               </div>
            </div> */}
            <TextWithIcon
               icon="/images/layoutIcons/telephone.svg"
               topText="Need help?"
               bottomText="+996 247-1680"
               iconWidth={40}
            />

            {/* mobile menu button */}
            <div className="md:hidden flex items-center hover:bg-customPurple hover:text-white transition-all duration-300 rounded-md">
               <button
                  className="p-3 space-y-3"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
         </div>

         {/* mobile menu items */}
         {isOpen && (
            <div className="flex flex-col md:hidden py-6 px-10 justify-center cursor-pointer">
               {navLinks.map(({ name, path }) => (
                  <div
                     key={name}
                     className="hover:bg-customPurple hover:text-white transition-all duration-300 text-xl font-medium py-2 border-b rounded"
                  >
                     <Link
                        href={path}
                        className="px-2"
                        onClick={() => setIsOpen(false)}
                     >
                        {name}
                     </Link>
                  </div>
               ))}
            </div>
         )}
      </nav>
   );
}

export default Navbar;

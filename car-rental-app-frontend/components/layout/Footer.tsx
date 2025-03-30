import Image from "next/image";
import React from "react";
import TextWithIcon from "../ui/TextWithIcon";
import Link from "next/link";

function Footer() {
   return (
      <div className="flex flex-col px-16 py-14 space-y-16">
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-8 md:space-y-0">
            <div className="flex items-center space-x-3 font-inter">
               <Image
                  src="/images/layoutIcons/carLogo.svg"
                  alt="car logo"
                  width={48}
                  height={48}
               />
               <span className="text-base font-bold font-inter">
                  Car Rental
               </span>
            </div>
            <TextWithIcon
               icon="/images/layoutIcons/locationPin_orange.svg"
               topText="Address"
               bottomText="Oxford Ave. Cary, NC 27511"
               iconWidth={40}
            />
            <TextWithIcon
               icon="/images/layoutIcons/mail_orange.svg"
               topText="Email"
               bottomText="nwiger@yahoo.com"
               iconWidth={40}
               bottomTextLink="mailto:nwiger@yahoo.com"
            />
            <TextWithIcon
               icon="/images/layoutIcons/phone_orange.svg"
               topText="Phone"
               bottomText="+537 547-6401"
               iconWidth={40}
            />
         </div>
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-10 md:space-y-0">
            <div className="flex flex-col items-start justify-between">
               <p className="text-xl font-semibold font-sans md:max-w-72 line-clamp-4">
                  Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                  turpis massa a id iaculis lorem turpis euismod. Purus at
                  quisque integer sit. Libero quis sapien tempus pellentesque
                  netus leo feugiat augue ut. Sollicitudin vitae dictum sed
                  vulputate.
               </p>
               <div className="flex justify-start items-center space-x-5 mt-9">
                  <Link href="#">
                     <Image
                        src="/images/layoutIcons/facebook.svg"
                        alt="facebook icon"
                        width={24}
                        height={24}
                     />
                  </Link>
                  <Link href="#">
                     <Image
                        src="/images/layoutIcons/instagram.svg"
                        alt="facebook icon"
                        width={24}
                        height={24}
                     />
                  </Link>
                  <Link href="#">
                     <Image
                        src="/images/layoutIcons/x.svg"
                        alt="facebook icon"
                        width={24}
                        height={24}
                     />
                  </Link>
                  <Link href="#">
                     <Image
                        src="/images/layoutIcons/youtube.svg"
                        alt="facebook icon"
                        width={24}
                        height={24}
                     />
                  </Link>
               </div>
            </div>
            <div className="flex flex-col justify-start items-start">
               <p className="font-semibold text-xl mb-6 space-y-4">
                  Useful Links
               </p>
               <Link href="/aboutUs">About Us</Link>
               <Link href="/contactUs">Contact Us</Link>
               <Link href="/gallery">Gallery</Link>
               <Link href="/blog">Blog</Link>
               <Link href="/faq">F.A.Q</Link>
            </div>
            <div className="flex flex-col justify-start items-start ">
               <p className="font-semibold text-xl mb-6 ">Vehicles</p>
               <Link href="/aboutUs">Sedan</Link>
               <Link href="/contactUs">Cabriolet</Link>
               <Link href="/pickup">Pickup</Link>{" "}
               {/* redirect to vehicle page and filter pickups*/}
               <Link href="/minivan">Minivan</Link>{" "}
               {/* redirect to vehicle page and filter minivans*/}
               <Link href="/suv">SUV</Link>{" "}
               {/* redirect to vehicle page and filter SUVs*/}
            </div>
            <div className="flex flex-col justify-start items-start space-y-6">
               <p className="font-semibold text-xl">Download App</p>
               <Link href="">
                  <Image
                     src="/images/layoutIcons/appStore.png"
                     alt="App Store"
                     height={50}
                     width={180}
                  ></Image>
               </Link>
               <Link href="">
                  <Image
                     src="/images/layoutIcons/googlePlay.png"
                     alt="Play Store"
                     height={50}
                     width={180}
                  ></Image>
               </Link>
            </div>
         </div>
         <div className="flex justify-center items-center">
            <span className="font-inter text-black/50">
               © Copyright Car Rental 2024.
            </span>
         </div>
      </div>
   );
}

export default Footer;

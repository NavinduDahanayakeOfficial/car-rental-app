import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
   icon: string;
   topText: string;
   bottomText: string;
   iconWidth?: number;
   bottomTextLink?: string;
}

function TextWithIcon({
   icon,
   topText,
   bottomText,
   iconWidth = 24,
   bottomTextLink,
}: Props) {
   return (
      <div className="hidden md:flex items-center space-x-3 font-inter">
         <Image
            src={icon}
            alt="telephone icon"
            width={iconWidth}
            height={iconWidth}
         />
         <div className="flex-col items-center text-sm lg:text-base font-normal">
            <p className="">{topText}</p>
            {bottomTextLink ? (
               <Link href={bottomTextLink} className=" font-semibold">
                  {bottomText}
               </Link>
            ) : (
               <p className="font-semibold">{bottomText}</p>
            )}
         </div>
      </div>
   );
}

export default TextWithIcon;

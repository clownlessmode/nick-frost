import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center mt-[80px] sm:mt-[120px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[180px]">
      <Link href={"/privacy-policy"} className="text-[8px] sm:text-[16px] md:text-[8px] lg:text-[10px] 2xl:text-[16px]">Privacy Policy</Link>
      <Image
      className="w-[77px] h-[33px] 2xl:w-[113px] 2xl:h-[49px] mb:ml-[70px] ml-[20px]"
        alt="logotype axis"
        src={"/branding/logotypefooter.png"}
        width={1050}
        height={1050}
      />
       <Link href={"/terms-of-service"} className="text-[8px] sm:text-[16px] md:text-[8px] lg:text-[10px] 2xl:text-[16px] max-w-[65px] sm:max-w-[125px] md:max-w-full text-right md:text-center line-clamp-2">Personal data processing policy</Link>
    </div>
  );
};

export default Footer;

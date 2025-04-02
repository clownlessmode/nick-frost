import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="mw z-30 relative gap-5 md:gap-2 lg:gap-3 2xl:gap-6 flex flex-col justify-center mx-auto items-center overflow-hidden">
    <h1 className="bg-gradient-to-r tracking-[-2px] from-[#a2a1a7] via-white to-[#a2a1a7] w-full text-transparent bg-clip-text text-[48px] sm:text-[80px] md:text-[52px] lg:text-[72px] 2xl:text-[102px] font-semibold leading-none text-center uppercase">
      <span className="block md:hidden">
        SCALE YOUR HIGH&#8209;TICKET OFFER 24/7
      </span>
      <span className="hidden md:block">
        SCALE YOUR HIGH-
        <br />
        TICKET OFFER 24/7
      </span>
    </h1>
    <h2 className="text-[10px] sm:text-[16px] md:text-[8px] lg:text-[12px] 2xl:text-[18px] font-extralight leading-[150%] tracking-[-0.2px] text-center text-white">
      We Build and Install Proprietary Evergreen Event <br />
      Campaigns That Sell for You on Autopilot
    </h2>
    <div className="absolute inset-0 z-[-1] shrink-0 blur-[60px] opacity-80 overflow-hidden">
      <div className="flex justify-center items-center w-full h-full">
        <Image
          alt="hero-splash"
          src={"/background/hero-splash.svg"}
          width={1050}
          height={212}
          className="w-full h-2/3 object-cover scale-110"
        />
      </div>
    </div>
  </div>

  );
};

export default Hero;

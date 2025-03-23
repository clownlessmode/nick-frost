import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="mw z-30 relative gap-5 md:gap-2 lg:gap-3 2xl:gap-6 flex flex-col justify-center mx-auto items-center">
      <h1 className="bg-gradient-to-r from-[#a2a1a7] via-white to-[#a2a1a7] w-full text-transparent bg-clip-text text-[48px] sm:text-[80px] md:text-[52px] lg:text-[72px] 2xl:text-[102px] font-semibold leading-none tracking-tight text-center uppercase">
        <span className="block md:hidden">
          SCALE YOUR HIGH&#8209;TICKET OFFER 24/7
        </span>
        <span className="hidden md:block">
          SCALE YOUR HIGH-
          <br />
          TICKET OFFER 24/7
        </span>
      </h1>
      <h2 className="text-[10px] sm:text-[16px] md:text-[8px] lg:text-[12px] 2xl:text-[18px] font-extralight leading-[150%] tracking-tighter text-center text-white">
        We Build and Install Proprietary Evergreen Event <br />
        Campaigns That Sell for You on Autopilot
      </h2>
      <div className="blur-[60px] absolute inset-0 z-[-1] overflow-hidden shrink-0">
        <Image
          alt="hero-splash"
          src={"/background/hero-splash.svg"}
          width={1050}
          height={212}
          className="w-[200vw] h-[212px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

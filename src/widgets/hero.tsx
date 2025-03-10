import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className=" max-w-screen z-30 px-5 relative gap-5 flex flex-col justify-center items-center">
      <h1 className="bg-gradient-to-r text-nowrap from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-5xl font-semibold leading-none tracking-tight text-center uppercase">
        SCALE YOUR <br />
        HIGH-TICKET <br />
        OFFER 24/7
      </h1>
      <h2 className="text-[10px] font-extralight leading-[150%] tracking-tighter text-center text-white">
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

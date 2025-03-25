import { Button } from "@shared/ui/button";
import Image from "next/image";
import React, { FC } from "react";

const Video: FC = () => {
  return (
    <div className="mt-5! sm:mt-[48px]! md:mt-4! lg:mt-[24px]! 2xl:mt-[38px]! relative  mw">
      <video
        className="rounded-[19px] overflow-hidden w-full object-cover p-0 mw"
        poster="/background/video-poster.png"
        controls={false}
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="absolute right-10 top-4 z-10 translate-x-1/2 -translate-y-1/2">
        <Button
          variant={"outline"}
          className="px-5 rotate-[8deg] backdrop-blur-sm py-4 font-light text-[8px] sm:text-[14px] md:text-[8px] lg:text-[12px] 2xl:text-[16px] leading-none h-fit "
        >
          100% pay on <br /> results basis
        </Button>
      </div>
      <div className="absolute w-full flex justify-center -bottom-1 sm:bottom-1 md:bottom-4 lg:bottom-6 2xl:bottom-10">
        <Button className="uppercase bg-white text-foreground font-light shadow-[0_0_50px_rgba(255,255,255,0.3)] 2xl:px-[36px] 2xl:py-[28px] text-[9px] px-[19px] py-[15px] sm:p-5 md:px-[19px] md:py-[15px] lg:px-[25px] lg:py-[20px] sm:text-[16px] md:text-[9px] lg:text-[13px] 2xl:text-[18px]">
          Apply for event
        </Button>
      </div>
      <div className="blur-[60px] absolute z-[-1] bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
        <Image
          alt="hero-splash"
          src={"/background/video-splash.svg"}
          width={170}
          height={200}
        />
      </div>
    </div>
  );
};

export default Video;

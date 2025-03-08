import { Button } from "@shared/ui/button";
import Image from "next/image";
import React, { FC } from "react";

const Video: FC = () => {
  return (
    <div className="mt-5 relative">
      <video
        className="rounded-[19px] overflow-hidden w-full object-cover p-0"
        poster="/background/video-poster.png"
        controls={false}
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="absolute right-10 top-4 z-10 translate-x-1/2 -translate-y-1/2">
        <Button
          variant={"outline"}
          className="px-5 rotate-[8deg] backdrop-blur-sm py-4 font-light text-[8px] leading-none h-fit "
        >
          100% pay on <br /> results basis
        </Button>
      </div>
      <div className="absolute w-full flex justify-center -bottom-1">
        <Button className="uppercase bg-white text-foreground font-light shadow-[0_0_50px_rgba(255,255,255,0.3)] text-[9px] px-[19px] py-[15px]">
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

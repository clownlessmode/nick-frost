"use client"
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Button } from "@shared/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Video: FC = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  let widthVideo = 720;
  let widthHeight = 400;

  if(typeof window !== 'undefined'){
    if (window.outerWidth < 768){
      widthVideo = 300;
      widthHeight = 170;
    }
  }

  return (
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton placement="center" backdrop="blur" tabIndex={3} className="z-[99]">
          <ModalContent className="z-[99] w-[300px] md:w-[720px] overflow-hidden">
            <YouTubeEmbed videoid="sM8uixb6Xo8" width={widthVideo} height={widthHeight} />
          </ModalContent>
        </Modal>
      <div className="mx-auto mt-5! sm:mt-[48px]! md:mt-4! lg:mt-[24px]! 2xl:mt-[38px]! relative  aspect-video max-w-[280px] sm:max-w-[600px] md:max-w-[412px] lg:max-w-[560px] 2xl:max-w-[820px]">
        <video
          className="rounded-[19px] overflow-hidden w-full object-cover p-0 mw hover:cursor-pointer"
          poster="/background/video-poster.png"
          controls={false}
          onClick={onOpen}
        >
          
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>
        <div className="2xl:w-[820px] lg:w-[560px] md:w-[412px] w-[280px]
                        2xl:h-[455px] lg:h-[360px] md:h-[217px] h-[160px]
                        bg-[#206F5D] 
                        absolute 
                        -z-10
                        2xl:top-0 lg:top-[-5px] md:top-[10px] top-0
                        md:blur-[40px] blur-[5px] 
                        md:rounded-[40px] rounded-[20px]
                        opacity-[40%]"/>
        <Image
            alt="button-play"
            src={'/play.svg'}
            width={99}
            height={99}
            className="2xl:w-[99px] lg:w-[75px] md:w-[50px] sm:w-[75px] w-[25px] absolute 2xl:top-[188px] lg:top-[120px] md:top-[90px] top-[70px] sm:top-[130px] left-[45%] hover:cursor-pointer"
            onClick={onOpen}
          />
        <div className="absolute right-10 top-4 z-10 translate-x-1/2 -translate-y-1/2">
          <Button
            variant={"outline"}
            className="px-5 rotate-[8deg] backdrop-blur-sm py-4 font-light text-[8px] sm:text-[14px] md:text-[8px] lg:text-[12px] 2xl:text-[16px] leading-none h-fit hover:cursor-pointer"
            onClick={onOpen}
          >
            100% pay on <br /> results basis
          </Button>
        </div>
        <div className="absolute w-full flex justify-center sm:bottom-1 md:bottom-4 lg:bottom-6 2xl:bottom-[10px]">
          <Button className="hover:cursor-pointer uppercase bg-white text-foreground font-light shadow-[0_0_50px_rgba(255,255,255,0.3)] 2xl:px-[36px] 2xl:py-[28px] text-[9px] px-[19px] py-[15px] sm:p-5 md:px-[19px] md:py-[15px] lg:px-[25px] lg:py-[20px] sm:text-[16px] md:text-[9px] lg:text-[13px] 2xl:text-[18px]">
          <Link href={"#next"}>
              apply for event
          </Link>
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
    </>
    
  );
};

export default Video;

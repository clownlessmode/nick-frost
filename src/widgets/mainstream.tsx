"use client";

import Image from "next/image";
import React, { FC } from "react";

interface ImageBoxProps {
  imageSrc: string;
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MainTitle = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Трансформация от -top-20 до -bottom-20 при скролле
  const yPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["-5rem", "calc(100vh - 5rem)"]
  );

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.h1
        className="w-full absolute z-[-1] text-center text-[54px] sm:text-[105px] md:text-[120px] lg:text-[158px] 2xl:text-[263px] mx-auto tracking-tight leading-none text-white [text-shadow:_0_0_8.05px_rgba(255,255,255,0.3)]"
        style={{
          top: yPosition,
          position: "absolute",
        }}
      >
        MAINSTREAM
      </motion.h1>
    </div>
  );
};

const ImageBox: FC<ImageBoxProps> = ({ imageSrc }) => {
  return (
    <div className="border border-white relative size-[65px] sm:size-[148px] md:size-[70px] lg:size-[94px] 2xl:size-[148px] shrink-0 flex justify-center items-center">
      <div className="absolute -top-[1.5px] -left-[2px] w-[4px] h-[4px] bg-white"></div>
      <div className="absolute -top-[1.5px] -right-[2px] w-[4px] h-[4px] bg-white"></div>
      <div className="absolute -bottom-[2px] -left-[2px] w-[4px] h-[4px] bg-white"></div>
      <div className="absolute -bottom-[2px] -right-[2px] w-[4px] h-[4px] bg-white"></div>
      <Image
        alt=""
        src={imageSrc}
        width={1500}
        height={1500}
        className="aspect-square size-full"
      />
    </div>
  );
};

const Mainstream: FC = () => {
  return (
    <div className="mt-[80px] relative">
      <div className="w-full leading-none md:grid md:grid-cols-2 md:px-30 md:grid-rows-2 mw2 border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover px-[24px] py-[25px] flex gap-5 sm:gap-[25px] md:gap-[40px] lg:gap-[50px] 2xl:gap-[70px]">
        <div className="flex justify-between w-full  lg:col-span-1 text-[10px] h-full sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
          <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
            <p className="uppercase font-medium">Communities</p>
            <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
              require constant work and attention
            </p>
          </div>
          <ImageBox imageSrc="/mainstream/communities.webp" />
        </div>
        <div className="flex justify-between w-full items-center md:h-full  lg:col-span-1 text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
          <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
            <p className="uppercase font-medium">Webinars</p>

            <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
              <span className="font-medium">
                not enough time or information
              </span>{" "}
              to make a decision
            </p>
          </div>
          <ImageBox imageSrc="/mainstream/webinars.webp" />
        </div>
        <div className="flex justify-between w-full  lg:col-span-1 items-center text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
          <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
            <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
              don’t filter the right audience which leads to{" "}
              <span className="font-medium">low engagement and sales </span>
            </p>
          </div>
          <ImageBox imageSrc="/mainstream/filter.webp" />
        </div>
        <div className="flex justify-between w-full  lg:col-span-1 items-center text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
          <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
            <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
              <span className="font-medium">“sales over value” approach</span>{" "}
              which affects your personal brand in the long term
            </p>
          </div>
          <ImageBox imageSrc="/mainstream/sales.webp" />
        </div>
      </div>
    </div>
  );
};

export default Mainstream;

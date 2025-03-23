"use client";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageBoxProps {
  imageSrc: string;
}

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
        width={500}
        height={500}
        className="aspect-square size-full"
      />
    </div>
  );
};

const Smart: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0", "end start"], // Начинаем с 1/3 высоты экрана и заканчиваем, когда блок уходит из вида
  });

  // Трансформируем scrollYProgress в значение translateY для заголовка
  const mainStreamY = useTransform(scrollYProgress, [0, 1], [-5, 390]);

  return (
    <div className="mt-[80px]" ref={containerRef}>
      <div className="w-full relative mt-[28px]">
        <motion.h1
          style={{ y: mainStreamY }}
          className="w-full absolute z-[-1] -top-8 translate-x-[-25px] text-center text-[97.5px] sm:text-[200px] md:text-[227px] lg:text-[300px] 2xl:text-[511px] mx-auto tracking-tight leading-none text-white [text-shadow:_0_0_8.05px_rgba(255,255,255,0.3)]"
        >
          SMART
        </motion.h1>
        <div>
          <div
            className="sm:p-[35px] w-full md:grid md:grid-cols-2 md:grid-rows-2 mw2 shadow-[0_0_30px_rgba(62,213,178,0.2)] border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover p-[25px] flex gap-5 sm:gap-[25px] md:gap-[40px] lg:gap-[50px] 2xl:gap-[70px]"
            style={{ backgroundImage: `url("/background/smart.png")` }}
          >
            <div className="flex justify-between w-full  lg:col-span-1 text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="flex flex-col justify-between h-[65px] ">
                <p className="uppercase font-light">SET UP ONCE</p>
                <Image
                  src="/arrowww.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-fit h-[35px] sm:h-[80px] md:h-[35px] lg:h-[49px] 2xl:h-[70px]"
                />

                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-full w-full">
                  improve over time{" "}
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/shest.png" />
            </div>
            <div className="flex justify-between w-full items-center md:h-full  lg:col-span-1 text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="flex flex-col justify-between items-center md:max-w-3/5">
                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px]  text-left w-full h-full">
                  Multiple days and touch points allow to build
                  <span className="font-medium">
                    {" "}
                    reciprocity, trust, and authority {" "}
                  </span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/brain.png" />
            </div>
            <div className="flex justify-between w-full  lg:col-span-1 items-center text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="flex flex-col justify-between items-center md:max-w-3/5">
                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-full w-full">
                  Filter out the people that are interested{" "}
                  <span className="font-medium">in taking action NOW</span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/kubok.png" />
            </div>
            <div className="flex justify-between w-full  lg:col-span-1 items-center text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="flex flex-col justify-between items-center md:max-w-3/5">
                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-full w-full">
                  A life changing experience that overdelivers on value and
                  breeds{" "}
                  <span className="font-medium">long term customers </span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/love.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;

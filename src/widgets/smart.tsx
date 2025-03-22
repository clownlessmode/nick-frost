"use client";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageBoxProps {
  imageSrc: string;
}

const ImageBox: FC<ImageBoxProps> = ({ imageSrc }) => {
  return (
    <div className="border border-white relative size-[65px] shrink-0 h-[65px] flex justify-center items-center">
      <div className="absolute -top-[1.5px] -left-[2px] w-[4px] h-[4px] bg-white"></div>
      <div className="absolute -top-[1.5px] -right-[2px] w-[4px] h-[4px] bg-white"></div>
      <div className="absolute -bottom-[2px] -left-[2px] w-[4px] h-[4px] bg-white"></div>
      <div className="absolute -bottom-[2px] -right-[2px] w-[4px] h-[4px] bg-white"></div>
      <Image alt="" src={imageSrc} width={64} height={64} />
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
          className="w-full absolute z-[-1] -top-8 -left-[22px] text-[32vw] text-center tracking-tight leading-none text-white [text-shadow:_0_0_8.05px_rgba(255,255,255,0.3)]"
        >
          SMART
        </motion.h1>
        <div>
          <div
            className="w-full shadow-[0_0_30px_rgba(62,213,178,0.2)] border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover px-[24px] py-[25px] flex gap-5"
            style={{ backgroundImage: `url("/background/smart.png")` }}
          >
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between h-[65px]">
                <p className="uppercase text-[10px] font-extralight">
                  SET UP ONCE
                </p>
                <svg
                  width="8"
                  height="26"
                  viewBox="0 0 8 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.65765 37.1379C3.84672 37.327 4.15327 37.327 4.34235 37.1379L7.42347 34.0568C7.61254 33.8677 7.61254 33.5611 7.42347 33.3721C7.2344 33.183 6.92785 33.183 6.73877 33.3721L4 36.1108L1.26122 33.3721C1.07215 33.183 0.765601 33.183 0.576528 33.3721C0.387455 33.5611 0.387455 33.8677 0.576528 34.0568L3.65765 37.1379ZM3.51585 -2.11629e-08L3.51585 36.7955L4.48415 36.7955L4.48415 2.11629e-08L3.51585 -2.11629e-08Z"
                    fill="#3FD4B1"
                  />
                </svg>

                <p className="uppercase text-[10px] font-medium max-w-[130px]">
                  improve over time{" "}
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/shest.png" />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between h-[65px]">
                <p className="uppercase text-[10px] font-extralight max-w-[150px]">
                  Multiple days and touch points allow to build
                  <span className="font-medium">
                    {" "}
                    reciprocity, trust, and authority {" "}
                  </span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/brain.png" />
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col justify-between items-center ">
                <p className="uppercase text-[10px] font-extralight max-w-[144px]">
                  Filter out the people that are interested
                  <span className="font-medium">in taking action NOW</span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/kubok.png" />
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col justify-between items-center ">
                <p className="uppercase text-[10px] font-extralight max-w-[150px]">
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

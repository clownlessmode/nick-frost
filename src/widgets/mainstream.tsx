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

const Mainstream: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0", "end start"], // Начинаем с 1/3 высоты экрана и заканчиваем, когда блок уходит из вида
  });

  // Трансформируем scrollYProgress в значение translateY для заголовка
  const mainStreamY = useTransform(scrollYProgress, [0, 1], [-5, 390]);

  return (
    <div className="mt-[80px]" ref={containerRef}>
      <div className="w-full relative mt-[28px] ">
        <motion.h1
          style={{ y: mainStreamY }}
          className="w-full absolute z-[-1] -top-8 translate-x-[-25px] text-center text-[54px] sm:text-[105px] md:text-[120px] lg:text-[158px] 2xl:text-[263px] mx-auto tracking-tight leading-none text-white [text-shadow:_0_0_8.05px_rgba(255,255,255,0.3)]"
        >
          MAINSTREAM
        </motion.h1>
        <div>
          <div className="w-full leading-none md:grid md:grid-cols-2 md:grid-rows-2 mw2 border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover px-[24px] py-[25px] flex gap-5 sm:gap-[25px] md:gap-[40px] lg:gap-[50px] 2xl:gap-[70px]">
            <div className="flex justify-between w-full  lg:col-span-1 text-[10px] h-full sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
                <p className="uppercase font-medium">Communities</p>
                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
                  require constant work and attention
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/communities.png" />
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
              <ImageBox imageSrc="/mainstream/webinars.png" />
            </div>
            <div className="flex justify-between w-full  lg:col-span-1 items-center text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
                  don’t filter the right audience which leads to{" "}
                  <span className="font-medium">low engagement and sales </span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/filter.png" />
            </div>
            <div className="flex justify-between w-full  lg:col-span-1 items-center text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]">
              <div className="py-2 flex flex-col leading-none justify-between items-start h-[65px] sm:h-[148px] md:h-[70px] lg:h-[94px] 2xl:h-[148px]">
                <p className="uppercase font-light max-w-[130px] sm:max-w-[310px] md:max-w-2/3 w-full">
                  <span className="font-medium">
                    “sales over value” approach
                  </span>{" "}
                  which affects your personal brand in the long term
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/sales.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainstream;

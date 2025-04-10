"use client";

import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ModalForm from "@features/modal-form";

const Next: FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const zoomVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="relative mt-[80px] sm:mt-[150px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[150px] w-full overflow-hidden">
      <motion.div
        className="mx-auto max-w-[267px] sm:max-w-[573px] md:max-w-[420px] lg:max-w-[480px] 2xl:max-w-[840px] relative mt-[50px]"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={zoomVariants}
      >
        <div className="flex flex-col gap-[18px] sm:gap-[37px] md:gap-[24px] lg:gap-[0] px-[20px] py-[25px] sm:px-[42px] sm:py-[56px] md:px-[44px] md:py-[56px] lg:px-[53px] lg:py-[57px] 2xl:px-[102px] 2xl:py-[109px] border border-white/20 rounded-[12px] sm:rounded-[19px] md:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[28px] backdrop-blur-md">
          <h1 className="text-[33px] sm:text-[72px] md:text-[46px] lg:text-[55px] 2xl:text-[102px] uppercase lg:mb-[69px]">
            what&apos;s next
          </h1>
          <div className="flex flex-col gap-[10px] sm:gap-[20px] md:gap-[12px] lg:gap-[15px] 2xl:gap-[28px] lg:mb-[69px]">
            <div className="flex flex-col gap-[3px] sm:gap-[6px] md:gap-[7px] lg:gap-[5px] 2xl:gap-[10px]">
              <p className="font-light text-[8px] sm:text-[16px] md:text-[8px] lg:text-[10px] 2xl:text-[16px]">
                [01]
              </p>
              <div className="flex items-center flex-row gap-[5px] sm:gap-[10px] md:gap-[6px] lg:gap-[7px] 2xl:gap-[15px]">
                <Image
                  src={"/next/check.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] 2xl:w-[28px] 2xl:h-[28px]"
                />
                <p className="uppercase text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[28px]">
                  watch the video
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[3px] sm:gap-[6px] md:gap-[7px] lg:gap-[5px] 2xl:gap-[10px]">
              <p className="font-light text-[8px] sm:text-[16px] md:text-[8px] lg:text-[10px] 2xl:text-[16px]">
                [02]
              </p>
              <div className="flex items-center flex-row gap-[5px] sm:gap-[10px] md:gap-[6px] lg:gap-[7px] 2xl:gap-[15px]">
                <Image
                  src={"/next/check.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] 2xl:w-[28px] 2xl:h-[28px]"
                />
                <p className="uppercase text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[28px]">
                  choose &quot;the smart way&quot; for you
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[3px] sm:gap-[6px] md:gap-[7px] lg:gap-[5px] 2xl:gap-[10px]">
              <p className="font-light text-[8px] sm:text-[16px] md:text-[8px] lg:text-[10px] 2xl:text-[16px]">
                [03]
              </p>
              <div className="flex items-center flex-row gap-[5px] sm:gap-[10px] md:gap-[6px] lg:gap-[7px] 2xl:gap-[15px]">
                <Image
                  src={"/next/rectangle.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] 2xl:w-[28px] 2xl:h-[28px]"
                />
                <p className="uppercase font-light text-[10px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[28px]">
                  book your call
                </p>
              </div>
            </div>
          </div>
          {/* <Button className="w-full text-[20px] md:text-[10px] lg:text-[10px] 2xl:text-[18px]" variant={"secondary"}>
            FREE STRATEGY
          </Button> */}
          <ModalForm triggerText="FREE STRATEGY" />
          <p className="uppercase font-light text-center text-[8px] mt-[8px] sm:text-[16px] sm:mt-[16px] md:text-[10px] md:mt-[10px] lg:text-[14px] lg:mt-[30px] 2xl:text-[28px] 2xl:mt-[28px]">
            <span className="font-medium">step 3/3 -</span> apply for a free
            strategy call
          </p>
        </div>
        {/* Левый верхний угол */}
        <div className="absolute top-0 left-0 w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px] border-t border-l rounded-tl-[14px] 2xl:rounded-tl-[28px] transform -translate-y-[15px] -translate-x-[10px]"></div>

        {/* Правый верхний угол */}
        <div className="absolute top-0 right-0 w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px] border-t border-r rounded-tr-[14px] 2xl:rounded-tr-[28px] transform -translate-y-[15px] translate-x-[10px]"></div>

        {/* Левый нижний угол */}
        <div className="absolute bottom-0 left-0 w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px] border-b border-l rounded-bl-[14px] 2xl:rounded-bl-[28px] transform translate-y-[15px] -translate-x-[10px]"></div>

        {/* Правый нижний угол */}
        <div className="absolute bottom-0 right-0 w-[15px] h-[15px] 2xl:w-[30px] 2xl:h-[30px] border-b border-r rounded-br-[14px] 2xl:rounded-br-[28px] transform translate-y-[15px] translate-x-[10px]"></div>
      </motion.div>
      <div className="absolute inset-0 z-[-1] shrink-0 blur-[70px] overflow-hidden">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            alt="hero-splash"
            src={"/background/hero-splash.svg"}
            width={1050}
            height={212}
            className="w-full h-2/3 object-contain max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Next;

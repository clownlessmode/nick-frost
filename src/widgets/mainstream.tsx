"use client";
// import Image from "next/image";
// import React, { FC } from "react";
// interface ImageBoxProps {
//   imageSrc: string;
// }

// const ImageBox: FC<ImageBoxProps> = ({ imageSrc }) => {
//   return (
//     <div className="border border-white relative size-[65px] shrink-0 h-[65px] flex justify-center items-center">
//       <div className="absolute -top-[1.5px] -left-[2px] w-[4px] h-[4px] bg-white"></div>
//       <div className="absolute -top-[1.5px] -right-[2px] w-[4px] h-[4px] bg-white"></div>
//       <div className="absolute -bottom-[2px] -left-[2px] w-[4px] h-[4px] bg-white"></div>
//       <div className="absolute -bottom-[2px] -right-[2px] w-[4px] h-[4px] bg-white"></div>
//       <Image alt="" src={imageSrc} width={64} height={64} />
//     </div>
//   );
// };
// const Mainstream: FC = () => {
//   return (
//     <div className="mt-[80px]">
//       <h1 className="max-w-[175px] bg-gradient-to-r text-left  from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight uppercase">
//         THERE ARE 2 WAYS TO
//       </h1>
//       <h1 className="mt-2 text-right leading-[42px] bg-gradient-to-r  from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium  tracking-tight uppercase">
//         <span className="text-background bg-white px-2 py-px rounded-xl">
//           SCALE
//         </span>{" "}
//         YOUR HIGH TICKET OFFER
//       </h1>
//       <div className="w-full relative mt-[28px]">
//         <h1 className="w-full absolute -left-[24px] -top-8 text-[17vw] text-center tracking-tight leading-none">
//           MAINSTREAM
//         </h1>
//         <div>
//           <div className="w-full rounded-[15px] flex-col bg-transparent backdrop-blur-xs px-[24px] py-[25px] flex gap-5">
//             <div className="flex justify-between w-full">
//               <div className="flex flex-col justify-between h-[65px]">
//                 <p className="uppercase text-[10px] font-medium">COMMUNITIES</p>
//                 <p className="uppercase text-[10px] font-extralight max-w-[130px]">
//                   require constant work and attention
//                 </p>
//               </div>
//               <ImageBox imageSrc="/mainstream/communities.png" />
//             </div>
//             <div className="flex justify-between w-full">
//               <div className="flex flex-col justify-between h-[65px]">
//                 <p className="uppercase text-[10px] font-medium">WEBINARS</p>
//                 <p className="uppercase text-[10px] font-extralight max-w-[100px]">
//                   <span className="font-medium">
//                     not enough time or information
//                   </span>{" "}
//                   to make a decision
//                 </p>
//               </div>
//               <ImageBox imageSrc="/mainstream/webinars.png" />
//             </div>
//             <div className="flex justify-between w-full items-center">
//               <div className="flex flex-col justify-between items-center ">
//                 <p className="uppercase text-[10px] font-extralight max-w-[144px]">
//                   don’t filter the right audience which leads to{" "}
//                   <span className="font-medium"> low engagement and sales</span>
//                 </p>
//               </div>
//               <ImageBox imageSrc="/mainstream/filter.png" />
//             </div>
//             <div className="flex justify-between w-full items-center">
//               <div className="flex flex-col justify-between items-center ">
//                 <p className="uppercase text-[10px] font-extralight max-w-[134px]">
//                   <span className="font-medium">
//                     “sales over value” approach
//                   </span>{" "}
//                   which affects your personal brand in the long term
//                 </p>
//               </div>
//               <ImageBox imageSrc="/mainstream/sales.png" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mainstream;
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
      <h1 className="max-w-[175px] bg-gradient-to-r text-left from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight uppercase">
        THERE ARE 2 WAYS TO
      </h1>
      <h1 className="mt-2 text-right leading-[42px] bg-gradient-to-r from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium tracking-tight uppercase">
        <span className="text-background bg-white px-2 py-px rounded-xl">
          SCALE
        </span>{" "}
        YOUR HIGH TICKET OFFER
      </h1>
      <div className="w-full relative mt-[28px]">
        <motion.h1
          style={{ y: mainStreamY }}
          className="w-full absolute -left-[24px] -top-8 text-[17vw] text-center tracking-tight leading-none"
        >
          MAINSTREAM
        </motion.h1>
        <div>
          <div className="w-full rounded-[15px] flex-col bg-transparent backdrop-blur-xs px-[24px] py-[25px] flex gap-5">
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between h-[65px]">
                <p className="uppercase text-[10px] font-medium">COMMUNITIES</p>
                <p className="uppercase text-[10px] font-extralight max-w-[130px]">
                  require constant work and attention
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/communities.png" />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between h-[65px]">
                <p className="uppercase text-[10px] font-medium">WEBINARS</p>
                <p className="uppercase text-[10px] font-extralight max-w-[100px]">
                  <span className="font-medium">
                    not enough time or information
                  </span>{" "}
                  to make a decision
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/webinars.png" />
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col justify-between items-center ">
                <p className="uppercase text-[10px] font-extralight max-w-[144px]">
                  don't filter the right audience which leads to{" "}
                  <span className="font-medium"> low engagement and sales</span>
                </p>
              </div>
              <ImageBox imageSrc="/mainstream/filter.png" />
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col justify-between items-center ">
                <p className="uppercase text-[10px] font-extralight max-w-[134px]">
                  <span className="font-medium">
                    "sales over value" approach
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

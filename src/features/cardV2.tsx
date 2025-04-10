import { cn } from "@shared/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Icon3d from "./icon3d";
import Image from "next/image";

const CardV2 = ({
    image,
    header,
    description,
    className,
    back,
    src,
  }: {
    image: string;
    header: string;
    description: string;
    className: string;
    back: string;
    src: string[];
  }) => {
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    
    // Функция для определения информации на основе header и индекса иконки
    const getIconInfo = (index: number) => {
      if (header === "KATE SHUMSKAYA") {
        switch (index) {
          case 0: // globe.webp
          return "900.000.000+ views in 8 months";
          case 1: // coin.webp
          return "1.7M folllowers -> 2.5M followers";
          case 2: // fire.webp
          return "Max views from 1 Reel - 64,9M";
          case 3: // crown.webp
          return "Transformed into The Golden standard of content in Europe";
          default:
            return "Innovative digital content creator";
          }
        } else {
          // Дефолтные тексты для других персонажей
          switch (index) {
            case 0: // money.webp
            return "$3.478.341 in 1 month with 1 Product Launch";
            case 1: // coin.webp
            return "350.000 views from 1 Reel in 1 day";
            case 2: // fire.webp
            return "49.000 story mentions with gamification";
            case 3: // crown.webp
            return "7000 comments on 1 post in 1 day";
            default:
              return "Innovative digital content creator";
            }
          }
        };
        
        const [textInnerBlock, setTextInnerBlock] = useState(getIconInfo(0));
        // Функция для определения ширины блока
    const getBlockWidth = (index: number) => {
      if (header === "KATE SHUMSKAYA") {
        switch (index) {
          case 0:
            return "w-[330px]";
          case 1:
            return "w-[300px]";
          case 2:
            return "w-[280px]";
          case 3:
            return "w-[270px]";
          default:
            return "w-[250px]";
        }
      } else {
        return "w-[250px]";
      }
    };
  
    // Функция для определения позиции блока
    const getBlockPosition = (index: number) => {
      // В мобильном и планшетном виде иконки расположены в линию
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        return index === 0 || index === 2
          ? "left-[calc(40%)]"
          : "right-[calc(40%)]";
      }
  
      // В десктопном виде иконки расположены в сетке 2x2
      // Для левой колонки (индексы 0, 2) блок появляется справа
      // Для правой колонки (индексы 1, 3) блок появляется слева
      return index % 2 === 0 ? "left-[calc(40%)]" : "right-[calc(40%)]";
    };

    const changeIconAndText = (index: number) => {
      setTextInnerBlock(getIconInfo(index));
      setHoveredIcon(index);
    }
  
    return (
      <div
        className={`sm:max-w-[600px] sm:h-[711px] max-w-[280px] sm:rounded-[42px] md:rounded-[20px] md:h-[333px] md:w-full lg:h-[450px] 2xl:h-[658px] 2xl:max-w-full overflow-hidden w-full h-[333px] relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover flex gap-5 ${className}`}
      >
        <h2 className="text-[98px] 2xl:text-[340px] sm:text-[196px] md:text-[160px] lg:text-[200px] opacity-10 absolute top-[5px] leading-none w-full text-center z-[-2] font-light">
          {back}
        </h2>
        <Image
          src={image}
          alt={header}
          width={5000}
          height={5000}
          className="z-[-1] w-full object-contain h-full"
        />
  
        <div className="flex flex-col items-center absolute bottom-[17px] sm:bottom-[34px] md:w-full md:px-[20px] md:bottom-[18px]">
          <div className="p-[10px] sm:text-[16px] md:hidden sm:p-[20px] bg-black/5 backdrop-blur-2xl text-[8px] mb-[15px] rounded-[5px] w-full flex items-center justify-center border-[0.5px] border-white">
            {textInnerBlock}
          </div>
  
          <div className="flex items-center justify-between gap-1 w-full mb-[15px] max-w-[193px] sm:max-w-[405px] md:gap-4 md:max-w-full md:flex-row md:grid md:grid-cols-2 md:max-h-[300px] md:mb-0 relative">
            {src.map((item, index) => (
              <div key={item} className="relative">
                <Icon3d
                  src={item}
                  className={cn(index % 2 !== 0 && "md:ml-auto")}
                  index={index}
                  onMouseEnter={(idx) => setHoveredIcon(idx)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  onClick={(idx) => changeIconAndText(idx)}
                />
  
                {!isMobile && (
                  <AnimatePresence>
                    {hoveredIcon === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`absolute w-full ${getBlockPosition(
                          index
                        )} top-1/2 -translate-y-1/2 ${getBlockWidth(
                          index
                        )} backdrop-blur-lg text-white p-4 rounded-lg z-30`}
                      >
                        <p className="text-xs sm:text-[16px] md:text-[10px] lg:text-[18px]">
                          {getIconInfo(index)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
  
          <h1 className="text-white lg:w-full lg:text-center 2xl:text-[50px] lg:max-w-[300px] text-center text-[24px] sm:text-[50px] font-medium leading-none tracking-tight uppercase md:max-w-[140px] md:text-[24px] lg:text-[48px]">
            {header}
          </h1>
          {description !== "" ? (
            <div className="flex items-center mt-1 gap-1 text-center">
              <p className="text-white text-xs uppercase sm:text-[16px] md:text-[10px] lg:text-[18px]">
                {description}
              </p>
            </div>
          ) : (
            <div className="flex items-center mt-1 gap-1 text-center">
              <p className="text-transparent text-xs sm:text-[16px] md:text-[10px] lg:text-[18px]">
                {description} fjnjs
              </p>
            </div>
          )}
        </div>
      </div>
    );
};

export default CardV2;
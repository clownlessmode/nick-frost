"use client"
import { useState } from "react";
import Image from 'next/image';
import { Instagram } from "lucide-react";
import PopUpInCard from "./popUpInCard";
import PopUpInCardReverse from "./popUpInCardReverse";

const CardV1 = ({
    image,
    header,
    description,
    className,
  }: {
    banner: boolean;
    image: string;
    header: string;
    description: string;
    className: string;
  }) => {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  
    // Информация для каждого декоративного изображения
    const getDecorationInfo = () => {
      switch (header) {
        case "NICK FROST":
          return [
            "Creativity",
            "Influencing Human Behavior",
            "Event Campaign systems with 7 figures collected",
            "Developed a Personal Brand Strategy with 900M+ views in 8 months on Instagram",
            "8+ High Ticket Info-Products Created and Launched",
          ];
        case "Savva Altman":
          return [
            "“Word of mouth” Engagement strategies with over 50k people",
            "On average x2 Event sign-ups with gamification",
            "Human like Chat Bots that replicate the Founder",
            "Automations",
            "Enhancing customer experience",
          ];
        default:
          return [
            "Creative Expertise",
            "Digital Strategy",
            "Social Media Growth",
            "Brand Development",
            "Content Creation",
          ];
      }
    };
  
    // const getBlockWidth = (index: number) => {
    //   switch (header) {
    //     case "SAVVA ALTMAN":
    //       // Разные ширины для разных блоков Savva
    //       return index === 0
    //         ? "w-[500px]"
    //         : index === 1
    //         ? "w-[200px]"
    //         : index === 2
    //         ? "w-[10px]"
    //         : index === 3
    //         ? "w-[20px]"
    //         : "w-[300px]";
    //     case "NICK FROST":
    //       // Разные ширины для разных блоков Nick
    //       return index === 0
    //         ? "w-[100px]"
    //         : index === 1
    //         ? "w-[220px]"
    //         : index === 2
    //         ? "w-[240px]"
    //         : index === 3
    //         ? "w-[260px]"
    //         : "w-[280px]";
    //     default:
    //       return "w-[230px]";
    //   }
    // };
  
    // Получаем информацию на основе header
    const decorationInfo = getDecorationInfo();
    return (
      <div
        className={`sm:max-w-[600px] sm:h-[711px] justify-end max-w-[280px] h-[333px] sm:rounded-[42px] md:rounded-[20px] md:min-w-[260px]! lg:min-w-[356px]! 2xl:min-w-[520px]! md:h-[333px] lg:h-[450px] 2xl:h-[658px]      relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover  py-[14px] flex gap-5 ${className}`}
      >
        <Image
          src={image}
          alt="Nick Frost"
          width={5000}
          height={5000}
          className="z-[-1] w-full h-full object-cover"
        />
        {/* {banner && (
          <div className="text-left bg-white/5 z-10 backdrop-blur-sm text-[8px] sm:text-[16px] md:text-[8px] md:p-[10px] lg:text-[12px] 2xl:text-[18px] lg:p-[10px] 2xl:p-[10px] sm:p-[20px] md:top-[115px] p-[10px] absolute top-[115px] sm:top-[240px] rounded-lg lg:top-[160px] 2xl:top-[240px]">
            <p className="text-white">
              Personal Brand Strategy with{" "}
              <span className="text-medium">900M+</span>
              <br /> views in 18 months on Instagram
            </p>
          </div>
        )} */}
  
        <div className="flex flex-col items-center absolute bottom-[17px]">
          <h1 className="text-white text-center text-4xl sm:text-[80px] md:text-[32px] lg:text-[44px] 2xl:text-[62px] font-medium leading-none tracking-tight uppercase">
            {header}
          </h1>
          {description !== "" ? (
            <div className="flex items-center mt-1 gap-1 text-center">
              <Instagram className="size-[14px] sm:size-[24px] md:size-[14px] lg:size-[16px] 2xl:size-[24px]" />
              <p className="text-white text-xs sm:text-[16px] md:text-xs lg:text-[10px] 2xl:text-[16px]">
                {description}
              </p>
            </div>
          ) : (
            <div className="flex items-center mt-1 gap-1 text-center size-[14px] sm:size-[24px] md:size-[14px] lg:size-[16px] 2xl:size-[24px]">
              <p className="text-transparent text-xs ">{description}</p>
            </div>
          )}
        </div>
        {/* Первое изображение (верхнее левое) */}
        <div className="absolute left-[31px] sm:left-[62px] top-[25px] sm:top-[50px] md:left-[31px] md:top-[25px] lg:left-[20px] lg:top-[64px] 2xl:left-[30px] 2xl:top-[80px] z-10">
          <div
            className="relative"
            onMouseEnter={() => setHoveredImage(0)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src="/models/zzzz.svg"
              alt="Decoration 1"
              width={39}
              height={39}
              className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
            />
            <PopUpInCard hovImg={hoveredImage} label={decorationInfo[0]}  num={0}/>
          </div>
        </div>
        {/* Второе изображение (второе левое) */}
        <div className="absolute left-[11px] top-[93px] sm:left-[22px] sm:top-[186px] md:left-[11px] md:top-[93px] lg:left-[20px] lg:top-[128px] 2xl:left-[30px] 2xl:top-[160px] z-10">
          <div
            className="relative"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src="/models/zzzz.svg"
              alt="Decoration 2"
              width={39}
              height={39}
              className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
            />
            <PopUpInCard hovImg={hoveredImage} label={decorationInfo[1]} num={1}/>
          </div>
        </div>
        {/* Третье изображение (третье левое) */}
        <div className="absolute left-[63px] top-[174px] sm:left-[126px] sm:top-[348px] md:left-[63px] md:top-[174px] lg:left-[30px] lg:top-[208px] 2xl:left-[40px] 2xl:top-[240px] z-10">
          <div
            className="relative"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src="/models/zzzz.svg"
              alt="Decoration 3"
              width={39}
              height={39}
              className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
            />
            <PopUpInCard hovImg={hoveredImage} label={decorationInfo[2]} num={2}/>
          </div>
        </div>
  
        {/* Четвертое изображение (верхнее правое) */}
        <div className="absolute right-[21px] sm:right-[42px] sm:top-[76px] top-[38px] md:right-[21px] md:top-[76px] lg:right-[30px] lg:top-[108px] 2xl:right-[40px] 2xl:top-[140px] z-10">
          <div
            className="relative"
            onMouseEnter={() => setHoveredImage(null)}
            onMouseLeave={() => setHoveredImage(3)}
          >
            <PopUpInCardReverse hovImg={hoveredImage} label={decorationInfo[3]} num={3} />
            <Image
              src="/models/zzzz.svg"
              alt="Decoration 4"
              width={39}
              height={39}
              className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer relative"
            />
          </div>
        </div>
  
        {/* Пятое изображение (нижнее правое) */}
        <div className="absolute right-[16px] sm:right-[32px] sm:top-[286px] top-[143px] md:right-[16px] md:top-[143px] lg:right-[15px] lg:top-[178px] 2xl:right-[20px] 2xl:top-[210px] z-10">
          <div
            className="relative"
            onMouseEnter={() => setHoveredImage(4)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <PopUpInCardReverse hovImg={hoveredImage} label={decorationInfo[4]} num={4} />
            <Image
              src="/models/zzzz.svg"
              alt="Decoration 5"
              width={39}
              height={39}
              className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
};

export default CardV1;
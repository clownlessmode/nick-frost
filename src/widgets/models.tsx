"use client";
import { cn } from "@shared/lib/utils";
import Instagram from "@shared/ui/instagram";
import Image from "next/image";
import React, { useState } from "react";

const CardV1 = ({
  banner,
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

  const getBlockWidth = (index: number) => {
    switch (header) {
      case "SAVVA ALTMAN":
        // Разные ширины для разных блоков Savva
        return index === 0
          ? "w-[500px]"
          : index === 1
          ? "w-[200px]"
          : index === 2
          ? "w-[10px]"
          : index === 3
          ? "w-[20px]"
          : "w-[300px]";
      case "NICK FROST":
        // Разные ширины для разных блоков Nick
        return index === 0
          ? "w-[100px]"
          : index === 1
          ? "w-[220px]"
          : index === 2
          ? "w-[240px]"
          : index === 3
          ? "w-[260px]"
          : "w-[280px]";
      default:
        return "w-[230px]";
    }
  };

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
            <p className="text-transparent text-xs ">{description} fjnjs</p>
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

          {hoveredImage === 0 && (
            <div
              className={`absolute left-[50px] top-0 ${getBlockWidth(
                0
              )} backdrop-blur-lg text-white p-4 rounded-lg z-30`}
            >
              <p className="text-sm">{decorationInfo[0]}</p>
            </div>
          )}
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

          {hoveredImage === 1 && (
            <div
              className={`absolute left-[50px] top-0 w-[220px]  backdrop-blur-lg text-white p-4 rounded-lg z-30 ${getBlockWidth(
                1
              )}`}
            >
              <p className="text-sm">{decorationInfo[1]}</p>
            </div>
          )}
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

          {hoveredImage === 2 && (
            <div
              className={`absolute left-[50px] top-0 w-[230px] backdrop-blur-lg text-white p-4 rounded-lg z-30 ${getBlockWidth(
                2
              )}`}
            >
              <p className="text-sm">{decorationInfo[2]}</p>
            </div>
          )}
        </div>
      </div>

      {/* Четвертое изображение (верхнее правое) */}
      <div className="absolute right-[21px] sm:right-[42px] sm:top-[76px] top-[38px] md:right-[21px] md:top-[76px] lg:right-[30px] lg:top-[108px] 2xl:right-[40px] 2xl:top-[140px] z-10">
        <div
          className="relative"
          onMouseEnter={() => setHoveredImage(3)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Image
            src="/models/zzzz.svg"
            alt="Decoration 4"
            width={39}
            height={39}
            className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
          />

          {hoveredImage === 3 && (
            <div
              className={`absolute right-[50px] top-0 w-[230px] backdrop-blur-lg text-white p-4 rounded-lg z-30 ${getBlockWidth(
                3
              )}`}
            >
              <p className="text-sm">{decorationInfo[3]}</p>
            </div>
          )}
        </div>
      </div>

      {/* Пятое изображение (нижнее правое) */}
      <div className="absolute right-[16px] sm:right-[32px] sm:top-[286px] top-[143px] md:right-[16px] md:top-[143px] lg:right-[15px] lg:top-[178px] 2xl:right-[20px] 2xl:top-[210px] z-10">
        <div
          className="relative"
          onMouseEnter={() => setHoveredImage(4)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Image
            src="/models/zzzz.svg"
            alt="Decoration 5"
            width={39}
            height={39}
            className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
          />

          {hoveredImage === 4 && (
            <div
              className={`absolute right-[50px] top-0 w-[230px] backdrop-blur-lg text-white p-4 rounded-lg z-30 ${getBlockWidth(
                4
              )}`}
            >
              <p className="text-sm">{decorationInfo[4]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Icon3d = ({
  src,
  className,
  index,
  onMouseEnter,
  onMouseLeave,
}: {
  src: string;
  className?: string;
  index: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className={`rounded-[11px] md:w-fit border-[0.5px] border-white bg-transparent size-full grayscale hover:grayscale-0 transition-all duration-300 ${className}`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
    >
      <Image
        width={140}
        height={140}
        className="size-full md:size-[64px] lg:size-[86px] 2xl:size-[133px]"
        alt="icon 3d"
        src={src}
      />
    </div>
  );
};

const CardV2 = ({
  banner,
  image,
  header,
  description,
  className,
  back,
  src,
}: {
  banner: boolean;
  image: string;
  header: string;
  description: string;
  className: string;
  back: string;
  src: string[];
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  
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
  
  // Функция для определения ширины блока
  const getBlockWidth = (index: number) => {
    if (header === "KATE SHUMSKAYA") {
      switch (index) {
        case 0: return "w-[330px]";
        case 1: return "w-[300px]";
        case 2: return "w-[280px]";
        case 3: return "w-[270px]";
        default: return "w-[250px]";
      }
    } else {
      return "w-[250px]";
    }
  };

  // Функция для определения позиции блока
  const getBlockPosition = (index: number) => {
    // В мобильном и планшетном виде иконки расположены в линию
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return index === 0 || index === 2 ? "left-[calc(40%)]" : "right-[calc(40%)]";
    }
    
    // В десктопном виде иконки расположены в сетке 2x2
    // Для левой колонки (индексы 0, 2) блок появляется справа
    // Для правой колонки (индексы 1, 3) блок появляется слева
    return index % 2 === 0 ? "left-[calc(40%)]" : "right-[calc(40%)]";
  };

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
        {banner && (
          <div className="p-[10px] sm:text-[16px] md:hidden sm:p-[20px] bg-black/5 backdrop-blur-2xl text-[8px] mb-[15px] rounded-[5px] w-full flex items-center justify-center border-[0.5px] border-white">
            900.000.000+ views in 8 months
          </div>
        )}
        
        <div className="flex items-center justify-between gap-1 w-full mb-[15px] max-w-[193px] sm:max-w-[405px] md:gap-4 md:max-w-full md:flex-row md:grid md:grid-cols-2 md:max-h-[300px] md:mb-0 relative">
          {src.map((item, index) => (
            <div key={item} className="relative">
              <Icon3d
                src={item}
                className={cn(index % 2 !== 0 && "md:ml-auto")}
                index={index}
                onMouseEnter={(idx) => setHoveredIcon(idx)}
                onMouseLeave={() => setHoveredIcon(null)}
              />
              
              {hoveredIcon === index && (
                <div 
                  className={`absolute ${getBlockPosition(index)} top-1/2 -translate-y-1/2 ${getBlockWidth(index)} backdrop-blur-lg text-white p-4 rounded-lg z-30`}
                >
                  <p className="text-xs sm:text-[16px] md:text-[10px] lg:text-[18px]">{getIconInfo(index)}</p>
                </div>
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

const Models = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5 mt-[100px] sm:mt-[150px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[150px] md:flex-row md:max-w-[728px] mx-auto md:hidden">
        <CardV1
          banner={true}
          image="/models/nickfrost.png"
          header="NICK FROST"
          description="40K followers on Instagram"
          className="col-span-5"
        />
        <CardV2
          banner={true}
          className="col-span-5"
          image="/models/katee.png"
          header="KATE SHUMSKAYA"
          description="@mimisskate"
          back="90 M"
          src={[
            "/models/3d/globe.webp",
            "/models/3d/coin.webp",
            "/models/3d/fire.webp",
            "/models/3d/crown.webp",
          ]}
        />
        <CardV1
          className="col-span-6"
          banner={false}
          image="/models/savva.png"
          header="Savva Altman"
          description=""
        />
        <CardV2
          className="col-span-3"
          back="3,4M$"
          banner={false}
          image="/models/sergey.png"
          header="Sergey Kosenko"
          description="@mr.thank.you"
          src={[
            "/models/3d/money.webp",
            "/models/3d/mail.webp",
            "/models/3d/eye.webp",
            "/models/3d/message.webp",
          ]}
        />
      </div>

      <div className="w-full hidden flex-col justify-center items-center gap-5 mt-[80px]! mw mx-auto md:flex">
        <div className="flex flex-row gap-5 w-full">
          <CardV1
            banner={true}
            image="/models/nickfrost.png"
            header="NICK FROST"
            description="40K followers on Instagram"
            className="col-span-5"
          />
          <CardV2
            banner={true}
            className="col-span-5"
            image="/models/katee.png"
            header="KATE SHUMSKAYA"
            description="@mimisskate"
            back="90 M"
            src={[
              "/models/3d/globe.webp",
              "/models/3d/coin.webp",
              "/models/3d/fire.webp",
              "/models/3d/crown.webp",
            ]}
          />
        </div>
        <div className="flex flex-row gap-5 w-full">
          <CardV2
            className="col-span-3"
            back="3,4M$"
            banner={false}
            image="/models/sergey.png"
            header="Sergey Kosenko"
            description="@mr.thank.you"
            src={[
              "/models/3d/money.webp",
              "/models/3d/mail.webp",
              "/models/3d/eye.webp",
              "/models/3d/message.webp",
            ]}
          />
          <CardV1
            className="col-span-6"
            banner={false}
            image="/models/savva.png"
            header="Savva Altman"
            description=""
          />
        </div>
      </div>
    </>
  );
};

export default Models;

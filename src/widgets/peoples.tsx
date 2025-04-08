import { Button } from "@shared/ui/button";
import Image from "next/image";
import React, { FC } from "react";
interface PeopleCardProps {
  text: string;
  src: string;
}
const PeopleCard: FC<PeopleCardProps> = ({ text, src }) => {
  return (
    <div className="group text-white transition-all size-[133px] flex justify-center items-center bg-transparent rounded-[9.84px] border border-white/10 backdrop-blur-sm relative sm:size-[287px] md:size-[232px] lg:size-[314px] 2xl:size-[0px] 2xl:w-[480px] 2xl:h-[422px]">
      <Image
        alt={text}
        src={src}
        width={900.45}
        height={900.45}
        className="grayscale group-hover:grayscale-0 size-[113.45px] sm:size-[209px] md:size-[172px] lg:size-[234px] 2xl:size-[358px] transition-all"
      />
      <div className="transition-opacity  bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-20 absolute inset-0 rounded-[9.84px]"></div>
      <p className="font-extralight absolute text-[9.8px] sm:text-[16px] md:text-[14px] lg:text-[20px] 2xl:text-[33px] max-w-[60px] sm:max-w-[100px] lg:max-w-[150px] 2xl:max-w-[280px] leading-normal text-center bottom-1">
        {text}
      </p>
    </div>
  );
};

const Peoples: FC = () => {
  return (
    <div className="mt-[80px] sm:mt-[150px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[150px]">
      <h1 className="block md:hidden bg-gradient-to-r from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight text-center uppercase text-[32px] sm:text-[66px] md:text-[52px] lg:text-[72px] 2xl:text-[122px]">
        THIS IS NOT FOR <br />
        EVERYONE <br />
      </h1>
      <h1 className="hidden md:block bg-gradient-to-r from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight text-center uppercase text-[32px] sm:text-[66px] md:text-[52px] lg:text-[72px] 2xl:text-[122px] relative -z-10 mb-[-70px]">
        THIS IS NOT FOR EVERYONE <br />
      </h1>

      {/* Мобильная версия - видима только до md */}
      <div className="mt-5 relative md:hidden">
        <div className="flex justify-center gap-3 sm:gap-[28px]">
          <PeopleCard src={"/peoples/coachers.png"} text="TOP TIER CREATORS" />
          <PeopleCard
            text="COACHES & CONSULTANTS"
            src={"/peoples/founders.png"}
          />
        </div>
        <div className="w-full flex justify-center mt-[13px] sm:mt-[24px] gap-8">
          <div className="flex flex-row absolute -bottom-[60px] sm:-bottom-[90px]">
            <Image
              className="size-[210px] sm:size-[400px] invert-100"
              alt="border"
              src={"/peoples/border.svg"}
              width={204}
              height={210.5}
            />
          </div>
          <PeopleCard src={"/peoples/creators.png"} text="FOUNDERS" />
        </div>
        <div className="-top-12 bg-black z-[-1] w-1/2 left-1/2 -translate-x-1/2 blur-2xl h-[150%] absolute rounded-[50%]"></div>
      </div>

      {/* Десктопная версия - видима только от md и выше */}
      <div className="md:mt-14 lg:mt-13 2xl:mt-10 relative hidden md:block">
        <div className="flex justify-center items-center gap-6 lg:gap-10 relative">
          <PeopleCard src={"/peoples/founders.png"} text="TOP TIER CREATORS" />

          <div className="relative">
            <PeopleCard
              text="COACHES & CONSULTANTS"
              src={"/peoples/coachers.png"}
            />
          </div>

          <PeopleCard src={"/peoples/creators.png"} text="FOUNDERS" />
        </div>

        {/* Изображение borderpc перемещено между картами и кнопками */}
        <div className="flex justify-center mt-2">
          <Image
            className=""
            alt="border"
            src={"/peoples/borderpc.svg"}
            width={600}
            height={600}
          />
        </div>

        <div className="-top-12 bg-black z-[-1] w-1/2 left-1/2 -translate-x-1/2 blur-2xl h-[150%] absolute rounded-[50%]"></div>
      </div>

      {/* Мобильная версия кнопок - в столбец */}
      <div className="w-full font-extralight flex flex-col items-center mt-[60px] md:hidden">
        <Button className="w-full shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] border-white/10 overflow-hidden group">
          <span className="relative z-10">
            Simple Systems that &apos;Just Work&apos;
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
        <Image
          alt="separator"
          src={"/peoples/separator.svg"}
          width={3}
          height={40}
          className="invert-100"
        />

        <Button className="w-full shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] border-white/10 overflow-hidden group">
          <span className="relative z-10">
            Growth without sacrificing personal touch
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
        <Image
          alt="separator"
          src={"/peoples/separator.svg"}
          width={3}
          height={40}
          className="invert-100"
        />
        <Button className="w-full shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] border-white/10 overflow-hidden group">
          <span className="relative z-10">Quality at scale</span>
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
      </div>

      {/* Десктопная версия кнопок - в ряд */}
      <div className=" grid-cols-3 gap-4 lg:gap-6 mt-2 hidden md:grid mw mx-auto">
        <Button className="shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] 2xl:h-[70px] border-white/10 overflow-hidden group">
          <span className="relative font-extralight z-10 md:text-[8px] lg:text-[12px] 2xl:text-[18px]">
            Simple Systems that &apos;Just Work&apos;
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>

        <Button className="shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] 2xl:h-[70px] border-white/10 overflow-hidden group">
          <span className="relative z-10 font-extralight md:text-[8px] lg:text-[12px] 2xl:text-[18px]">
            Growth without sacrificing personal touch
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>

        <Button className="shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] 2xl:h-[70px] border-white/10 overflow-hidden group">
          <span className="relative z-10 font-extralight md:text-[8px] lg:text-[12px] 2xl:text-[18px]">
            Quality at scale
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
      </div>
    </div>
  );
};

export default Peoples;

import { Button } from "@shared/ui/button";
import Image from "next/image";
import React, { FC } from "react";
interface PeopleCardProps {
  text: string;
  src: string;
}
const PeopleCard: FC<PeopleCardProps> = ({ text, src }) => {
  return (
    <div className="group text-white transition-all size-[133px] flex justify-center items-center bg-transparent rounded-[9.84px] border border-white/10 backdrop-blur-sm relative">
      <Image
        alt={text}
        src={src}
        width={113.45}
        height={113.45}
        className="grayscale group-hover:grayscale-0 size-[113.45px] transition-all"
      />
      <div className="transition-opacity  bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-20 absolute inset-0 rounded-[9.84px]"></div>
      <p className="font-extralight absolute text-[9.8px] max-w-[60px] leading-normal text-center bottom-1">
        {text}
      </p>
    </div>
  );
};

const Peoples: FC = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="bg-gradient-to-r from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight text-center uppercase">
        THIS IS NOT FOR <br />
        EVERYONE <br />
      </h1>

      <div className="mt-5 relative">
        <div className="flex justify-center gap-3 ">
          <PeopleCard
            src={"/peoples/creators.png"}
            text="“TOP TIER” CREATORS"
          />
          <PeopleCard
            text="COACHES & CONSULTANTS"
            src={"/peoples/coachers.png"}
          />
        </div>
        <div className="w-full flex justify-center mt-[13px] gap-8">
          <div className="flex flex-row absolute -bottom-[60px]">
            <Image
              alt="border"
              src={"/peoples/border.svg"}
              width={204}
              height={210.5}
            />
          </div>
          <PeopleCard src={"/peoples/founders.png"} text="FOUNDERS" />
        </div>
        <div className="-top-12 bg-black  z-[-1] w-1/2 left-1/2 -translate-x-1/2  blur-2xl h-[150%] absolute rounded-[50%]"></div>
      </div>
      <div className="w-full font-extralight flex flex-col items-center  mt-[60px]">
        <Button className="w-full shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] border-white/10 overflow-hidden group">
          <span className="relative z-10">Simple Systems that ‘Just Work’</span>

          {/* Фоновый градиент */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>

          {/* Размытие фона */}
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>

          {/* Внешняя тень */}
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
        <Image
          alt="border"
          src={"/peoples/separator.svg"}
          width={3}
          height={40}
        />

        <Button className="w-full shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] border-white/10 overflow-hidden group">
          <span className="relative z-10">
            Growth without sacrificing personal touch
          </span>

          {/* Фоновый градиент */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>

          {/* Размытие фона */}
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>

          {/* Внешняя тень */}
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
        <Image
          alt="border"
          src={"/peoples/separator.svg"}
          width={3}
          height={40}
        />
        <Button className="w-full shadow-[0_15px_20px_rgba(255,255,255,0.05)] relative bg-transparent border h-[48px] border-white/10 overflow-hidden group">
          <span className="relative z-10">Quality at scale</span>

          {/* Фоновый градиент */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/7 to-white/2"></div>

          {/* Размытие фона */}
          <div className="absolute inset-0 backdrop-blur-[13.54px]"></div>

          {/* Внешняя тень */}
          <div className="absolute -inset-[0.45px] shadow-[0px_10.91px_24.28px_0.45px_rgba(255,255,255,0.05)] rounded-inherit"></div>
        </Button>
      </div>
    </div>
  );
};

export default Peoples;

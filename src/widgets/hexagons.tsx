import React, { FC } from "react";

const ImageBox: FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <div className="relative w-[140px] h-[173px] mt-8 overflow-hidden max-w-[140px] sm:scale-125 md:scale-125 lg:scale-175 2xl:scale-[2.5]">
      <svg
        width="140"
        height="161"
        viewBox="0 0 140 161"
        fill="0C0C0C"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Определяем маску в виде шестиугольника */}
        <defs>
          <clipPath id="hexagonMask">
            <path d="M35.2492 20.5585L70 0.576764L104.751 20.5585L139.5 40.5393L139.5 80.985L139.5 120.461L104.751 140.442L70 160.423L35.2492 140.442L0.5 120.461L0.5 80.5L0.5 40.5393L35.2492 20.5585Z" />
          </clipPath>
        </defs>

        {/* Изображение, обрезанное по форме шестиугольника */}
        <image
          href={imageSrc}
          width="140"
          height="161"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#hexagonMask)"
        />

        {/* Белая обводка шестиугольника */}
        <path
          d="M35.2492 20.5585L70 0.576764L104.751 20.5585L139.5 40.5393L139.5 80.985L139.5 120.461L104.751 140.442L70 160.423L35.2492 140.442L0.5 120.461L0.5 80.5L0.5 40.5393L35.2492 20.5585Z"
          stroke="white"
          fill="none"
        />
      </svg>
    </div>
  );
};

const Hexagons: FC = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="sm:mb-[40px]! md:mb-[20px]! lg:mb-[80px]! 2xl:mb-[140px]! max-w-[280px] sm:max-w-[600px] mx-auto md:text-center md:max-w-[460px] lg:max-w-[620px] 2xl:max-w-[905px] justify-between  md:flex w-full sm:text-[66px] md:text-[30px] lg:text-[41px] 2xl:text-[60px] bg-gradient-to-r text-left from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-[32px] font-medium leading-none tracking-tight uppercase">
        PEOPLE YOU MAY KNOW WITH MULTI-DAY EVENT CAMPAIGNS
      </h1>
      <div className="flex flex-col justify-center items-center -space-y-[85px] mw w-full sm:hidden">
        <div className="flex flex-row justify-center -space-x-[1px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <ImageBox imageSrc="/peoples/hexagon1.png" />
        <div className="flex flex-row justify-center -space-x-[1px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <ImageBox imageSrc="/peoples/hexagon1.png" />
        <div className="flex flex-row justify-center -space-x-[1px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <ImageBox imageSrc="/peoples/hexagon1.png" />
      </div>

      <div className="hidden flex-col justify-center items-center -space-y-[55px] mw w-full sm:flex md:hidden">
        <div className="flex flex-row justify-center space-x-[33px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[33px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[33px]">
          <div className="w-[140px] h-[173px]" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[33px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
      </div>

      <div className="hidden flex-col justify-center items-center -space-y-[55px] mw w-full md:flex lg:hidden">
        <div className="flex flex-row justify-center space-x-[33px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[33px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[33px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
      </div>

      <div className="hidden flex-col justify-center items-center space-y-[5px] mw w-full lg:flex 2xl:hidden">
        <div className="flex flex-row justify-center space-x-[103px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[103px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[103px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
      </div>

      <div className="hidden flex-col justify-center items-center space-y-[95px] mw w-full 2xl:flex">
        <div className="flex flex-row justify-center space-x-[206px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[206px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
        <div className="flex flex-row justify-center space-x-[206px]">
          <ImageBox imageSrc="/peoples/hexagon1.png" />
          <ImageBox imageSrc="/peoples/hexagon1.png" />
        </div>
      </div>
    </div>
  );
};

export default Hexagons;

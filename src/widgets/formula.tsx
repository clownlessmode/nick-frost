import { cn } from "@shared/lib/utils";
import { Package, RefreshCcw, Rocket, Settings } from "lucide-react";
import Image from "next/image";
import React, { ElementType } from "react";

const FormulaItem = ({
  src,
  icon: Icon,
  heading,
  description,
  index,
}: {
  src: string;
  icon: ElementType;
  heading: React.ReactNode;
  description: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="2xl:pt-[40px] 2xl:h-[517px] overflow-hidden flex flex-col justify-between bg-[linear-gradient(to_bottom,white_70%,#1C8F74_100%)] mt-[20px] px-[20px] sm:px-[40px] md:px-[2px] lg:px-[2px] pt-[20px] sm:pt-[40px] md:pt-[8px] lg:pt-[12px] rounded-[5%] md:rounded-[20px] w-full max-w-[280px] sm:max-w-[600px] md:max-w-[170px] lg:max-w-[231px] 2xl:max-w-[354px] h-[300px] sm:h-[534px] md:h-[250px] lg:h-[338px] text-black">
      <div className="flex flex-col md:items-center gap-[6px] sm:gap-[15px] md:gap-[6px] lg:gap-[12px] w-full 2xl:gap-[16px]">
        <Icon className="size-[15px] sm:size-[32px] md:size-[12px] lg:size-[15px] text-[#1C8F74] 2xl:size-[24px]" />
        <h2 className="2xl:text-[36px] md:px-[20px] w-full font-normal text-[24px] sm:text-[50px] md:text-[16px] lg:text-[24px] text-left leading-none tracking-tight">
          {heading}
        </h2>
        <p className="md:px-[20px] 2xl:text-[16px] w-full max-w-[80%] md:max-w-full font-light text-[10px] sm:text-[20px] md:text-[8px] lg:text-[10px]">
          {description}
        </p>
      </div>
      <div
        className={cn(
          index < 2 && "pb-[10px]",
          "w-full h-full flex justify-end items-end mt-[10px]"
        )}
      >
        <Image
          src={src}
          alt="evergreen"
          width={1000}
          height={1000}
          className="w-full h-fit object-top"
        />
      </div>
    </div>
  );
};

const Formula = () => {
  return (
    <div className="flex flex-col mt-[80px] sm:mt-[150px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[150px] relative">
      <h1 className="bg-clip-text bg-gradient-to-r from-[#a2a1a7] via-white to-[#a2a1a7] font-medium text-[32px] text-transparent sm:text-[66px] md:text-[32px] lg:text-[42px] 2xl:text-[62px] text-center uppercase leading-none tracking-tight">
        PRODUCT LAUNCH <br className="md:hidden block" /> FORMULA
      </h1>
      <Image
        src={"./background/formulaBG.svg"}
        alt={"background formula"}
        width={1}
        height={1}
        className="w-[200vw] h-[657px] absolute top-0 z-10"
      />

      <div className="flex justify-center items-center mb-[20px] mx-auto mt-[34px] sm:mt-[75px] md:mt-[30px] lg:mt-[40px] 2xl:mt-[56px] p-[20px] sm:p-[42px] md:p-[55px] lg:p-[75px] 2xl:p-[115px] border border-white/40 rounded-[17px] lg:rounded-[35px] 2xl:rounded-[70px] w-full max-w-[280px] sm:max-w-[600px] md:max-w-[728px] lg:max-w-[984px] 2xl:max-w-[1496px] text-[24px] sm:text-[50px] md:text-[52px] lg:text-[76px] 2xl:text-[115px] text-nowrap">
        PLF = (<span className="text-[#1C8F74]">TG</span> +{" "}
        <span className="text-[#1C8F74]">EE</span>) × (
        <span className="text-[#1C8F74]">EP</span> +{" "}
        <span className="text-[#1C8F74]">A</span>)
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-[20px] mx-auto w-full md:max-w-[728px] lg:max-w-[984px] 2xl:max-w-[1496px]">
        <FormulaItem
          index={0}
          src="/formula/traffic.png"
          icon={Settings}
          heading={
            <>
              <span className="font-bold text-[#1C8F74]">T</span>RAFFIC{" "}
              <span className="font-bold text-[#1C8F74]">G</span>ENERATION
            </>
          }
          description={
            <>
              - Reels and youtube funnels that convert your viewers into action
              takers <br />- Instagram stories sequences that build trust and
              anticipation
            </>
          }
        />
        <FormulaItem
          index={1}
          src="/formula/evergreen.png"
          icon={Rocket}
          heading={
            <>
              <span className="font-bold text-[#1C8F74]">E</span>VERGREEN{" "}
              <span className="font-bold text-[#1C8F74]">E</span>VENTS
            </>
          }
          description={
            <>
              - That build a connection, nurture your audience and sell for you
              on autopilot <br />- Top tier materials with tasks and valuable
              bonuses
            </>
          }
        />
        <FormulaItem
          index={2}
          src="/formula/packaging.png"
          icon={Package}
          heading={
            <>
              <span className="font-bold text-[#1C8F74]">E</span>LITE{" "}
              <span className="font-bold text-[#1C8F74]">P</span>ACKAGING
            </>
          }
          description={
            <>
              All around brand design that separates you from every “copy paste”
              guru on the market and puts you in a league of your own
            </>
          }
        />
        <FormulaItem
          index={3}
          src="/formula/automation.png"
          icon={RefreshCcw}
          heading={
            <>
              <span className="font-bold text-[#1C8F74]">A</span>UTOMATION{" "}
            </>
          }
          description={
            <>
              - Personalized user experience for your audience <br />-
              Gamification for extra engagement <br />- Multiple touch points
              for max conversions
            </>
          }
        />
      </div>
    </div>
  );
};

export default Formula;

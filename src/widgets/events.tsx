import Image from "next/image";
import React, { FC, ReactNode } from "react";

const Card: FC<{
  index: number;
  title: ReactNode;
  subtitle: string;
  className: string;
}> = ({ index, title, subtitle, className }) => {
  return (
    <div
      className={`bg-white rounded-[20px] lg:rounded-[30px]  h-full flex justify-between items-start flex-col sm:p-[42px] md:p-[25px] lg:p-[30px]  p-5 space-y-[10px] ${className}`}
    >
      <p className="text-[8px] sm:text-[16px] md:text-[10px] lg:text-[16px] 2xl:text-[18px] font-light text-black  leadint-[12]">
        [0{index}]
      </p>
      <p className="text-[24px] sm:text-[50px] md:text-[30px] lg:text-[42px] 2xl:text-[62px] uppercase  leading-none text-black [&_span]:text-[#1C8F74] [&_span]:italic [&_span]:font-semibold">
        {title}
      </p>
      <p className="text-[8px] sm:text-[16px] md:text-[10px] lg:text-[16px] 2xl:text-[18px] font-light text-black  leadint-[12]">
        {subtitle}
      </p>
    </div>
  );
};

const CardV2 = () => {
  return (
    <div
      className={`bg-white rounded-[20px] lg:rounded-[30px] h-full flex justify-between items-start flex-col sm:p-[30px] md:p-[25px] lg:p-[30px]  p-5 space-y-[10px] md:col-span-5`}
    >
      <p className="text-[8px] sm:text-[16px] md:text-[10px] lg:text-[16px] 2xl:text-[18px] font-light text-black  leadint-[12]">
        [04]
      </p>
      <p className="text-[24px] sm:text-[50px] md:text-[30px] lg:text-[42px] 2xl:text-[62px] uppercase  leading-none text-black [&_span]:text-[#1C8F74] [&_span]:italic [&_span]:font-semibold">
        <span>PLUG</span> AND PLAY
      </p>
      <div className="flex flex-row sm:gap-3 sm:justify-start justify-between items-center w-full">
        <p className="max-w-[72px] sm:max-w-[130px] text-[8px] sm:text-[16px] md:text-[10px] lg:text-[16px] 2xl:text-[18px] font-light text-black  leadint-[12]">
          Evergreen Event Campaigns can be integrated into
        </p>
        <Image
          src="/w.png"
          alt="plug-and-play"
          width={1000}
          height={1000}
          className="w-[52px] h-[60px] -ml-[16px] sm:h-[115px] sm:w-[100px]"
        />

        <div className="gap-[7px] w-full sm:w-[100px] sm:gap-[14px] flex leading-tight -mr-[12px] flex-col text-[8px] sm:text-[16px] md:text-[10px] lg:text-[16px] 2xl:text-[18px] font-light text-black">
          <p>Paid Ads</p>
          <p>Communities</p>
          <p>Email Campaigns</p>
          <p>
            Short Form and Long <br /> Form Content funnels
          </p>
        </div>
      </div>
    </div>
  );
};

const Events: FC = () => {
  return (
<div className="mt-[80px] relative overflow-hidden">
  <div className="w-full flex flex-col space-y-[-5px] mw">
    <div className="mw justify-between md:flex w-full hidden sm:text-[66px] md:text-[52px] lg:text-[72px] 2xl:text-[144px] bg-gradient-to-r text-center from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-[32px] font-medium leading-none tracking-tight uppercase">
      <h1>EVERGREEN</h1>
      <h1>EVENTS</h1>
    </div>
    <h1 className="md:hidden sm:text-[66px] md:text-[52px] lg:text-[72px] 2xl:text-[144px] bg-gradient-to-r text-left from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-[32px] font-medium leading-none tracking-tight uppercase">
      EVERGREEN
    </h1>
    <h1 className="md:hidden sm:text-[66px] md:text-[52px] lg:text-[72px] 2xl:text-[144px] bg-gradient-to-r text-right from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-[32px] font-medium leading-none tracking-tight uppercase">
      EVENTS
    </h1>
  </div>

  <div className="mt-[20px]">
    <div className="w-full mw z-1 border-[0.5px] backdrop-blur-xs border-white/40 rounded-[25px] lg:rounded-[30px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover px-[24px] py-[25px] flex gap-5">
      <div className="flex w-full flex-col md:grid md:grid-cols-10 gap-5">
        <Card
          index={1}
          className="md:col-span-4"
          subtitle="You only pay - when you get payed"
          title={
            <>
              no <span>risk</span>
            </>
          }
        />
        <Card
          index={2}
          className="md:col-span-6"
          subtitle="Our automated campaigns qualify your leads and sell for you on autopilot. 
So your time and resources can be redirected towards your product and your customers."
          title={
            <>
              <span>focus</span> on what matters
            </>
          }
        />
        <Card
          index={3}
          className="md:col-span-5"
          subtitle="On every step of the process we test, analyze the details and improve your campaigns on a regular basis. To make sure that when you scale, it's smooth sailing all the way to treasure island."
          title={
            <>
              IMPROVEMENT AND <span>speed</span>
            </>
          }
        />
        <CardV2 />
      </div>
    </div>
  </div>
  <div className="absolute inset-0 z-[-1] shrink-0 blur-[60px] overflow-hidden">
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

export default Events;

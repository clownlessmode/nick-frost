import React, { FC, ReactNode } from "react";

const Card: FC<{ index: number; title: ReactNode; subtitle: string }> = ({
  index,
  title,
  subtitle,
}) => {
  return (
    <div className="bg-white rounded-[18px] h-full p-5 space-y-[10px]">
      <p className="font-light text-black text-[8px] leadint-[12]">
        [0{index}]
      </p>
      <p className="uppercase text-[24px] leading-none text-black [&_span]:text-[#1C8F74] [&_span]:italic [&_span]:font-semibold">
        {title}
      </p>
      <p className="font-light text-black text-[8px] leadint-[12]">
        {subtitle}
      </p>
    </div>
  );
};

const Events: FC = () => {
  return (
    <div className="mt-[80px] ">
      <div className="w-full flex flex-col space-y-[-5px]">
        <h1 className="bg-gradient-to-r text-left from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight uppercase">
          EVERGREEN
        </h1>
        <h1 className="bg-gradient-to-r text-right from-[#a2a1a7] via-white to-[#a2a1a7] text-transparent bg-clip-text text-4xl font-medium leading-none tracking-tight uppercase">
          EVENTS
        </h1>
      </div>

      <div className="mt-[20px]">
        <div className="w-full z-1 border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover px-[24px] py-[25px] flex gap-5">
          <div className="flex w-full flex-col gap-5">
            <Card
              index={1}
              subtitle="You only pay - when you get payed"
              title={
                <>
                  no <span>risk</span>
                </>
              }
            />
            <Card
              index={2}
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
              subtitle="On every step of the process we test, analyze the details and improve your campaigns on a regular basis. To make sure that when you scale, it’s smooth sailing all the way to treasure island."
              title={
                <>
                  IMPROVEMENT AND <span>speed</span>
                </>
              }
            />
            <div>
              <div className="bg-white rounded-[18px] h-full p-5 space-y-[18px]">
                <p className="font-light text-black text-[8px] leadint-[12]">
                  [04]
                </p>
                <p className="uppercase text-[24px] leading-none text-black [&_span]:text-[#1C8F74] [&_span]:italic [&_span]:font-semibold">
                  <span>PLUG</span> AND PLAY
                </p>
                <div className="flex items-center relative flex-row justify-between font-light text-black text-[8px] leadint-[12]">
                  <p className="max-w-[80px] font-light text-black text-[8px] leadint-[12]">
                    Evergreen Event Campaigns can be integrated into
                  </p>
                  <svg
                    className="-mt-[10px] -ml-[15px] h-[60px]"
                    width="124"
                    height="133"
                    viewBox="0 0 124 133"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.667969 65.7253C84.8125 65.7253 33.9841 3.7915 118.983 3.7915"
                      stroke="url(#paint0_linear_293_5436)"
                      strokeWidth="0.854259"
                    />
                    <path
                      d="M0.667969 65.7253C84.8125 65.7253 34.4112 41.3789 119.41 41.3789"
                      stroke="url(#paint1_linear_293_5436)"
                      strokeWidth="0.854259"
                    />
                    <path
                      d="M0.667969 65.7256C84.8125 65.7256 33.9841 81.1022 118.983 81.1022"
                      stroke="url(#paint2_linear_293_5436)"
                      strokeWidth="0.854259"
                    />
                    <path
                      d="M0.667969 65.7256C84.8125 65.7256 33.9841 128.941 118.983 128.941"
                      stroke="url(#paint3_linear_293_5436)"
                      strokeWidth="0.854259"
                    />
                    <rect
                      x="120.043"
                      y="0.375"
                      width="5.12555"
                      height="5.12555"
                      transform="rotate(45 120.043 0.375)"
                      fill="#1C8F74"
                    />
                    <rect
                      x="120.043"
                      y="37.9624"
                      width="5.12555"
                      height="5.12555"
                      transform="rotate(45 120.043 37.9624)"
                      fill="#1C8F74"
                    />
                    <rect
                      x="120.043"
                      y="77.2573"
                      width="5.12555"
                      height="5.12555"
                      transform="rotate(45 120.043 77.2573)"
                      fill="#1C8F74"
                    />
                    <rect
                      x="120.043"
                      y="125.096"
                      width="5.12555"
                      height="5.12555"
                      transform="rotate(45 120.043 125.096)"
                      fill="#1C8F74"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_293_5436"
                        x1="17.326"
                        y1="4.58047"
                        x2="88.2291"
                        y2="4.118"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0E0E0E" stopOpacity="0" />
                        <stop offset="1" stopColor="#0E0E0E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_293_5436"
                        x1="17.326"
                        y1="41.2674"
                        x2="88.2132"
                        y2="40.1114"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0E0E0E" stopOpacity="0" />
                        <stop offset="1" stopColor="#0E0E0E" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_293_5436"
                        x1="17.326"
                        y1="65.9051"
                        x2="88.1739"
                        y2="63.8746"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0E0E0E" stopOpacity="0" />
                        <stop offset="1" stopColor="#0E0E0E" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_293_5436"
                        x1="17.326"
                        y1="66.5798"
                        x2="88.2295"
                        y2="66.1527"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0E0E0E" stopOpacity="0" />
                        <stop offset="1" stopColor="#0E0E0E" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="flex flex-col gap-[10px] max-w-[140px]">
                    <p className="font-light text-black text-[8px] leadint-[12]">
                      Paid Ads
                    </p>
                    <p className="font-light text-black text-[8px] leadint-[12]">
                      Communities
                    </p>
                    <p className="font-light leading-none text-black text-[8px] leadint-[12]">
                      Email Campaigns
                    </p>
                    <p className="font-light leading-none text-black text-[8px] leadint-[12]">
                      Short Form and Long Form Content funnels
                    </p>
                  </div>
                </div>
                <p className="text-black font-medium max-w-[100px] text-left -mt-[20px] text-[8px] leading-none">
                  And sell for you everywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

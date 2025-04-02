import { cn } from "@shared/lib/utils";
import Instagram from "@shared/ui/instagram";
import Image from "next/image";
import React from "react";

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
      {banner && (
        <div className="text-left bg-white/5 z-10 backdrop-blur-sm text-[8px] sm:text-[16px] md:text-[8px] md:p-[10px] lg:text-[12px] 2xl:text-[18px] lg:p-[10px] 2xl:p-[10px] sm:p-[20px] md:top-[115px] p-[10px] absolute top-[115px] sm:top-[240px] rounded-lg lg:top-[160px] 2xl:top-[240px]">
          <p className="text-white">
            Personal Brand Strategy with{" "}
            <span className="text-medium">900M+</span>
            <br /> views in 18 months on Instagram
          </p>
        </div>
      )}

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
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="size-[39px] sm:size-[82px] object-contain absolute left-[31px] sm:left-[62px] top-[25px] sm:top-[50px] md:size-[39px] md:left-[31px] md:top-[25px] lg:size-[52px] lg:left-[20px] lg:top-[64px] 2xl:left-[30px] 2xl:top-[80px] "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="left-[11px] top-[93px] sm:left-[22px] sm:top-[186px] size-[39px] sm:size-[82px] object-contain absolute md:size-[39px] md:left-[11px] md:top-[93px] lg:size-[52px] lg:right-[20px] lg:top-[128px] 2xl:left-[30px] 2xl:top-[160px] "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="left-[63px] top-[174px] sm:left-[126px] sm:top-[348px] size-[39px] sm:size-[82px] object-contain absolute md:size-[39px] md:left-[63px] md:top-[174px] lg:size-[52px] lg:left-[30px] lg:top-[208px] 2xl:left-[40px] 2xl:top-[240px] "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="right-[21px] sm:right-[42px] sm:top-[76px] top-[38px] size-[39px] sm:size-[82px] object-contain absolute md:size-[39px] md:right-[21px] md:top-[76px] lg:size-[52px] lg:right-[30px] lg:top-[108px] 2xl:right-[40px] 2xl:top-[140px] "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="right-[16px] sm:right-[32px] sm:top-[286px] top-[143px] size-[39px] sm:size-[82px] object-contain absolute md:size-[39px] md:right-[16px] md:top-[143px] lg:size-[52px] lg:right-[15px] lg:top-[178px] 2xl:right-[20px] 2xl:top-[210px] "
      />
    </div>
  );
};

const Icon3d = ({ src, className }: { src: string; className: string }) => {
  return (
    <div
      className={`rounded-[11px] md:w-fit border-[0.5px] border-white bg-transparent size-full grayscale hover:grayscale-0 transition-all duration-300 ${className}`}
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
  back,
  src,
  className,
}: {
  banner: boolean;
  image: string;
  header: string;
  description: string;
  back: string;
  src: string[];
  className: string;
}) => {
  return (
    <div
      className={`sm:max-w-[600px] sm:h-[711px] max-w-[280px] sm:rounded-[42px] md:rounded-[20px] md:h-[333px] md:w-full lg:h-[450px] 2xl:h-[658px] 2xl:max-w-full overflow-hidden w-full h-[333px] relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover  flex gap-5 ${className}`}
    >
      <h2 className="text-[98px] 2xl:text-[340px] sm:text-[196px] md:text-[160px] lg:text-[200px] opacity-10 absolute top-[5px] leading-none w-full text-center z-[-2] font-light">
        {back}
      </h2>
      <Image
        src={image}
        alt="Nick Frost"
        width={5000}
        height={5000}
        className="z-[-1] w-full  object-contain h-full"
      />

      <div className="flex flex-col items-center absolute bottom-[17px] sm:bottom-[34px] md:w-full md:px-[20px] md:bottom-[18px]">
        {banner && (
          <div className="p-[10px] sm:text-[16px] md:hidden sm:p-[20px] bg-black/5 backdrop-blur-2xl text-[8px] mb-[15px] rounded-[5px] w-full flex items-center justify-center border-[0.5px] border-white">
            900.000.000+ views in 8 months
          </div>
        )}
        <div className="flex items-center justify-between gap-1 w-full mb-[15px] max-w-[193px] sm:max-w-[405px] md:gap-4  md:max-w-full md:flex-row  md:grid md:grid-cols-2 md:max-h-[300px] md:mb-0">
          {src.map((item, index) => (
            <Icon3d
              key={item}
              src={item}
              className={cn(index % 2 !== 0 && "md:ml-auto")}
            />
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
      <div className="w-full flex flex-col justify-center items-center gap-5 mt-[110px] md:flex-row md:max-w-[728px] mx-auto md:hidden">
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

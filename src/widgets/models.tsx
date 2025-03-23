import Instagram from "@shared/ui/instagram";
import Image from "next/image";
import React from "react";

const CardV1 = ({
  banner,
  image,
  header,
  description,
}: {
  banner: boolean;
  image: string;
  header: string;
  description: string;
}) => {
  return (
    <div className="justify-end aspect-[281/333] min-w-[281px] h-[333px] relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover  py-[14px] flex gap-5">
      <Image
        src={image}
        alt="Nick Frost"
        width={281}
        height={252}
        className="z-[-1] w-full h-full object-cover"
      />
      {banner && (
        <div className="text-left bg-white/5 z-10 backdrop-blur-sm text-[8px] p-[10px] absolute top-[115px] rounded-lg">
          <p className="text-white">
            Personal Brand Strategy with{" "}
            <span className="text-medium">900M+</span>
            <br /> views in 18 months on Instagram
          </p>
        </div>
      )}

      <div className="flex flex-col items-center absolute bottom-[17px]">
        <h1 className="text-white text-center text-4xl font-medium leading-none tracking-tight uppercase">
          {header}
        </h1>
        {description !== "" ? (
          <div className="flex items-center mt-1 gap-1 text-center">
            <Instagram />
            <p className="text-white text-xs ">{description}</p>
          </div>
        ) : (
          <div className="flex items-center mt-1 gap-1 text-center">
            <p className="text-transparent text-xs ">{description} fjnjs</p>
          </div>
        )}
      </div>
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="w-[39px] h-[39px] object-contain absolute left-[31px] top-[25px]"
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="left-[11px] top-[93px] w-[39px] h-[39px] object-contain absolute "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="left-[63px] top-[174px] w-[39px] h-[39px] object-contain absolute "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="right-[21px] top-[38px] w-[39px] h-[39px] object-contain absolute "
      />
      <Image
        src="/models/zzzz.svg"
        alt="Nick Frost"
        width={39}
        height={39}
        className="right-[16px] top-[143px] w-[39px] h-[39px] object-contain absolute "
      />
    </div>
  );
};

const Icon3d = ({ src }: { src: string }) => {
  return (
    <div className="rounded-[11px] border-[0.5px] border-white bg-transparent size-full grayscale hover:grayscale-0 transition-all duration-300">
      <Image
        width={40}
        height={40}
        className="size-full"
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
}: {
  banner: boolean;
  image: string;
  header: string;
  description: string;
  back: string;
  src: string[];
}) => {
  return (
    <div className=" min-w-[281px] overflow-hidden aspect-[281/333] h-[333px] relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover  flex gap-5">
      <h2 className="text-[98px] opacity-10 absolute top-[5px] leading-none w-full text-center z-[-2] font-light">
        {back}
      </h2>
      <Image
        src={image}
        alt="Nick Frost"
        width={5000}
        height={5000}
        className="z-[-1] w-full  object-contain h-full"
      />

      <div className="flex flex-col items-center absolute bottom-[17px]">
        {banner && (
          <div className="p-[10px] bg-black/5 backdrop-blur-2xl text-[8px] mb-[15px] rounded-[5px] w-full flex items-center justify-center border-[0.5px] border-white">
            900.000.000+ views in 8 months
          </div>
        )}
        <div className="flex items-center justify-between gap-1 w-full mb-[15px] max-w-[193px]">
          {src.map((item) => (
            <Icon3d key={item} src={item} />
          ))}
        </div>
        <h1 className="text-white text-center text-[24px] font-medium leading-none tracking-tight uppercase">
          {header}
        </h1>
        {description !== "" ? (
          <div className="flex items-center mt-1 gap-1 text-center">
            <p className="text-white text-xs uppercase">{description}</p>
          </div>
        ) : (
          <div className="flex items-center mt-1 gap-1 text-center">
            <p className="text-transparent text-xs ">{description} fjnjs</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Models = () => {
  return (
    <div className="w-full justify-center flex flex-wrap gap-5 mt-[110px]">
      <CardV1
        banner={true}
        image="/models/nickfrost.png"
        header="NICK FROST"
        description="40K followers on Instagram"
      />
      <CardV2
        banner={true}
        image="/models/kate.png"
        header="KATE SHUMSKAYA"
        description="@mimisskate"
        back="90 M"
        src={[
          "/models/3d/globe.png",
          "/models/3d/coin.png",
          "/models/3d/fire.png",
          "/models/3d/crown.png",
        ]}
      />
      <CardV1
        banner={false}
        image="/models/savva.png"
        header="Savva Altman"
        description=""
      />
      <CardV2
        back="3,4M$"
        banner={false}
        image="/models/sergey.png"
        header="Sergey Kosenko"
        description="@mr.thank.you"
        src={[
          "/models/3d/money.png",
          "/models/3d/mail.png",
          "/models/3d/eye.png",
          "/models/3d/message.png",
        ]}
      />
    </div>
  );
};

export default Models;

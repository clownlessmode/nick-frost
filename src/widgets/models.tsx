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
    <div className="justify-end min-w-[281px] h-auto relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover  py-[14px] flex gap-5">
      {banner && (
        <div className="text-left bg-white/5 z-10 backdrop-blur-sm text-[8px] p-[10px] absolute top-2/8 rounded-lg">
          <p className="text-white">
            Personal Brand Strategy with{" "}
            <span className="text-medium">900M+</span>
            <br /> views in 18 months on Instagram
          </p>
        </div>
      )}
      <Image
        src={image}
        alt="Nick Frost"
        width={281}
        height={252}
        className="z-[-1] w-[281px]  object-contain"
      />
      <div className="flex flex-col items-center">
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

const CardV2 = ({
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
    <div className="justify-end min-w-[281px] w-full relative items-center border-[0.5px] backdrop-blur-xs border-white/40 rounded-[15px] flex-col bg-[rgba(0,0,0,0.1)] bg-no-repeat bg-cover  py-[14px] flex gap-5">
      {banner && (
        <div className="text-left bg-white/5 z-10 backdrop-blur-sm text-[8px] p-[10px] absolute top-2/8 rounded-lg">
          <p className="text-white">
            Personal Brand Strategy with{" "}
            <span className="text-medium">900M+</span>
            <br /> views in 18 months on Instagram
          </p>
        </div>
      )}
      <Image
        src={image}
        alt="Nick Frost"
        width={281}
        height={252}
        className="z-[-1] w-[281px]  object-contain"
      />
      <div className="flex flex-col items-center">
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

const Models = () => {
  return (
    <div className="w-full justify-center flex flex-wrap gap-5 mt-[110px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <CardV1
          banner={true}
          image="/models/nickfrost.png"
          header="NICK FROST"
          description="40K followers on Instagram"
        />
        <CardV2
          banner={true}
          image="/models/nickfrost.png"
          header="NICK "
          description="40K followers on Instagram"
          // className="min-w-[200px]"
        />
        <CardV2
          banner={true}
          image="/models/nickfrost.png"
          header="NICK "
          description="40K followers on Instagram"
          // className="min-w-[200px]"
        />
        <CardV1
          banner={true}
          image="/models/nickfrost.png"
          header="NICK FROST"
          description="40K followers on Instagram"
        />
      </div>
    </div>
  );
};

export default Models;

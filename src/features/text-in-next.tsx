import Image from 'next/image';

export default function TextInNext({num, icon, text}: {num: number, icon: string, text: string}) {
    const iconSrc = "/next/" + icon + ".svg"

    return (
        <div className="flex flex-col gap-[3px] sm:gap-[6px] md:gap-[7px] lg:gap-[5px] 2xl:gap-[10px]">
          <p className="font-light text-[12px] sm:text-[16px] md:text-[8px] lg:text-[10px] 2xl:text-[32px]">
            [0{num}]
          </p>
          <div className="flex items-center flex-row gap-[5px] sm:gap-[10px] md:gap-[6px] lg:gap-[7px] 2xl:gap-[15px]">
            <Image
              src={iconSrc}
              alt=""
              width={16}
              height={16}
              className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] 2xl:w-[40px] 2xl:h-[40px]"
            />
            <p className="uppercase text-[15px] sm:text-[20px] md:text-[10px] lg:text-[14px] 2xl:text-[32px]">
              {text}
            </p>
          </div>
        </div>
    )
}

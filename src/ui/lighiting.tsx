"use client"
import Image from 'next/image';

export default function Lighiting({num, activeImg}: {num: number, activeImg: number | null}) {
    if(num == activeImg){
        return(
            <Image
                src="/models/zzzzActive.svg"
                alt="Decoration 1"
                width={39}
                height={39}
                className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
                />
        )
    }

    return (
        <Image
                src="/models/zzzz.svg"
                alt="Decoration 1"
                width={39}
                height={39}
                className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] object-contain cursor-pointer"
                />
    )
}

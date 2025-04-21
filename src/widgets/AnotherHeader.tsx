import ContactButton from "@features/contact-button";
import Image from "next/image";
import React, { FC } from "react";

const AnotherHeader: FC = () => {
  return (
    <header className=" left-0 px-5 fixed top-0 z-50 flex w-full justify-between items-center pt-7 max-w-[100vw]">
      <div className="w-[85px]">
        <Image
          alt="logotype axis"
          src={"/branding/logotype.png"}
          width={56.76}
          height={25}
        />
      </div>
      <div className="w-[85px]">
        <ContactButton />
      </div>
    </header>
  );
};

export default AnotherHeader;

{
  /* 
      <ProgressButtons />
      <div className="w-14">
        <Button variant={"outline"}>Contact</Button>
      </div> */
}

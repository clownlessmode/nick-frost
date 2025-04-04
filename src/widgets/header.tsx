import ContactButton from "@features/contact-button";
import ProgressButtonsGroup from "@features/progress-button-group";
import ProgressButtons from "@features/progress-buttons";
import Image from "next/image";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className=" left-0 px-5 fixed top-0 z-[9999999999] flex w-full justify-between items-center mt-7 max-w-[100vw]">
      <div className="w-[85px]">
        <Image
          alt="logotype axis"
          src={"/branding/logotype.png"}
          width={56.76}
          height={25}
        />
      </div>
      <div className="md:hidden">
      <ProgressButtons />
    </div>
    
    {/* Для md и выше показываем объединенные кнопки */}
    <div className="hidden md:block">
      <ProgressButtonsGroup />
    </div>
      <div className="w-[85px]">
        <ContactButton />
      </div>
    </header>
  );
};

export default Header;

{
  /* 
      <ProgressButtons />
      <div className="w-14">
        <Button variant={"outline"}>Contact</Button>
      </div> */
}

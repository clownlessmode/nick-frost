import { Button } from "@shared/ui/button";
import Link from "next/link";
import React, { FC } from "react";

const ContactButton: FC = () => {


  return (
    <div className="relative">
      <Link href="mailto:nikita@whynotlaunchformula.com">
        <Button variant={"outline"} className="noise-content">
          Contact
        </Button>
      </Link>
      {/* <div className="absolute right-1 top-2 z-10 translate-x-1/2 -translate-y-1/2 border-2 border-[#373737] rounded-full p-[2px] pulse-border">
        <div className="bg-white/5 border border-white/10 rounded-full p-1">
          <Phone fill="white" size={14} />
        </div>
      </div> */}
    </div>
  );
};

export default ContactButton;

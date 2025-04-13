"use client";
import React from "react";
import CardV1 from "@features/cardV1";
import CardV2 from "@features/cardV2";

const Models = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5 mt-[100px] sm:mt-[150px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[150px] md:flex-row md:max-w-[728px] mx-auto md:hidden">
        <CardV1
          banner={true}
          image="/models/nickfrost.png"
          header="NIK FROST"
          description="40K followers on Instagram"
          className="col-span-5"
        />
        <CardV2
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

      <div className="w-full hidden flex-col justify-center items-center gap-5 mt-[180px]! mw mx-auto md:flex">
        <div className="flex flex-row gap-5 w-full">
          <CardV1
            banner={true}
            image="/models/nickfrost.png"
            header="NIK FROST"
            description="40K followers on Instagram"
            className="col-span-5"
          />
          <CardV2
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

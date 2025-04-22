import Header from "@widgets/header";
import Hero from "@widgets/hero";
import Hexagons from "@widgets/hexagons";
import Mainstream from "@widgets/mainstream";
import Peoples from "@widgets/peoples";
import Smart from "@widgets/smart";
import Video from "@widgets/video";
import React, { FC } from "react";
import Events from "@widgets/events";
import Models from "@widgets/models";
import Formula from "@widgets/formula";
import Next from "@widgets/next";
import Footer from "@widgets/footer";
import Headmainstream from "@widgets/headmainstream";
import Image from 'next/image';

const HomePage: FC = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="absolute top-0 left-0 w-[100vw]">
          <Image
            alt="hero-splash"
            src={"/background/vidVec.svg"}
            width={1050}
            height={1000}
            className="w-full h-full "
          />
        </div>
      <Hero />
      <Video />
      <Peoples />
      <Headmainstream />
      <Mainstream />
      <Smart />
      <Hexagons />
      <Events />
      <Models />
      <Formula />
      <Next />
      <Footer />
    </div>
  );
};

export default HomePage;

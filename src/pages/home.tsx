import Header from "@widgets/header";
import Hero from "@widgets/hero";
import Hexagons from "@widgets/hexagons";
import Mainstream from "@widgets/mainstream";
import Peoples from "@widgets/peoples";
import Smart from "@widgets/smart";
import Video from "@widgets/video";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Video />
      <Peoples />
      <Mainstream />
      <Smart />
      <Hexagons />
      <div className="mt-[1000px]">s</div>
    </div>
  );
};

export default HomePage;

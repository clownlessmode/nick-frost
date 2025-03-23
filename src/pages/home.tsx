// import Header from "@widgets/header";
import Hero from "@widgets/hero";
import Hexagons from "@widgets/hexagons";
import Mainstream from "@widgets/mainstream";
// import Peoples from "@widgets/peoples";
import Smart from "@widgets/smart";
import Video from "@widgets/video";
import React, { FC } from "react";
import Events from "@widgets/events";
import Models from "@widgets/models";
import Formula from "@widgets/formula";
const HomePage: FC = () => {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Hero />
      <Video />
      {/* <Peoples /> */}
      <Mainstream />
      <Smart />
      <Hexagons />
      <Events />
      <Models />
      <Formula />
      <div className="mt-[1000px]">s</div>
    </div>
  );
};

export default HomePage;

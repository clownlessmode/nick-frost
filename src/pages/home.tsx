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
      <Events />
      <Models />
      <Formula />
      <Next />
      <Footer />
    </div>
  );
};

export default HomePage;

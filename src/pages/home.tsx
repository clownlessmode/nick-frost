import Header from "@widgets/header";
import Hero from "@widgets/hero";
import Peoples from "@widgets/peoples";
import Video from "@widgets/video";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <Hero />
      <Video />
      <Peoples />
    </div>
  );
};

export default HomePage;

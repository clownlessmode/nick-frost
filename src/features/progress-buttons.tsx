"use client";
import { Button } from "@shared/ui/button";
import React, { FC, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProgressButtons: FC = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  //Наименования кнопок
  const [btnName, setBtnName] = useState("Watch video");

  // Преобразуем scrollYProgress в проценты для градиента
  const gradientProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Обновляем состояние для использования в стилях
  useEffect(() => {
    const unsubscribe = gradientProgress.onChange((latest) => {
      setProgress(latest);
    });
    return () => unsubscribe();
  }, [gradientProgress]);

  //Обновления для текста :-)
  useEffect(() => {
    const text = gradientProgress.onChange((latest) => {
      if(latest >= 0 && latest < 35){
        setBtnName("Watch video");
      } else if (latest >= 35 && latest < 75){
        setBtnName("Choose")
      } else {
        setBtnName("Book now")
      };

      return () => text();
    })
  }, [gradientProgress])

  return (
    <div className="backdrop-blur-[5px] border border-transparent rounded-2xl">
      <motion.div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Button
          className="uppercase box-border border-[0.56px] border-solid border-[rgba(255,255,255,0.05)] backdrop-blur-[4.48px] bg-clip-padding"
          style={{
            backgroundImage: `linear-gradient(91.97deg, rgba(62,213,178,0.5) 0%, rgba(62,213,178,0.5) ${progress}%, rgba(0,0,0,0.17) ${
              progress + 5
            }%, rgba(0,0,0,0.17) 100%), linear-gradient(0.00deg, rgba(255,255,255,0.05), rgba(153,153,153,0.05) 100%)`,
          }}
        >
          {btnName}
        </Button>
      </motion.div>
    </div>
  );
};

export default ProgressButtons;

'use client'

import { useScroll, useTransform } from "motion/react";
import { FC, useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { Button } from "@shared/ui/button";

const ProgressButtonsGroup: FC = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);
  
    // Преобразуем scrollYProgress в проценты для градиента
    const gradientProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
    // Обновляем состояние для использования в стилях
    useEffect(() => {
      const unsubscribe = gradientProgress.onChange((latest) => {
        setProgress(latest);
      });
  
      return () => unsubscribe();
    }, [gradientProgress]);
  
    // Определяем, какая кнопка активна на основе прогресса
    const getActiveButton = () => {
      if (progress < 33) return 0;
      if (progress < 66) return 1;
      return 2;
    };
  
    const activeButton = getActiveButton();
  
    // Данные для кнопок
    const buttons = [
      { id: 0, label: "S-01 Watch video" },
      { id: 1, label: "S-01 Watch video" },
      { id: 2, label: "S-01 Watch video" }
    ];
  
    // Разделяем весь прогресс на сегменты для каждого элемента
    const getElementProgress = (index: number, isConnector: boolean) => {
      // Определяем начало и конец диапазона для каждого элемента
      let startPoint, endPoint;
      
      if (isConnector) {
        // Соединитель после кнопки с индексом index
        startPoint = (index + 1) * 25; // Кнопка занимает 25%
        endPoint = startPoint + 8.33; // Соединитель занимает 8.33%
      } else {
        // Кнопка с индексом index
        startPoint = index * 33.33; // Начало кнопки (с учетом предыдущих элементов)
        endPoint = startPoint + 25; // Кнопка занимает 25%
      }
      
      // Если прогресс меньше начальной точки, элемент пуст
      if (progress < startPoint) return 0;
      // Если прогресс больше конечной точки, элемент полностью заполнен
      if (progress > endPoint) return 100;
      
      // Иначе вычисляем процент заполнения для текущего элемента
      return ((progress - startPoint) / (endPoint - startPoint)) * 100;
    };
  
    return (
      <div className="flex items-center relative">
        {buttons.map((button, index) => {
          const buttonProgress = getElementProgress(index, false);
          
          return (
            <div key={button.id} className="flex items-center">
              {/* Кнопка */}
              <div className="relative z-10">
                <Button
                  className="uppercase box-border border-[0.56px] border-solid border-[rgba(255,255,255,0.05)] backdrop-blur-[4.48px] bg-clip-padding rounded-[20px]"
                  style={{
                    backgroundImage: `linear-gradient(91.97deg, rgba(62,213,178,0.5) 0%, rgba(62,213,178,0.5) ${buttonProgress}%, rgba(0,0,0,0.17) ${
                      buttonProgress + 5
                    }%, rgba(0,0,0,0.17) 100%), linear-gradient(0.00deg, rgba(255,255,255,0.05), rgba(153,153,153,0.05) 100%)`,
                  }}
                >
                  {button.label}
                </Button>
              </div>
              
              {/* Соединитель (для всех кнопок кроме последней) */}
              {index < buttons.length - 1 && (
                <div 
                  className="relative h-[14px] z-0 border-[0.56px] border-solid border-[rgba(255,255,255,0.05)]"
                  style={{ 
                    width: '24px',
                    margin: '0 -1px', // Отрицательный margin для перекрытия границ
                  }}
                >
                  {/* Фоновый слой соединителя (такой же как у неактивной кнопки) */}
                  <div 
                    className="absolute w-full h-full rounded-full backdrop-blur-[4.48px]"
                    style={{
                      backgroundImage: 'linear-gradient(0.00deg, rgba(255,255,255,0.05), rgba(153,153,153,0.05) 100%)',
                      backgroundColor: 'rgba(0,0,0,0.17)',
                    }}
                  ></div>
                  
                  {/* Прогресс-слой соединителя (такой же как у активной части кнопки) */}
                  <div 
                    className="absolute h-full rounded-full"
                    style={{
                      width: `${getElementProgress(index, true)}%`,
                      transition: 'width 0.2s ease-out',
                      backgroundColor: 'rgba(62,213,178,0.5)',
                    }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  export default ProgressButtonsGroup
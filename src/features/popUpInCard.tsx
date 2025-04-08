import { AnimatePresence, motion } from "motion/react";
import TextInPopUpCard from "./textInPopUpCard";

export default function PopUpInCard({hovImg, label, num}: {hovImg: number | null, label: string, num: number}) {
  return (
    <AnimatePresence>
      {hovImg === num && (
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="relative lg:left-[60px] md:left-[45px] lg:bottom-[55px] md:bottom-[40px] bottom-[150px] md:w-[220px] w-[350px]">
          <div className="relative top-0 left-0">
            <div className="bg-white 
              lg:w-[25px] md:w-[20px] w-[25px]
              h-[1px] 
              relative 
              lg:right-[21px] md:right-[17px] 
              md:left-auto left-[69px] 
              lg:bottom-auto md:bottom-[2px]
              md:top-auto top-[76px] 
              rotate-[-45deg]"></div>
            <div className="absolute md:bottom-[9px] md:top-auto top-[23px] md:left-auto left-[90px]">
              <div className="w-full  bg-[#ffffff25] p-[10px] rounded-t-[20px] flex justify-center items-center">
                <TextInPopUpCard label={label} />
              </div>
              <div className="bg-white w-full h-[1px]"></div>
            </div>
          </div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}

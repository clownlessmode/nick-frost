import TextInPopUpCard from "./textInPopUpCard";

export default function PopUpInCard({hovImg, label, num}: {hovImg: number | null, label: string, num: number}) {

  return (
      hovImg === num && (
        <div className="relative lg:left-[60px] md:left-[45px] lg:bottom-[55px] md:bottom-[40px] bottom-[40px] md:w-[220px] w-[250px]">
          <div className="relative mb:top-0 mb:left-0 top-[-10px] left-[-40px]">
            <div className="bg-white 
              lg:w-[25px] md:w-[20px] w-[25px]
              h-[1px] 
              relative 
              lg:right-[21px] md:right-[17px] right-0
              md:left-auto left-[69px]
              lg:bottom-auto md:bottom-[2px] bottom-0
              md:top-auto top-[8px]
              rotate-[-45deg]"></div>
            <div className="absolute md:bottom-[9px] bottom-0 md:left-auto left-[90px]">
              <div className="w-full  bg-[#ffffff25] p-[10px] rounded-t-[20px] flex justify-center items-center">
                <TextInPopUpCard label={label} />
              </div>
              <div className="bg-white w-full h-[1px]"></div>
            </div>
          </div>
        </div>
      )
  )
}

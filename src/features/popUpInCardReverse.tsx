import TextInPopUpCard from "./textInPopUpCard";

export default function PopUpInCardReverse({hovImg, label, num}: {hovImg: number | null, label: string, num: number}) {
  return (
    <>
          {hovImg === num && (
            <div
          >
            <div className="absolute left-[57px] bottom-[45px] lg:w-[220px] md:w-[180px]">
              <div className="relative top-0 left-0">
                <div className="bg-white w-[25px] h-[1px] relative md:right-[70px] right-[64px] md:bottom-auto bottom-[35px] rotate-[45deg]"></div>
                <div className="absolute md:bottom-[9px] bottom-[43px] lg:right-[286px] md:right-[246px] right-[85px] w-[220px]">
                  <div className="w-full  bg-[#ffffff25] p-[10px] rounded-t-[20px] flex justify-center items-center">
                    <TextInPopUpCard label={label} />
                  </div>
                  <div className="bg-white w-full h-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          )}
    </>
  )
}

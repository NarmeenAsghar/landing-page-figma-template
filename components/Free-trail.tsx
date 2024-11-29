import React from "react";
import Image from "next/image";

export default function FreeTrail() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[673px] md:h-[574px] h-[766px] bg-[#043873]">
      <div className="w-[320px] sm:w-[604px] md:w-[1064px] flex flex-col items-center">
        <h1 className="font-inter font-bold text-[36px] sm:text-[54px] md:text-[72px] leading-[43px] md:leading-[87.14px] text-[#ffffff] text-center">
          Try Whitepace today
        </h1>
        <p className="font-inter text-[18px] font-normal leading-[30px] text-[#ffffff] pt-6 text-center">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <button className="w-[195px] h-[63px] font-inter p-2 mt-4 md:mt-10 bg-[#4f9cf9] text-[#ffffff] text-[18px] font-bold leading-[19.36px] rounded-[8px]">
          Try Taskey Free
        </button>
        <p className="font-inter text-[18px] font-normal leading-[30px] text-[#ffffff] pt-6 text-center">
          On a big team? Contact sales
        </p>

        <div className=" flex flex-row gap-6 w-[260px] h-[60px] items-center justify-center mt-4">
            <Image src="/Applelogo.png" alt="image" width={48} height={60}/>
            <Image src="/windows-logo.png" alt="image" width={60} height={58}/>
            <Image src="/robo1.png" alt="image" width={50} height={60}/>
        </div>
      </div>
    </div>
  );
}

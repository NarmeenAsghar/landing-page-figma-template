import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#043873] sm:h-full md:h-screen h-screen flex items-center">
      <div className="flex flex-col mt-20 md:mt-0 md:flex-row items-center w-screen gap-10 mb-20 md:gap-[60px]">
        <div className="w-full md:w-1/2 h-[361px] flex flex-col md:justify-start md:items-start justify-center items-center ">
          <h1 className="text-[54px] md:text-[64px] font-[Inter] font-bold leading-[77px] tracking-[-0.02em] text-[#ffffff] mx-4 md:mx-20 text-center md:text-left">
            Get More Done With Whitepace
          </h1>
          <p className="font-normal font-[Inter] text-[18px] md:text-[20px] leading-[30px] tracking-[-0.02em] text-[#ffffff] mx-4 md:mx-20 mt-4 md:mt-7 text-center md:text-left">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="w-[232px] md:w-[219px] h-[70px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] p-4 mx-4 md:mx-20 mt-6 md:mt-12">
            Try Whitepace free <span className="ml-2">→</span>
          </button>
        </div>

        <div className="h-[191px] md:w-[680px] md:h-[456.39px] w-[286px] sm:w-[551px] sm:h-[367px] bg-[#C4DEFD] flex flex-col mr-0 mt-8 md:mr-20"></div>
      </div>
    </div>
  );
}

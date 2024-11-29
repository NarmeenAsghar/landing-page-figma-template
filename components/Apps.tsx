import React from "react";
import Image from "next/image";

export default function Apps() {
  return (
    <div className="flex items-center md:justify-center sm:h-full md:h-screen max-h-full bg-[#043873]">
      <div className="flex flex-col mt-20 md:mt-52 md:flex-row items-center w-screen gap-10 mb-20 md:gap-[60px]">
        <div className="order-2 sm:order-2 md:order-1 h-[259.74px] md:w-[582px] md:h-[470px] w-[279px] sm:w-[454px] sm:h-[422.67px] flex flex-col md:ml-20 mr-0 mt-6">
          <Image src="/Apps.png" alt="image" width={582} height={470} />
        </div>

        <div className="order-1 sm:order-1 md:order-2 w-full md:w-2/2 h-[468px] flex flex-col md:justify-start md:items-start justify-center items-center">
          <h1 className="text-[54px] md:text-[64px] font-inter font-bold leading-[77px] tracking-[-0.02em] text-[#ffffff] mx-4 md:mx-20 text-center md:text-left">
            Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="font-normal font-[Inter] text-[18px] md:text-[20px] leading-[30px] tracking-[-0.02em] text-[#ffffff] mx-4 md:mx-20 mt-4 md:mt-7 text-center md:text-left">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <button className="w-[232px] md:w-[219px] h-[70px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-inter font-medium text-[18px] leading-[23px] tracking-[-0.02em] p-4 mx-4 md:mx-20 mt-6 md:mt-12">
            Read more <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

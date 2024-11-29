import React from "react";
import Image from "next/image";

export default function YourData() {
  return (
    <div className="flex items-center sm:h-full md:h-screen h-screen bg-white">
      <div className="flex flex-col mt-20 md:mt-0 md:flex-row items-center w-screen gap-10 mb-20 md:ml-20 md:mr-0 md:gap-[60px]">
        <div className="order-2 sm:order-2 md:order-1 w-full md:w-[800px] h-[324px] flex flex-col md:justify-center md:items-start justify-center items-center md:mt-28">
          <h1 className="text-[54px] md:text-[72px] font-inter font-bold leading-[77px] tracking-[-0.02em] text-[#212529] mx-4 mt-14 text-center md:text-left">
            100% your data
          </h1>
          <p className="font-normal font-[Inter] text-[18px] md:text-[20px] leading-[30px] tracking-[-0.02em] text-[#212529] mx-4 mt-4 md:mt-7 text-center md:text-left">
            The app is open source and your notes are saved to an open format,
            so you`ll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="w-[193px] md:w-[197px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-inter font-medium text-[18px] leading-[23px] tracking-[-0.02em] p-4 mx-4 mt-6 md:mt-12">
            Read More <span className="ml-2">→</span>
          </button>
        </div>

        <div className="order-1 sm:order-1 md:order-2 h-[162.58px] md:w-[681px] md:h-[381.13px] w-[290.5px] md:mt-48 sm:w-[513px] sm:h-[287.11px] flex flex-col md:ml-0 mr-0 mt-6">
          <Image src="/Element.png" alt="image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function WorkManagement() {
  return (
    <div className="flex items-center sm:h-full md:h-screen h-screen bg-white">
      <div className="flex flex-col mt-20 md:mt-0 md:flex-row items-center w-screen gap-10 mb-20 md:gap-[60px]">
        <div className="w-full md:w-1/2 h-[361px] flex flex-col md:justify-start md:items-start justify-center items-center">
          <h1 className="text-[54px] md:text-[64px] font-inter font-bold leading-[77px] tracking-[-0.02em] text-[#212529] mx-4 md:mx-20 text-center md:text-left">
            Project Management
          </h1>
          <p className="font-normal font-inter text-[18px] md:text-[20px] leading-[30px] tracking-[-0.02em] text-[#212529] mx-4 md:mx-20 mt-4 md:mt-7 text-center md:text-left">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="w-[232px] md:w-[219px] h-[70px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-inter font-medium text-[18px] leading-[23px] tracking-[-0.02em] p-4 mx-4 md:mx-20 mt-6 md:mt-12">
            Get Started <span className="ml-2">→</span>
          </button>
        </div>

        <div className="h-[191px] md:w-[680px] md:h-[456.39px] w-[286px] sm:w-[551px] sm:h-[367px] bg-[#C4DEFD] flex flex-col mr-0 mt-6 md:mr-28"></div>
      </div>
    </div>
  );
}

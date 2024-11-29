import React from "react";

export default function Customized() {
  return (
    <div className="flex items-center sm:h-full md:h-screen h-screen bg-white">
      <div className="flex flex-col mt-20 md:mt-0 md:flex-row items-center w-screen gap-10 mb-0 md:gap-[60px]">
        <div className="h-[191px] md:w-[680px] md:h-[456.39px] w-[286px] md:ml-28 sm:w-[551px] sm:h-[367px] bg-[#C4DEFD] flex flex-col mr-0 mt-6"></div>

        <div className="w-full md:w-1/2 h-[361px] flex flex-col md:justify-start md:items-start justify-center items-center">
          <h1 className="text-[54px] md:text-[64px] font-inter font-bold leading-[77px] tracking-[-0.02em] text-[#212529] mx-4 md:mx-20 text-center md:text-left">
            Customise it to your needs
          </h1>
          <p className="font-normal font-inter text-[18px] md:text-[20px] leading-[30px] tracking-[-0.02em] text-[#212529] mx-4 md:mx-20 mt-4 md:mt-7 text-center md:text-left">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button className="w-[168px] md:w-[164px] h-[59px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] p-4 mx-4 md:mx-20 mt-6 md:mt-12">
            Let`s Go <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

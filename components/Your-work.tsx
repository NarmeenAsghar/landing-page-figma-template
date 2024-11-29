import React from "react";

export default function YourWork() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[673px] md:h-[574px] h-[766px] bg-[#043873]">
      <div className="w-[320px] sm:w-[604px] md:w-[1064px] flex flex-col items-center">
        <h1 className="font-inter font-bold text-[36px] sm:text-[54px] md:text-[72px] leading-[43px] md:leading-[87.14px] text-[#ffffff] text-center">
          Your work, everywhere you are
        </h1>

        <p className="font-inter text-[18px] font-normal leading-[30px] text-[#ffffff] pt-6 text-center">
          Access your notes from your computer, phone, or tablet by
          synchronising with various services, including Whitepace, Dropbox,
          and OneDrive. The app is available on Windows, macOS, Linux, Android,
          and iOS. A terminal app is also available!
        </p>

        <button className="w-[195px] h-[63px] font-inter p-2 mt-8 md:mt-20 bg-[#4f9cf9] text-[#ffffff] text-[18px] font-bold leading-[19.36px] rounded-[8px]">
          Try Taskey
        </button>
      </div>
    </div>
  );
}
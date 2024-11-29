import React from "react";
import Image from "next/image";
import image1 from "@/public/image1.png";

export default function WorkTogether() {
  return (
    <div className="flex items-center sm:h-full md:h-screen h-screen bg-white">
      <div className="flex flex-col mt-20 md:mt-0 md:flex-row items-center w-screen gap-10 mb-20 md:gap-[60px]">
        <div className="order-2 sm:order-2 md:order-1 h-[259.74px] md:w-[710px] md:h-[661px] w-[279px] md:mt-48 sm:w-[454px] sm:h-[422.67px] flex flex-col md:ml-20 mr-0 mt-6">
          <Image src={image1} alt="image" width={500} height={500} />
        </div>

        <div className="order-1 sm:order-1 md:order-2 w-full md:w-2/2 h-[361px] flex flex-col md:justify-start md:items-start justify-center items-center">
          <h1 className="text-[54px] md:text-[64px] font-inter font-bold leading-[77px] tracking-[-0.02em] text-[#212529] mx-4 md:mx-20 text-center md:text-left">
            Work Together
          </h1>
          <p className="font-normal inter text-[18px] md:text-[20px] leading-[30px] tracking-[-0.02em] text-[#212529] mx-4 md:mx-20 mt-4 md:mt-7 text-center md:text-left">
            With Whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="w-[232px] md:w-[219px] h-[70px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-inter font-medium text-[18px] leading-[23px] tracking-[-0.02em] p-4 mx-4 md:mx-20 mt-6 md:mt-12">
            Try It Now <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

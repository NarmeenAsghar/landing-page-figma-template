import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[1015px] md:h-[538px] h-[813px] bg-[#ffffff]">
      <div className="w-[320px] sm:w-[604px] md:w-[1064px] flex flex-col items-center">
        <h1 className="font-inter font-bold text-[54px] md:text-[72px] leading-[43px] md:leading-[87.14px] text-[#212529] text-center">
          Our Sponsors
        </h1>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20 p-5 mt-20 items-center justify-items-center">
          <Image
            src="/Apple.png"
            alt="Apple Logo"
            width={55}
            height={68}
            className="object-contain"
          />
          <Image
            src="/Microsoft.png"
            alt="Microsoft Logo"
            width={287}
            height={62}
            className="object-contain"
          />
          <Image
            src="/Slack.png"
            alt="Slack Logo"
            width={280}
            height={71}
            className="object-contain"
          />
          <Image
            src="/Google.png"
            alt="Google Logo"
            width={211}
            height={69}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
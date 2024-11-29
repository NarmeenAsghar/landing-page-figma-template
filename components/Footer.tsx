import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center max-h-full bg-[#043873] pb-20 md:pb-0">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-5 max-w-[1479px] mx-auto ">
        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <div className="flex gap-2">
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="logo image" width={37} height={29} />
            </div>
            <h1 className="font-inter font-bold text-[28px] text-[#ffffff]">
              whitepace
            </h1>
          </div>
          <div className="font-inter text-[16px] font-normal leading-[30px] w-[200px]">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </div>
        </div>

        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <h1 className="font-inter font-bold text-[18px] text-[#ffffff]">
            Product
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffe492] pt-4">
            Overview
          </p>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            Pricing
          </p>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            Customer stories
          </p>
        </div>

        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <h1 className="font-inter font-bold text-[18px] text-[#ffffff]">
            Resources
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            Blog
          </p>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            Guides & tutorials
          </p>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            Help center
          </p>
        </div>

        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <h1 className="font-inter font-bold text-[18px] text-[#ffffff]">
            Company
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            About us
          </p>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            careers
          </p>
          <p className="font-inter text-[16px] font-normal leading-[20px] text-[#ffffff] pt-4">
            Media kit
          </p>
        </div>

        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px] items-start">
          <h1 className="font-inter font-bold text-[28px] text-[#ffffff]">
            Try it Today
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[30px] w-[200px]">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="w-[186px] h-[60px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-inter font-medium text-[16px] leading-[20px] tracking-[-0.02em] p-4 mt-6">
            Start today <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <div className="border-t-[1px] border-[#2e4e73] grid grid-cols-1 gap-10 md:grid-cols-5 max-w-[1479px] mx-auto">
        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <div className="flex gap-2">
            <div className="flex-shrink-0">
              <Image
                src="/Iconlogo.png"
                alt="logo image"
                width={19}
                height={19}
              />
            </div>
            <h1 className="font-inter font-normal text-[16px] text-[#ffffff]">
              English <span className="text-[0.75rem]">v</span>
            </h1>
          </div>
        </div>

        <div className="text-[#ffffff] p-6 md:pl-0 md:w-[1000px] md:flex md:flex-row gap-8">
          <p className="font-inter text-[16px] font-normal">Terms & Privacy</p>
          <p className="font-inter text-[16px] font-normal">Security</p>
          <p className="font-inter text-[16px] font-normal">Status</p>
          <p className="font-inter text-[16px] font-normal">
            ©2021 Whitepace LLC.
          </p>
        </div>

        <div className="text-[#ffffff] p-6 w-[300px] sm:w-[400px] md:ml-96 md:mr-0 md:pr-0">
          <div className="flex gap-8 md:ml-48">
            <div className="flex-shrink-0">
              <Image
                src="/facebook.png"
                alt="logo image"
                width={9}
                height={16}
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/twitter.png"
                alt="logo image"
                width={17}
                height={13}
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/Linkedin.png"
                alt="logo image"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

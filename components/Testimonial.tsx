import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-center max-h-full bg-white mt-[140px] sm:mt-44 md:mt-20 mb-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="font-inter font-bold text-[54px] md:text-[72px] text-[#212529]">
          What Our Clients Says
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-[1479px] mx-auto">
        <div
          className="rounded-[10px] bg-[#ffffff] text-[#212529] p-6 w-[300px] sm:w-[400px]"
          style={{ boxShadow: "15px 10px 50px 0px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="w-[260px] sm:w-[350px] sm:h-[200px] border-b-[1px] border-[#212529] pb-10 items-start">
            <Image src="/Quote.png" alt="image" width={86} height={61} />
            <p className="font-inter text-[18px] font-normal leading-[30px] pt-6">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="w-[260px] h-[200px] sm:w-[350px] sm:h-[150px] md:h-[100px] gap-4 md:flex md:flex-row items-center justify-center mt-8">
            <Image src="/Avater.png" alt="image" width={95} height={95} />
            <div>
              <h1 className="font-inter font-semibold text-[24px] leading-9 pt-4 sm:pt-0">
                Oberon Shaw, MCH
              </h1>
              <p className="font-inter font-normal text-[16px] leading-5 pt-4 sm:pt-0">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-[#4f9cf9] text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <div className="w-[260px] sm:w-[350px] sm:h-[200px] border-b-[1px] border-[#ffffff] pb-10 items-start">
            <Image src="/Group.png" alt="image" width={86} height={61} />
            <p className="font-inter text-[18px] font-normal leading-[30px] pt-6">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="w-[260px] h-[200px] sm:w-[350px] sm:h-[150px] md:h-[100px] gap-4 md:flex md:flex-row items-center justify-center mt-8">
            <Image src="/Avater1.png" alt="image" width={95} height={95} />
            <div>
              <h1 className="font-inter font-semibold text-[24px] leading-9 pt-4 sm:pt-0 text-[#043873]">
                Oberon Shaw, MCH
              </h1>
              <p className="font-inter font-normal text-[16px] leading-5 pt-4 sm:pt-0">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-[#4f9cf9] text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <div className="w-[260px] sm:w-[350px] sm:h-[200px] border-b-[1px] border-[#ffffff] pb-10 items-start">
            <Image src="/Group.png" alt="image" width={86} height={61} />
            <p className="font-inter text-[18px] font-normal leading-[30px] pt-6">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="w-[260px] h-[200px] sm:w-[350px] sm:h-[150px] md:h-[100px] gap-4 md:flex md:flex-row items-center justify-center mt-8">
            <Image src="/Avater2.png" alt="image" width={95} height={95} />
            <div>
              <h1 className="font-inter font-semibold text-[24px] leading-9 pt-4 sm:pt-0 text-[#043873]">
                Oberon Shaw, MCH
              </h1>
              <p className="font-inter font-normal text-[16px] leading-5 pt-4 sm:pt-0">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center max-h-full bg-white mt-[140px] sm:mt-44 md:mt-20 mb-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="font-inter font-bold text-[54px] md:text-[72px] text-[#212529]">
          Choose Your Plan
        </h1>
        <p className="font-inter font-normal text-lg text-[#212529] mt-4">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-[1481px] mx-auto">
        <div className="rounded-[10px] border border-[#ffe492] bg-[#ffffff] text-[#212529] p-6 w-[300px] sm:w-[400px]">
          <h2 className="font-inter font-semibold text-[24px] leading-9">
            Free
          </h2>
          <p className="mt-4 text-[36px] font-inter font-bold">$0</p>
          <p className="mt-4 font-inter text-[18px] font-medium leading-[23px]">
            Capture ideas and find them quickly
          </p>
          <ul className="mt-4 list-tick pl-1">
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Sync unlimited devices
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              10 GB monthly uploads
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              200 MB max. note size
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Customize Home dashboard and access extra widgets
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Connect primary Google Calendar account
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Add due dates, reminders, and notifications to your tasks
            </li>
          </ul>
          <button className="w-[166px] h-[51px] p-2 mt-8 bg-[#ffffff] border-[1px] border-[#ffe492] text-[#212529] text-[16px] font-bold leading-[19.36px] rounded-[8px]">
            Get Started
          </button>
        </div>

        <div className="rounded-[10px] bg-[#043873] text-[#ffffff] p-6 w-[300px] sm:w-[400px]">
          <h2 className="font-inter font-semibold text-[24px] leading-9">
            Personal
          </h2>
          <p className="mt-4 text-[36px] font-inter font-bold text-[#ffe492]">
            $11.99
          </p>
          <p className="mt-4 font-inter text-[18px] font-medium leading-[23px] text-[#ffffff]">
            Keep home and family on track
          </p>
          <ul className="mt-4 list-tick1 pl-1">
            <li className="font-inter text-[16px] font-normal leading-5 mb-4 text-[#ffffff]">
              Sync unlimited devices
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4 text-[#ffffff]">
              10 GB monthly uploads
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4 text-[#ffffff]">
              200 MB max. note size
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4 text-[#ffffff]">
              Customize Home dashboard and access extra widgets
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4 text-[#ffffff]">
              Connect primary Google Calendar account
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4 text-[#ffffff]">
              Add due dates, reminders, and notifications to your tasks
            </li>
          </ul>
          <button className="w-[166px] h-[51px] p-2 mt-8 bg-[#4f9cf9] text-[#ffffff] text-[16px] font-bold leading-[19.36px] rounded-[8px]">
            Get Started
          </button>
        </div>

        <div className="rounded-[10px] border border-[#ffe492] bg-[#ffffff] text-[#212529] p-6 w-[300px] sm:w-[400px]">
          <h2 className="font-inter font-semibold text-[24px] leading-9">
            Organization
          </h2>
          <p className="mt-4 text-[36px] font-inter font-bold">$49.99</p>
          <p className="mt-4 font-inter text-[18px] font-medium leading-[23px]">
            Capture ideas and find them quickly
          </p>
          <ul className="mt-4 list-tick pl-1">
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Sync unlimited devices
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              10 GB monthly uploads
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              200 MB max. note size
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Customize Home dashboard and access extra widgets
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Connect primary Google Calendar account
            </li>
            <li className="font-inter text-[16px] font-normal leading-5 mb-4">
              Add due dates, reminders, and notifications to your tasks
            </li>
          </ul>
          <button className="w-[166px] h-[51px] p-2 mt-8 bg-[#ffffff] border-[1px] border-[#ffe492] text-[#212529] text-[16px] font-bold leading-[19.36px] rounded-[8px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

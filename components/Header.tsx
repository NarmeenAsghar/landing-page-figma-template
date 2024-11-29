import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-[92px] bg-[#043873] px-[40px]">
      <div className="flex items-center space-x-72">
        <div className="flex gap-2">
          <div className="flex-shrink-0">
            <Image src={logo} alt="logo image" width={37} height={29} />
          </div>
          <h1 className="font-inter font-bold text-[28px] text-[#ffffff]">
            whitepace
          </h1>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-8 md:text-white md:font-[DM Sans] md:font-medium md:text-[18px]">
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <div key={item} className="relative cursor-pointer">
              {item} <span className="text-[0.75rem]">V</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-4">
        <button className="px-5 py-2 bg-yellow-400 text-[#043873] font-inter font-medium text-[18px] rounded-lg">
          Login
        </button>
        <button className="px-6 py-3 bg-[#4F9CF9] text-white font-inter font-medium text-[18px] rounded-lg">
          Try Whitespace Free
          <span className="ml-2">→</span>
        </button>
      </div>

      <Sheet>
        <SheetTrigger className="text-[#ffffff] w-[42px] h-[24px] md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col items-start space-y-2 pt-10 px-6">
            {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
              <li key={item} className="cursor-pointer pb-4">
                {item}
              </li>
            ))}
          </nav>
          <div className="flex flex-col items-start gap-6 space-x-4">
            <button className="px-6 py-3 bg-yellow-400 text-[#043873] font-inter font-medium text-[18px] rounded-lg ml-4">
              Login
            </button>
            <button className="px-6 py-3 bg-[#4F9CF9] text-white font-inter font-medium text-[18px] rounded-lg">
              Try Whitespace Free
              <span className="ml-2">→</span>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

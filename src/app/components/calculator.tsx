"use client";

import { useState } from "react";
import Image from "next/image";

export default function Calculator() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <section
      className={`calculator relative flex h-screen w-screen bg-calculatorbackground ${theme} flex-col`}
    >
      <div className="flex w-full justify-center">
        <button
          onClick={toggleTheme}
          className="mb-[55px] mt-[16px] flex h-[32px] w-[72px] flex-shrink-0 items-start gap-3 overflow-hidden rounded-2xl bg-lightdarkbutton py-1 pr-2"
        >
          {theme === "dark" ? (
            <div className="flex -translate-x-10 transition-transform duration-300 ease-in-out">
              <Image
                src="/circledark.svg"
                alt="circle"
                width={24}
                height={24}
                className="ml-[44px]"
              />
              <Image
                src="/moon.svg"
                alt="moon"
                width={24}
                height={24}
                className="ml-[16px]"
              />
            </div>
          ) : (
            <div className="flex transition-transform duration-300 ease-in-out">
              <Image
                src="/sun.svg"
                alt="sun"
                width={24}
                height={24}
                className="ml-[4px]"
              />
              <Image
                src="/circlelight.svg"
                alt="circle"
                width={24}
                height={24}
                className="ml-[16px]"
              />
            </div>
          )}
        </button>
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-[20px]">
        {theme === "dark" ? (
          <div className="font-work-sans h-fit w-full self-stretch text-right text-[40px] font-light text-white opacity-40">
            10000
          </div>
        ) : (
          <div className="font-work-sans h-fit w-full self-stretch text-right text-[40px] font-light text-black opacity-40">
            10000
          </div>
        )}
        {theme === "dark" ? (
          <div className="font-work-sans mb-[16px] self-stretch text-right text-[96px] font-light leading-[96px] text-white">
            9000
          </div>
        ) : (
          <div className="font-work-sans mb-[16px] self-stretch text-right text-[96px] font-light leading-[96px] text-black">
            9000
          </div>
        )}
        <div className="flex items-start gap-4 self-stretch">
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-topkeypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              C
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-topkeypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              ±
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-topkeypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              %
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              ÷
            </span>
          </button>
        </div>
        <div className="flex items-start gap-4 self-stretch">
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              7
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              8
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              9
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              ×
            </span>
          </button>
        </div>
        <div className="flex items-start gap-4 self-stretch">
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              4
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              5
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              6
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              -
            </span>
          </button>
        </div>
        <div className="flex items-start gap-4 self-stretch">
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              1
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              2
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              3
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              +
            </span>
          </button>
        </div>
        <div className="flex items-start gap-4 self-stretch">
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              .
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              0
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              ⌫
            </span>
          </button>
          <button className="flex h-[72px] flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90">
            <span className="font-work-sans flex h-12 w-12 flex-shrink-0 flex-col justify-center text-center text-[32px] font-normal leading-[40px] text-buttontext">
              =
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

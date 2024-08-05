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
      className={`calculator relative flex h-screen w-screen justify-center bg-calculatorbackground ${theme}`}
    >
      <button
        onClick={toggleTheme}
        className="mt-[16px] flex h-[32px] w-[72px] flex-shrink-0 items-start gap-3 overflow-hidden rounded-2xl bg-lightdarkbutton py-1 pr-2"
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
    </section>
  );
}

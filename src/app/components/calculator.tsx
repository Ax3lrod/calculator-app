"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Calculator() {
  const [theme, setTheme] = useState("dark");
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState<string | null>(null);

  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const textElement = textRef.current;
      const containerElement = containerRef.current;

      if (!textElement || !containerElement) return;

      const textWidth = textElement.scrollWidth;
      const containerWidth = containerElement.clientWidth;

      if (textWidth > containerWidth) {
        const scale = containerWidth / textWidth;
        textElement.style.transform = `scale(${scale})`;
        textElement.style.transformOrigin = "left";
      } else {
        textElement.style.transform = `scale(1)`;
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, [currentValue]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleNumberClick = (value: string) => {
    setCurrentValue(currentValue + value);
  };

  const handleOperatorClick = (value: string) => {
    if (currentValue === "") return;
    if (previousValue !== "") {
      handleEqualClick();
    }
    setOperator(value);
    setPreviousValue(currentValue);
    setCurrentValue("");
  };

  const handleClearClick = () => {
    setCurrentValue("");
    setPreviousValue("");
    setOperator(null);
  };

  const handleSignChangeClick = () => {
    if (currentValue === "") return;
    setCurrentValue(String(-parseFloat(currentValue)));
  };

  const handlePercentageClick = () => {
    if (currentValue === "") return;
    setCurrentValue(String(parseFloat(currentValue) / 100));
  };

  const handleBackspaceClick = () => {
    setCurrentValue(currentValue.slice(0, -1));
  };

  const handleEqualClick = () => {
    if (currentValue === "" || previousValue === "" || operator === null)
      return;

    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    switch (operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "×":
        result = prev * curr;
        break;
      case "÷":
        result = prev / curr;
        break;
      default:
        return;
    }

    setCurrentValue(String(result));
    setPreviousValue("");
    setOperator(null);
  };

  return (
    <section
      className={`calculator relative flex h-screen w-screen bg-calculatorbackground ${theme} flex-col overflow-hidden`}
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
      <div className="absolute bottom-0 flex w-screen flex-col items-start px-[20px] pb-[20px] 350:gap-2 xs:gap-4">
        <div
          className={`font-work-sans h-fit w-full self-stretch overflow-hidden text-ellipsis text-right font-light 350:text-[26.6px] xs:text-[40px] ${theme === "dark" ? "text-white" : "text-black"} opacity-40`}
        >
          {previousValue} {operator}
        </div>
        <div
          ref={containerRef}
          className={`font-work-sans mb-[16px] self-stretch text-right font-light 350:text-[64px] 350:leading-[64px] xs:text-[96px] xs:leading-[96px] ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          <div ref={textRef}>{currentValue || ""}</div>
        </div>
        <div className="flex items-start self-stretch 350:gap-2 xs:gap-4">
          <button
            onClick={handleClearClick}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-topkeypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              C
            </span>
          </button>
          <button
            onClick={handleSignChangeClick}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-topkeypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            {theme === "dark" ? (
              <Image
                src="/plusminuslight.svg"
                alt="plusminus"
                width={32}
                height={32}
              />
            ) : (
              <Image
                src="/plusminusdark.svg"
                alt="plusminus"
                width={32}
                height={32}
              />
            )}
            <span className="font-work-sans hidden flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              ±
            </span>
          </button>
          <button
            onClick={handlePercentageClick}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-topkeypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              %
            </span>
          </button>
          <button
            onClick={() => handleOperatorClick("÷")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              ÷
            </span>
          </button>
        </div>
        <div className="flex items-start self-stretch 350:gap-2 xs:gap-4">
          <button
            onClick={() => handleNumberClick("7")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              7
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("8")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              8
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("9")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              9
            </span>
          </button>
          <button
            onClick={() => handleOperatorClick("×")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              ×
            </span>
          </button>
        </div>
        <div className="flex items-start self-stretch 350:gap-2 xs:gap-4">
          <button
            onClick={() => handleNumberClick("4")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              4
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("5")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              5
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("6")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              6
            </span>
          </button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              -
            </span>
          </button>
        </div>
        <div className="flex items-start self-stretch 350:gap-2 xs:gap-4">
          <button
            onClick={() => handleNumberClick("1")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              1
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("2")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              2
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("3")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              3
            </span>
          </button>
          <button
            onClick={() => handleOperatorClick("+")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              +
            </span>
          </button>
        </div>
        <div className="flex items-start self-stretch 350:gap-2 xs:gap-4">
          <button
            onClick={() => handleNumberClick(".")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              .
            </span>
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              0
            </span>
          </button>
          <button
            onClick={handleBackspaceClick}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-keypad px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            {theme === "dark" ? (
              <Image
                src="/deletebuttonlight.svg"
                alt="delete"
                width={32}
                height={32}
              />
            ) : (
              <Image
                src="/deletebuttondark.svg"
                alt="delete"
                width={32}
                height={32}
              />
            )}
            <span className="font-work-sans hidden flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              ⌫
            </span>
          </button>
          <button
            onClick={handleEqualClick}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#4B5EFC] px-3 py-3 hover:opacity-90 350:h-[48px] xs:h-[72px]"
          >
            <span className="font-work-sans flex flex-shrink-0 flex-col justify-center text-center font-normal leading-[40px] text-buttontext 350:h-8 350:w-8 350:text-[21.3px] xs:h-12 xs:w-12 xs:text-[32px]">
              =
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

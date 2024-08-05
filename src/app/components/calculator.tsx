import Image from "next/image";
export default function Calculator() {
  return (
    <section className="calculator relative flex h-screen w-screen justify-center bg-calculatorbackground">
      <button className="mt-[16px] flex h-[32px] w-[72px] flex-shrink-0 items-start gap-3 rounded-2xl bg-[#2E2F38] py-1 pr-2">
        <Image
          src="/sun.svg"
          alt="sun"
          width={24}
          height={24}
          className="-ml-[36px]"
        />
        <Image
          src="/circle.svg"
          alt="circle"
          width={24}
          height={24}
          className="ml-[4px]"
        />
        <Image
          src="/moon.svg"
          alt="moon"
          width={24}
          height={24}
          className="mr-[8px]"
        />
      </button>
    </section>
  );
}

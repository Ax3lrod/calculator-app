import Image from "next/image";
import Calculator from "./components/calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-worksans dark:text-white">
      <Calculator />
    </main>
  );
}

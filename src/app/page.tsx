import Image from "next/image";
import Calculator from "./components/calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-calculatorbackground font-worksans">
      <Calculator />
    </main>
  );
}

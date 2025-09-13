import Image from "next/image";
import Header from "@/components/layout/header";
import Hero from "@/components/homepage/hero";
import Services from "@/components/homepage/services";
import Technologies from "@/components/homepage/technologies";
import About from "@/components/homepage/about";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-mono h-full min-h-screen overflow-hidden max-w-screen text-white relative bg-zinc-950">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <Hero />
        <Services />
        <Technologies />
        <About />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}

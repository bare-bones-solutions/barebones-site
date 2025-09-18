import Image from "next/image";
import Header from "@/components/layout/header";
import Hero from "@/components/homepage/hero";
import Services from "@/components/homepage/services";
import Technologies from "@/components/homepage/technologies";
import About from "@/components/homepage/about";
import Contact from "@/components/homepage/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="bg-background flex flex-col items-center font-mono h-full min-h-screen  max-w-screen text-white relative">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <Hero />
        <Services />
        <Technologies />
        <About />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-[130px] border-t border-white w-full">
        <Footer/>
      </footer>
    </div>
  );
}

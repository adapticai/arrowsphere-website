import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionCounter } from "@/components/section-counter";
import Hero from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import Thesis from "@/components/sections/Thesis";
import Divergence from "@/components/sections/Divergence";
import Approach from "@/components/sections/Approach";
import Leadership from "@/components/sections/Leadership";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Thesis />
        <Divergence />
        <Approach />
        <Leadership />
        <Connect />
      </main>
      <Footer />
      <SectionCounter />
    </div>
  );
}

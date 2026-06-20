import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ThesisPreview from "@/components/sections/ThesisPreview";
import LeadershipPreview from "@/components/sections/LeadershipPreview";
import FoundationPreview from "@/components/sections/FoundationPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <ThesisPreview />
        <LeadershipPreview />
        <FoundationPreview />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

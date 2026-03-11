import Hero from "@/components/sections/Hero";
import KPICards from "@/components/sections/KPICards";
import Analytics from "@/components/sections/Analytics";
import WeaveFlowShowcase from "@/components/sections/WeaveFlowShowcase";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <KPICards />
      <WeaveFlowShowcase />
      <Analytics />
      <Experience />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

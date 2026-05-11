import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Sidebar from "@/components/Sidebar";
import Overview from "@/components/Overview";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Fixed background layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="dot-grid" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <CursorGlow />
      <ScrollProgress />

      <div className="page-layout relative z-10">
        <Sidebar />
        <main className="main-content">
          <Overview />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}

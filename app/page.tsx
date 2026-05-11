import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="noise" />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}

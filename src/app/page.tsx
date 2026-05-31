import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Terminal from "@/components/sections/Terminal";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Terminal />
      <Projects />
      <Journey />
      <GitHub />
      <Contact />
      <Footer />
    </main>
  );
}

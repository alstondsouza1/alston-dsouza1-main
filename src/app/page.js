import Header from "@/components/Header/page";
import HeroSection from "@/components/HeroSection/page";
import AboutSection from "@/components/AboutSection/page";
import SkillsSection from "@/components/SkillsSection/page";
import Experience from "@/components/Experience/page";
import Education from "@/components/Education/page";
import Projects from "@/components/ProjectCard/page";
import Contact from "@/components/ContactSection/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded bg-white px-4 py-3 font-bold text-black shadow-lg transition focus:translate-y-0"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex="-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

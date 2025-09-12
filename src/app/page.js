import AboutSection from "@/components/AboutSection/page";
import Experience from "@/components/Experience/page";
import HeroSection from "@/components/HeroSection/page";
import Education from "@/components/Education/page";
import Projects from "@/components/ProjectCard/page";
import Contact from "@/components/ContactSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <Experience/>
      <Education/>
      <Projects/>
      <Contact/>
    </main>
  )
}
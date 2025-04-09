import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection"
import ProjectSection from "@/sections/ProjectSection";
import TapeSection from "@/sections/TapeSection";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
    <Header/>
    <HeroSection/>
    <ProjectSection/>
    <TapeSection/> 
     <Testimonials/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}

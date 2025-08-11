import { useEffect } from "react";
import { useLocation } from "react-router";
import { scroller } from "react-scroll";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsPreview from "../components/ProjectsPreview";
import Skills from "../components/Skills";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Use react-scroll's scroller to scroll smoothly to the section
      scroller.scrollTo(id, {
        duration: 700,
        smooth: "easeInOutQuart",
        offset: -80, // adjust for fixed navbar height
      });
    }
  }, [location]);
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        <ProjectsPreview />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

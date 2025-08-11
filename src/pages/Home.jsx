import { Outlet } from "react-router";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsPreview from "../components/ProjectsPreview";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero / Intro Section */}
        <Hero />

        {/* About Me Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
          <AboutMe />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-md"
        >
          <Skills />
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-6xl mx-auto px-6 py-16 mt-12">
          <Education />
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-md mt-12"
        >
          <Experience />
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16 mt-12">
          <ProjectsPreview />
        </section>

        {/* Nested route outlet, e.g. ProjectDetails will render here */}
        <Outlet />

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-md mt-12"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-indigo-200 py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Left side: Copyright */}
        <p className="text-sm md:text-base select-none">
          &copy; {new Date().getFullYear()} Shuvo Saha. All rights reserved.
        </p>

        {/* Center: Navigation links */}
        <nav className="flex space-x-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right side: Social icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="mailto:a1shuvosaha@gmail.com"
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <HiMail />
          </a>
          <a
            href="https://github.com/a1shuvosaha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/a1shuvosaha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

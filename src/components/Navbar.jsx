import { useState } from "react";
import { HiDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink, Link as RouterLink, useLocation } from "react-router";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Home", to: "hero", isScroll: true },
  { name: "About", to: "about", isScroll: true },
  { name: "Skills", to: "skills", isScroll: true },
  { name: "Education", to: "education", isScroll: true },
  { name: "Projects", to: "projects", isScroll: true },
  { name: "Contact", to: "contact", isScroll: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  const renderLink = ({ name, to, isScroll }) => {
    if (isScroll && isHome) {
      return (
        <ScrollLink
          to={to}
          smooth
          offset={-80}
          duration={500}
          spy
          activeClass="text-indigo-600 font-semibold"
          className="cursor-pointer transition-colors hover:text-indigo-600"
          onClick={closeMenu}
        >
          {name}
        </ScrollLink>
      );
    } else if (isScroll && !isHome) {
      return (
        <RouterLink
          to={`/#${to}`}
          className="transition-colors hover:text-indigo-600"
          onClick={closeMenu}
        >
          {name}
        </RouterLink>
      );
    }
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition-colors hover:text-indigo-600 ${
            isActive ? "text-indigo-600 font-semibold" : ""
          }`
        }
        onClick={closeMenu}
      >
        {name}
      </NavLink>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700"
          onClick={closeMenu}
        >
          ShuvoSaha
        </RouterLink>

        {/* Desktop Nav Links - Centered */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {renderLink(link)}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:flex">
          <a
            href="https://drive.google.com/file/d/1gffVTCv_lDM6LJXRf-pQ_HQ6wIImlCGl/view?usp=sharing"
            download
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md font-semibold transition-transform hover:scale-105"
            aria-label="Download Resume"
          >
            <HiDownload className="w-5 h-5" />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <HiOutlineX className="w-7 h-7" />
          ) : (
            <HiOutlineMenu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>{renderLink(link)}</li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1gffVTCv_lDM6LJXRf-pQ_HQ6wIImlCGl/view?usp=sharing"
                download
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md font-semibold transition-transform hover:scale-105"
                aria-label="Download Resume"
                onClick={closeMenu}
              >
                <HiDownload className="w-5 h-5" /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

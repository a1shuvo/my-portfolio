import { useState } from "react";
import { HiDownload } from "react-icons/hi";
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700 transition"
          onClick={() => setMenuOpen(false)}
        >
          ShuvoSaha
        </RouterLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-12 font-semibold text-gray-700">
          {navLinks.map(({ name, to, isScroll }) => (
            <li key={name} className="relative group">
              {isScroll && isHome ? (
                // Smooth scroll only on Home page
                <ScrollLink
                  to={to}
                  smooth={true}
                  offset={-80} // adjust for fixed navbar height
                  duration={500}
                  spy={true}
                  activeClass="text-indigo-600 after:w-full after:bg-indigo-600"
                  className="cursor-pointer transition-colors duration-300 relative px-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all group-hover:w-full" />
                </ScrollLink>
              ) : isScroll && !isHome ? (
                // On other pages, link to home with hash for scrolling
                <RouterLink
                  to={`/#${to}`}
                  className="cursor-pointer transition-colors duration-300 relative px-1 text-gray-700 hover:text-indigo-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all group-hover:w-full" />
                </RouterLink>
              ) : (
                // For non-scroll links, normal NavLink
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 relative px-1 ${
                      isActive
                        ? "text-indigo-600 after:w-full after:bg-indigo-600"
                        : "text-gray-700 hover:text-indigo-600"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all group-hover:w-full" />
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Resume Button Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md font-semibold transition-transform transform hover:scale-105"
            aria-label="Download Resume"
            onClick={() => setMenuOpen(false)}
          >
            <HiDownload className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col px-6 py-6 space-y-4 font-semibold text-gray-700">
            {navLinks.map(({ name, to, isScroll }) => (
              <li key={name}>
                {isScroll && isHome ? (
                  <ScrollLink
                    to={to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    spy={true}
                    activeClass="bg-indigo-100 text-indigo-700"
                    className="block px-2 py-1 rounded-md cursor-pointer hover:bg-indigo-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </ScrollLink>
                ) : isScroll && !isHome ? (
                  <RouterLink
                    to={`/#${to}`}
                    className="block px-2 py-1 rounded-md transition-colors hover:bg-indigo-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </RouterLink>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded-md transition-colors ${
                        isActive
                          ? "bg-indigo-100 text-indigo-700"
                          : "hover:bg-indigo-50"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md font-semibold transition-transform transform hover:scale-105"
                onClick={() => setMenuOpen(false)}
                aria-label="Download Resume"
              >
                <HiDownload className="w-5 h-5" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { Link, NavLink } from "react-router";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/#about" },
  { name: "Skills", to: "/#skills" },
  { name: "Education", to: "/#education" },
  { name: "Projects", to: "/#projects" },
  { name: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700 transition"
        >
          ShuvoSaha
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-12 font-semibold text-gray-700">
          {navLinks.map(({ name, to }) => (
            <li key={name} className="relative group">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors duration-300 relative px-1
                  ${
                    isActive
                      ? "text-indigo-600 after:w-full after:bg-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {/* Nav text */}
                {name}

                {/* Underline animation */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all group-hover:w-full
                    ${
                      navLinks.find((link) => link.name === name)?.to ===
                      window.location.pathname
                        ? "w-full"
                        : ""
                    }
                  `}
                ></span>
              </NavLink>
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
            {navLinks.map(({ name, to }) => (
              <li key={name}>
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

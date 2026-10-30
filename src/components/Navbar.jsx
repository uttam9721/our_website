import React, { useState, useEffect } from "react";
const logo = "/logo.jpg";
import { Link } from "react-scroll";
import { 
  FaBars, 
  FaTimes, 
  FaFilePdf, 
  FaSearch, 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";

const Navbar = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "Home" },
    { name: "About & Journey", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Projects", to: "Projects" },
    { name: "Open Source", to: "NpmPackage" },
    { name: "Metrics", to: "Stats" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 sm:px-6">
        <div 
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
            scrolled 
              ? "bg-[#090e1c]/85 backdrop-blur-xl border-slate-700/50 shadow-2xl shadow-sky-950/20 py-2.5 px-4 sm:px-6" 
              : "bg-[#090e1c]/50 backdrop-blur-md border-slate-800/60 py-3 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo & Identity */}
            <Link
              to="Home"
              smooth
              duration={500}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Uttam Kumar"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-sky-400/40 group-hover:border-sky-400 transition duration-300 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#090e1c] animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
                  Uttam Kumar
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Available for Hire
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-90}
                  spy
                  activeClass="text-sky-400 bg-sky-500/10 font-semibold"
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 cursor-pointer transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Command Palette Trigger */}
              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 hover:border-slate-600 transition"
                title="Search commands (Ctrl+K)"
              >
                <FaSearch className="text-slate-400 text-xs" />
                <span className="text-slate-400">Quick Actions</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-300 font-sans font-bold">
                  Ctrl K
                </kbd>
              </button>

              {/* Resume Download Button */}
              <a
                href="/UttamKumarCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaFilePdf className="text-sm" />
                <span>Resume</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-[#090e1c]/95 backdrop-blur-2xl border border-slate-700/70 p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-90}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 cursor-pointer transition flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-500 text-xs">→</span>
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700"
                >
                  <FaSearch />
                  <span>Open Quick Command Palette</span>
                </button>
                <a
                  href="/UttamKumarCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/20"
                >
                  <FaFilePdf />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

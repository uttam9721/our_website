const logo = "/logo.jpg";
import { Link } from "react-scroll";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaNpm, 
  FaArrowUp 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050811] text-slate-400 py-16 border-t border-slate-800/80 overflow-hidden">
      <div className="absolute inset-0 dot-matrix pointer-events-none opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Uttam Kumar"
              className="w-10 h-10 rounded-full object-cover border border-slate-700 shadow-md"
            />
            <div>
              <h3 className="font-display font-bold text-white text-base">
                Uttam Kumar
              </h3>
              <p className="text-xs font-mono text-slate-500">
                Full-Stack & Frontend Engineer • Bangalore, India
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <Link to="Home" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">Home</Link>
            <Link to="About" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">About & Journey</Link>
            <Link to="Skills" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">Skills</Link>
            <Link to="Projects" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">Projects</Link>
            <Link to="NpmPackage" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">Open Source</Link>
            <Link to="Stats" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">Metrics</Link>
            <Link to="Contact" smooth duration={500} offset={-80} className="hover:text-white cursor-pointer transition">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/uttam9721"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/uttam-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-slate-700 transition"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-sm" />
            </a>
            <a
              href="https://leetcode.com/u/uttammaurya01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 hover:border-slate-700 transition"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="text-sm text-amber-500" />
            </a>
            <a
              href="https://www.npmjs.com/package/cb-react-smart-loader"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-red-400 hover:border-slate-700 transition"
              aria-label="NPM Package"
            >
              <FaNpm className="text-sm text-red-500" />
            </a>
            <a
              href="mailto:uttammaurya377@gmail.com"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-slate-700 transition"
              aria-label="Email"
            >
              <FaEnvelope className="text-sm" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Uttam Kumar. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
              title="Back to Top"
            >
              <FaArrowUp className="text-[10px]" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

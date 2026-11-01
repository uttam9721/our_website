import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import toast from "react-hot-toast";
import { 
  FaLinkedin, 
  FaGithub, 
  FaCopy, 
  FaCheck, 
  FaArrowRight, 
  FaFilePdf, 
  FaNpm, 
  FaClock, 
  FaMapMarkerAlt, 
  FaLaptopCode,
  FaPhoneAlt 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("typescript");
  const [currentTime, setCurrentTime] = useState("");

  // Live Bangalore Time (IST UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("uttammaurya377@gmail.com");
    setCopied(true);
    toast.success("Email copied: uttammaurya377@gmail.com");
    setTimeout(() => setCopied(false), 2500);
  };

  const codeSnippets = {
    typescript: `// uttam-engineer.config.ts
export const engineer = {
  name: "Uttam Kumar",
  title: "Full-Stack & Frontend Engineer",
  location: "Bangalore, India",
  phone: "+91 9721039470",
  currentRole: "Frontend Developer @ I-next Web Technologies",
  stack: {
    frontend: ["React.js (TSX)", "TypeScript", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "Socket.io"],
    auth: ["Firebase", "Clerk", "Auth0", "JWT & RBAC"],
    database: ["PostgreSQL", "MongoDB", "SQL / MySQL"]
  },
  publishedLib: "cb-react-smart-loader (npm)",
  availability: "Open to Full-Time Engineering Roles"
};`,
    architecture: `// system-architecture.json
{
  "focus": "Scalability, Performance & Clean Component Architecture",
  "frontend": {
    "frameworks": ["React 18+ (TSX)", "Next.js 14+ App Router"],
    "state": ["Redux", "Context API", "TanStack Query", "Form State Machines"],
    "performance": ["Lazy Loading", "Memoization (25% re-render cut)"]
  },
  "backend": {
    "runtime": "Node.js (LTS), NestJS Framework",
    "apis": "RESTful & Real-time WebSockets (Socket.io)",
    "databases": ["PostgreSQL (Relational)", "MongoDB (Document)"]
  }
}`,
    achievements: `// verified-milestones.md
- 🤖 Robotics Teleoperation & Fleet Control (React, Tailwind, Auth0 Orgs, Swagger API)
- 💳 Digital Payment & FinTech Platform (React.tsx, NestJS, Postgres)
- 🚗 HR & Fleet Operations with Vehicle Inspection workflow
- 🏢 Enterprise B2B Commerce & Workflow System
- 🚀 Published NPM Library: cb-react-smart-loader
- 🧠 180+ Data Structures & Algorithms solved on LeetCode
- 🏆 3-Star Java Developer Verified on HackerRank
- 🎓 B.Tech in IT (Ambalika Institute of Mgmt & Tech, Lucknow)`
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen pt-24 sm:pt-28 pb-16 flex flex-col justify-center overflow-x-hidden bg-[#060913] text-slate-100"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-matrix pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Sleek Top Availability & Location Pill */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Full-Time & High-Impact Roles</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-mono">
            <FaMapMarkerAlt className="text-sky-400 text-[11px]" />
            <span>Bangalore, IN</span>
            <span className="text-slate-600">•</span>
            <FaClock className="text-slate-400 text-[11px]" />
            <span className="text-slate-300">{currentTime || "IST (UTC+5:30)"}</span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Narrative & Action CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sky-400 font-mono text-xs sm:text-sm tracking-wide uppercase font-semibold">
                React.js • TypeScript • Next.js • NestJS • Node.js
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.15] break-words">
                Engineering <span className="text-heading-gradient">resilient web systems</span> with craftsmanship.
              </h1>
            </div>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Full-Stack & Frontend Engineer with commercial production experience at{" "}
              <span className="text-sky-300 font-semibold">I-next Web Technologies</span>. 
              Creator of <span className="text-emerald-400 font-mono text-xs sm:text-sm bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">cb-react-smart-loader</span> on NPM and builder of high-performance, scalable enterprise web platforms.
            </p>

            {/* Action Buttons (Mobile-First Wrap) */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 pt-2">
              <Link
                to="Projects"
                smooth
                duration={500}
                offset={-80}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Shipped Projects</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="/Uttam_Kumar_CV.pdf?v=20261031"
                target="_blank"
                rel="noopener noreferrer"
                download="Uttam_Kumar_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaFilePdf className="text-rose-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-slate-400 text-xs" />
                    <span className="truncate">uttammaurya377@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Strip */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <span className="font-mono text-xs uppercase text-slate-500">Contact:</span>
              <a
                href="tel:+919721039470"
                className="flex items-center gap-1.5 hover:text-white transition font-mono"
              >
                <FaPhoneAlt className="text-sky-400 text-xs" />
                <span>+91 9721039470</span>
              </a>

              <a
                href="https://github.com/uttam9721"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <FaGithub className="text-base" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/uttam-fullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-400 transition"
              >
                <FaLinkedin className="text-base" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/uttammaurya01/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition"
              >
                <SiLeetcode className="text-base text-amber-500" />
                <span>LeetCode</span>
              </a>

              <a
                href="https://www.npmjs.com/package/cb-react-smart-loader"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-red-400 transition"
              >
                <FaNpm className="text-lg text-red-500" />
                <span>NPM</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal (Mobile Responsive Container) */}
          <div className="lg:col-span-5 w-full overflow-hidden">
            <div className="rounded-2xl bg-[#0b101e] border border-slate-700/60 shadow-2xl shadow-sky-950/30 overflow-hidden w-full">
              {/* Terminal Window Header */}
              <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#080c17] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-1">
                    <FaLaptopCode className="text-sky-400 text-xs" />
                    developer-spec.ts
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  Node v20.x
                </span>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-slate-800/80 bg-[#090e1c] text-[11px] sm:text-xs font-mono overflow-x-auto hide-scrollbar">
                <button
                  onClick={() => setActiveTab("typescript")}
                  className={`px-3 py-2 border-b-2 whitespace-nowrap transition ${
                    activeTab === "typescript"
                      ? "border-sky-400 text-sky-300 bg-slate-800/40 font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Config
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-2 border-b-2 whitespace-nowrap transition ${
                    activeTab === "architecture"
                      ? "border-sky-400 text-sky-300 bg-slate-800/40 font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setActiveTab("achievements")}
                  className={`px-3 py-2 border-b-2 whitespace-nowrap transition ${
                    activeTab === "achievements"
                      ? "border-sky-400 text-sky-300 bg-slate-800/40 font-semibold"
                      : "border-transparent text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Highlights
                </button>
              </div>

              {/* Code Content Area (Responsive Scrolling) */}
              <div className="p-3 sm:p-5 font-mono text-[10px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto bg-[#0b101e] min-h-[240px] sm:min-h-[280px]">
                <pre className="text-slate-300 font-mono">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-3 sm:px-4 py-2 bg-[#080c17] border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>production/main</span>
                </div>
                <span className="text-slate-500">TypeScript • UTF-8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Highlights / Impact Metrics Strip (Responsive 2x2 Grid on Mobile) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0c1222]/80 border border-slate-800/80 shadow-md backdrop-blur-md">
            <div className="text-xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">
              1+ <span className="text-sky-400 text-base sm:text-xl font-mono">Yrs Exp</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Commercial Engineering</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-mono">I-next & Amzsoft</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0c1222]/80 border border-slate-800/80 shadow-md backdrop-blur-md">
            <div className="text-xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">
              20+ <span className="text-emerald-400 text-base sm:text-xl font-mono">Projects</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Shipped & Production Apps</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-mono">Robotics, FinTech, B2B, ERP</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0c1222]/80 border border-slate-800/80 shadow-md backdrop-blur-md">
            <div className="text-xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">
              180+ <span className="text-amber-400 text-base sm:text-xl font-mono">Solved</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 font-medium">LeetCode DSA Problems</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-mono">Optimal Time/Space</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0c1222]/80 border border-slate-800/80 shadow-md backdrop-blur-md">
            <div className="text-xl sm:text-3xl font-display font-bold text-white mb-0.5 sm:mb-1">
              1 <span className="text-rose-400 text-base sm:text-xl font-mono">NPM Lib</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 font-medium">Published Open-Source</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-mono">cb-react-smart-loader</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
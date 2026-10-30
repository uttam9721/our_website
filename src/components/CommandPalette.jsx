import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import toast from "react-hot-toast";
import { 
  FaSearch, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaLaptopCode, 
  FaBriefcase, 
  FaNpm, 
  FaCode, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaCopy, 
  FaFilePdf 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open palette
          window.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollTo = (target) => {
    onClose();
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("uttammaurya377@gmail.com");
    toast.success("Email copied to clipboard! (uttammaurya377@gmail.com)");
    onClose();
  };

  const actions = [
    {
      category: "Navigation",
      items: [
        { id: "nav-home", label: "Jump to Home", icon: <FaHome className="text-sky-400" />, action: () => scrollTo("Home") },
        { id: "nav-about", label: "Jump to About & Experience", icon: <FaUser className="text-emerald-400" />, action: () => scrollTo("About") },
        { id: "nav-skills", label: "Jump to Technical Skills", icon: <FaLaptopCode className="text-indigo-400" />, action: () => scrollTo("Skills") },
        { id: "nav-projects", label: "Jump to Featured Projects", icon: <FaBriefcase className="text-purple-400" />, action: () => scrollTo("Projects") },
        { id: "nav-npm", label: "View NPM Package (cb-react-smart-loader)", icon: <FaNpm className="text-red-400" />, action: () => scrollTo("NpmPackage") },
        { id: "nav-stats", label: "View LeetCode & GitHub Stats", icon: <FaCode className="text-amber-400" />, action: () => scrollTo("Stats") },
        { id: "nav-contact", label: "Jump to Contact", icon: <FaEnvelope className="text-cyan-400" />, action: () => scrollTo("Contact") },
      ],
    },
    {
      category: "Quick Actions",
      items: [
        { id: "action-copy-email", label: "Copy Email (uttammaurya377@gmail.com)", icon: <FaCopy className="text-sky-400" />, action: copyEmail },
        { id: "action-resume", label: "Download Resume / CV (PDF)", icon: <FaFilePdf className="text-rose-400" />, action: () => { window.open("/UttamKumarCV.pdf", "_blank"); onClose(); } },
      ],
    },
    {
      category: "External Profiles",
      items: [
        { id: "ext-github", label: "GitHub Profile (@uttam9721)", icon: <FaGithub className="text-slate-300" />, action: () => { window.open("https://github.com/uttam9721", "_blank"); onClose(); } },
        { id: "ext-linkedin", label: "LinkedIn Profile (uttam-fullstack)", icon: <FaLinkedin className="text-blue-400" />, action: () => { window.open("https://www.linkedin.com/in/uttam-fullstack", "_blank"); onClose(); } },
        { id: "ext-leetcode", label: "LeetCode Profile (uttammaurya01)", icon: <SiLeetcode className="text-amber-500" />, action: () => { window.open("https://leetcode.com/u/uttammaurya01/", "_blank"); onClose(); } },
        { id: "ext-npm", label: "NPM Package (cb-react-smart-loader)", icon: <FaNpm className="text-red-500" />, action: () => { window.open("https://www.npmjs.com/package/cb-react-smart-loader", "_blank"); onClose(); } },
      ],
    },
  ];

  const filtered = actions
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-[#0c1220] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden shadow-sky-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#090d18]">
          <FaSearch className="text-slate-400 mr-3 text-sm" />
          <input
            type="text"
            placeholder="Type a command or jump to section... (Press Esc to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              No matching commands found for "{query}"
            </div>
          ) : (
            filtered.map((group) => (
              <div key={group.category} className="py-2 first:pt-0">
                <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                  {group.category}
                </div>
                <div className="mt-1 space-y-1">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-800/60 group-hover:bg-slate-700/60 transition text-sm">
                        {item.icon}
                      </div>
                      <span className="flex-1 font-medium">{item.label}</span>
                      <span className="text-[10px] text-slate-600 font-mono group-hover:text-slate-400 transition">Jump ↵</span>
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#080c16] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">↑↓</kbd></span>
            <span>Select: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">↵</kbd></span>
          </div>
          <span>Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Ctrl+K</kbd></span>
        </div>
        
      </div>
    </div>
  );
};

export default CommandPalette;

import { useState } from "react";
import toast from "react-hot-toast";
import { 
  FaNpm, 
  FaCopy, 
  FaCheck, 
  FaExternalLinkAlt, 
  FaBoxOpen, 
  FaHeart 
} from "react-icons/fa";

const NpmSpotlight = () => {
  const [copied, setCopied] = useState(false);
  const [activeSpinner, setActiveSpinner] = useState("orbit");

  const copyCommand = () => {
    navigator.clipboard.writeText("npm i cb-react-smart-loader");
    setCopied(true);
    toast.success("Copied: npm i cb-react-smart-loader");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="NpmPackage"
      className="relative py-24 bg-[#060913] text-slate-200 overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute inset-0 dot-matrix pointer-events-none opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider">
            <FaNpm className="text-sm" />
            <span>Open Source Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Published <span className="text-heading-gradient">NPM Library</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Shipped and maintained on the global Node Package Manager registry for the worldwide React community.
          </p>
        </div>

        {/* Feature Spotlight Card */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl overflow-hidden relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details & Install Command */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 text-2xl">
                  <FaBoxOpen />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      cb-react-smart-loader
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-red-500/20 text-red-300 border border-red-500/30">
                      v1.x.x
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    React UI Component Library
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A lightweight, highly customizable React loader library engineered to eliminate clunky spinner assets. 
                Built with zero external CSS dependencies, customizable speed, size parameters, and smooth GPU-accelerated CSS animations.
              </p>

              {/* Install Command Terminal Box */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Installation via CLI
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-700 font-mono text-xs sm:text-sm text-slate-200 shadow-inner">
                  <div className="flex items-center gap-2 overflow-x-auto">
                    <span className="text-emerald-400 select-none">$</span>
                    <span className="text-sky-300">npm i cb-react-smart-loader</span>
                  </div>
                  <button
                    onClick={copyCommand}
                    className="ml-3 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 shrink-0"
                    title="Copy command"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-emerald-400 text-xs" />
                        <span className="text-emerald-400 text-xs">Copied</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-slate-400 text-xs" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Key Features Pill List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                  ⚡ Zero Extra CSS
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                  🎯 Fully Typed
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                  🪶 Ultra Lightweight
                </div>
              </div>

              {/* NPM Direct Link Button */}
              <div className="pt-3 flex items-center gap-4">
                <a
                  href="https://www.npmjs.com/package/cb-react-smart-loader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/20 transition hover:scale-[1.02]"
                >
                  <FaNpm className="text-lg" />
                  <span>View Package on NPM</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <FaHeart className="text-rose-500 text-xs" />
                  Free & Open Source
                </span>
              </div>
            </div>

            {/* Right Column: Live Interactive Loader Preview */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">
                  Live Loader Playground
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Interactive
                </span>
              </div>

              {/* Loader Canvas */}
              <div className="h-44 flex items-center justify-center bg-[#070b14] rounded-xl border border-slate-800/80 relative overflow-hidden">
                {activeSpinner === "orbit" && (
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-2 border-sky-500/20"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-sky-400 border-t-transparent animate-spin"></div>
                    <div className="absolute inset-3 rounded-full border-2 border-emerald-400 border-b-transparent animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }}></div>
                  </div>
                )}

                {activeSpinner === "pulse" && (
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                )}

                {activeSpinner === "ring" && (
                  <div className="w-14 h-14 rounded-full border-4 border-slate-800 border-t-red-500 border-r-red-400 animate-spin"></div>
                )}
              </div>

              {/* Loader Variation Buttons */}
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setActiveSpinner("orbit")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    activeSpinner === "orbit"
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                      : "text-slate-400 hover:text-white bg-slate-800/60"
                  }`}
                >
                  Orbit Spinner
                </button>
                <button
                  onClick={() => setActiveSpinner("pulse")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    activeSpinner === "pulse"
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                      : "text-slate-400 hover:text-white bg-slate-800/60"
                  }`}
                >
                  Pulse Dots
                </button>
                <button
                  onClick={() => setActiveSpinner("ring")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    activeSpinner === "ring"
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                      : "text-slate-400 hover:text-white bg-slate-800/60"
                  }`}
                >
                  Smooth Ring
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-3 rounded-lg bg-[#060913] border border-slate-800 font-mono text-[11px] text-slate-400">
                <span className="text-purple-400">import</span> &#123; SmartLoader &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">"cb-react-smart-loader"</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NpmSpotlight;

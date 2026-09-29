import React from "react";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { FaEye, FaUsers, FaFolderOpen, FaStar, FaCodeBranch, FaFireAlt, FaTrophy } from "react-icons/fa";

const statsData = [
  { label: "Projects", value: 20 },
  { label: "LeetCode Problems", value: 180 },
  { label: "Experience (Months)", value: 12 },
  { label: "Technologies", value: 25 },
];

const goals2026 = [
  "Build production-ready applications",
  "Strengthen React & TypeScript",
  "Improve DSA & problem solving",
  "Learn Python deeply",
  "Explore Generative AI",
  "Build AI-powered applications",
  "Contribute to Open Source",
  "Improve system design fundamentals",
  "Keep learning and building 🚀"
];

const topLanguages = [
  { name: "React.js / Next.js", percent: 95, color: "#61dafb" },
  { name: "JavaScript / TS", percent: 90, color: "#f7df1e" },
  { name: "Node.js / Express", percent: 85, color: "#3c873a" },
  { name: "MongoDB / SQL", percent: 80, color: "#47A248" },
];

const Stats = () => {
  return (
    <div className="w-full">
      {/* ===== Existing Number Stats ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl 
            cyber-glass border-white/5 
            shadow-[0_0_20px_rgba(34,211,238,0.1)] 
            hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:border-pink-500/30
            hover:-translate-y-2 transition duration-300 text-center flex flex-col justify-center items-center"
          >
            <h3 className="text-3xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
              <CountUp end={item.value} duration={2} />+
            </h3>
            <p className="text-gray-400 mt-3 text-sm tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* ===== GitHub & Code Analytics ===== */}
      <div className="space-y-12">
        <div className="text-center h-24 flex flex-col items-center justify-center">
          <TypeAnimation
            sequence={[
              "Code Analytics",
              2000,
              "Developer Statistics",
              2000,
              "GitHub Performance",
              2000,
              "Open Source Contributions",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2 h-6"
          />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white flex items-center justify-center gap-4">
            <span className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            GitHub <span className="neon-text">Stats</span>
            <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
          </h2>
        </div>

        {/* NATIVE GITHUB DASHBOARD IN REACT */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* GitHub Overview Card */}
          <div className="cyber-glass p-8 rounded-2xl flex flex-col justify-center border-t-2 border-t-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub Overview
            </h3>
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-[#080214]/80 p-4 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Views</p>
                  <FaEye className="text-pink-400 text-lg opacity-80" />
                </div>
                <p className="text-2xl font-display font-bold text-white"><CountUp end={2278} duration={2} separator="," /></p>
              </div>

              <div className="bg-[#080214]/80 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Followers</p>
                  <FaUsers className="text-cyan-400 text-lg opacity-80" />
                </div>
                <p className="text-2xl font-display font-bold text-white"><CountUp end={16} duration={2} /></p>
              </div>

              <div className="bg-[#080214]/80 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Repos</p>
                  <FaFolderOpen className="text-purple-400 text-lg opacity-80" />
                </div>
                <p className="text-2xl font-display font-bold text-white"><CountUp end={140} duration={2} /></p>
              </div>

              <div className="bg-[#080214]/80 p-4 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-all flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Stars</p>
                  <FaStar className="text-yellow-400 text-lg opacity-80" />
                </div>
                <p className="text-2xl font-display font-bold text-white"><CountUp end={172} duration={2} /></p>
              </div>

            </div>
          </div>

          {/* GitHub Streak Card */}
          <div className="cyber-glass p-8 rounded-2xl flex flex-col justify-center border-t-2 border-t-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-purple-400">🔥</span> Streak Stats
            </h3>
            
            <div className="flex justify-between items-end mb-6 bg-gradient-to-br from-[#080214] to-purple-900/20 p-6 rounded-xl border border-purple-500/20 relative overflow-hidden">
              <div className="absolute -right-2 -top-2 text-7xl opacity-10 text-purple-500">🔥</div>
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-center w-full mb-2">
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Total Commits</p>
                  <FaCodeBranch className="text-purple-400 text-lg opacity-80" />
                </div>
                <p className="text-4xl font-display font-bold text-white">1,357</p>
                <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">Feb 11, 2024 - Present</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-[#080214]/80 p-4 rounded-xl border border-white/5 hover:border-pink-500/30 transition-all flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Current</p>
                  <FaFireAlt className="text-pink-400 text-lg opacity-80" />
                </div>
                <p className="text-xl font-display font-bold text-white">0 <span className="text-xs text-gray-500 font-normal">days</span></p>
              </div>

              <div className="bg-[#080214]/80 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Longest</p>
                  <FaTrophy className="text-cyan-400 text-lg opacity-80" />
                </div>
                <p className="text-xl font-display font-bold text-white">24 <span className="text-xs text-gray-500 font-normal">days</span></p>
              </div>

            </div>
          </div>

          {/* Top Languages Card */}
          <div className="cyber-glass p-8 rounded-2xl flex flex-col justify-center border-t-2 border-t-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-pink-400">⚡</span> Top Languages
            </h3>
            <div className="space-y-4">
              {topLanguages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 font-medium">{lang.name}</span>
                    <span className="text-gray-400">{lang.percent}%</span>
                  </div>
                  <div className="w-full bg-[#080214] rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Contribution Profile Cards */}
        <div className="cyber-glass p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center justify-center border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
          <img 
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=uttam9721&theme=github_dark" 
            alt="GitHub Profile Details" 
            className="w-full md:w-2/3 object-contain rounded-xl shadow-lg border border-white/10" 
          />
          <img 
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=uttam9721&theme=github_dark" 
            alt="GitHub Stats Details" 
            className="w-full md:w-1/3 object-contain rounded-xl shadow-lg border border-white/10" 
          />
        </div>

        {/* Contribution Snake (Game) */}
        <div className="cyber-glass p-8 rounded-2xl flex flex-col items-center justify-center border border-white/5 hover:border-cyan-500/30 transition-all duration-300 overflow-x-auto hide-scrollbar bg-[#080214]/50 min-h-[250px]">
          <h3 className="text-xl font-display font-bold text-gray-300 mb-6 uppercase tracking-widest text-center">Commit Activity Game</h3>
          <img 
            src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg" 
            alt="GitHub Contribution Snake" 
            className="min-w-[600px] w-full max-w-[900px] object-contain filter brightness-110" 
          />
        </div>

        {/* 2026 Goals */}
        <div className="mt-20 cyber-glass p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-purple-500/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none"></div>
          <h3 className="text-3xl font-display font-bold text-white mb-10 flex items-center gap-4">
            🎯 <span className="neon-text">2026 Goals</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
            {goals2026.map((goal, i) => (
              <div key={i} className="flex items-center gap-4 group/item">
                <div className="w-7 h-7 shrink-0 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm border border-cyan-500/30 group-hover/item:bg-cyan-400 group-hover/item:text-[#080214] group-hover/item:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all">
                  ✓
                </div>
                <span className="text-gray-300 group-hover/item:text-white transition-colors text-sm md:text-base font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
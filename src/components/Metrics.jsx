import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCodeBranch, 
  FaFire, 
  FaBrain, 
  FaTerminal 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Metrics = () => {
  const dsaTopics = [
    { name: "Arrays & Strings", count: "55+ Problems", progress: 90 },
    { name: "Two Pointers & Sliding Window", count: "30+ Problems", progress: 85 },
    { name: "Hash Maps & Sets", count: "35+ Problems", progress: 85 },
    { name: "Binary Search", count: "25+ Problems", progress: 80 },
    { name: "Trees & Binary Trees", count: "20+ Problems", progress: 75 },
    { name: "Dynamic Programming & Recursion", count: "15+ Problems", progress: 70 },
  ];

  const pinnedRepos = [
    {
      name: "cb-react-smart-loader",
      desc: "Published React npm package providing customizable, lightweight smart loaders.",
      language: "JavaScript / React",
      stars: "Open Source",
      link: "https://www.npmjs.com/package/cb-react-smart-loader",
    },
    {
      name: "petWord",
      desc: "Full-Stack MERN pet adoption web platform with JWT auth & Render deployment.",
      language: "JavaScript / MERN",
      stars: "Full Stack",
      link: "https://github.com/uttam9721/petWord",
    },
    {
      name: "flavoro",
      desc: "Food ordering application featuring Redux Toolkit state slices and cart system.",
      language: "React.js / Redux",
      stars: "Frontend App",
      link: "https://github.com/uttam9721/flavoro",
    },
    {
      name: "DevScope",
      desc: "Developer analytics dashboard aggregating coding metrics across platforms.",
      language: "Node.js / React",
      stars: "API Aggregator",
      link: "https://github.com/uttam9721/DevScope",
    },
  ];

  return (
    <section
      id="Stats"
      className="relative py-24 bg-[#080d1a] text-slate-200 overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <FaTerminal className="text-xs" />
            <span>Verified Code Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Problem solving & <span className="text-heading-gradient">open source activity</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistent coding discipline across algorithm challenges, open-source repositories, and system design.
          </p>
        </div>

        {/* LeetCode & DSA Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* Left Column: LeetCode Profile Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-2xl">
                  <SiLeetcode />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    LeetCode Profile
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    @uttammaurya01
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <FaFire className="text-amber-500" />
                Active
              </span>
            </div>

            {/* Total Solved Badge */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Total Solved Problems
                </p>
                <div className="text-3xl font-display font-bold text-white mt-1">
                  180+ <span className="text-xs font-mono text-amber-400 font-normal">Problems</span>
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg font-mono">
                180+
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Consistently sharpening algorithmic logic and computational efficiency with a focus on optimal space & time complexities (Big-O analysis).
            </p>

            <a
              href="https://leetcode.com/u/uttammaurya01/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition"
            >
              <span>View LeetCode Public Profile</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          {/* Right Column: Topic Breakdown Bars */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
              <FaBrain className="text-sky-400" />
              <span>Core Data Structures & Algorithmic Topics</span>
            </h4>

            <div className="space-y-3.5">
              {dsaTopics.map((topic, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-slate-300">{topic.name}</span>
                    <span className="font-mono text-amber-400 text-[11px]">{topic.count}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 to-amber-500 transition-all duration-1000"
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Repositories & Open Source Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xl">
                <FaGithub />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  GitHub Repositories & Highlights
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Explore active codebases on github.com/uttam9721
                </p>
              </div>
            </div>

            <a
              href="https://github.com/uttam9721"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
            >
              <span>GitHub Profile</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pinnedRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <FaCodeBranch className="text-sky-400 text-sm" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {repo.stars}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {repo.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{repo.language}</span>
                  <span className="group-hover:text-slate-300 transition">View ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;

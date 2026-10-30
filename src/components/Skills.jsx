import React, { useState } from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiRedux, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs, 
  SiExpress, 
  SiNestjs,
  SiSocketdotio, 
  SiMongodb, 
  SiPostgresql,
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiPostman, 
  SiVite, 
  SiVercel, 
  SiNpm 
} from "react-icons/si";
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "frontend",
      title: "Frontend & Client Architecture",
      icon: <FaLaptopCode className="text-sky-400" />,
      description: "Building responsive, accessible, and fast user interfaces with modern React ecosystem.",
      skills: [
        { name: "React.js", level: "Advanced", icon: <SiReact className="text-sky-400" />, note: "Hooks, Context, Custom Hooks, Performance" },
        { name: "TypeScript", level: "Proficient", icon: <SiTypescript className="text-blue-400" />, note: "Strict Typing, Generics, Interfaces" },
        { name: "Next.js", level: "Proficient", icon: <SiNextdotjs className="text-white" />, note: "App Router, SSR, Server Components" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: <SiJavascript className="text-yellow-400" />, note: "Async/Await, Closures, Event Loop" },
        { name: "Redux Toolkit", level: "Proficient", icon: <SiRedux className="text-purple-400" />, note: "Slices, Async Thunks, Store Architecture" },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-cyan-400" />, note: "Custom Design Tokens, Responsive, Dark Mode" },
        { name: "HTML5 & CSS3", level: "Advanced", icon: <SiHtml5 className="text-orange-500" />, note: "Semantic Structure, Grid, Flexbox, Animations" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Real-Time Services",
      icon: <FaServer className="text-emerald-400" />,
      description: "Architecting secure RESTful endpoints, auth flows, and real-time WebSocket communication.",
      skills: [
        { name: "Node.js", level: "Advanced", icon: <SiNodedotjs className="text-emerald-500" />, note: "Event-driven architecture, Streams, REST" },
        { name: "NestJS", level: "Proficient", icon: <SiNestjs className="text-red-500" />, note: "Controllers, Services, Modules, Dependency Injection" },
        { name: "Express.js", level: "Advanced", icon: <SiExpress className="text-slate-300" />, note: "Custom Middleware, Route Controllers, Error Handlers" },
        { name: "Socket.io", level: "Proficient", icon: <SiSocketdotio className="text-white" />, note: "Real-time bidirectional events, chat, live sync" },
        { name: "RESTful APIs", level: "Advanced", icon: <FaServer className="text-sky-400" />, note: "Resource modeling, HTTP verbs, status codes, CORS" },
        { name: "JWT & RBAC", level: "Proficient", icon: <FaServer className="text-amber-400" />, note: "Token authentication, role-based route guards" },
      ],
    },
    {
      id: "database",
      title: "Databases & Storage Modeling",
      icon: <FaDatabase className="text-purple-400" />,
      description: "Designing schema structures, indexing query patterns, and managing application state persistence.",
      skills: [
        { name: "PostgreSQL", level: "Proficient", icon: <SiPostgresql className="text-blue-400" />, note: "Relational Schemas, Constraints, Indexes, Foreign Keys" },
        { name: "MongoDB", level: "Advanced", icon: <SiMongodb className="text-emerald-400" />, note: "Aggregation pipeline, Schema validation, Atlas" },
        { name: "Mongoose ODM", level: "Advanced", icon: <SiMongodb className="text-emerald-300" />, note: "Data modeling, Hooks, Population, Indexing" },
        { name: "SQL / MySQL", level: "Proficient", icon: <SiMysql className="text-sky-400" />, note: "Relational queries, Joins, Table normalization" },
      ],
    },
    {
      id: "devops",
      title: "Tooling, DevOps & Workflows",
      icon: <FaTools className="text-amber-400" />,
      description: "Production packaging, version control branching, automated deployments, and API validation.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", icon: <SiGithub className="text-slate-200" />, note: "Branching strategies, PR reviews, merge management" },
        { name: "Docker", level: "Intermediate", icon: <SiDocker className="text-sky-400" />, note: "Containerization, Dockerfiles, dev environments" },
        { name: "Postman", level: "Advanced", icon: <SiPostman className="text-orange-400" />, note: "API collections, automated testing, mock servers" },
        { name: "NPM Publishing", level: "Proficient", icon: <SiNpm className="text-red-500" />, note: "Package bundling, semantic versioning, readme docs" },
        { name: "Vite & Vercel", level: "Advanced", icon: <SiVite className="text-purple-400" />, note: "Lightning builds, instant preview deployments" },
      ],
    },
  ];

  const displayedCategories = activeCategory === "all" 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <section
      id="Skills"
      className="relative py-24 bg-[#060913] text-slate-200 overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute inset-0 dot-matrix pointer-events-none opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <FaTools className="text-xs" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Architected for <span className="text-heading-gradient">performance & scale</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies and engineering tools I utilize daily to engineer resilient full-stack systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeCategory === "all"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              All Domains
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeCategory === "frontend"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory("backend")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeCategory === "backend"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Backend & APIs
            </button>
            <button
              onClick={() => setActiveCategory("database")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeCategory === "database"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setActiveCategory("devops")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeCategory === "devops"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              DevOps & Tools
            </button>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xl">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 self-start sm:self-center">
                  {cat.skills.length} Core Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl group-hover:scale-110 transition duration-200">
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700/60">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-tight mt-1 font-mono">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

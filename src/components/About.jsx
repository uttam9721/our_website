import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward, 
  FaCheckCircle, 
  FaExternalLinkAlt, 
  FaCode, 
  FaShieldAlt, 
  FaRocket 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const experiences = [
    {
      company: "I-next Web Technologies Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Apr 2026 — Present",
      location: "Chandigarh, India",
      type: "Full-Time",
      website: "https://inextwebtechnologies.com/",
      description: "Developing and maintaining ERP-based internal web applications and B2B platforms supporting 8+ enterprise modules.",
      highlights: [
        "Developed and maintained ERP web applications and B2B platforms using React.js, TypeScript, Tailwind CSS, HTML5, and CSS3.",
        "Built 15+ scalable, reusable React.js components for ERPAG (enterprise workflow platform), improving UI maintainability and reducing component re-render cycles by 25%.",
        "Optimized ERPAG dashboard modules using memoization and lazy-loaded routes, reducing initial bundle size by ~30% and improving perceived load speed.",
        "Integrated 20+ REST APIs to power interactive dashboards, user management, orders, and reports across Aspice Affair B2B solutions, collaborating closely on Node.js/Express endpoint contracts.",
        "Collaborated with a cross-functional team of 5+ backend developers to ensure seamless API communication and consistent data rendering across 10+ modules."
      ],
      skills: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "TanStack Query", "Memoization"],
    },
    {
      company: "Amzsoft Innovexa Pvt. Ltd.",
      role: "Full Stack Web Developer",
      period: "Jan 2025 — Mar 2026",
      location: "Lucknow, UP",
      type: "Full-Time",
      website: "https://www.amzsoftinnovexa.com/",
      description: "Converted from intern to full-time Full Stack Web Developer, taking ownership of end-to-end feature delivery across frontend and backend.",
      highlights: [
        "Converted from intern to full-time Full Stack Web Developer, taking ownership of end-to-end feature delivery across frontend and backend.",
        "Built and maintained scalable web applications using React.js on the frontend and Node.js/Express on the backend, integrating REST APIs with database-backed services.",
        "Extended the Learning Management System (LMS) with new full-stack features, role-based routing, and an interactive course dashboard used across 4 user roles."
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      company: "Amzsoft Innovexa Pvt. Ltd.",
      role: "Web Development Intern",
      period: "Jul 2024 — Dec 2024",
      location: "Lucknow, UP",
      type: "Internship",
      website: "https://www.amzsoftinnovexa.com/",
      description: "Rigorous 6-month web development internship building scalable client components and LMS features.",
      highlights: [
        "Built a scalable Learning Management System (LMS) frontend using React.js, implementing JWT authentication, role-based routing across 4 user roles, and an interactive course dashboard.",
        "Collaborated in an Agile/Scrum team of 6, participating in 2-week sprint planning, daily standups, and 50+ Git-based code reviews.",
        "Built 10+ reusable components using component-driven architecture and responsive design, integrated with REST APIs for dynamic content."
      ],
      skills: ["React.js", "JavaScript", "JWT Auth", "Git & GitHub", "Agile/Scrum"],
    },
  ];

  const milestones = [
    {
      icon: <SiLeetcode className="text-amber-500" />,
      title: "180+ LeetCode DSA Solved",
      desc: "Solved 180+ algorithmic problems on LeetCode, strengthening DSA proficiency across arrays, trees, and dynamic programming.",
      link: "https://leetcode.com/u/uttammaurya01/",
    },
    {
      icon: <FaAward className="text-sky-400" />,
      title: "Web Development Certificate — GeeksforGeeks",
      desc: "Certified in Web Development (2024) covering full-stack architecture, backend REST APIs, and database modeling.",
      link: null,
    },
    {
      icon: <FaRocket className="text-rose-400" />,
      title: "Published NPM Package",
      desc: "Author of cb-react-smart-loader on npm registry for the global React developer ecosystem.",
      link: "https://www.npmjs.com/package/cb-react-smart-loader",
    },
    {
      icon: <FaShieldAlt className="text-emerald-400" />,
      title: "Enterprise Production Systems",
      desc: "Engineered scalable web applications across Robotics Teleoperation, FinTech, Fleet & HR Operations, B2B, and ERP modules.",
      link: null,
    },
  ];

  return (
    <section
      id="About"
      className="relative py-20 sm:py-24 bg-[#080d1a] text-slate-200 overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <FaCode className="text-xs" />
            <span>Background & Commercial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Crafting code with <span className="text-heading-gradient">purpose & precision</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineering scalable web architectures, reducing re-render overhead, and shipping reliable enterprise software.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Engineering Philosophy Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2.5">
              <FaShieldAlt className="text-sky-400 text-lg" />
              <span>Engineering Philosophy</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a Full-Stack & Frontend Developer with a B.Tech in Information Technology from 
              <strong className="text-white"> Ambalika Institute of Management and Technology, Lucknow</strong>. 
              My development focus centers on building enterprise-grade applications, optimizing component rendering lifecycles, and engineering clean REST API contracts.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-sky-300">I-next Web Technologies</strong>, I led frontend performance initiatives that cut component re-render cycles by 25% and reduced initial bundle sizes by ~30% through route-level code splitting and memoization.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-sky-400 font-mono text-xs font-bold block mb-1">01. MODULARITY</span>
                <p className="text-xs text-slate-400">Atomic, reusable components that scale across 10+ enterprise modules.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">02. PERFORMANCE</span>
                <p className="text-xs text-slate-400">Memoization, lazy routes, and ~30% bundle footprint reductions.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-purple-400 font-mono text-xs font-bold block mb-1">03. RELIABILITY</span>
                <p className="text-xs text-slate-400">Strict TypeScript typing, RBAC auth, and resilient API contracts.</p>
              </div>
            </div>
          </div>

          {/* Education Card (Exact Details from CV) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2.5">
                  <FaGraduationCap className="text-emerald-400 text-xl" />
                  <span>Education</span>
                </h3>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  2021 – 2025
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-semibold text-white">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-sm text-sky-400 font-medium">
                  Information Technology
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Ambalika Institute of Management and Technology
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Lucknow, Uttar Pradesh
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Rigorous academic curriculum covering Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Database Management Systems, and Web Technologies.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-xs font-semibold text-slate-200">Degree Status</p>
                <p className="text-[11px] text-slate-400 font-mono">B.Tech in Information Technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Work Experience Timeline (Exact from CV) */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <FaBriefcase className="text-base" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Work Experience
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Production software engineering roles across IT firms
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-emerald-400 font-medium text-sm">
                        {exp.company}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">
                        📍 {exp.location}
                      </span>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-slate-300 text-xs flex items-center gap-1 transition"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          <span>Website</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-center">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheckCircle className="text-sky-400 text-xs mt-1 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Milestones & Achievements Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <FaAward className="text-base" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Certifications & Achievements
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Verified achievements from official credentials
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-mono pt-2 border-t border-slate-800/80 transition"
                  >
                    <span>Verify Profile</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

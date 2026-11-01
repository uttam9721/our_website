import { useState } from "react";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaLayerGroup, 
  FaInfoCircle, 
  FaTimes, 
  FaCheckCircle, 
  FaServer, 
  FaCreditCard, 
  FaCar, 
  FaBoxes, 
  FaUsersCog,
  FaRobot
} from "react-icons/fa";

// Import real project screenshots from assets for builds with images
import billnestImg from "../assets/billnest.png";
import flavoroImg from "../assets/flavoro.png";
import dogImg from "../assets/dog.png";
import analyzerImg from "../assets/analyzer.png";
import coinImg from "../assets/coin.png";
import codeImg from "../assets/code.png";
import schoolImg from "../assets/school.png";
import clothingImg from "../assets/image.png";
import floraImg from "../assets/flora.png";
// import shopingImg from "../assets/shoping.png"; // Commented out Cart & Checkout System

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // 1. Autonomous Robot Control & Fleet Teleoperation Platform
    {
      id: "robotics-control-platform",
      title: "Autonomous Robot Teleoperation & Fleet Control Platform",
      category: "enterprise",
      subCategory: "frontend",
      badge: "Robotics & Teleoperation",
      image: null,
      iconType: "robotics",
      summary: "Mission-critical robotics control and teleoperation web platform engineered with React.js and Tailwind CSS. Implemented Auth0 authentication supporting dual login options ('Login with User' for operators & 'Login with Admin' for fleet supervisors), Auth0 Organization creation for multi-tenant enterprise isolation, and Swagger / OpenAPI integration for real-time robot command dispatch, status telemetry, and emergency controls.",
      architecture: "Modular React.js client architecture styled with Tailwind CSS, utilizing Auth0 Organizations for multi-tenant fleet isolation, role-based route guards for Admin vs User privileges, and Swagger-documented REST APIs for directional telemetry, emergency stop controls, and live device diagnostics.",
      architectureNote: "Enterprise robotics teleoperation dashboard engineered with React.js, Tailwind CSS, Auth0 Organizations (dual User/Admin roles), and Swagger OpenAPI endpoints.",
      challenges: "Configured dual-role Auth0 authentication workflows with dynamic organization tenant creation, integrated and validated Swagger/OpenAPI endpoints for real-time robotic controls, and built an ultra-responsive operator cockpit UI with zero debounce latency.",
      techStack: ["React.js", "Tailwind CSS", "Auth0 (RBAC & Orgs)", "Swagger / OpenAPI", "REST APIs", "Axios"],
      demo: "",
      github: null,
      featured: true,
    },

    // 2. Digital Payment & FinTech Platform
    {
      id: "digital-payments-platform",
      title: "Digital Payment & FinTech Platform",
      category: "enterprise",
      subCategory: "fullstack",
      badge: "FinTech Architecture",
      image: null,
      iconType: "fintech",
      summary: "Modern digital payment and financial services platform built with React (TSX), NestJS, and PostgreSQL, supporting multi-tier merchant transactions, payment gateway workflows, and real-time settlement tracking.",
      architecture: "React.tsx frontend with modular component architecture, powered by a NestJS enterprise backend, PostgreSQL relational database, and secure payment processing pipelines.",
      challenges: "Engineered idempotent payment transaction execution, resilient webhook consumption for payment gateways, high-performance PostgreSQL query optimization, and PCI-DSS aligned security practices.",
      techStack: ["React.tsx", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "REST APIs"],
      demo: "",
      github: null,
      featured: true,
    },

    // 2. HR & Fleet Management Platform (Cars, Drivers & Car Inspection)
    {
      id: "fleet-hr-management",
      title: "HR & Fleet Operations Platform",
      category: "enterprise",
      subCategory: "frontend",
      badge: "Fleet & HR Operations",
      image: null,
      iconType: "fleet",
      summary: "Enterprise HR and fleet management web application built to coordinate drivers, vehicle allocations, shift rosters, and an end-to-end digital Car Inspection workflow with damage documentation and condition reports.",
      architecture: "Modular React.tsx architecture with robust state machines for vehicle inspection forms, real-time driver allocation views, and secure RESTful API integrations.",
      challenges: "Architected a complex multi-stage vehicle inspection wizard with photo attachments, offline checklist validation, dynamic driver shift scheduling, and status transition audit logs.",
      techStack: ["React.tsx", "TypeScript", "Tailwind CSS", "REST APIs", "Axios", "Form State Machine"],
      demo: "",
      github: null,
      featured: true,
    },

    // 3. Enterprise B2B Commerce Platform
    {
      id: "enterprise-b2b-platform",
      title: "Enterprise B2B Commerce Platform",
      category: "enterprise",
      subCategory: "fullstack",
      badge: "B2B Wholesale Platform",
      image: null,
      iconType: "b2b",
      summary: "Scalable enterprise B2B platform streamlining wholesale buyer and vendor interactions, bulk ordering systems, vendor quotation negotiation, and automated invoice tracking.",
      architecture: "React.js frontend paired with Node.js/Express backend APIs, powering interactive dashboards, order management, and reporting workflows.",
      challenges: "Optimized UI performance using lazy-loaded routes and memoization, ensuring smooth cross-browser compatibility and consistent data rendering across 10+ modules.",
      techStack: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs", "Memoization"],
      demo: "",
      github: null,
      featured: true,
    },

    // 4. Enterprise CRM & Pipeline Management System
    {
      id: "enterprise-crm",
      title: "Enterprise CRM & Pipeline Management System",
      category: "enterprise",
      subCategory: "frontend",
      badge: "CRM & Pipeline Platform",
      image: null,
      iconType: "crm",
      summary: "Custom Customer Relationship Management platform built to track customer lifecycles, sales pipeline stages, interaction histories, deal forecasting, and agent performance metrics.",
      architecture: "React.tsx frontend engineered with customizable pipeline stage boards, multi-criteria lead filtering, activity audit timelines, and secure API communication.",
      challenges: "Built interactive drag-and-drop lead stage movement with optimistic UI updates, complex composite search filters, and real-time deal stage transitions.",
      techStack: ["React.tsx", "TypeScript", "Tailwind CSS", "REST APIs", "Axios"],
      demo: "",
      github: null,
      featured: false,
    },

    // 5. BillNest — Invoicing & Billing Management
    {
      id: "billnest",
      title: "BillNest — Billing & Invoice Platform",
      category: "enterprise",
      subCategory: "frontend",
      badge: "Commercial Web App",
      image: billnestImg,
      summary: "Modern invoicing and billing management system built with high-velocity data entry, calculation engines, and clean responsive UI.",
      architecture: "React.js + Tailwind CSS with modular component composition, responsive layout grids, and client-side calculation caching.",
      challenges: "Engineered seamless invoice item line additions, real-time tax/discount computation, and print-ready PDF layouts without layout shifts.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      demo: "https://billnest.modexa.in/",
      github: "https://github.com/uttam9721",
      featured: true,
    },

    // 6. Qalb — Dating & Matrimonial Real-Time Platform
    {
      id: "qalb",
      title: "Qalb — Real-Time Dating & Matrimonial Web App",
      category: "fullstack",
      subCategory: "fullstack",
      badge: "Real-Time Full-Stack",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      summary: "Built 100% of the frontend from scratch using React.js, TypeScript, and Tailwind CSS with a scalable, component-based, mobile-first architecture. Featuring real-time chat and meetings.",
      architecture: "React.js frontend with Firebase Authentication (email/password + mobile OTP), real-time chat via Socket.io, and Context API global state across 5+ feature modules.",
      challenges: "Integrated 30+ REST API endpoints for profiles, matches, chats, and meetings, securing 100% of user sessions from onboarding.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Socket.io", "Firebase", "REST APIs"],
      demo: "https://qalbsoulmate.com",
      github: "https://github.com/uttam9721",
      featured: true,
    },

    // 7. Gokul Sweets / Flavoro — Food Ordering Platform
    {
      id: "flavoro",
      title: "Gokul Sweets / Flavoro — Food Ordering Platform",
      category: "frontend",
      subCategory: "frontend",
      badge: "State Management (Redux)",
      image: flavoroImg,
      summary: "Dynamic food ordering web application with category filtering, cart state persistence, search indexing, and seamless order checkout flow.",
      architecture: "Engineered using Redux Toolkit slices for centralized cart, filter, and item states. High-performance re-render isolation.",
      challenges: "Designed instant sub-category filtering without lag, dynamic quantity mutations, and responsive cart drawers for mobile viewports.",
      techStack: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vercel"],
      demo: "https://flavoro-amber.vercel.app/",
      github: "https://github.com/uttam9721/flavoro",
      featured: true,
    },

    // 8. PetWorld — Pet Adoption MERN Platform
    {
      id: "petworld",
      title: "PetWorld — Pet Adoption Full-Stack Platform",
      category: "fullstack",
      subCategory: "fullstack",
      badge: "MERN Stack System",
      image: dogImg,
      summary: "End-to-end pet adoption platform with user authentication, protected routes, adoption application flows, and administrative CRUD panel.",
      architecture: "Full MERN stack. Express.js REST API with JWT verification, MongoDB document store, and React client deployed across Vercel & Render.",
      challenges: "Implemented secure token refresh in HTTP headers, role-based admin endpoints for approving pet listings, and schema validation with Mongoose.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      demo: "https://pet-word.vercel.app/",
      github: "https://github.com/uttam9721/petWord",
      featured: true,
    },

    // 9. DevScope — Developer Analytics Dashboard
    {
      id: "devscope",
      title: "DevScope — Developer Analytics Dashboard",
      category: "fullstack",
      subCategory: "fullstack",
      badge: "Analytics & APIs",
      image: analyzerImg,
      summary: "Centralized developer dashboard aggregating coding statistics from LeetCode, GitHub, HackerRank, and LinkedIn into visual charts.",
      architecture: "Asynchronous API aggregator querying multiple developer platforms, caching response payloads, and rendering SVG data charts.",
      challenges: "Handled rate limiting from external developer APIs, normalized disparate profile schemas, and built responsive data visualization cards.",
      techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
      demo: "",
      github: "https://github.com/uttam9721/DevScope",
      featured: false,
    },

    // 10. CodeView — Code Editor
    {
      id: "codeview",
      title: "CodeView — Web Code Editor & Runner",
      category: "tools",
      subCategory: "tools",
      badge: "Developer Tool",
      image: codeImg,
      summary: "In-browser code editor featuring multi-language syntax highlighting, themes, live output console, and code sharing capabilities.",
      architecture: "Integrated CodeMirror editor engine into React lifecycle, with custom theme bindings, syntax linters, and state sync.",
      challenges: "Managed keyboard shortcuts, automated bracket closures, and maintained smooth 60fps typing without debounce lag.",
      techStack: ["React.js", "Tailwind CSS", "CodeMirror", "Node.js"],
      demo: "",
      github: "https://github.com/uttam9721/CodeView_collegeProject",
      featured: false,
    },

    // 11. CryptoPlace — Live Crypto Market Tracker
    {
      id: "cryptoplace",
      title: "CryptoPlace — Live Crypto Market Tracker",
      category: "frontend",
      subCategory: "frontend",
      badge: "Financial Data UI",
      image: coinImg,
      summary: "Real-time cryptocurrency tracking platform showing market capitalizations, 24-hour volume graphs, currency conversions, and price alerts.",
      architecture: "Consumes cryptocurrency ticker APIs with polling intervals and renders dynamic Chart.js time-series graphs.",
      challenges: "Engineered smooth chart animations on frequent tick updates without re-mounting canvas elements.",
      techStack: ["React.js", "Tailwind CSS", "Chart.js", "REST APIs", "Vercel"],
      demo: "https://coin-weld-zeta.vercel.app/",
      github: "https://github.com/uttam9721",
      featured: false,
    },

    // 12. DPGIC — Academic Portal
    {
      id: "dpgic",
      title: "DPGIC — Academic Institutional Portal",
      category: "frontend",
      subCategory: "frontend",
      badge: "Institutional Portal",
      image: schoolImg,
      summary: "Comprehensive school web portal with academic notices, admissions guidelines, event galleries, and faculty directory.",
      architecture: "Component-driven React architecture optimized for fast mobile load times on variable 4G networks.",
      challenges: "Structured accessible navigation for non-tech-savvy parents and built image lightbox galleries with zero bundle overhead.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      demo: "https://dpgic.vercel.app/",
      github: "https://github.com/uttam9721",
      featured: false,
    },

    // 13. RudraStyles — Fashion Store
    {
      id: "rudrastyles",
      title: "RudraStyles — E-Commerce Apparel Catalog",
      category: "frontend",
      subCategory: "frontend",
      badge: "E-Commerce UI",
      image: clothingImg,
      summary: "Fashion apparel showcase featuring responsive grid collections, product filters, visual image zoom, and cart preview.",
      architecture: "Modular UI components with micro-animations for clothing collections, hover zoom previews, and cart drawer interaction.",
      challenges: "Optimized high-resolution product imagery to maintain sub-1s initial page load time.",
      techStack: ["React.js", "Tailwind CSS", "Vercel"],
      demo: "https://rudraStyles.vercel.app/",
      github: "https://github.com/uttam9721/rudraStyles",
      featured: false,
    },

    // 14. FloraVision — Botanical Showcase
    {
      id: "floravision",
      title: "FloraVision — Botanical Showcase",
      category: "frontend",
      subCategory: "frontend",
      badge: "E-Commerce UI",
      image: floraImg,
      summary: "Clean botanical e-commerce platform designed with micro-interactions, category tabs, and smooth layout transitions.",
      architecture: "Lightweight React application highlighting minimalistic design principles and responsive flexbox layouts.",
      challenges: "Crafted subtle glassmorphism cards and clean responsive design without external heavy UI libraries.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      demo: "https://floravision-pied.vercel.app/",
      github: "https://github.com/uttam9721",
      featured: false,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "enterprise") return p.category === "enterprise";
    if (activeFilter === "fullstack") return p.category === "fullstack" || p.subCategory === "fullstack";
    if (activeFilter === "frontend") return p.category === "frontend" || p.subCategory === "frontend";
    if (activeFilter === "tools") return p.category === "tools";
    return true;
  });

  const getEnterpriseIcon = (type) => {
    switch (type) {
      case "robotics":
        return <FaRobot className="text-cyan-400" />;
      case "fintech":
        return <FaCreditCard className="text-emerald-400" />;
      case "fleet":
        return <FaCar className="text-sky-400" />;
      case "b2b":
        return <FaBoxes className="text-purple-400" />;
      case "crm":
        return <FaUsersCog className="text-amber-400" />;
      default:
        return <FaServer className="text-sky-400" />;
    }
  };

  return (
    <section
      id="Projects"
      className="relative py-24 bg-[#080d1a] text-slate-200 overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-30"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
            <FaLayerGroup className="text-xs" />
            <span>Featured Systems & Builds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Shipped systems & <span className="text-heading-gradient">web applications</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Full-stack platforms, scalable web architectures, and client interfaces engineered with modern frameworks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeFilter === "all"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("enterprise")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeFilter === "enterprise"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Enterprise Platforms
            </button>
            <button
              onClick={() => setActiveFilter("fullstack")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeFilter === "fullstack"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Full-Stack (MERN / Nest)
            </button>
            <button
              onClick={() => setActiveFilter("frontend")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeFilter === "frontend"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Frontend Applications
            </button>
            <button
              onClick={() => setActiveFilter("tools")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeFilter === "tools"
                  ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              Tools & Editors
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1.5 shadow-lg shadow-black/40"
            >
              {/* Project Header: Screenshot OR Architecture Banner */}
              {project.image ? (
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#0a0f1d]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/40 to-transparent"></div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-slate-900/90 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                /* Clean Architecture Banner */
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-[#0c1527] via-[#09101d] to-[#060913] p-5 flex flex-col justify-between border-b border-slate-800/80">
                  <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>
                  
                  {/* Top Bar of Architecture Card */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xl shadow-inner">
                      {getEnterpriseIcon(project.iconType)}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-sky-500/10 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Bottom details of Architecture Card */}
                  <div className="relative z-10">
                    <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Production Web Architecture
                    </div>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-sky-300 transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-medium py-1 px-2 rounded-lg hover:bg-sky-500/10 transition"
                  >
                    <FaInfoCircle className="text-xs" />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                        title="View Source Code on GitHub"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/30 transition"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 py-1.5 px-2">
                        Production Architecture
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-2xl bg-[#0c1220] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#080d19] border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block">
                  Project Deep Dive
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              {/* Project Snapshot Header */}
              {selectedProject.image ? (
                <div className="rounded-xl overflow-hidden border border-slate-800 h-48 bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden border border-slate-800 p-6 bg-gradient-to-br from-[#0c1527] to-[#070b14] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-500/10 border border-sky-500/30 text-sky-400">
                      {selectedProject.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active Production System
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    {selectedProject.architectureNote || "Scalable architecture engineered with strict TypeScript typing, modular services, and high-performance database indexing."}
                  </p>
                </div>
              )}

              {/* Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Overview & Purpose
                </h4>
                <p className="leading-relaxed text-slate-300 text-sm">
                  {selectedProject.summary}
                </p>
              </div>

              {/* System Architecture */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
                  <FaServer className="text-xs" />
                  <span>Architecture & Stack</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Engineering Challenges Solved */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                  <FaCheckCircle className="text-xs" />
                  <span>Technical Challenges Overcome</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Tech Stack List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-3.5 bg-[#080d19] border-t border-slate-800 flex items-center justify-end gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 transition flex items-center gap-2"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              )}
              {selectedProject.demo ? (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-md shadow-sky-500/20 transition flex items-center gap-2"
                >
                  <span>Open Live Demo</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500 px-3 py-2">
                  Production Architecture
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
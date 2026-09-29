import { useState } from "react";
// Import placeholder images or real images
import Clothing from "../assets/image.png";
import shoping from "../assets/shoping.png";  
import port from "../assets/portfolio.png";
import school from "../assets/school.png";
import food from "../assets/food.png";
import flavoro from "../assets/flavoro.png";
import analyzer from "../assets/analyzer.png";
import coin from "../assets/coin.png";
import flora from "../assets/flora.png";
import shop from "../assets/myShop.png";
import code from "../assets/code.png";
import dog from "../assets/dog.png";
import UiSchool from "../assets/the.png";

function PortFolio() {
  const [activeTab, setActiveTab] = useState("all");

  const cardItem = [
    {
      id: 101,
      name: "Qalb — Dating & Matrimonial Platform",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      description: "A modern dating and matrimonial platform focused on meaningful connections, featuring real-time messaging, meeting functionality, and multi-step profiles.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Socket.io", "Axios"],
      link: "https://github.com/uttam9721",
      demo: "",
      featured: true,
    },
    {
      id: 102,
      name: "Digital Payment Platform",
      category: "mern",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      description: "A modern digital payment and financial services platform designed with a responsive interface, dashboard analytics, and business-oriented workflows.",
      techStack: ["React.js", "TypeScript", "Nest.js", "PostgreSQL", "REST API"],
      link: "https://github.com/uttam9721",
      demo: "",
      featured: true,
    },
    {
      id: 103,
      name: "Enterprise ERP System",
      category: "mern",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "An enterprise resource planning system designed to manage business operations, workflows, interactive dashboards, and organizational data securely.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      link: "https://github.com/uttam9721",
      demo: "",
      featured: true,
    },
    {
      id: 104,
      name: "HR Management System",
      category: "mern",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      description: "A Human Resource Management System streamlining employee tracking, department roles, attendance, leave management, and RBAC authentication.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      link: "https://github.com/uttam9721",
      demo: "",
      featured: true,
    },
    {
      id: 105,
      name: "Learning Management System",
      category: "mern",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      description: "A complete LMS platform for managing courses, students, educational content, with Stripe payment integration and secure Clerk authentication.",
      techStack: ["React.js", "Node.js", "MongoDB", "Stripe", "Clerk"],
      link: "https://github.com/uttam9721",
      demo: "",
      featured: true,
    },
    {
      id: 106,
      name: "B2B Business Platform",
      category: "mern",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80",
      description: "A scalable business-focused web application designed to streamline B2B operations, communication, and workflows with optimized frontend/backend.",
      techStack: ["React.js", "TypeScript", "Node.js", "MongoDB", "REST API"],
      link: "https://github.com/uttam9721",
      demo: "",
      featured: true,
    },
    {
      id: 18,
      name: "BillNest — Billing Management",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      description: "Developed a modern and responsive billing management website with a clean UI, intuitive navigation, and user-friendly interface.",
      techStack: ["React.js", "Tailwind CSS"],
      link: null,
      demo: "https://billnest.modexa.in/",
      featured: false,
    },
    {
      id: 0,
      name: "RudraStyles — Clothing Brand",
      category: "frontend",
      image: Clothing,
      description: "Modern clothing brand e-commerce website with product showcase, responsive UI, custom design sections.",
      techStack: ["React.js", "Tailwind", "Vercel"],
      link: "https://github.com/uttam9721/rudraStyles",
      demo: "https://rudraStyles.vercel.app/",
      featured: false,
    },
    {
      id: 10,
      name: "DPGIC — Modern School Website",
      category: "frontend",
      image: school,
      description: "Developed a modern and responsive school website showcasing academic information, admissions details, events, and announcements with a clean UI and smooth user experience.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      link: "https://dpgic.vercel.app/",
      demo: "https://dpgic.vercel.app/",
      featured: false,
    },
    {
      id: 13,
      name: "Frontend Job Portal — Job Listing UI",
      category: "frontend",
      image: food,
      description: "Designed a modern job listing platform with responsive UI, job filtering, and clean user experience for browsing frontend job opportunities.",
      techStack: ["React.js", "CSS", "JavaScript", "Vercel"],
      link: "https://github.com/uttam9721/Frontend_job",
      demo: "https://frontend-job-six.vercel.app/",
      featured: false,
    },
    {
      id: 14,
      name: "E-Commerce Cart & Payment System",
      category: "frontend",
      image: shoping,
      description: "Developed a responsive e-commerce cart and payment system with product listing, add-to-cart functionality, quantity management, and dynamic cart updates.",
      techStack: ["React.js", "Bootstrap", "JavaScript", "Vercel"],
      link: "https://github.com/uttam9721/payment",
      demo: "https://payment-liard-two.vercel.app/",
      featured: false,
    },
    {
      id: 15,
      name: "Gokul Sweets — Food Ordering Web App",
      category: "frontend",
      image: flavoro,
      description: "Developed a responsive food ordering web application with product listing, category filtering, cart management, and seamless user experience.",
      techStack: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vercel"],
      link: "https://github.com/uttam9721/flavoro",
      demo: "https://flavoro-amber.vercel.app/",
      featured: false,
    },
    {
      id: 17,
      name: "DevScope — Developer Analytics Dashboard",
      category: "mern",
      image: analyzer,
      description: "A full-stack developer analytics dashboard that fetches and visualizes coding profiles from platforms like LeetCode, GitHub, HackerRank, and LinkedIn.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      link: "https://github.com/uttam9721/DevScope",
      demo: "",
      featured: false,
    },
    {
      id: 121,
      name: "TheUiSchool — Online Learning Platform",
      category: "frontend",
      image: UiSchool,
      description: "Developed a modern e-learning platform featuring course exploration, learning resources, quizzes, AI study assistant, and community discussions.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      link: "https://github.com/uttam9721/learnify",
      demo: "https://learnify-one-jet.vercel.app/",
      featured: false,
    },
    {
      id: 122,
      name: "Food Ordering App",
      category: "mern",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      description: "Full-stack food delivery web app built with MERN stack, cart, payments, admin dashboard and Stripe integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/uttam9721/Restaurant",
      demo: "",
      featured: false,
    },
    {
      id: 123,
      name: "E-Learning Platform",
      category: "mern",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=800&q=80",
      description: "MERN stack e-learning app with authentication, Stripe payments and admin CRUD panel.",
      techStack: ["React", "MongoDB", "Stripe", "Clerk"],
      link: "https://github.com/uttam9721/E-Learning",
      demo: "",
      featured: false,
    },
    {
      id: 124,
      name: "CodeView - Code Editor",
      category: "mern",
      image: code,
      description: "Online code editor with syntax highlighting, autocomplete and theme switching.",
      techStack: ["React", "Tailwind", "Node", "Express", "CodeMirror"],
      link: "https://github.com/uttam9721/CodeView_collegeProject",
      demo: "",
      featured: false,
    },
    {
      id: 125,
      name: "CryptoPlace",
      category: "frontend",
      image: coin,
      description: "Cryptocurrency tracking platform with real-time charts and Firebase authentication.",
      techStack: ["React", "Chart.js", "Tailwind", "Firebase"],
      link: "https://coin-weld-zeta.vercel.app/",
      demo: "https://coin-weld-zeta.vercel.app/",
      featured: false,
    },
    {
      id: 126,
      name: "Modexa - E-Commerce",
      category: "mern",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=800&q=80",
      description: "Full-stack ecommerce platform with authentication, cart system and Stripe payment integration.",
      techStack: ["React", "Node", "MongoDB", "JWT", "Stripe"],
      link: "https://github.com/uttam9721/Modexa",
      demo: "",
      featured: false,
    },
    {
      id: 127,
      name: "FloraVision",
      category: "frontend",
      image: flora,
      description: "Modern plant shop website with elegant UI and animations.",
      techStack: ["React", "Tailwind", "JavaScript"],
      link: "https://floravision-pied.vercel.app/",
      demo: "https://floravision-pied.vercel.app/",
      featured: false,
    },
    {
      id: 128,
      name: "MyShop",
      category: "frontend",
      image: shop,
      description: "Responsive e-commerce UI with product listing and cart system.",
      techStack: ["React", "Tailwind", "JavaScript"],
      link: "https://my-shop-ten-mauve.vercel.app/",
      demo: "https://my-shop-ten-mauve.vercel.app/",
      featured: false,
    },
    {
      id: 129,
      name: "Developer Portfolio — Interactive Showcase",
      category: "frontend",
      image: port,
      description: "Built a fully responsive and visually engaging developer portfolio to highlight projects, technical skills, and professional experience.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      link: "https://github.com/uttam9721/our_website",
      demo: "https://modexa.in",
      featured: false,
    },
    {
      id: 130,
      name: "PetWorld — Pet Adoption Platform",
      category: "mern",
      image: dog,
      description: "Full-stack pet adoption platform with authentication, protected routes, cart system, address management, and MERN backend deployed on Render.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/uttam9721/petWord",
      demo: "https://pet-word.vercel.app/",
      featured: false,
    }
  ];

  const openLink = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <section id="Projects" className="relative py-24">
      <div className="absolute w-[600px] h-[600px] orb-cyan top-1/4 left-[-200px] pointer-events-none z-0"></div>
      <div className="absolute w-[600px] h-[600px] orb-pink bottom-0 right-[-200px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2">Showcase</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Featured <span className="neon-text">Builds</span></h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of enterprise-grade applications, full-stack platforms, and modern frontend interfaces I've engineered.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex cyber-glass p-1 rounded-full backdrop-blur-md border border-cyan-500/30 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-purple-500/20 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                activeTab === "frontend"
                  ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("mern")}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                activeTab === "mern"
                  ? "bg-pink-500/20 text-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardItem
            .filter((item) => activeTab === "all" || item.category === activeTab)
            .map((item) => (
              <div
                key={item.id}
                className="cyber-glass rounded-2xl overflow-hidden group hover:-translate-y-3 transition-all duration-500 border-t border-l border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] flex flex-col h-[440px]"
              >
                <div className="relative h-52 shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080214] via-transparent to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 filter saturate-150 brightness-75 group-hover:brightness-100"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 z-20 bg-[#080214]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-pink-500 border border-pink-500/30 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                      FEATURED
                    </div>
                  )}
                </div>

                <div className="p-6 relative z-20 -mt-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2 py-1 rounded-full uppercase font-bold tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {item.demo && (
                      <button
                        onClick={() => openLink(item.demo)}
                        className="flex-1 text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all"
                      >
                        Live Demo
                      </button>
                    )}
                    {item.link && (
                      <button
                        onClick={() => openLink(item.link)}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-white/20 hover:border-white hover:bg-white/5 transition-all text-white font-bold text-sm flex items-center justify-center gap-2"
                      >
                        Source Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PortFolio;
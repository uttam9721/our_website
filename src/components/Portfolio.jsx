import  { useState } from "react";
import Clothing from "../assets/image.png";
import coin from "../assets/coin.png";
import flora from "../assets/flora.png";
import shop from "../assets/myShop.png";
import code from "../assets/code.png";
import dog from "../assets/dog.png";
import school from "../assets/school.png";
import port from "../assets/portfolio.png";
import food from "../assets/food.png";
import shoping from "../assets/shoping.png";  
import flavoro from "../assets/flavoro.png";
import amazon from "../assets/Amazone.png";
import Analyzer from "../assets/analyzer.png";

function PortFolio() {
  const [activeTab, setActiveTab] = useState("frontend");

  const cardItem = [
    {
      id: 0,
      name: "RudraStyles — Clothing Brand Website",
      category: "frontend",
      image: Clothing,
      description:
        "Developed a modern clothing brand e-commerce website with product showcase, responsive UI, custom design sections, and smooth navigation.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      link: "https://github.com/uttam9721/rudraStyles",
      demo: "https://rudraStyles.vercel.app/",
      featured: true,
    },
    {
      id: 1,
      name: "Food Ordering App",
      category: "mern",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      description:
        "Full-stack food delivery web app built with MERN stack, cart, payments, admin dashboard and Stripe integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/uttam9721/Restaurant",
      demo: "",
      featured: true,
    },
    {
      id: 2,
      name: "E-Learning Platform",
      category: "mern",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b",
      description:
        "MERN stack e-learning app with authentication, Stripe payments and admin CRUD panel.",
      techStack: ["React", "MongoDB", "Stripe", "Clerk"],
      link: "https://github.com/uttam9721/E-Learning",
      demo: "",
      featured: true,
    },
    {
      id: 3,
      name: "CodeView - Code Editor",
      category: "mern",
      image: code,
      description:
        "Online code editor with syntax highlighting, autocomplete and theme switching.",
      techStack: ["React", "Tailwind", "Node", "Express", "CodeMirror"],
      link: "https://github.com/uttam9721/CodeView_collegeProject",
      demo: "",
    },
    {
      id: 4,
      name: "CryptoPlace",
      category: "frontend",
      image: coin,
      description:
        "Cryptocurrency tracking platform with real-time charts and Firebase authentication.",
      techStack: ["React", "Chart.js", "Tailwind", "Firebase"],
      link: "https://coin-weld-zeta.vercel.app/",
      demo: "https://coin-weld-zeta.vercel.app/",
    },
    {
      id: 6,
      name: "Modexa - E-Commerce",
      category: "mern",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a",
      description:
        "Full-stack ecommerce platform with authentication, cart system and Stripe payment integration.",
      techStack: ["React", "Node", "MongoDB", "JWT", "Stripe"],
      link: "https://github.com/uttam9721/Modexa",
      demo: "",
    },
    {
      id: 7,
      name: "FloraVision",
      category: "frontend",
      image: flora,
      description:
        "Modern plant shop website with elegant UI and animations.",
      techStack: ["React", "Tailwind", "JavaScript"],
      link: "https://floravision-pied.vercel.app/",
      demo: "https://floravision-pied.vercel.app/",
    },
    {
      id: 8,
      name: "MyShop",
      category: "frontend",
      image: shop,
      description:
        "Responsive e-commerce UI with product listing and cart system.",
      techStack: ["React", "Tailwind", "JavaScript"],
      link: "https://my-shop-ten-mauve.vercel.app/",
      demo: "https://my-shop-ten-mauve.vercel.app/",
    },
    {
  "id": 11,
  "name": "Developer Portfolio — Interactive MERN Showcase",
  "category": "frontend",
  "image": port,
  "description": "Built a fully responsive and visually engaging developer portfolio to highlight projects, technical skills, and professional experience",
  "techStack": ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
  "demo": "https://modexa.in",
  "link": "https://github.com/uttam9721/our_website",
  "featured": true
},
    {
      id: 9,
      name: "PetWorld — Pet Adoption Platform",
      category: "mern",
      image: dog,
      description:
        "Full-stack pet adoption platform with authentication, protected routes, cart system, address management, and MERN backend deployed on Render with Vercel frontend.",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Render",
        "Vercel",
      ],
      link: "https://github.com/uttam9721/petWord",
      demo: "https://pet-word.vercel.app/",
      featured: true,
    },
//     {
//   "id": 10,
//   "name": "DPGIC — Modern Web Application",
//   "category": "frontend",
//   "image": school,
  
//   "techStack": ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
//   "link": "https://dpgic.vercel.app/",
//   "demo": "https://dpgic.vercel.app/",
//   // "featured": true
// },
{
  id: 10,
  name: "DPGIC — Modern School Website",
  category: "frontend",
  image: school,
  description:
    "Developed a modern and responsive school website showcasing academic information, admissions details, events, and announcements with a clean UI and smooth user experience.",
  techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
  link: "https://dpgic.vercel.app/",
  demo: "https://dpgic.vercel.app/",
  // featured: true
},
{
  "id": 13,
  "name": "Frontend Job Portal — Job Listing UI",
  "category": "frontend",
  "image": food,
  "description": "Designed a modern job listing platform with responsive UI, job filtering, and clean user experience for browsing frontend job opportunities",
  "techStack": ["React.js", "CSS", "JavaScript", "Vercel"],
  "demo": "https://frontend-job-six.vercel.app/",
  "link": "https://github.com/uttam9721/Frontend_job",
  "featured": true
},
{
  id: 14,
  name: "E-Commerce Cart & Payment System",
  category: "frontend",
  image: shoping,
  description:
    "Developed a responsive e-commerce cart and payment system with product listing, add-to-cart functionality, quantity management, and dynamic cart updates.",
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
  description:
    "Developed a responsive food ordering web application with product listing, category filtering, cart management, and seamless user experience using modern frontend technologies.",
  techStack: ["React.js", "Tailwind CSS", "Redux Toolkit", "JavaScript", "Vercel"],
  link: "https://github.com/uttam9721/flavoro",
  demo: "https://flavoro-amber.vercel.app/",
  featured: true,
},
{
  id: 16,
  name: "Amazon Clone — E-commerce UI",
  category: "frontend",
  image: amazon,
  description:
    "Developed a responsive Amazon-inspired e-commerce UI with modern layout, category sections, product grid, and smooth user interactions using HTML, CSS, and JavaScript.",
  techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
  link: "https://github.com/uttam9721/amazon-project-clone",
  demo: "https://amazon-project-clone-nu.vercel.app/",
  featured: true,
},
{
  id: 17,
  name: "DevScope — Developer Analytics Dashboard",
  category: "fullstack",
  image: Analyzer,
  description:
    "A full-stack developer analytics dashboard that fetches and visualizes coding profiles from platforms like Codeforces, LeetCode, GitHub, HackerRank, and LinkedIn with interactive charts and insights.",
  techStack: [
    "React.js",
    "Tailwind CSS",
    "React Charts",
    "Node.js",
    "Express.js"
  ],
  link: "https://github.com/uttam9721/DevScope",
  demo: "",
  featured: true,
},

  ];

  const openLink = (url) => window.open(url, "_blank");

  return (
    <section
      id="Projects"
      className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] 
      text-white py-20"
    >
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        <h1 className="text-4xl font-bold mb-10 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Some of my featured full stack and frontend projects
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 p-1 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "frontend"
                  ? "bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] text-black"
                  : "text-white"
              }`}
            >
              Frontend Projects
            </button>

            <button
              onClick={() => setActiveTab("mern")}
              className={`px-6 py-2 rounded-full ${
                activeTab === "mern"
                  ? "bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] text-black"
                  : "text-white"
              }`}
            >
              Full Stack Projects
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardItem
            .filter((item) => item.category === activeTab)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg h-[380px] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative flex-1 p-6">
                  {item.featured && (
                    <span className="bg-green-500/90 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}

                  <h2 className="text-xl font-bold mt-3 bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] bg-clip-text text-transparent">
                    {item.name}
                  </h2>

                  {/* ALWAYS VISIBLE CONTENT */}
                  <div className="absolute left-0 bottom-0 w-full bg-black/90 p-4 translate-y-0">
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-800 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-4">
                      {item.demo && (
                        <button
                          onClick={() => openLink(item.demo)}
                          className="px-4 py-1 text-sm rounded bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]"
                        >
                          Demo
                        </button>
                      )}
                      <button
                        onClick={() => openLink(item.link)}
                        className="px-4 py-1 text-sm border rounded"
                      >
                        Code
                      </button>
                    </div>
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
import React from "react";

function PortFolio() {
  const cardItem = [
    {
  id: 0,
  name: "RudraStyles — Clothing Brand Website",
  description:
    "Developed a modern clothing brand e-commerce website with product showcase, responsive UI, custom design sections, and smooth navigation. Built using React.js and Tailwind CSS and deployed on Vercel.",
  techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
  link: "https://github.com/uttam9721/rudraStyles",
  demo: "https://rudraStyles.vercel.app/",
  featured: true,
},

    {
      id: 1,
      name: "Food Ordering App",
      description:
        "A full-stack food delivery web app built with the MERN stack with cart, payments, admin dashboard, JWT authentication and Stripe integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/uttam9721/Restaurant",
      demo: "",
      featured: true,
    },
    {
      id: 2,
      name: "E-Learning Platform",
      description:
        "MERN stack e-learning app with Clerk authentication, Stripe payments, and admin panel with full CRUD capabilities.",
      techStack: ["React", "MongoDB", "Stripe", "Clerk"],
      link: "https://github.com/uttam9721/E-Learning",
      demo: "",
      featured: true,
    },
    {
      id: 3,
      name: "CodeView - Code Editor",
      description:
        "Online code editor with syntax highlighting, autocomplete, and theme switching built using React and Tailwind.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express", "CodeMirror"],
      link: "https://github.com/uttam9721/CodeView_collegeProject",
      demo: "",
    },
    {
      id: 4,
      name: "CryptoPlace",
      description:
        "Cryptocurrency tracking platform with real-time data visualization, Firebase authentication, and responsive UI.",
      techStack: ["React.js", "React Chart", "Tailwind CSS", "Firebase"],
      link: "https://coin-weld-zeta.vercel.app/",
      demo: "https://coin-weld-zeta.vercel.app/",
    },
    {
      id: 5,
      name: "PetWorld",
      description:
        "Full-stack pet adoption platform with JWT authentication, MERN backend, and responsive design.",
      techStack: ["React", "Node", "Express", "MongoDB", "JWT", "bcrypt"],
      link: "https://github.com/uttam9721/petWord",
    },
    {
      id: 6,
      name: "Modexa - E-Commerce",
      description:
        "Full-stack ecommerce platform with authentication, cart system, and Stripe payment integration (in progress).",
      techStack: ["React", "Node", "MongoDB", "JWT", "Stripe"],
      link: "https://github.com/uttam9721/Modexa",
    },
    {
      id: 7,
      name: "FloraVision",
      description:
        "Modern plant shop website with elegant UI, animations, and product browsing experience.",
      techStack: ["React", "Tailwind", "JavaScript"],
      link: "https://floravision-pied.vercel.app/",
      demo: "https://floravision-pied.vercel.app/",
    },
    {
      id: 8,
      name: "MyShop",
      description:
        "Responsive e-commerce UI with product listing, cart management, and order summary features.",
      techStack: ["React", "Tailwind", "JavaScript"],
      link: "https://my-shop-ten-mauve.vercel.app/",
      demo: "https://my-shop-ten-mauve.vercel.app/",
    },
  ];

  const openLink = (url) => window.open(url, "_blank");

  return (
    <section
      id="Portfolio"
      className="max-w-7xl mx-auto px-4 md:px-8 py-20"
    >
      {/* ===== Title ===== */}
      <h1 className="text-4xl font-bold text-center mb-2">
        My <span className="text-green-500">Projects</span>
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Some of my featured full stack and frontend projects
      </p>

      {/* ===== Grid ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardItem.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            {/* Featured Badge */}
            {item.featured && (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Featured
              </span>
            )}

            {/* Title */}
            <h2 className="text-xl font-bold mt-3">{item.name}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">
              {item.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              {item.demo && (
                <button
                  onClick={() => openLink(item.demo)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Live Demo
                </button>
              )}

              <button
                onClick={() => openLink(item.link)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortFolio;

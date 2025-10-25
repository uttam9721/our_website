import React from "react";
import mongoDB from "../../public/image.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      name: "Food Ordering App",
      description:
        "A full-stack food delivery web app built with the MERN stack. Users can browse the menu, add items to cart, make secure online payments, and track orders. Includes admin dashboard, JWT authentication, and Stripe integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/uttam9721/Restaurant",
    },
    {
      id: 2,
      name: "E-Learning Platform",
      description:
        "Developed a modular MERN stack e-learning app with Clerk-based role authentication, Stripe integration for payments, and an admin panel with full CRUD capabilities.",
      techStack: ["React", "MongoDB", "Stripe", "Clerk"],
      link: "https://github.com/uttam9721/E-Learning",
    },
    {
  id: 3,
  name: "CodeView - Code Editor",
  description:
    "Built a responsive online code editor using React.js and Tailwind CSS with syntax highlighting, autocomplete, and theme switching. Achieved under 2s load time, deployed on Vercel with 99.9% uptime. Improved usability and reduced coding errors based on user feedback.",
  techStack: ["React.js", "Tailwind CSS", "Node.js", "Express", "CodeMirror"],
  link: "https://github.com/uttam9721/CodeView_collegeProject",
},
{
  id: 4,
  name: "CryptoPlace",
  description:
    "Developed a cryptocurrency tracking platform using React.js and Tailwind CSS with real-time data visualization through React Chart. Integrated Firebase authentication for secure user access. Implemented dynamic searching for efficient coin lookup. Deployed on Vercel ensuring fast performance and responsive design.",
  TechStack: ["React.js", "React Chart", "Tailwind CSS", "Firebase"],
  link: "https://coin-weld-zeta.vercel.app/",
},
{
  id: 5,
  name: "PetWorld",
  description:
    "Developed a full-stack pet care and adoption platform using the MERN stack. Implemented secure authentication with JWT and bcrypt, enabling users to sign up, log in, and manage adoption requests. Styled with Tailwind CSS for a modern and responsive design. Currently available on GitHub for further deployment.",
  TechStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
  link: "https://github.com/uttam9721/petWord",
},
{
  id: 6,
  name: "Modexa - E-Commerce Platform",
  description:
    "Building a full-stack ecommerce application with product listings, cart management, secure authentication, and planned Stripe payment integration. Developed using React.js with Context API for state management, Tailwind CSS for responsive UI, and Node.js with Express and MongoDB for the backend. Integrated JWT and bcrypt for authentication and authorization. Currently under development and available on GitHub.",
  TechStack: [
    "React.js",
    "Context API",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "bcrypt",
    "Stripe"
  ],
  link: "https://github.com/uttam9721/Modexa",
},
{
  id: 7,
  name: "FloraVision",
  description:
    "Created a modern and responsive plant shop website using React.js and Tailwind CSS. Focused on delivering an elegant UI with smooth animations, product listings, and category filters. Designed for an engaging browsing experience and deployed on Vercel.",
  TechStack: ["React.js", "Tailwind CSS", "JavaScript"],
  link: "https://floravision-pied.vercel.app/",
},

{
  id: 8,
  name: "MyShop",
  description:
    "Developed a fully responsive online shopping platform using React.js and Tailwind CSS. Implemented product listing, cart management, and order summary features with a user-friendly interface. Designed to simulate a real-world e-commerce experience and deployed seamlessly on Vercel.",
  TechStack: ["React.js", "Tailwind CSS", "JavaScript"],
  link: "https://my-shop-ten-mauve.vercel.app/",
},

  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-lg">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
          {cardItem.map(({ id, logo, name, description, techStack, link }) => (
            <div
              key={id}
              className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 bg-white"
            >
              {logo && (
                <img
                  src={logo}
                  className="w-[120px] h-[120px] object-contain mx-auto p-2 rounded-full border-[2px]"
                  alt={`${name} logo`}
                />
              )}
              <div className="text-center">
                <div className="font-bold text-xl mt-2 mb-1">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                {techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => openLink(link)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

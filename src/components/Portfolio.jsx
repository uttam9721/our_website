// import React from "react";
// import java from "../../public/java.png";
// import mongoDB from "../../public/image.png";
// import express from "../../public/express.png";
// import reactjs from "../../public/reactjs.png";
// import nodejs from "../../public/node.png";

// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: mongoDB,
//       name: "FoodOrdering App",
//       description: "A full-stack food ordering web application with add-to-cart and online payment functionality.",
//     },
//     {
//       id: 2,
//       logo: express,
//       name: "Express",
//       description: "A robust back-end using Express for RESTful APIs and middleware.",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "ReactJS",
//       description: "Built reusable components with React, including routing and state management.",
//     },
//     {
//       id: 4,
//       logo: nodejs,
//       name: "NodeJS",
//       description: "Used Node.js for scalable server-side logic and integration with MongoDB.",
//     },
//     {
//       id: 5,
//       // logo: JavaScript,
//       name: "JavaScript Projects",
//     },
//   ];

//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
//         <span className="underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
//           {cardItem.map(({ id, logo, name, description }) => (
//             <div
//               key={id}
//               className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
//               // className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] object-contain mx-auto p-2 rounded-full border-[2px]"
//                 alt={`${name} logo`}
//               />
//               <div className="text-center">
//                 <div className="font-bold text-xl mt-2 mb-1">{name}</div>
//                 <p className="text-gray-700 text-sm">{description}</p>
//               </div>
//               <div className="flex justify-center gap-4 mt-4">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Project
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;




// import React from "react";
// import mongoDB from "../../public/image.png";
// import express from "../../public/express.png";
// import reactjs from "../../public/reactjs.png";
// import nodejs from "../../public/node.png";
// // import placeholder from "../../public/placeholder.png"; // Default image for missing logos

// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: mongoDB,
//       name: "FoodOrdering App",
//       description:
//         "A full-stack food delivery web app built with MERN stack. Users can browse the menu, add items to cart, make secure online payments, and track orders in real time. Features admin dashboard, JWT auth, and Stripe integration.",
//       techStack: ["React", "Node.js", "MongoDB", "Stripe"],
//     },
//     {
//       id: 2,
//       logo: express,
//       name: "Express",
//       description:
//         "Backend built using Express to create secure RESTful APIs. Implemented custom middleware, error handling, and data validation using Joi and middleware chaining.",
//       techStack: ["Express", "Node.js", "MongoDB"],
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "ReactJS",
//       description:"E-Learning Web Application (MERN Stack)
// Built a modular and scalable e-learning platform using MongoDB, Express.js, React.js, and Node.js.
// Implemented secure role-based authentication with Clerk for students and instructors.
// Integrated Stripe for seamless and secure course payments and subscriptions.
// Developed an admin panel with full CRUD operations to manage users, courses, transactions, and approval workflows.
// "
       
//     },
//     // {
//     //   id: 4,
//     //   logo: nodejs,
//     //   name: "NodeJS",
//     //   description:
//     //     "Handled server-side logic, API routing, and database operations using Node.js and MongoDB. Used Mongoose for modeling data schemas efficiently.",
//     //   techStack: ["Node.js", "MongoDB", "Mongoose"],
//     // },
//     // {
//     //   id: 5,
//     //   // logo: placeholder,
//     //   name: "JavaScript Projects",
//     //   description:
//     //     "A collection of mini JavaScript projects including a weather app, calculator, form validation, and to-do list to demonstrate core JS skills and DOM manipulation.",
//     //   techStack: ["HTML", "CSS", "JavaScript"],
//     // },
//   ];

//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
//         <span className="underline font-semibold text-lg">Featured Projects</span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
//           {cardItem.map(({ id, logo, name, description, techStack }) => (
//             <div
//               key={id}
//               className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 bg-white"
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] object-contain mx-auto p-2 rounded-full border-[2px]"
//                 alt={`${name} logo`}
//               />
//               <div className="text-center">
//                 <div className="font-bold text-xl mt-2 mb-1">{name}</div>
//                 <p className="text-gray-700 text-sm">{description}</p>
//               </div>
//               <div className="flex justify-center gap-2 mt-3 flex-wrap">
//                 {techStack?.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-center gap-4 mt-4">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Project
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;


import React from "react";
import mongoDB from "../../public/image.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
// import nodejs from "../../public/node.png";
// import placeholder from "../../public/placeholder.png"; // Optional default logo

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      // logo: mongoDB,
      name: "Food Ordering App",
      description:
        "A full-stack food delivery web app built with the MERN stack. Users can browse the menu, add items to cart, make secure online payments, and track orders. Includes admin dashboard, JWT authentication, and Stripe integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    // {
    //   id: 2,
    //   // logo: express,
    //   name: "Express Backend",
    //   description:
    //     "Created RESTful APIs using Express.js with middleware, error handling, and input validation using Joi. Integrated MongoDB for database operations.",
    //   techStack: ["Express", "Node.js", "MongoDB"],
    // },
    {
      id: 3,
      // logo: reactjs,
      name: "E-Learning Platform",
      description:
        "Developed a modular MERN stack e-learning app with Clerk-based role authentication, Stripe integration for payments, and an admin panel with full CRUD capabilities.",
      techStack: ["React", "MongoDB", "Stripe", "Clerk"],
    },
    {
      id: 4,
      // logo: placeholder, // Add a logo if available
      name: "CodeView - Code Editor",
      description:
        "Built a responsive online code editor using React.js and Tailwind CSS with syntax highlighting, autocomplete, and theme switching. Achieved under 2s load time, deployed on Vercel with 99.9% uptime. Improved usability and reduced coding errors based on user feedback.",
      techStack: ["React.js", "Tailwind CSS", "Vercel", "CodeMirror"],
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-lg">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
          {cardItem.map(({ id, logo, name, description, techStack }) => (
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
                {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Project
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

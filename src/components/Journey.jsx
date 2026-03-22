// import React from "react";

// const journeyData = [
//   {
//     year: "2021",
//     title: "Started Tech Journey 💻",
//     desc: "Began learning programming fundamentals and problem-solving with a focus on Java and core concepts.",
//   },
//   {
//     year: "2022",
//     title: "Frontend Development 🎨",
//     desc: "Built responsive web interfaces using HTML, CSS, JavaScript and modern UI frameworks.",
//   },
//   {
//     year: "2023",
//     title: "React & Advanced Frontend ⚛️",
//     desc: "Developed dynamic web applications using React.js, improved UI/UX skills and worked with APIs and state management.",
//   },
//   {
//     year: "2024",
//     title: "Full Stack Development 🚀",
//     desc: "Developed 3+ full-stack applications using MERN stack including Learning Management System, Real Estate and Food Ordering platforms.",
//   },
//   {
//     year: "2025",
//     title: "Advanced Features & Scalability ⚡",
//     desc: "Implemented secure authentication (RBAC), REST APIs, Stripe payment integration and dynamic admin dashboards with full CRUD operations.",
//   },
//   {
//     year: "2025",
//     title: "Production Level Projects 🔥",
//     desc: "Worked on real-world applications with 100% responsive UI, optimized performance using Context API and followed scalable architecture practices.",
//   },
//   {
//     year: "Now",
//     title: "Open for Opportunities 🎯",
//   desc: "Open to Frontend and Full Stack Developer roles, focused on building scalable, high-performance and user-centric web applications.",
//   },
// ];

// const Journey = () => {
//   return (
//     <section className="relative py-20 bg-[#020617] text-white overflow-hidden">

//       {/* Glow Background */}
//       <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

//       <div className="relative z-10 max-w-5xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 
//         bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 
//         bg-clip-text text-transparent">
//           My Developer Journey 🚀
//         </h2>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Center Line */}
//           <div className="absolute left-1/2 top-0 w-[2px] h-full bg-cyan-400/30 -translate-x-1/2"></div>

//           {journeyData.map((item, index) => (
//             <div
//               key={index}
//               className={`mb-12 flex items-center justify-between w-full ${
//                 index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//               }`}
//             >

//               {/* Card */}
//               <div className="w-[45%] bg-white/5 backdrop-blur-md border border-white/10 
//               rounded-xl p-5 shadow-lg hover:scale-105 transition duration-300">

//                 <h3 className="text-lg font-semibold text-cyan-300">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-400 mt-2 text-sm">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* Circle */}
//               <div className="w-10 h-10 flex items-center justify-center 
//               bg-cyan-400 text-black font-bold rounded-full 
//               shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10">
//                 {item.year.slice(2)}
//               </div>

//               {/* Empty space */}
//               <div className="w-[45%]"></div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Journey;









import React from "react";

const journeyData = [
  {
    year: "2021",
    title: "Started Tech Journey 💻",
    desc: "Began learning programming fundamentals and problem-solving with a focus on Java and core concepts.",
  },
  {
    year: "2022",
    title: "Frontend Development 🎨",
    desc: "Built responsive web interfaces using HTML, CSS, JavaScript and modern UI frameworks.",
  },
  {
    year: "2023",
    title: "React & Advanced Frontend ⚛️",
    desc: "Developed dynamic web applications using React.js, improved UI/UX skills and worked with APIs and state management.",
  },
  {
    year: "2024",
    title: "Full Stack Development 🚀",
    desc: "Developed 3+ full-stack applications using MERN stack including LMS, Real Estate and Food Ordering platforms.",
  },
  {
    year: "2025",
    title: "Advanced Features ⚡",
    desc: "Implemented RBAC, REST APIs, Stripe payments and dynamic admin dashboards with full CRUD operations.",
  },
  {
    year: "2025",
    title: "Production Projects 🔥",
    desc: "Worked on real-world apps with responsive UI, optimized performance and scalable architecture.",
  },
  {
    year: "Now",
    title: "Open for Opportunities 🎯",
    desc: "Open to Frontend and Full Stack Developer roles, focused on building scalable, high-performance applications.",
  },
];

const Journey = () => {
  return (
    <section
      id="Journey"
      className="relative py-24 overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] text-white"
    >

      {/* ===== GRID BACKGROUND (MATCH HERO) ===== */}
      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      {/* ===== GLOW EFFECT ===== */}
      <div className="absolute w-[500px] h-[500px] 
      bg-green-500/20 blur-[120px] top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 
        bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 
        bg-clip-text text-transparent">
          My Developer Journey 🚀
        </h2>

        {/* ===== TIMELINE ===== */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full 
          bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent 
          -translate-x-1/2"></div>

          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`mb-16 flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >

              {/* ===== CARD ===== */}
              <div className="w-[45%] 
              bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-6 
              shadow-[0_0_30px_rgba(34,211,238,0.15)] 
              hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] 
              hover:scale-105 transition duration-300">

                <h3 className="text-lg font-semibold 
                bg-gradient-to-r from-cyan-300 to-blue-400 
                bg-clip-text text-transparent">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* ===== GLOW CIRCLE ===== */}
              <div className="w-12 h-12 flex items-center justify-center 
              rounded-full text-sm font-bold 
              bg-gradient-to-r from-cyan-400 to-blue-500 text-black 
              shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10">

                {item.year === "Now" ? "Now" : item.year.slice(2)}
              </div>

              {/* Empty Space */}
              <div className="w-[45%]"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Journey;
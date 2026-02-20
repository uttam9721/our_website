
// // import React from "react";
// // import profile from "../../public/logo.jpg";

// // import { ReactTyped } from "react-typed";

// // import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// // import { SiLeetcode } from "react-icons/si";
// // import {
// //   SiJavascript,
// //   SiReact,
// //   SiNodedotjs,
// //   SiExpress,
// //   SiMongodb,
// // } from "react-icons/si";

// // const Home = () => {
// //   return (
// //     <section className="bg-gray-100 py-20">
// //       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

// //         {/* ===== LEFT CONTENT ===== */}
// //         <div className="md:w-1/2 space-y-6">

// //           {/* Title */}
// //           <h3 className="text-2xl font-semibold text-gray-700">
// //             Welcome To My Portfolio
// //           </h3>

// //           {/* ===== Typing Heading ===== */}
// //           <h1 className="text-4xl font-bold flex items-center gap-3">
// //             I am
// //             <span className="text-red-600">
// //               <ReactTyped
// //                 strings={["Coder", "Developer", "Programmer"]}
// //                 typeSpeed={60}
// //                 backSpeed={50}
// //                 backDelay={1000}
// //                 loop
// //               />
// //             </span>
// //           </h1>

// //           {/* Description */}
// //           <p className="text-gray-700 leading-relaxed">
// //             Passionate and detail-oriented Full Stack Web Developer with hands-on
// //             experience building scalable web applications. Proficient in
// //             JavaScript, React, Node.js, Express.js, MongoDB, and RESTful APIs.
// //             Strong foundation in problem-solving, responsive UI development,
// //             and secure backend systems.
// //           </p>

// //           {/* ===== Social + Tech Icons ===== */}
// //           <div className="flex gap-16 flex-wrap">

// //             {/* Social */}
// //             <div>
// //               <h4 className="font-semibold mb-3">Available on</h4>
// //               <div className="flex gap-4 text-3xl text-gray-700">
// //                 <a href="https://linkedin.com" target="_blank" rel="noreferrer">
// //                   <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
// //                 </a>

// //                 <a href="https://github.com" target="_blank" rel="noreferrer">
// //                   <FaGithub className="hover:text-black cursor-pointer" />
// //                 </a>
// // <a
// //   href="https://leetcode.com/u/uttammaurya01/"
// //   target="_blank"
// //   rel="noopener noreferrer"
// //   className="text-gray-600 hover:text-[#FFA116] hover:scale-110 transition-all duration-200"
// //   aria-label="LeetCode"
// // >
// //   <SiLeetcode/>
// // </a>


// //                 <a href="https://instagram.com" target="_blank" rel="noreferrer">
// //                   <FaInstagram className="hover:text-pink-500 cursor-pointer" />
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Tech Stack Icons */}
// //             <div>
// //               <h4 className="font-semibold mb-3">Tech Stack</h4>
// //               <div className="flex gap-4 text-3xl">
// //                 <SiJavascript className="text-yellow-500" />
// //                 <SiReact className="text-blue-500" />
// //                 <SiNodedotjs className="text-green-600" />
// //                 <SiExpress className="text-gray-700" />
// //                 <SiMongodb className="text-green-700" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* ===== Key Skills ===== */}
// //           <div>
// //             <h4 className="font-semibold mb-3">Key Skills</h4>
// //             <div className="flex flex-wrap gap-3">
// //               {[
// //                 "JavaScript",
// //                 "TypeScript",
// //                 "React.js",
// //                 "Next.js",
// //                 "Node.js",
// //                 "Express.js",
// //                 "MongoDB",
// //                 "REST APIs",
// //                 "HTML",
// //                 "CSS",
// //                 "Tailwind CSS",
// //               ].map((skill) => (
// //                 <span
// //                   key={skill}
// //                   className="bg-white px-4 py-2 rounded-lg shadow-sm border text-sm"
// //                 >
// //                   {skill}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //         {/* ===== RIGHT IMAGE ===== */}
// //         <div className="md:w-1/2 flex justify-center">
// //           <img
// //             src={profile}
// //             alt="profile"
// //             className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-gray-400 shadow-lg"
// //           />
// //         </div>
// // {/* >>>>>>> 2d58d72 (add new feature) */}

// //       </div>
// //     </section>
// //   );
// // };

// // export default Home;






// // only color change
// import React from "react";
// import profile from "../../public/logo.jpg";

// import { ReactTyped } from "react-typed";

// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import {
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
// } from "react-icons/si";

// const Home = () => {
//   return (
//     <section 
//     id="Home"
//     className="relative min-h-screen overflow-hidden 
//     bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] text-white py-20">

//       {/* ===== Glow Effect ===== */}
//       <div className="absolute w-[500px] h-[500px] 
//       bg-green-500/20 blur-[120px] top-1/2 left-1/3 
//       -translate-x-1/2 -translate-y-1/2"></div>

//       {/* ===== Grid Background ===== */}
//       <div className="absolute inset-0 
//       bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
//       linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
//       bg-[size:60px_60px]"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

//         {/* ===== LEFT CONTENT ===== */}
//         <div className="md:w-1/2 space-y-6">

//           {/* Title */}
//           <h3 className="text-2xl font-bold mb-6
//   bg-gradient-to-r from-[#8B0000] via-[#2563EB] to-[#B8860B]
//   bg-clip-text text-transparent">
//             Welcome To My Portfolio
//           </h3>

//           {/* ===== Typing Heading ===== */}
//           <h1 className="text-4xl md:text-2xl font-bold flex items-center gap-3 flex-wrap">
//             I am
//             <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
//               {/* <ReactTyped
//                 strings={["Coder", "Developer", "Programmer"]}
//                 typeSpeed={60}
//                 backSpeed={50}
//                 backDelay={1000}
//                 loop
//               /> */}
//               {/* <ReactTyped
//   strings={[
//     "MERN Stack Developer <span>💻</span> ",
//     "Full Stack Web Developer 🚀",
//     "React & Node.js Specialist ⚛️",
//     "Problem Solver 🧠",
//     "Tech Enthusiast 🔥"
//   ]}
//   typeSpeed={60}
//   backSpeed={50}
//   backDelay={1000}
//   loop
// /> */}
// <div className="min-h-[40px]">
//   <ReactTyped
//     strings={[
//       "MERN Stack Developer 💻",
//       "Frontend Specialist ⚛️",
//       "Backend Builder 🛠️",
//       "Open for Full-Time Roles 🚀"
//     ]}
//     typeSpeed={60}
//     backSpeed={50}
//     backDelay={1200}
//     loop
//   />
// </div>
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-gray-300 leading-relaxed">
//             Passionate and detail-oriented Full Stack Web Developer with hands-on
//             experience building scalable web applications. Proficient in
//             JavaScript, React, Node.js, Express.js, MongoDB, and RESTful APIs.
//             Strong foundation in problem-solving, responsive UI development,
//             and secure backend systems.
//           </p>

//           {/* ===== Social + Tech Icons ===== */}
//           <div className="flex gap-16 flex-wrap">

//             {/* Social */}
//             <div>
//               <h4 className="font-semibold mb-3 text-gray-300">Available on</h4>
//               <div className="flex gap-4 text-3xl text-gray-300">

//                 <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//                   <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition" />
//                 </a>

//                 <a href="https://github.com" target="_blank" rel="noreferrer">
//                   <FaGithub className="hover:text-white hover:scale-110 transition" />
//                 </a>

//                 <a
//                   href="https://leetcode.com/u/uttammaurya01/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-[#FFA116] hover:scale-110 transition"
//                 >
//                   <SiLeetcode />
//                 </a>

//                 <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                   <FaInstagram className="hover:text-pink-500 hover:scale-110 transition" />
//                 </a>

//               </div>
//             </div>

//             {/* Tech Stack Icons */}
//             <div>
//               <h4 className="font-semibold mb-3 text-gray-300">Tech Stack</h4>
//               <div className="flex gap-4 text-3xl">
//                 <SiJavascript className="text-yellow-400" />
//                 <SiReact className="text-cyan-400" />
//                 <SiNodedotjs className="text-green-500" />
//                 <SiExpress className="text-gray-400" />
//                 <SiMongodb className="text-green-600" />
//               </div>
//             </div>

//           </div>

//           {/* ===== Key Skills ===== */}
//           <div>
//             <h4 className="font-semibold mb-3 text-gray-300">Key Skills</h4>

//             <div className="flex flex-wrap gap-3">
//               {[
//                 "JavaScript",
//                 "TypeScript",
//                 "Java",
//                 "React.js",
//                 "Next.js",
//                 "Node.js",
//                 "Express.js",
//                 "MongoDB",
//                 "REST APIs",
//                 "HTML",
//                 "CSS",
//                 "Tailwind CSS",
//                 "Bootstrap",
//                 "git",
//                 "gitHub"
//               ].map((skill) => (
//                 <span
//                   key={skill}
//                   className="cursor-pointer bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg 
//                   border border-white/10 text-sm hover:bg-white/20 transition"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>

//           </div>

//         </div>

//         {/* ===== RIGHT IMAGE ===== */}
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={profile}
//             alt="profile"
//             className="w-80 h-80 md:w-[420px] md:h-[420px] 
//             rounded-full object-cover border-4 border-white/20 
//             shadow-[0_0_60px_rgba(34,197,94,0.4)] hover:scale-110 duration-500"
//           />

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Home;








import React from "react";
import profile from "../../public/logo.jpg";

import { ReactTyped } from "react-typed";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Home = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] 
      text-white py-20"
    >
      {/* ===== Glow Effect ===== */}
      <div
        className="absolute w-[500px] h-[500px] 
        bg-green-500/20 blur-[120px] top-1/2 left-1/3 
        -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* ===== Grid Background ===== */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
        linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
        bg-[size:60px_60px]"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="md:w-1/2 space-y-6">

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-bold mb-6
            bg-gradient-to-r from-[#8B0000] via-[#2563EB] to-[#B8860B]
            bg-clip-text text-transparent"
          >
            Welcome To My Portfolio
          </h3>

          {/* ===== HERO HEADING (FIXED) ===== */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center gap-3 flex-wrap">
            Hi, I'm Uttam 👋
          </h1>

          {/* ===== TYPING TEXT (NO JUMP) ===== */}
          <div className="min-h-[52px] flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  "MERN Stack Developer 💻",
                  "Frontend Specialist ⚛️",
                  "Backend Builder 🛠️",
                  "Open for Full-Time Roles 🚀",
                ]}
                typeSpeed={60}
                backSpeed={50}
                backDelay={1200}
                loop
              />
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            Passionate and detail-oriented Full Stack Web Developer with hands-on
            experience building scalable web applications. Proficient in
            JavaScript, React, Node.js, Express.js, MongoDB, and RESTful APIs.
            Strong foundation in problem-solving, responsive UI development,
            and secure backend systems.
          </p>

          {/* ===== SOCIAL + TECH ===== */}
          <div className="flex gap-16 flex-wrap">

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-300">
                Available on
              </h4>

              <div className="flex gap-4 text-3xl text-gray-300">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition" />
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-white hover:scale-110 transition" />
                </a>

                <a
                  href="https://leetcode.com/u/uttammaurya01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA116] hover:scale-110 transition"
                >
                  <SiLeetcode />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram className="hover:text-pink-500 hover:scale-110 transition" />
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-300">
                Tech Stack
              </h4>

              <div className="flex gap-4 text-3xl">
                <SiJavascript className="text-yellow-400" />
                <SiReact className="text-cyan-400" />
                <SiNodedotjs className="text-green-500" />
                <SiExpress className="text-gray-400" />
                <SiMongodb className="text-green-600" />
              </div>
            </div>
          </div>

          {/* ===== KEY SKILLS ===== */}
          {/* <div>
            <h4 className="font-semibold mb-3 text-gray-300">
              Key Skills
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "Java",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Bootstrap",
                "Git",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="cursor-pointer bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg 
                  border border-white/10 text-sm hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div> */}
          {/* ===== KEY SKILLS ===== */}
<div>
  <h4 className="font-semibold mb-4 text-gray-300 text-lg">
    💎 Key Skills
  </h4>

  <div className="flex flex-wrap gap-3">

    {[
      "JavaScript",
      "TypeScript",
      "Java",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "GitHub",
    ].map((skill) => (
      <span
        key={skill}
        className="
          px-4 py-2 rounded-full text-sm font-medium
          bg-gradient-to-r from-blue-500/20 to-cyan-400/20
          border border-cyan-400/30
          backdrop-blur-md
          text-gray-200
          cursor-pointer
          hover:scale-105
          hover:text-white
          hover:border-cyan-300
          hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
          transition duration-300
        "
      >
        {skill}
      </span>
    ))}

  </div>
</div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] 
            rounded-full object-cover border-4 border-white/20 
            shadow-[0_0_60px_rgba(34,197,94,0.4)] 
            hover:scale-110 duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
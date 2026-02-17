// // import React from "react";
// // import html from "../../public/html.png";
// // import css from "../../public/css.jpg";
// // import java from "../../public/java.png";
// // import javascript from "../../public/javascript.png";
// // import oracle from "../../public/oracle.png";
// // import spring from "../../public/spring.png";
// // import springBoot from "../../public/springBoot.jpg";
// // function Experiance() {
// //   const cardItem = [
// //     {
// //       id: 1,
// //       logo: html,
// //       name: "Html",
// //     },
// //     {
// //       id: 2,
// //       logo: css,
// //       name: "CSS",
// //     },
// //     {
// //         id: 4,
// //         logo: javascript,
// //         name: "JavaScript",
// //       },
// //     {
// //       id: 3,
// //       logo: java,
// //       name: "React js",
// //     },
// //     {
// //         id: 7,
// //         logo: springBoot,
// //         name: "Node js",
// //       },
// //       {
// //         id: 6,
// //         logo: spring,
// //         name: "Express js",
// //       },
    
// //     {
// //       id: 5,
// //       logo: oracle,
// //       name: "MongoDB",
// //     },
    
    
// //   ];
// //   return (
// //     <div
// //       name="Experience"
// //       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
// //     >
// //       <div>
// //         <h1 className="text-3xl font-bold mb-5">Experience</h1>
// //         <p className="  ">
// //           I've more than 6 months of experience in below technologies.
// //         </p>
// //         <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
// //           {cardItem.map(({ id, logo, name }) => (
// //             <div
// //               className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
// //               key={id}
// //             >
// //               <img src={logo} className="w-[150px] rounded-full" alt="" />
// //               <div>
// //                 <div className="">{name}</div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Experiance;



// import React from "react";

// function Experience() {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: [
//         { name: "HTML", logo: "/html.png" },
//         { name: "CSS", logo: "/css.jpg" },
//         { name: "JavaScript", logo: "/javascript.png" },
//                 { name: "TypeScript", logo: "/ts.png" },
//         { name: "React.js", logo: "/reactjs.png" },
//       ],
//     },
//     {
//       title: "Backend",
//       skills: [
//         { name: "Node.js", logo: "/node.png" },
//         { name: "Express.js", logo: "/express.png" },
//         { name: "REST APIs", logo: "/rest-api.png" },
//       ],
//     },
//     {
//       title: "Database",
//       skills: [
//         { name: "MongoDB", logo: "/mongodb.png" },
//         { name: "SQL", logo: "/sql.png" },
//       ],
//     },
//     {
//       title: "Tools & Others",
//       skills: [
//         { name: "Git", logo: "/git.png" },
//         { name: "GitHub", logo: "/github.png" },
//         { name: "Docker", logo: "/Docker.png" },

//         { name: "Postman", logo: "/Postman.png" },
//       ],
//     },
//   ];

//   return (
//     <section
//       id="Experience"
//       className="max-w-7xl mx-auto px-4 md:px-8 py-20"
//     >
//       {/* ===== Title ===== */}
//       <h1 className="text-4xl font-bold text-center mb-3">
//         Technical <span className="text-green-500">Skills</span>
//       </h1>

//       <p className="text-center text-gray-600 mb-16">
//         Technologies and tools I use to build scalable web applications
//       </p>

//       {/* ===== Categories ===== */}
//       <div className="space-y-14">
//         {skillCategories.map((category, index) => (
//           <div key={index}>
            
//             {/* Category Title */}
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//               {category.title}
//             </h2>

//             {/* Skills Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//               {category.skills.map((skill, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-white border rounded-lg p-4 shadow-sm
//                              hover:shadow-md transition duration-200"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={skill.name}
//                     className="w-10 h-10 object-contain"
//                   />

//                   <span className="font-medium text-gray-800">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Experience;














// add color 
import React from "react";

function Experience() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", logo: "/html.png" },
        { name: "CSS", logo: "/css.jpg" },
        { name: "JavaScript", logo: "/javascript.png" },
        { name: "TypeScript", logo: "/ts.png" },
        { name: "React.js", logo: "/reactjs.png" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", logo: "/node.png" },
        { name: "Express.js", logo: "/express.png" },
        { name: "REST APIs", logo: "/rest-api.png" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", logo: "/mongodb.png" },
        { name: "SQL", logo: "/sql.png" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", logo: "/git.png" },
        { name: "GitHub", logo: "/github.png" },
        { name: "Docker", logo: "/Docker.png" },
        { name: "Postman", logo: "/Postman.png" },
      ],
    },
  ];

  return (
    <section
      id="Experience"
      className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] 
      text-white py-20"
    >

      {/* ===== Glow ===== */}
      <div className="absolute w-[500px] h-[500px] 
      bg-green-500/20 blur-[120px] top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      {/* ===== Grid ===== */}
      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* ===== Title ===== */}
        <h1
          className="text-4xl font-bold text-center mb-3
          bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
          bg-clip-text text-transparent"
        >
          Technical Skills
        </h1>

        <p className="text-center text-gray-400 mb-16">
          Technologies and tools I use to build scalable web applications
        </p>

        {/* ===== Categories ===== */}
        <div className="space-y-14">

          {skillCategories.map((category, index) => (
            <div key={index}>

              {/* Category Title */}
              <h2
                className="text-2xl font-semibold mb-6
                bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
                bg-clip-text text-transparent"
              >
                {category.title}
              </h2>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 
                    bg-white/10 backdrop-blur-md 
                    border border-white/10 rounded-xl p-4
                    hover:bg-white/20 hover:-translate-y-1 
                    transition duration-300 shadow-lg"
                  >

                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />

                    <span className="font-medium text-gray-200">
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;

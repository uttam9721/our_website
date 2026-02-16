// import React from "react";
// import html from "../../public/html.png";
// import css from "../../public/css.jpg";
// import java from "../../public/java.png";
// import javascript from "../../public/javascript.png";
// import oracle from "../../public/oracle.png";
// import spring from "../../public/spring.png";
// import springBoot from "../../public/springBoot.jpg";
// function Experiance() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: html,
//       name: "Html",
//     },
//     {
//       id: 2,
//       logo: css,
//       name: "CSS",
//     },
//     {
//         id: 4,
//         logo: javascript,
//         name: "JavaScript",
//       },
//     {
//       id: 3,
//       logo: java,
//       name: "React js",
//     },
//     {
//         id: 7,
//         logo: springBoot,
//         name: "Node js",
//       },
//       {
//         id: 6,
//         logo: spring,
//         name: "Express js",
//       },
    
//     {
//       id: 5,
//       logo: oracle,
//       name: "MongoDB",
//     },
    
    
//   ];
//   return (
//     <div
//       name="Experience"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Experience</h1>
//         <p className="  ">
//           I've more than 6 months of experience in below technologies.
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img src={logo} className="w-[150px] rounded-full" alt="" />
//               <div>
//                 <div className="">{name}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experiance;



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
      className="max-w-7xl mx-auto px-4 md:px-8 py-20"
    >
      {/* ===== Title ===== */}
      <h1 className="text-4xl font-bold text-center mb-3">
        Technical <span className="text-green-500">Skills</span>
      </h1>

      <p className="text-center text-gray-600 mb-16">
        Technologies and tools I use to build scalable web applications
      </p>

      {/* ===== Categories ===== */}
      <div className="space-y-14">
        {skillCategories.map((category, index) => (
          <div key={index}>
            
            {/* Category Title */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {category.title}
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border rounded-lg p-4 shadow-sm
                             hover:shadow-md transition duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />

                  <span className="font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

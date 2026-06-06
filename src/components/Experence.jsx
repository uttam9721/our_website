import Stats from './Stats'

function Experience() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", logo: "/html.png" },
        { name: "CSS", logo: "/css.jpg" },
        { name: "Tailwind CSS", logo: "/Tailwind.png" },
        { name: "Bootstrap", logo: "/bootstrap.jpg" },
        { name: "JavaScript", logo: "/javascript.png" },
        { name: "TypeScript", logo: "/ts.png" },
        { name: "React.js", logo: "/reactjs.png" },
        { name: "Next.js", logo: "/next.png" },
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
        {/* <h1
          className="text-4xl font-bold text-center mb-3
          bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
          bg-clip-text text-transparent"
        >
          Technical Skills
        </h1> */}
         <h1 className="text-4xl font-bold mb-10 text-center">
  Technical{" "}
  <span
    className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent"
  >
    Skills
  </span>
</h1>

        <p className="text-center text-gray-400 mb-16">
          Technologies and tools I use to build scalable web applications
        </p>

        {/* ===== Categories ===== */}
        <div className="space-y-14">

          {skillCategories.map((category, index) => (
            <div key={index}>

              {/* Category Title */}
              {/* <h2
                className="text-2xl font-semibold mb-6
                bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
                bg-clip-text text-transparent"
              >
                {category.title}
              </h2> */}
              <h2
  className="text-2xl  font-bold mb-6
  bg-gradient-to-r from-[#8B0000] via-[#2563EB] to-[#B8860B]
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
<Stats/>
    </section>
  );
}

export default Experience;

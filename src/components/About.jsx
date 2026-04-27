import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] 
      text-white py-20"
    >

      {/* ===== Glow Effect ===== */}
      <div className="absolute w-[500px] h-[500px] 
      bg-green-500/20 blur-[120px] top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      {/* ===== Grid Background ===== */}
      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        <h1 className="text-4xl font-bold mb-10 text-center">
  About{" "}
  <span
    className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent"
  >
    Me
  </span>
</h1>


        {/* ===== Intro ===== */}
       <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 
  border border-white/10 hover:bg-white/10 transition duration-300 mt-12 
  max-w-4xl mx-auto text-center shadow-lg  mb-10">

  {/* Title */}
  {/* <h2 className="text-2xl sm:text-3xl font-semibold mb-4 
    bg-gradient-to-r from-cyan-400 to-blue-500 
    bg-clip-text text-transparent">
    About Me
  </h2> */}

  {/* Line */}
  <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

  {/* Content */}
  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
    I am a B.Tech graduate in Information Technology with a strong passion for 
    Full Stack Web Development. I specialize in building scalable and 
    user-friendly web applications using the MERN stack and modern technologies.
    <br /><br />
    I enjoy solving real-world problems through clean and efficient code, and I 
    continuously explore new tools like Docker and Kubernetes to grow as a developer.
  </p>

</div>

        {/* ===== Sections Grid ===== */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ===== Education ===== */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 
          border border-white/10 hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold text-green-400 mb-4">
              🎓 <span className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent"> Education</span>
            </h2>
            {/* <p className="text-gray-300">
              Bachelor of Technology (B.Tech) in Information Technology.
              Built a strong foundation in programming, data structures,
              software development, and web technologies.
            </p> */}
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
  Bachelor of Technology (B.Tech) in Information Technology from 
  Dr. A.P.J. Abdul Kalam Technical University, Lucknow. 
  Developed a strong foundation in programming, data structures, 
  software engineering, and modern web technologies.

              </li>
</ul>

          </div>

          {/* ===== Skills ===== */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 
          border border-white/10 hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold text-green-400 mb-4">
              💻 <span  className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent" > Skills & Expertise </span>
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>MERN Stack Development (MongoDB, Express, React, Node)</li>
              <li>RESTful API Design & Implementation</li>
              <li>Responsive UI Development with React.js</li>
              <li>MongoDB & SQL Database Management</li>
              <li>Version Control using Git & GitHub</li>
            </ul>
          </div>

          {/* ===== Professional Experience ===== */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">
              🧑‍💼 <span   className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent"> Professional Experience </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* ===== Company 1 ===== */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 
              border border-white/10 hover:bg-white/20 transition">

                <h3 className="font-bold text-lg">
                <span   className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent" >  Full Stack Web Developer Intern </span>
                </h3>

                <p className="text-green-400 font-medium">
                  Amzsoft Innovexa, Lucknow
                </p>

                <p className="text-sm text-gray-400 mb-3">
                  June 2024 — December 2024
                </p>

                <a
                  href="https://www.amzsoftinnovexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4 text-sm text-blue-400 hover:underline"
                >
                  🌐 Visit Company Website
                </a>

                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                  <li>Completed a 6-month MERN stack internship</li>
                  <li>Developed full stack web applications</li>
                  <li>Built responsive interfaces using React.js</li>
                  <li>Created backend APIs with Node.js & Express</li>
                  <li>Worked with MongoDB for database management</li>
                  <li>Collaborated using Git and Agile methodologies</li>
                </ul>

              </div>

              {/* ===== Company 2 ===== */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 
              border border-white/10 hover:bg-white/20 transition">

                <h3 className="font-bold text-lg">
                <span   className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent"> Full Stack Web Developer Intern </span>
                </h3>

                <p className="text-green-400 font-medium">
                  LzyCrazy Pvt Ltd
                </p>

                <p className="text-sm text-gray-400 mb-3">
                  November 2025 — April 2026
                </p>

                <a
                  href="https://www.lzycrazy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4 text-sm text-blue-400 hover:underline"
                >
                  🌐 Visit Company Website
                </a>

                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                  <li>Currently working on full stack MERN applications</li>
                  <li>Developing responsive frontend using React.js</li>
                  <li>Building secure backend APIs with Node.js & Express</li>
                  <li>Collaborating with team members on real-world projects</li>
                  <li>Implementing database solutions using MongoDB</li>
                </ul>

              </div>

            </div>
             
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 
  border border-white/10 hover:bg-white/20 transition mt-10">

  <h3 className="font-bold text-lg">
    <span className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
      bg-clip-text text-transparent">
      Frontend Developer
    </span>
  </h3>

  <p className="text-green-400 font-medium">
    I-Next Web Technologies Pvt Ltd
  </p>

  <p className="text-sm text-gray-400 mb-3">
    April 2026 — Present
  </p>

  <a
    href="https://inextwebtechnologies.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mb-4 text-sm text-blue-400 hover:underline"
  >
    🌐 Visit Company Website
  </a>

  <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
    <li>Working as a Frontend Developer building modern web applications</li>
    <li>Developing responsive UI using React.js and Tailwind CSS</li>
    <li>Integrating REST APIs and managing application state</li>
    <li>Improving performance and optimizing user experience</li>
    <li>Collaborating with backend developers and design teams</li>
  </ul>

</div>

          </div>

          {/* ===== Achievements ===== */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 
          border border-white/10 md:col-span-2 hover:bg-white/20 transition">

            <h2 className="text-xl font-semibold text-green-400 mb-4">
              🏆 <span   className="bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
    bg-clip-text text-transparent"> Achievements & Highlights </span>
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-300">

              <li>
                Solved <span className="font-semibold">180+ problems</span> on LeetCode
              </li>

              <li>
                Built <span className="font-semibold">10+ Frontend Projects</span>
              </li>

              <li>
                Developed <span className="font-semibold">5+ Full Stack Projects</span>
              </li>

              <li>Full Stack Web Development Certification — GeeksforGeeks</li>

              <li>
                Achieved <span className="font-semibold">3⭐ Java Rating</span> on HackerRank
              </li>

              <li>Java Programming Certification — HackerRank</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;

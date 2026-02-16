
import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="max-w-7xl mx-auto px-4 md:px-8 py-20"
    >
      {/* ===== Title ===== */}
      <h1 className="text-4xl font-bold mb-10 text-center">
        About <span className="text-green-500">Me</span>
      </h1>

      {/* ===== Intro ===== */}
      <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-16">
        I am a B.Tech graduate in Information Technology with a strong passion
        for Full Stack Web Development. Skilled in building scalable and
        user-friendly web applications using the MERN stack and modern web
        technologies. I enjoy solving real-world problems through clean,
        efficient code and continuously learning new tools like Docker and
        Kubernetes to grow as a developer.
      </p>

      {/* ===== Sections Grid ===== */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* ===== Education ===== */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            🎓 Education
          </h2>
          <p className="text-gray-700">
            Bachelor of Technology (B.Tech) in Information Technology.
            Built a strong foundation in programming, data structures,
            software development, and web technologies.
          </p>
        </div>

        {/* ===== Skills ===== */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            💻 Skills & Expertise
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>MERN Stack Development (MongoDB, Express, React, Node)</li>
            <li>RESTful API Design & Implementation</li>
            <li>Responsive UI Development with React.js</li>
            <li>MongoDB & SQL Database Management</li>
            <li>Version Control using Git & GitHub</li>
          </ul>
        </div>

        {/* ===== Experience ===== */}
       {/* ===== Professional Experience ===== */}
<div className="md:col-span-2">
  <h2 className="text-2xl font-semibold text-green-600 mb-6">
    🧑‍💼 Professional Experience
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* ===== Amzsoft Innovexa Card ===== */}
    <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
      <h3 className="font-bold text-lg">
        Full Stack Web Developer Intern
      </h3>

      <p className="text-green-600 font-medium">
        Amzsoft Innovexa, Lucknow
      </p>

      <p className="text-sm text-gray-500 mb-3">
        June 2024 — December 2024
      </p>

      {/* Website Link */}
      <a
        href="https://www.amzsoftinnovexa.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4 text-sm text-blue-600 hover:underline"
      >
        🌐 Visit Company Website
      </a>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
        <li>Completed a 6-month MERN stack internship</li>
        <li>Developed full stack web applications</li>
        <li>Built responsive interfaces using React.js</li>
        <li>Created backend APIs with Node.js & Express</li>
        <li>Worked with MongoDB for database management</li>
        <li>Collaborated using Git and Agile methodologies</li>
      </ul>
    </div>

    {/* ===== LzyCrazy Pvt Ltd Card ===== */}
    <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
      <h3 className="font-bold text-lg">
        Full Stack Web Developer Intern
      </h3>

      <p className="text-green-600 font-medium">
        LzyCrazy Pvt Ltd
      </p>

      <p className="text-sm text-gray-500 mb-3">
        December 2025 — Present
      </p>

      {/* Website Link */}
      <a
        href="https://www.lzycrazy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4 text-sm text-blue-600 hover:underline"
      >
        🌐 Visit Company Website
      </a>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
        <li>Currently working on full stack MERN applications</li>
        <li>Developing responsive frontend using React.js</li>
        <li>Building secure backend APIs with Node.js & Express</li>
        <li>Collaborating with team members on real-world projects</li>
        <li>Implementing database solutions using MongoDB</li>
      </ul>
    </div>

  </div>
</div>


        {/* ===== Achievements ===== */}
      {/* ===== Achievements ===== */}
<div className="bg-white shadow-lg rounded-xl p-6 border md:col-span-2">
  <h2 className="text-xl font-semibold text-green-600 mb-4">
    🏆 Achievements & Highlights
  </h2>

  <ul className="list-disc pl-5 space-y-2 text-gray-700">

    <li>
      Solved <span className="font-semibold">180+ problems</span> on LeetCode,
      strengthening data structures and algorithm skills.
    </li>

    <li>
      Built <span className="font-semibold">10+ Frontend Projects</span> using
      HTML, CSS, JavaScript, and React.js.
    </li>

    <li>
      Developed <span className="font-semibold">5+ Full Stack Projects</span>{" "}
      using the MERN stack (MongoDB, Express, React, Node.js).
    </li>

    <li>
      Full Stack Web Development Certification — GeeksforGeeks
    </li>

    <li>
      Achieved <span className="font-semibold">3⭐ Java Rating</span> on HackerRank
    </li>

    <li>
      Java Programming Certification — HackerRank
    </li>

  </ul>
</div>

      </div>
    </section>
  );
};

export default About;

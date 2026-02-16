
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
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* ===== LEFT CONTENT ===== */}
        <div className="md:w-1/2 space-y-6">

          {/* Title */}
          <h3 className="text-2xl font-semibold text-gray-700">
            Welcome To My Portfolio
          </h3>

          {/* ===== Typing Heading ===== */}
          <h1 className="text-4xl font-bold flex items-center gap-3">
            I am
            <span className="text-red-600">
              <ReactTyped
                strings={["Coder", "Developer", "Programmer"]}
                typeSpeed={60}
                backSpeed={50}
                backDelay={1000}
                loop
              />
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            Passionate and detail-oriented Full Stack Web Developer with hands-on
            experience building scalable web applications. Proficient in
            JavaScript, React, Node.js, Express.js, MongoDB, and RESTful APIs.
            Strong foundation in problem-solving, responsive UI development,
            and secure backend systems.
          </p>

          {/* ===== Social + Tech Icons ===== */}
          <div className="flex gap-16 flex-wrap">

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3">Available on</h4>
              <div className="flex gap-4 text-3xl text-gray-700">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-black cursor-pointer" />
                </a>
<a
  href="https://leetcode.com/u/uttammaurya01/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-[#FFA116] hover:scale-110 transition-all duration-200"
  aria-label="LeetCode"
>
  <SiLeetcode/>
</a>


                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Tech Stack Icons */}
            <div>
              <h4 className="font-semibold mb-3">Tech Stack</h4>
              <div className="flex gap-4 text-3xl">
                <SiJavascript className="text-yellow-500" />
                <SiReact className="text-blue-500" />
                <SiNodedotjs className="text-green-600" />
                <SiExpress className="text-gray-700" />
                <SiMongodb className="text-green-700" />
              </div>
            </div>
          </div>

          {/* ===== Key Skills ===== */}
          <div>
            <h4 className="font-semibold mb-3">Key Skills</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "HTML",
                "CSS",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-white px-4 py-2 rounded-lg shadow-sm border text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* ===== RIGHT IMAGE ===== */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-gray-400 shadow-lg"
          />
        </div>
{/* >>>>>>> 2d58d72 (add new feature) */}

      </div>
    </section>
  );
};

export default Home;

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Stats from "./Stats";
import { readmeContent } from "../data/readmeContent";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  const readmeSections = readmeContent.split("---").filter(section => section.trim() !== "");

  return (
    <section id="Github" className="relative py-24 border-t border-purple-500/20 bg-[#080214] min-h-screen">
      
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid z-0 pointer-events-none opacity-50"></div>
      <div className="absolute w-[600px] h-[600px] orb-pink top-0 left-[-200px] pointer-events-none z-0"></div>
      <div className="absolute w-[600px] h-[600px] orb-cyan bottom-0 right-[-200px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <FaGithub className="text-5xl text-white" />
          </div>
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2">Developer Profile</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            GitHub <span className="neon-text">Portfolio</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive look at my open-source contributions, code analytics, and developer journey.
          </p>
        </div>

        {/* NATIVE GITHUB STATS DASHBOARD */}
        <Stats />

      </div>
    </section>
  );
};

export default Github;

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Stats from "./Stats";
import { readmeContent } from "../data/readmeContent";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  // Split the README content by the horizontal rule "---"
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

        {/* <div className="mt-20 max-w-5xl mx-auto space-y-10">
          <h3 className="text-3xl font-display font-bold text-white mb-10 text-center flex items-center justify-center gap-4 relative z-20">
            <span className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            Full <span className="neon-text">README.md</span>
            <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
          </h3>

          {readmeSections.map((sectionContent, index) => (
            <div key={index} className="cyber-glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 transition-all duration-300 overflow-hidden relative">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] pointer-events-none"></div>
              
              <div className="prose prose-invert prose-lg max-w-none relative z-10
                prose-headings:font-display prose-headings:text-white
                prose-h1:text-4xl prose-h1:font-bold prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-4 prose-h1:mb-6
                prose-h2:text-2xl prose-h2:font-bold prose-h2:text-cyan-400 prose-h2:mt-4 prose-h2:mb-6
                prose-h3:text-xl prose-h3:text-purple-400
                prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-a:no-underline
                prose-strong:text-white
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-ul:text-gray-300 prose-li:marker:text-cyan-400
                prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-img:my-6
                prose-code:text-yellow-300 prose-code:bg-[#080214]/80 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-[#080214] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-xl
              ">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {sectionContent}
                </ReactMarkdown>
              </div>
              
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Github;

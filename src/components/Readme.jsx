import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { readmeContent } from "../data/readmeContent";

const Readme = () => {
  return (
    <section id="Readme" className="relative py-24 border-t border-purple-500/20 bg-[#080214] min-h-screen">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 cyber-grid z-0 pointer-events-none opacity-50"></div>
      <div className="absolute w-[600px] h-[600px] orb-pink top-0 left-[-200px] pointer-events-none z-0"></div>
      <div className="absolute w-[600px] h-[600px] orb-cyan bottom-0 right-[-200px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2">Original Profile</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            GitHub <span className="neon-text">README</span>
          </h1>
        </div>

        {/* Markdown Container */}
        <div className="cyber-glass p-6 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
          
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-white
            prose-h1:text-4xl prose-h1:font-bold prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-4 prose-h1:mb-6
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-cyan-400 prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:text-purple-400
            prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-a:no-underline
            prose-strong:text-white
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-ul:text-gray-300 prose-li:marker:text-cyan-400
            prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
            prose-code:text-yellow-300 prose-code:bg-[#080214]/80 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-[#080214] prose-pre:border prose-pre:border-white/10
          ">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {readmeContent}
            </ReactMarkdown>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Readme;

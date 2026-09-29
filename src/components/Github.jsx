import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Stats from "./Stats";
import { readmeContent } from "../data/readmeContent";
import { FaGithub, FaStar, FaCodeBranch, FaFolder } from "react-icons/fa";

const Github = () => {
  const readmeSections = readmeContent.split("---").filter(section => section.trim() !== "");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/uttam9721/repos?per_page=100&sort=updated")
      .then(res => res.json())
      .then(data => {
        // Filter out forks if desired, or just show all
        const myRepos = data.filter(repo => !repo.fork);
        setRepos(myRepos);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

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

        {/* GITHUB REPOSITORIES GRID */}
        <div className="mt-32 max-w-7xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-white mb-10 text-center flex items-center justify-center gap-4 relative z-20">
            <span className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Repositories</span>
            <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
          </h3>

          {loading ? (
            <div className="flex justify-center text-cyan-400 my-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <FaFolder className="text-3xl text-cyan-400 group-hover:text-pink-400 transition-colors shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors break-words">
                        {repo.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 flex-1 line-clamp-3 mb-6">
                    {repo.description || "No description provided for this repository."}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 font-bold">
                      <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                        <FaStar className="text-yellow-500" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                        <FaCodeBranch className="text-purple-500" /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Github;

import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaCode, FaBriefcase, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Projects", icon: <FaCode /> },
    { name: "Experience", icon: <FaBriefcase /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 
        backdrop-blur-xl bg-[#080214]/60 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">

          {/* ===== Logo ===== */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"></div>
              <img
                src={logo}
                alt="logo"
                className="relative z-10 h-10 w-10 rounded-full object-cover border border-cyan-400/50"
              />
            </div>

            <div>
              <h1 className="font-display font-bold text-lg leading-none text-white">
                Uttam <span className="neon-text">Kumar</span>
              </h1>
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest mt-1 hidden sm:block">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-300 text-sm tracking-wider uppercase">

            {navItems.map((item) => (
              <li key={item.name} className="cursor-pointer flex items-center gap-2">
                <Link
                  to={item.name}
                  smooth
                  duration={500}
                  offset={-70}
                  spy
                  activeClass="text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  className="hover:text-cyan-400 transition duration-300 flex items-center gap-2"
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}

          </ul>

        </div>
      </nav>

      {/* ===== Mobile Bottom Navigation Bar ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080214]/90 backdrop-blur-xl border-t border-white/10 pb-safe">
        <ul className="flex justify-between items-center px-2 py-2 overflow-x-auto hide-scrollbar">
          {navItems.map((item) => (
            <li key={item.name} className="flex-1 min-w-[64px]">
              <Link
                to={item.name}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="text-cyan-400 scale-110 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-all duration-300 gap-1"
              >
                <div className="text-xl">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-center">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

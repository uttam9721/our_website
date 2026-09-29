import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = ["Home", "About", "Projects", "Experience", "Github", "Contact"];

  return (
    <>
      {/* ===== Navbar ===== */}
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
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest mt-1">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-300 text-sm tracking-wider uppercase">

            {navItems.map((item) => (
              <li key={item} className="cursor-pointer">
                <Link
                  to={item}
                  smooth
                  duration={500}
                  offset={-70}
                  spy
                  activeClass="text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}

          </ul>

          {/* ===== Mobile Menu Button ===== */}
          <button
            onClick={() => setMenu(true)}
            className="md:hidden text-3xl text-cyan-400"
          >
            <IoMenuOutline />
          </button>

        </div>
      </nav>

      {/* ===== Mobile Overlay ===== */}
      {menu && (
        <div
          className="fixed inset-0 bg-[#080214]/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenu(false)}
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] 
        bg-[#080214]/90 backdrop-blur-2xl z-50 shadow-[-10px_0_30px_rgba(6,182,212,0.1)] 
        border-l border-white/5
        transform transition-transform duration-500 md:hidden 
        ${menu ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <IoClose
            size={30}
            className="cursor-pointer text-pink-400 hover:text-pink-300 transition-colors"
            onClick={() => setMenu(false)}
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col space-y-6 px-8 mt-6 text-lg font-display font-bold text-gray-300 uppercase tracking-widest">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenu(false)}
                className="block hover:text-cyan-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default Navbar;

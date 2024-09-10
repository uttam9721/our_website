import React, { useState } from 'react';
import pic from "../../public/photo.avif";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className='max-w-screen-2xl container mx-auto px-0 md:px-0 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white m-0'>
        <div className='flex justify-between items-center h-16 m-0'>
          
          {/* Brand Logo and Name */}
          <div className='flex space-x-2 m-0'>
            <img src={pic} className='h-12 w-12 rounded-full m-0' alt="img" />
            <h1 className='font-semibold text-xl cursor-pointer m-0'>
              Uttam <span className='text-green-500 text-2xl'>M</span>
              <p className='text-sm m-0'>Full Stack Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className='hidden md:flex space-x-8 m-0'>
              {navItems.map(({ id, text }) => (
                <li
                  className='hover:scale-105 duration-200 cursor-pointer m-0'
                  key={id}
                >
                  <Link to={text} smooth={true} duration={500} offset={-70}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden m-0'>
              {menu ? <IoClose size={24} /> : <IoMenuOutline size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className='m-0'>
            <ul className='md:hidden flex flex-col h-screen items-start justify-start space-y-4 text-left px-8 mt-16 m-0'>
              {navItems.map(({ id, text }) => (
                <li
                  className='hover:scale-105 duration-200 font-semibold cursor-pointer text-xl m-0'
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(false)}  // Close the menu when clicking on a link
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

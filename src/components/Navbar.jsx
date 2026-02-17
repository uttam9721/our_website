// // import React, { useState } from 'react';
// // import pic from "../../public/photo.avif";
// // import logo from "../../public/logo.jpg";
// // import { IoMenuOutline, IoClose } from "react-icons/io5";
// // import { Link } from 'react-scroll';

// // const Navbar = () => {
// //   const [menu, setMenu] = useState(false);

// //   const navItems = [
// //     { id: 1, text: "Home" },
// //     { id: 2, text: "About" },
// //     { id: 3, text: "Portfolio" },
// //     { id: 4, text: "Experience" },
// //     { id: 5, text: "Contact" },
// //   ];

// //   return (
// //     <>
// //       {/* Navbar Container */}
// //       <div className='max-w-screen-2xl container mx-auto px-0 md:px-0 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white m-0'>
// //         <div className='flex justify-between items-center h-16 m-0'>
          
// //           {/* Brand Logo and Name */}
// //           <div className='flex space-x-2 m-0'>
// //             <img src={logo} className='h-12 w-12 rounded-full m-0' alt="img" />
// //             <h1 className='font-semibold text-xl cursor-pointer m-0'>
// //               Uttam <span className='text-green-500 text-2xl'>Kumar</span>
// //               <p className='text-sm m-0'>Full Stack Web Developer</p>
// //             </h1>
// //           </div>

// //           {/* Desktop Navbar */}
// //           <div>
// //             <ul className='hidden md:flex space-x-8 m-0'>
// //               {navItems.map(({ id, text }) => (
// //                 <li
// //                   className='hover:scale-105 duration-200 cursor-pointer m-0'
// //                   key={id}
// //                 >
// //                   <Link to={text} smooth={true} duration={500} offset={-70}>
// //                     {text}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //             <div onClick={() => setMenu(!menu)} className='md:hidden m-0'>
// //               {menu ? <IoClose size={24} /> : <IoMenuOutline size={24} />}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Navbar */}
// //         <div
// //           className={`fixed top-0 right-0 w-[250px] h-screen bg-white shadow-lg transform ${
// //             menu ? 'translate-x-0' : 'translate-x-full'
// //           } transition-transform duration-300 ease-in-out z-50 m-0`}
// //         >
// //           {/* Close Button */}
// //           <div className="flex justify-end p-4">
// //             <IoClose size={24} className="cursor-pointer" onClick={() => setMenu(false)} />
// //           </div>

// //           {/* Mobile Menu Links */}
// //           <ul className='flex flex-col h-full items-start justify-start space-y-4 text-left px-8 mt-4 m-0'>
// //             {navItems.map(({ id, text }) => (
// //               <li
// //                 className='hover:scale-105 duration-200 font-semibold cursor-pointer text-xl m-0'
// //                 key={id}
// //               >
// //                 <Link
// //                   to={text}
// //                   smooth={true}
// //                   duration={500}
// //                   offset={-70}
// //                   onClick={() => setMenu(false)}  // Close the menu when clicking on a link
// //                 >
// //                   {text}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;
















// import React, { useState } from "react";
// import logo from "../../public/logo.jpg";
// import { IoMenuOutline, IoClose } from "react-icons/io5";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const navItems = [
//     "Home",
//     "About",
//     "Portfolio",
//     "Experience",
//     "Contact",
//   ];

//   return (
//     <>
//       {/* ===== Navbar ===== */}
//       <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
          
//           {/* ===== Logo ===== */}
//           <div className="flex items-center space-x-3 cursor-pointer">
//             <img
//               src={logo}
//               alt="logo"
//               className="h-10 w-10 rounded-full object-cover"
//             />
//             <div>
//               <h1 className="font-bold text-lg leading-none">
//                 Uttam <span className="text-green-500">Kumar</span>
//               </h1>
//               <p className="text-xs text-gray-600">
//                 Full Stack Developer
//               </p>
//             </div>
//           </div>

//           {/* ===== Desktop Menu ===== */}
//           <ul className="hidden md:flex space-x-8 font-medium">
//             {navItems.map((item) => (
//               <li key={item} className="cursor-pointer">
//                 <Link
//                   to={item}
//                   smooth
//                   duration={500}
//                   offset={-70}
//                   spy
//                   activeClass="text-green-500"
//                   className="hover:text-green-500 transition duration-200"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* ===== Mobile Menu Button ===== */}
//           <button
//             onClick={() => setMenu(true)}
//             className="md:hidden text-2xl"
//           >
//             <IoMenuOutline />
//           </button>
//         </div>
//       </nav>

//       {/* ===== Mobile Overlay ===== */}
//       {menu && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setMenu(false)}
//         />
//       )}

//       {/* ===== Mobile Drawer ===== */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[260px] bg-white z-50 shadow-xl transform transition-transform duration-300 md:hidden ${
//           menu ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-4">
//           <IoClose
//             size={28}
//             className="cursor-pointer"
//             onClick={() => setMenu(false)}
//           />
//         </div>

//         {/* Menu Links */}
//         <ul className="flex flex-col space-y-6 px-8 mt-6 text-lg font-semibold">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={item}
//                 smooth
//                 duration={500}
//                 offset={-70}
//                 onClick={() => setMenu(false)}
//                 className="block hover:text-green-500 transition"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;


















// add color
import React, { useState } from "react";
import logo from "../../public/logo.jpg";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = ["Home", "About", "Portfolio", "Experience", "Contact"];

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 
        backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">

          {/* ===== Logo ===== */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 rounded-full object-cover border border-white/20"
            />

            <div>
              <h1
                className="font-bold text-lg leading-none 
                bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
                bg-clip-text text-transparent"
              >
                Uttam Kumar
              </h1>

              <p className="text-xs text-gray-400">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-300">

            {navItems.map((item) => (
              <li key={item} className="cursor-pointer">

                <Link
                  to={item}
                  smooth
                  duration={500}
                  offset={-70}
                  spy
                  activeClass="text-green-400"
                  className="hover:text-green-400 transition duration-200"
                >
                  {item}
                </Link>

              </li>
            ))}

          </ul>

          {/* ===== Mobile Menu Button ===== */}
          <button
            onClick={() => setMenu(true)}
            className="md:hidden text-3xl text-white"
          >
            <IoMenuOutline />
          </button>

        </div>
      </nav>

      {/* ===== Mobile Overlay ===== */}
      {menu && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMenu(false)}
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] 
        bg-black/90 backdrop-blur-xl z-50 shadow-xl 
        transform transition-transform duration-300 md:hidden 
        ${menu ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <IoClose
            size={30}
            className="cursor-pointer text-white"
            onClick={() => setMenu(false)}
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col space-y-6 px-8 mt-6 text-lg font-semibold text-gray-200">

          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenu(false)}
                className="block hover:text-green-400 transition"
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

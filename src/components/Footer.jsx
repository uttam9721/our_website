// // import React from "react";
// // import {
// //   FaFacebook,
// //   FaTwitter,
// //   FaInstagram,
// //   FaLinkedinIn,
// // } from "react-icons/fa6";
// // import { SiNpm } from "react-icons/si";


// // function Footer() {
// //   return (
// //     <>
// //       <hr />
// //       <footer className="py-12">
// //         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
// //           <div className="flex flex-col items-center justify-center">
// //             <div className="flex space-x-4">
// //               <a
// //                 href="https://www.npmjs.com/package/cb-react-smart-loader"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Facebook"
// //               >
// //                  <SiNpm size={24} />
// //               </a>
// //               <a
// //                 href="https://www.facebook.com/share/aqaQwWoAyZZuRTbw/?mibextid=qi2Omg"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Facebook"
// //               >
// //                 <FaFacebook size={24} />
// //               </a>
// //               <a
// //                 href="https://x.com/Uttammaurya01?t=ktD3SvhJ4_ol6DZ8yfEvGA&s=08"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Twitter"
// //               >
// //                 <FaTwitter size={24} />
// //               </a>
// //               <a
// //                 href="https://www.instagram.com/iamuttam_maurya?utm_source=qr&igsh=MXNkZHh4MXE4MWczMw=="
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="Instagram"
// //               >
// //                 <FaInstagram size={24} />
// //               </a>
// //               <a
// //                 href="https://www.linkedin.com/in/uttam-kumar-23243823b"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 aria-label="LinkedIn"
// //               >
// //                 <FaLinkedinIn size={24} />
// //               </a>
// //             </div>
// //             <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
// //               <p className="text-sm">
// //                 &copy; 2024 Your Company. All rights reserved.
// //               </p>
// //               <p className="text-sm">Developed by ❤️ Uttam Maurya</p>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // }

// // export default Footer;




// import React from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";
// import { SiNpm, SiLeetcode } from "react-icons/si";

// function Footer() {
//   return (
//     <>
//       <hr />

//       <footer className="py-8 bg-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">

//           {/* ===== Name & Role ===== */}
//           <h2 className="text-xl font-semibold">
//             Uttam Maurya
//           </h2>

//           <p className="text-gray-600 text-sm mt-1">
//             Full Stack Web Developer (MERN)
//           </p>

//           {/* ===== Social Icons ===== */}
//           <div className="flex gap-6 text-xl mt-4 text-gray-700">

//             {/* Email */}
//             <a
//               href="mailto:uttammaurya377@gmail.com"
//               aria-label="Email"
//               className="hover:text-green-500 transition"
//             >
//               <FaEnvelope />
//             </a>

//             {/* GitHub */}
//             <a
//               href="https://github.com/uttam9721"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="hover:text-black transition"
//             >
//               <FaGithub />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/uttam-fullstack"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="hover:text-blue-600 transition"
//             >
//               <FaLinkedin />
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/iamuttam_maurya"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="hover:text-pink-500 transition"
//             >
//               <FaInstagram />
//             </a>

//             {/* NPM Package */}
//             <a
//               href="https://www.npmjs.com/package/cb-react-smart-loader"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="NPM"
//               className="hover:text-red-500 transition"
//             >
//               <SiNpm />
//             </a>

//             {/* LeetCode */}
//             <a
//               href="https://leetcode.com/u/uttammaurya01/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LeetCode"
//               className="hover:text-[#FFA116] transition"
//             >
//               <SiLeetcode />
//             </a>

//           </div>

//           {/* ===== Copyright ===== */}
//           <p className="text-gray-500 text-sm mt-6">
//             © {new Date().getFullYear()} Uttam Maurya. All rights reserved.
//           </p>

//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;















// add color 
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiNpm, SiLeetcode } from "react-icons/si";
import ChatWidget from './ChatWidget';

function Footer() {
  return (
    <>
      <footer
        className="relative overflow-hidden 
        bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] 
        text-white py-10"
      >

        {/* ===== Glow ===== */}
        <div className="absolute w-[400px] h-[400px] 
        bg-green-500/20 blur-[120px] top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2"></div>

        {/* ===== Grid ===== */}
        <div className="absolute inset-0 
        bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
        linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
        bg-[size:60px_60px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">

          {/* ===== Name & Role ===== */}
          <h2
            className="text-xl font-semibold 
            bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15] 
            bg-clip-text text-transparent"
          >
            Uttam Maurya
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Full Stack Web Developer (MERN)
          </p>

          {/* ===== Social Icons ===== */}
          <div className="flex gap-6 text-xl mt-5 text-gray-300">

            <a
              href="mailto:uttammaurya377@gmail.com"
              aria-label="Email"
              className="hover:text-green-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/uttam9721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/uttam-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/iamuttam_maurya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.npmjs.com/package/cb-react-smart-loader"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NPM"
              className="hover:text-red-400 hover:scale-110 transition"
            >
              <SiNpm />
            </a>

            <a
              href="https://leetcode.com/u/uttammaurya01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hover:text-[#FFA116] hover:scale-110 transition"
            >
              <SiLeetcode />
            </a>

          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/10 my-6"></div>

          {/* ===== Copyright ===== */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Uttam Maurya. All rights reserved.
          </p>

        </div>
      </footer>
      <ChatWidget />
    </>
  );
}

export default Footer;

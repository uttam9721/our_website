import React from 'react'
import pic from"../../public/photo.avif";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

const Home = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div className="flex flex-col md:flex-row">
     <div className="md:w-1/2 md:mt-24 space-y-2 order-2">
     <span className='text-xl'>Welcome In My Feed</span>
     <div className='flex space-x-1 text-2xl md:text-4xl'>
     <h1 >Hello, I'm a</h1>
     {/* <span className='text-red-700 font-bold '>Developer</span> */}
     <ReactTyped
                className='text-red-700 font-bold'
          // typedRef={setTyped}
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
     <p className='text-sm md:text-md text-justify'>A motivated and detail-oriented Full stack web developer with a solid foundation in both front-end and back-end technolo-
gies. Eager to apply my skills in HTML, CSS, JavaScript, React, Node.js,Express.js and MongoDB management to build and
enhance web applications. Seeking an entry-level position to leverage my technical skills and passion for continuous learning
to contribute to innovative web development projects.</p>
<br />

{/* social media */}
<div className='flex justify-between'>
<div className='space-y-2'>
<h1 className='font-bold'> Available on </h1>
     <ul className='flex space-x-5'>
      <li>
        {"  "} 
        <FaFacebookSquare className='text-2xl cursor-pointer'/>
        </li>
    <li> {" "} 
      <FaLinkedin  className='text-2xl cursor-pointer' />
      </li>
     <li>{" "}
       <FaInstagram className='text-2xl cursor-pointer' />
       </li>
     <li>{" "}
       <FaGithub className='text-2xl cursor-pointer' />
       </li>
      </ul>
      </div>
      {/* <div> */}
     <div className='space-y-2'>
     <h1 className='font-bold'>Currently working on  </h1>
     <div className='flex space-x-5'>
        <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
      <SiExpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
     </div>
     
      </div>
</div>
     </div>
     <div className="md-w-1/2 md:ml-48 md:mt-20 order">
     <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="img" /></div>
     </div>
    </div>
  )
}

export default Home

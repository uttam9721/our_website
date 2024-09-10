import React from 'react'

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p>
      I'm a Information & Technology undergrad, fueling my passion for crafting visually captivating and user-friendly interfaces, I wield a strong skill set in HTML, CSS, JavaScript, React, Nodejs, ExpressJS, MongoDB, SQL and currently learning Docker, Kubernetes.
I believe in creating innovative solutions that leave a positive impact, and I'm excited to collaborate with like-minded professionals on challenging projects that drive progress and change. Let's connect and explore how we can build something extraordinary together!
      </p>
      <br />
      <h1 className='text-green-600 font-semibold text-xl'>
        Education & Training
      </h1>
      <span>
        {/* [Degree/Certification],[Institution],[Year][Degree/Certification],
        [Institution],[Year][Relevant Course],[Platform/Institution],[Year] */}
        {/* [June, 2021] – [june ,2025] */}

    Currently pursuing a B.Tech in Information Technology with a strong foundation in programming and software development.
      </span>
      <br /><br />
      <h1 className='text-green-600 font-semibold text-xl'>
        Skills & Expertise
      </h1>
      <span>
        {/* Proficient in [Full StackWebDevelopment (MERN)] Experienced with
         [Software Tools/Technologies]Strong grasp of 
         [Design Principles/Concepts]Excellent problem-solving
          skills Effective communication and collaborator. */}
          Full Stack Web Development (MERN)
<li>
Proficient in developing and deploying web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Strong understanding of RESTful API design and implementation.
Expertise in responsive design, state management, and component-based architecture using React.js.
Backend Development
</li>
<li>
Experience with server-side programming using Node.js and Express.js.
Skilled in building and maintaining databases using MongoDB and SQL.
Frontend Development</li>
<li>

Proficient in HTML, CSS, JavaScript, and modern frontend frameworks.
Expertise in creating interactive user interfaces with React.js.
Programming Languages</li>
<li>

Expertise in C language with a deep understanding of data structures and algorithms.
Proficient in JavaScript, with experience in both frontend and backend development.
</li>

      </span> 
      <br /><br />
      <h1 className='text-green-600 font-semibold text-xl'>
        Professional Experience
      </h1>
      <span>
      Full Stack Web Developer (Intern)
Amzsoft Innovexa, [Lucknow]
[June, 2024] – [August,2024]
<li>
Completed a 3-month internship focused on full stack web development using the MERN stack.
</li>
<li>
Developed and maintained web applications, implementing both frontend and backend functionalities.
</li>
<li>
Collaborated with a team to design and deploy responsive and user-friendly interfaces using React.js.</li>
<li>
Worked on backend services with Node.js and Express.js, integrating with MongoDB for data management.
</li>
<li>
Gained hands-on experience in version control with Git and project management using Agile methodologies.
</li>

      </span> 
      <br /><br />
      <h1 className='text-green-600 font-semibold text-xl'>
        Achievements & Awards
      </h1>
      <span>
       {/* [Award/Recognition],[Organization Institution],[Year][Achievement],[Organization/Platform],[Year] */}
       Full Stack Web Development Certification
GeeksforGeeks

Successfully completed the Full Stack Web Development course.

Achieved a 3-star rating in Java on HackerRank.
Java Programming Certification
HackerRank
Earned a certificate for completing the Java programming Test.
      </span> 
      <br /><br />
      <h1 className='text-green-600 font-semibold text-xl'>
        {/* Mission Statement */}
      </h1>
      {/* <span>
        Proficient in [Programming Language] Experienced with
         [Software Tools/Technologies]Strong grasp of 
         [Design Principles/Concepts]Excellent problem-solving
          skills Effective communication and collaborator.
      </span>  */}
      </div>
    </div>

  )
}

export default About

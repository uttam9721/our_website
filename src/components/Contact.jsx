// // import axios from "axios";
// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import toast from "react-hot-toast";

// // function Contact() {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,  // Destructure reset from useForm
// //     formState: { errors },
// //   } = useForm();

// //   const onSubmit = async (data) => {
// //     const userInfo = {
// //       name: data.name,
// //       email: data.email,
// //       message: data.message,
// //     };
// //     try {
// //       await axios.post("https://getform.io/f/bvrejzeb", userInfo);
// //       toast.success("Your message has been sent");
// //       reset();  // Reset the form after a successful submission
// //     } catch (error) {
// //       console.log(error);
// //       toast.error("Something went wrong");
// //     }
// //   };

// //   return (
// //     <>
// //       <div
// //         name="Contact"
// //         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
// //       >
// //         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
// //         <span>Please fill out the form below to contact me</span>
// //         <div className="flex flex-col items-center justify-center mt-5">
// //           <form
// //             onSubmit={handleSubmit(onSubmit)}
// //             method="POST"
// //             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
// //           >
// //             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
// //             <div className="flex flex-col mb-4">
// //               <label className="block text-gray-700">FullName</label>
// //               <input
// //                 {...register("name", { required: true })}
// //                 className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 id="name"
// //                 name="name"
// //                 type="text"
// //                 placeholder="Enter your fullname"
// //               />
// //               {errors.name && <span>This field is required</span>}
// //             </div>
// //             <div className="flex flex-col mb-4">
// //               <label className="block text-gray-700">Email Address</label>
// //               <input
// //                 {...register("email", { required: true })}
// //                 className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 id="email"
// //                 name="email"
// //                 type="text"
// //                 placeholder="Enter your email address"
// //               />
// //               {errors.email && <span>This field is required</span>}
// //             </div>
// //             <div className="flex flex-col mb-4">
// //               <label className="block text-gray-700">Message</label>
// //               <textarea
// //                 {...register("message", { required: true })}
// //                 className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 id="message"
// //                 name="message"
// //                 placeholder="Enter your Query"
// //               />
// //               {errors.message && <span>This field is required</span>}
// //             </div>
// //             <button
// //               type="submit"
// //               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
// //             >
// //               Send
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Contact;












// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// function Contact() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       await axios.post("https://getform.io/f/bvrejzeb", data);
//       toast.success("Message sent successfully ✅");
//       reset();
//     } catch (error) {
//       toast.error("Something went wrong ❌");
//     }
//   };

//   return (
//     <section
//       id="Contact"
//       className="max-w-7xl mx-auto px-4 md:px-8 py-20"
//     >
//       {/* ===== Title ===== */}
//       <h1 className="text-4xl font-bold text-center mb-3">
//         Contact <span className="text-green-500">Me</span>
//       </h1>

//       <p className="text-center text-gray-600 mb-16">
//         Have a project or opportunity? Let’s connect.
//       </p>

//       {/* ===== Content ===== */}
//       <div className="grid md:grid-cols-2 gap-12 items-start">

//         {/* ===== LEFT SIDE — Contact Info ===== */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold">
//             Get in touch
//           </h2>

//           <p className="text-gray-600">
//             I’m open to internships, full-time roles, freelance work,
//             and collaboration on exciting projects.
//           </p>

//           <div className="space-y-3 text-gray-700">

//             <p>
//               📧 Email:{" "}
//               <a
//                 href="mailto:uttammaurya377@gmail.com"
//                 className="text-green-600 hover:underline"
//               >
//                 uttammaurya377@gmail.com
//               </a>
//             </p>

//             <p>📍 Location: Bangalore, India</p>

//             <p>
//               💼 LinkedIn:{" "}
//               <a
//                 href="https://www.linkedin.com/in/uttam-fullstack"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-600 hover:underline"
//               >
//                 linkedin.com/in/uttam-fullstack
//               </a>
//             </p>

//             <p>
//               🐙 GitHub:{" "}
//               <a
//                 href="https://github.com/uttam9721"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-600 hover:underline"
//               >
//                 github.com/uttam9721
//               </a>
//             </p>
//           </div>

//           {/* ===== Resume Download ===== */}
//           <a
//             href="/UttamKumarCV.pdf"
//             rel="noopener noreferrer"
//             target="_blank"
//             // download
//             className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-medium shadow"
//           >
//             📄 Download Resume
//           </a>
//         </div>

//         {/* ===== RIGHT SIDE — Contact Form ===== */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="bg-white shadow-lg rounded-xl p-8 space-y-5 border"
//         >
//           <h2 className="text-xl font-semibold">
//             Send a Message
//           </h2>

//           {/* Name */}
//           <div>
//             <input
//               {...register("name", { required: true })}
//               type="text"
//               placeholder="Full Name"
//               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">
//                 Name is required
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               {...register("email", {
//                 required: true,
//                 pattern: /^\S+@\S+$/i,
//               })}
//               type="email"
//               placeholder="Email Address"
//               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 Valid email is required
//               </p>
//             )}
//           </div>

//           {/* Message */}
//           <div>
//             <textarea
//               {...register("message", { required: true })}
//               rows="5"
//               placeholder="Your Message"
//               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             {errors.message && (
//               <p className="text-red-500 text-sm mt-1">
//                 Message is required
//               </p>
//             )}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;




















// add color 
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bvrejzeb", data);
      toast.success("Message sent successfully ✅");
      reset();
    } catch (error) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <section
      id="Contact"
      className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] 
      text-white py-20"
    >

      {/* ===== Glow ===== */}
      <div className="absolute w-[500px] h-[500px] 
      bg-green-500/20 blur-[120px] top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      {/* ===== Grid ===== */}
      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* ===== Title ===== */}
        <h1
          className="text-4xl font-bold text-center mb-3
          bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
          bg-clip-text text-transparent"
        >
          Contact Me
        </h1>

        <p className="text-center text-gray-400 mb-16">
          Have a project or opportunity? Let’s connect.
        </p>

        {/* ===== Content ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ===== LEFT SIDE ===== */}
          <div className="space-y-6">

            <h2
              className="text-2xl font-semibold
              bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
              bg-clip-text text-transparent"
            >
              Get in touch
            </h2>

            <p className="text-gray-300">
              I’m open to internships, full-time roles, freelance work,
              and collaboration on exciting projects.
            </p>

            <div className="space-y-3 text-gray-300">

              <p>
                📧 Email:{" "}
                <a
                  href="mailto:uttammaurya377@gmail.com"
                  className="text-green-400 hover:underline"
                >
                  uttammaurya377@gmail.com
                </a>
              </p>

              <p>📍 Location: Bangalore, India</p>

              <p>
                💼 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/uttam-fullstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  linkedin.com/in/uttam-fullstack
                </a>
              </p>

              <p>
                🐙 GitHub:{" "}
                <a
                  href="https://github.com/uttam9721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  github.com/uttam9721
                </a>
              </p>
            </div>

            {/* Resume Button */}
            <a
              href="/UttamKumarCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 
              
               px-6  
             py-3 rounded-lg font-medium text-black
  bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
  hover:brightness-110 hover:scale-[1.02]
  transition duration-300
  "
            >
              📄 Download Resume
            </a>

          </div>

          {/* ===== RIGHT SIDE — FORM ===== */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/10 backdrop-blur-md 
            border border-white/10 rounded-xl p-8 space-y-5 shadow-lg"
          >

            <h2
              className="text-xl font-semibold
              bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
              bg-clip-text text-transparent"
            >
              Send a Message
            </h2>

            {/* Name */}
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 
                rounded-lg px-4 py-3 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  Name is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 
                rounded-lg px-4 py-3 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  Valid email is required
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message", { required: true })}
                rows="5"
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 
                rounded-lg px-4 py-3 text-white 
                placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  Message is required
                </p>
              )}
            </div>

            {/* Submit */}
            {/* <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 
              text-white py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button> */}
            <button
  type="submit"
  className="w-full py-3 rounded-lg font-medium text-black
  bg-gradient-to-r from-[#1d4ed8] via-[#22c55e] to-[#facc15]
  hover:brightness-110 hover:scale-[1.02]
  transition duration-300
  shadow-[0_0_25px_rgba(34,197,94,0.5)]"
>
  Send Message
</button>


          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;

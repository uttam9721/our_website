import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post("https://getform.io/f/bvrejzeb", data);
      toast.success("Message sent successfully 🚀");
      reset();
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="relative py-24 border-t border-cyan-500/20 bg-[#080214]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid z-0 pointer-events-none"></div>
      <div className="absolute w-[600px] h-[600px] orb-purple top-1/4 left-[-200px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2">Connect</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Get In <span className="neon-text">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project, opportunity, or just want to say hi? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-10">
            <div className="cyber-glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently open to full-time roles, freelance opportunities, and exciting collaborations.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:uttammaurya377@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-[#080214] transition-all duration-300">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">uttammaurya377@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-[#080214] transition-all duration-300">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Location</p>
                    <p className="text-gray-300 group-hover:text-purple-400 transition-colors">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/UttamKumarCV.pdf" target="_blank" rel="noopener noreferrer" 
                className="flex-1 text-center py-4 rounded-xl font-bold text-white
                bg-gradient-to-r from-cyan-600 to-blue-600 
                shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]
                hover:scale-[1.02] transition-all duration-300 border border-cyan-400/50">
                📄 Download Resume
              </a>
              <a href="https://meet.google.com/new" target="_blank" rel="noopener noreferrer" 
                className="flex-1 text-center py-4 rounded-xl font-bold text-white
                bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10
                hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]
                hover:scale-[1.02] transition-all duration-300 flex justify-center items-center gap-2">
                🎥 Start Google Meet
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="cyber-glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none rounded-bl-full"></div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              
              <div className="space-y-1">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-[#080214]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
                {errors.name && <p className="text-pink-500 text-xs font-bold pl-2">Name is required</p>}
              </div>

              <div className="space-y-1">
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-[#080214]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                />
                {errors.email && <p className="text-pink-500 text-xs font-bold pl-2">Valid email is required</p>}
              </div>

              <div className="space-y-1">
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#080214]/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-all resize-none"
                />
                {errors.message && <p className="text-pink-500 text-xs font-bold pl-2">Message is required</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-white
                bg-gradient-to-r from-purple-600 to-pink-600 
                hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]
                hover:scale-[1.02] transition-all duration-300 border border-pink-400/50 disabled:opacity-50 disabled:hover:scale-100 mt-4"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

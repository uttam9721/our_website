import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCopy, 
  FaCheck, 
  FaFilePdf, 
  FaVideo, 
  FaPaperPlane, 
  FaPhoneAlt 
} from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("uttammaurya377@gmail.com");
    setCopied(true);
    toast.success("Email copied: uttammaurya377@gmail.com");
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/uttammaurya377@gmail.com",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: `New Portfolio Message from ${data.name}: ${data.subject}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.data && response.data.success === "false" && response.data.message?.includes("Activation")) {
        toast.success("Message received! Click the activation link sent to uttammaurya377@gmail.com.");
      } else {
        toast.success("Message sent successfully! Landed directly in uttammaurya377@gmail.com.");
      }

      // Optional dual backup
      try {
        await axios.post("https://getform.io/f/bvrejzeb", data);
      } catch (_) {
        // Silent catch for backup
      }

      reset();
    } catch (error) {
      toast.error("Network error. Opening your default email client...");
      const mailtoUrl = `mailto:uttammaurya377@gmail.com?subject=${encodeURIComponent(
        data.subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative py-24 bg-[#060913] text-slate-200 overflow-hidden border-t border-slate-800/80"
    >
      <div className="absolute inset-0 dot-matrix pointer-events-none opacity-30"></div>
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <FaEnvelope className="text-xs" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Let's discuss <span className="text-heading-gradient">engineering & opportunities</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you have a full-time engineering opening, a consulting project, or want to discuss architecture, my inbox is open.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Fastest response via email. Available for opportunities across India and remote international roles.
                </p>
              </div>

              {/* Email Block with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 text-base shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      Primary Email
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 font-mono truncate">
                      uttammaurya377@gmail.com
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0"
                  title="Copy email address"
                >
                  {copied ? (
                    <FaCheck className="text-emerald-400 text-sm" />
                  ) : (
                    <FaCopy className="text-sm" />
                  )}
                </button>
              </div>

              {/* Direct Phone Block */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-base shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      Direct Phone
                    </p>
                    <a href="tel:+919721039470" className="text-xs sm:text-sm text-slate-200 font-mono hover:text-emerald-400 transition truncate">
                      +91 9721039470
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+919721039470"
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition shrink-0"
                >
                  Call
                </a>
              </div>

              {/* Location & Live Time Block */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-base shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      Location & Timezone
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      Bangalore, India • IST (UTC+5:30)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300 shrink-0">
                  <FaClock className="text-slate-400 text-[10px]" />
                  <span>{currentTime || "IST"}</span>
                </div>
              </div>

              {/* Preferred Job Locations Card */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c1527] via-slate-900/90 to-[#080d19] border border-sky-500/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 text-xs">
                      <FaMapMarkerAlt />
                    </div>
                    <p className="text-[10px] font-mono uppercase text-sky-300 font-semibold tracking-wider">
                      Preferred Job Locations
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open to Relocate
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Currently based in Bangalore, actively exploring Full-Time opportunities across:
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Noida", "Gurgaon", "Delhi NCR", "Pune", "Bangalore"].map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/90 text-sky-300 border border-slate-700/80 font-medium hover:border-sky-500/50 hover:bg-slate-800 transition shadow-sm"
                    >
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="/Uttam_Kumar_CV.pdf?v=20261031"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Uttam_Kumar_CV.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20 transition"
                >
                  <FaFilePdf />
                  <span>Download CV</span>
                </a>

                <a
                  href="https://meet.google.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
                >
                  <FaVideo className="text-sky-400" />
                  <span>Schedule Meet</span>
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <span className="text-emerald-400 text-lg">⚡</span>
              <span>Typically responds within <strong>12 to 24 hours</strong>.</span>
            </div>
          </div>

          {/* Right Column: High-Performance Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and the message will land directly in my inbox.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Smith"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 font-mono">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 font-mono">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Subject / Discussion Topic <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Engineering Role / Project Collaboration"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about the role, technical scope, or timeline..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 font-mono">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 transition shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Transmitting message...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <div className="pt-1 text-center">
                  <p className="text-[11px] text-slate-500 font-mono">
                    Direct delivery to <a href="mailto:uttammaurya377@gmail.com" className="text-sky-400 hover:underline">uttammaurya377@gmail.com</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

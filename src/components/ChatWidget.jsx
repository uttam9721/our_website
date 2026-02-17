// import React, { useState } from "react";
// import { FaRobot, FaTimes, FaCommentDots, FaMicrophone } from "react-icons/fa";

// function ChatWidget() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* ================= POPUP CARD ================= */}
//       {open && (
//         <div className="fixed bottom-24 right-6 w-[320px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">

//           {/* Glow Background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-green-400/10 to-yellow-300/10 blur-2xl"></div>

//           <div className="relative p-6 text-center">

//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-black"
//             >
//               <FaTimes />
//             </button>

//             {/* Bot Icon */}
//             <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-yellow-300 flex items-center justify-center text-white text-2xl shadow-lg">
//               <FaRobot />
//             </div>

//             {/* Title */}
//             <h2 className="text-xl font-semibold mt-4">👋 Hi there!</h2>

//             {/* Message */}
//             <p className="text-gray-600 mt-2">
//               How can I help you with{" "}
//               <span className="text-blue-600 font-medium">
//                 Uttam Maurya
//               </span>{" "}
//               today?
//             </p>

//             {/* Buttons */}
//             <div className="mt-5 flex gap-3 justify-center">

//               <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
//                 <FaCommentDots /> Chat
//               </button>

//               <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
//                 <FaMicrophone /> Voice
//               </button>

//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= FLOAT BUTTON ================= */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 w-16 h-16 rounded-full 
//         bg-gradient-to-br from-blue-600 via-green-400 to-yellow-300 
//         text-white text-2xl shadow-2xl flex items-center justify-center
//         hover:scale-110 transition z-50"
//       >
//         <FaRobot />
//       </button>
//     </>
//   );
// }

// export default ChatWidget;



import React, { useState, useRef } from "react";
import {
  FaRobot,
  FaTimes,
  FaCommentDots,
  FaMicrophone,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const recognitionRef = useRef(null);

  // ================= SEND MESSAGE =================
  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { text, sender: "user" };
    const botReply = {
      text: getBotReply(text),
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  // ================= SIMPLE BOT =================
  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi"))
      return "Hello 👋 How can I assist you?";

    if (msg.includes("project"))
      return "You can check our projects on the website.";

    if (msg.includes("contact"))
      return "Email: uttammaurya377@gmail.com";

    return "Thanks for your message! We'll respond soon.";
  };

  // ================= VOICE =================
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";

    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      sendMessage(voiceText);
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
  };

  return (
    <>
      {/* ================= CHAT POPUP ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[340px] h-[480px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-green-400 to-yellow-300 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot /> Assistant
              </div>

              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              />

              {/* Send */}
              <button
                onClick={() => sendMessage(input)}
                className="bg-blue-600 text-white px-3 rounded-lg"
              >
                <FaCommentDots />
              </button>

              {/* Voice */}
              <motion.button
                onClick={startVoice}
                animate={
                  listening
                    ? { scale: [1, 1.2, 1], boxShadow: "0 0 20px #22c55e" }
                    : { scale: 1 }
                }
                transition={{ repeat: listening ? Infinity : 0, duration: 1 }}
                className="bg-green-500 text-white px-3 rounded-lg"
              >
                <FaMicrophone />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FLOAT BUTTON ================= */}
      <motion.button
        onClick={() => setOpen(!open)}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full 
        bg-gradient-to-br from-blue-600 via-green-400 to-yellow-300 
        text-white text-2xl shadow-2xl flex items-center justify-center
        hover:scale-110 z-50"
      >
        <FaRobot />
      </motion.button>
    </>
  );
}

export default ChatWidget;

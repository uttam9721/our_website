import React from "react";
import CountUp from "react-countup";

const statsData = [
  { label: "Projects", value: 10 },
  { label: "LeetCode Problems", value: 180 },
  { label: "Experience (Months)", value: 10 },
  { label: "Technologies", value: 10 },
];

const Stats = () => {
  return (
    <section
      id="Stats"
      className="relative py-24 overflow-hidden 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#030014] text-white"
    >

      {/* ===== GRID BACKGROUND (same as hero) ===== */}
      <div className="absolute inset-0 
      bg-[linear-gradient(#0ea5e91a_1px,transparent_1px),
      linear-gradient(90deg,#0ea5e91a_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      {/* ===== GLOW EFFECT ===== */}
      <div className="absolute w-[500px] h-[500px] 
      bg-green-500/20 blur-[120px] top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16 
        bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 
        bg-clip-text text-transparent">
          My Stats 
        </h2>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {statsData.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl 
              bg-white/5 backdrop-blur-xl border border-white/10 
              shadow-[0_0_30px_rgba(34,211,238,0.1)] 
              hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] 
              hover:-translate-y-2 transition duration-300"
            >

              {/* Number */}
              <h3 className="text-3xl font-bold 
              bg-gradient-to-r from-cyan-400 to-blue-500 
              bg-clip-text text-transparent">

                <CountUp end={item.value} duration={2} />+
              </h3>

              {/* Label */}
              <p className="text-gray-400 mt-3 group-hover:text-gray-200 transition">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;
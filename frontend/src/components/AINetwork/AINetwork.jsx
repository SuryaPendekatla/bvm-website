import { motion, useMotionValue } from "framer-motion";

const nodes = [
  { name: "AI Agents", top: "28%", left: "20%" },
  { name: "Cloud", top: "65%", left: "25%" },
  { name: "Security", top: "50%", left: "8%" },
  { name: "Automation", top: "28%", left: "75%" },
  { name: "Data & ML", top: "15%", left: "60%" },
  { name: "Modernization", top: "65%", left: "75%" },
];

export default function AINetwork() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left - rect.width / 2) * 0.03
    );

    mouseY.set(
      (e.clientY - rect.top - rect.height / 2) * 0.03
    );
  };

  return (
    <motion.div
      className="relative w-full max-w-[850px] h-[420px] md:h-[650px]"
      onMouseMove={handleMouseMove}
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-purple-500/5 blur-[160px] rounded-full" />

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-purple-600/15 blur-[140px]" />
      </div>

      {/* Floating Particles */}
      {[...Array(25)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Orbit Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute w-[250px] h-[120px] border border-purple-500/20 rounded-full" />
        <div className="absolute w-[420px] h-[200px] border border-cyan-500/10 rounded-full" />
        <div className="absolute w-[580px] h-[280px] border border-white/10 rounded-full" />
      </motion.div>

      {/* Orbiting Satellite */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
        </div>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">

        <line x1="350" y1="275" x2="150" y2="160" stroke="rgba(255,255,255,0.15)" />
        <line x1="350" y1="275" x2="170" y2="360" stroke="rgba(255,255,255,0.15)" />
        <line x1="350" y1="275" x2="90" y2="280" stroke="rgba(255,255,255,0.15)" />
        <line x1="350" y1="275" x2="550" y2="160" stroke="rgba(255,255,255,0.15)" />
        <line x1="350" y1="275" x2="470" y2="90" stroke="rgba(255,255,255,0.15)" />
        <line x1="350" y1="275" x2="560" y2="360" stroke="rgba(255,255,255,0.15)" />

        {/* Animated Data Packets */}
        <motion.circle
          r="3"
          fill="#22d3ee"
          animate={{
            cx: [350, 150],
            cy: [275, 160],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          r="3"
          fill="#a855f7"
          animate={{
            cx: [350, 550],
            cy: [275, 160],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          r="3"
          fill="#06b6d4"
          animate={{
            cx: [350, 560],
            cy: [275, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* AI Core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-8 h-8 rounded-full bg-white shadow-[0_0_150px_#9333ea]" />

        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl" />

        <p className="mt-4 text-center text-xs md:text-sm tracking-[0.2em] text-slate-300 whitespace-nowrap">
          BVM AI CORE
        </p>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            top: node.top,
            left: node.left,
          }}
        >
          <div className="mb-3 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-xs text-slate-200 whitespace-nowrap">
              {node.name}
            </p>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_25px_#9333ea]"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
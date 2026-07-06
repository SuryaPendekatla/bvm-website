import { motion, useMotionValue, useSpring } from "framer-motion";

interface NetworkNode {
  name: string;
  x: number;
  y: number;
}

// Defined on a uniform 0-100 scale for perfect responsiveness
const nodes: NetworkNode[] = [
  { name: "AI Agents", x: 25, y: 35 },
  { name: "Cloud", x: 30, y: 65 },
  { name: "Security", x: 15, y: 53 },
  { name: "Automation", x: 70, y: 35 },
  { name: "Data & ML", x: 58, y: 24 },
  { name: "Modernization", x: 70, y: 65 },
];

export default function AINetwork() {
  // Smooth parallax tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const mouseX = useSpring(rawMouseX, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(rawMouseY, { stiffness: 40, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawMouseX.set((e.clientX - rect.left - rect.width / 2) * 0.04);
    rawMouseY.set((e.clientY - rect.top - rect.height / 2) * 0.04);
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  };

  return (
    /* 1. Uses bg-transparent to sit naturally on top of your existing page background.
      2. The style mask-image softly bleeds the edges so there's never a harsh "box" boundary.
    */
    <div
      className="w-full flex items-center justify-center bg-transparent overflow-visible p-4 select-none"
      style={{
        WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        maskImage: "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
      }}
    >
      <motion.div
        className="relative w-full max-w-[850px] aspect-[4/3] md:aspect-[1.3/1]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: mouseX, y: mouseY }}
      >
        {/* Soft atmospheric radial glow layers blending out */}
        <div className="absolute inset-0 bg-purple-500/5 blur-[70px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-purple-600/10 blur-[50px] rounded-full pointer-events-none" />

        {/* Ambient floating background particles */}
        {[...Array(20)].map((_: unknown, i: number) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 pointer-events-none"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.6, 0.15],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Responsive layout vectors */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Geometrically aligned constellation orbit rings */}
          <g className="opacity-20 stroke-purple-500 fill-none" strokeWidth="0.12">
            <ellipse cx="50" cy="50" rx="22" ry="11" transform="rotate(-12 50 50)" />
            <ellipse cx="50" cy="50" rx="36" ry="18" transform="rotate(-8 50 50)" className="stroke-cyan-500/40" />
            <ellipse cx="50" cy="50" rx="48" ry="24" transform="rotate(-4 50 50)" />
          </g>

          {/* Central network branches connecting elements */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.18">
            {nodes.map((node: NetworkNode, index: number) => (
              <line key={`line-${index}`} x1="50" y1="50" x2={node.x} y2={node.y} />
            ))}
          </g>

          {/* Dynamic data pulses riding down network paths */}
          {nodes.map((node: NetworkNode, index: number) => (
            <motion.circle
              key={`packet-${index}`}
              r="0.35"
              fill={index % 2 === 0 ? "#22d3ee" : "#a855f7"}
              initial={{ cx: 50, cy: 50 }}
              animate={{
                cx: [50, node.x],
                cy: [50, node.y],
              }}
              transition={{
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
            />
          ))}
        </svg>

        {/* Orbiting Satellite (Cyan stellar graphic match) */}
        <div className="absolute inset-0 pointer-events-none animate-[spin_20s_linear_infinite]">
          <div className="absolute top-[38%] left-[24%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
        </div>

        {/* Outer Interface Hub Nodes */}
        {nodes.map((node: NetworkNode, index: number) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ top: `${node.y}%`, left: `${node.x}%` }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Minimal frosted glass contextual badge */}
            <div className="mb-2 px-2.5 py-0.5 rounded-md bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="text-[10px] md:text-xs font-medium text-slate-200 tracking-wide block whitespace-nowrap">
                {node.name}
              </span>
            </div>

            {/* Radiant core map point */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-purple-400/30 blur-sm"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] border border-white/20" />
            </div>
          </motion.div>
        ))}

        {/* BVM AI Core Axis */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-14 h-14 rounded-full bg-purple-500/20 blur-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_25px_#ffffff,0_0_45px_#9333ea]" />
          </div>

          <span className="mt-4 text-[10px] md:text-xs font-semibold tracking-[0.25em] text-slate-200 whitespace-nowrap drop-shadow-md">
            BVM AI CORE
          </span>
        </div>
      </motion.div>
    </div>
  );
}

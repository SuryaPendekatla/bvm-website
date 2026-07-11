import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedBeam from "./AnimatedBeam";
import BeamNode from "./BeamNode";
import { apis } from "./apiBeamData";
import whitebooksIcon from "../../assets/logos/whitebooks-icon.svg";

const curvatures = [90, 30, -30, -90];

export default function ApiBeamDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rightRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-7xl h-[640px]"
    >
      {/* Left column — API nodes */}
      <div className="absolute left-0 top-0 h-full w-40 flex flex-col justify-between py-6">
        {apis.map((api, index) => {
          const Icon = api.icon;

          return (
            <div key={api.title} className="flex items-center gap-3">
              <BeamNode ref={leftRefs[index]} className="size-14 shrink-0">
                <Icon className="w-6 h-6 text-cyan-300" />
              </BeamNode>
              <span className="text-xs font-medium text-slate-300 leading-snug">
                {api.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Center — WhiteBooks */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <a
          href="https://whitebooks.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore WhiteBooks"
          className="group relative flex items-center justify-center"
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full blur-2xl"
            style={{
              translateX: "-50%",
              translateY: "-50%",
              background:
                "radial-gradient(circle, rgba(34,211,238,0.75) 0%, rgba(168,85,247,0.55) 55%, transparent 75%)",
            }}
            animate={{ opacity: [0.6, 1, 0.6], scale: [0.85, 1.15, 0.85] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <BeamNode
            ref={centerRef}
            className="size-20 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.9)]"
          >
            <img src={whitebooksIcon} alt="WhiteBooks" className="w-10 h-10" />
          </BeamNode>
        </a>
        <span className="text-[11px] uppercase tracking-widest text-slate-400">
          WhiteBooks
        </span>
      </div>

      {/* Right column — response snippets */}
      <div className="absolute right-0 top-0 h-full w-72 flex flex-col justify-between py-6">
        {apis.map((api, index) => (
          <div
            key={api.title}
            ref={rightRefs[index]}
            className="rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 font-mono text-[10px] leading-relaxed"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-cyan-300 font-semibold">{api.method}</span>
              <span className="text-slate-400 truncate">{api.path}</span>
            </div>
            <div className="text-emerald-400 mb-1">
              {api.status} · {api.latency}
            </div>
            {api.lines.map((line) => (
              <div key={line} className="text-slate-300 truncate">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Beams */}
      {apis.map((api, index) => (
        <div key={api.title}>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRefs[index]}
            toRef={centerRef}
            curvature={curvatures[index]}
            duration={4 + index * 0.4}
            delay={index * 0.2}
            startGap={28}
            endGap={50}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightRefs[index]}
            curvature={curvatures[index]}
            duration={4 + index * 0.4}
            delay={index * 0.2}
            reverse
            startGap={50}
            endGap={28}
          />
        </div>
      ))}
    </div>
  );
}

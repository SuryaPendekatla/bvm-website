import { useRef } from "react";
import { motion } from "framer-motion";
import OrthogonalBeam from "./OrthogonalBeam";
import BeamNode from "./BeamNode";
import { apis } from "./apiBeamData";
import whitebooksIcon from "../../assets/logos/whitebooks-icon.svg";

export default function ApiBeamDiagramMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div ref={containerRef} className="relative">
      <div className="flex gap-4">
        {/* Spine — WhiteBooks hub, vertically centered against the cards */}
        <div className="w-16 shrink-0 flex flex-col items-center justify-center gap-2">
          <a
            href="https://whitebooks.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore WhiteBooks"
            className="group relative flex items-center justify-center"
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full blur-2xl"
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
              ref={hubRef}
              className="size-16 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.9)]"
            >
              <img src={whitebooksIcon} alt="WhiteBooks" className="w-8 h-8" />
            </BeamNode>
          </a>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 text-center leading-tight">
            WhiteBooks
          </span>
        </div>

        {/* API cards */}
        <div className="flex-1 space-y-6 min-w-0">
          {apis.map((api, index) => {
            const Icon = api.icon;

            return (
              <div
                key={api.title}
                ref={cardRefs[index]}
                className="relative z-10 rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-[#0A1428] shrink-0">
                    <Icon className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {api.title}
                  </span>
                </div>

                <div className="font-mono text-[11px] leading-relaxed">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyan-300 font-semibold">
                      {api.method}
                    </span>
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Beams */}
      {apis.map((api, index) => (
        <OrthogonalBeam
          key={api.title}
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={cardRefs[index]}
          bendGap={24}
          duration={4 + index * 0.4}
          delay={index * 0.2}
          startGap={8}
          endGap={12}
        />
      ))}
    </div>
  );
}

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface RingDef {
  rotation: number;
  rx: number;
  ry: number;
}

const RINGS: RingDef[] = [
  { rotation: -20, rx: 47, ry: 16 },
  { rotation: 50, rx: 47, ry: 16 },
  { rotation: 112, rx: 47, ry: 16 },
];

interface ElectronDef {
  label: string;
  ring: number;
  t: number;
  speed: number;
}

const electronDefs: ElectronDef[] = [
  { label: "AI Agents", ring: 0, t: 0, speed: 0.009 },
  { label: "Data & ML", ring: 0, t: Math.PI, speed: 0.009 },
  { label: "Cloud", ring: 1, t: 0, speed: 0.0075 },
  { label: "Security", ring: 1, t: Math.PI, speed: 0.0075 },
  { label: "Automation", ring: 2, t: 0, speed: 0.0065 },
  { label: "Modernization", ring: 2, t: Math.PI, speed: 0.0065 },
];

function ellipseHalfPath(rx: number, ry: number, half: "front" | "back") {
  const cx = 50;
  const cy = 50;
  const p1x = cx + rx;
  const p2x = cx - rx;
  const sweep = half === "front" ? 1 : 0;
  return `M ${p1x} ${cy} A ${rx} ${ry} 0 0 ${sweep} ${p2x} ${cy}`;
}

function electronPosition(ring: RingDef, t: number) {
  const rad = (ring.rotation * Math.PI) / 180;
  const ex = ring.rx * Math.cos(t);
  const ey = ring.ry * Math.sin(t);
  const rotatedX = ex * Math.cos(rad) - ey * Math.sin(rad);
  const rotatedY = ex * Math.sin(rad) + ey * Math.cos(rad);

  return {
    x: 50 + rotatedX,
    y: 50 + rotatedY,
    isFront: Math.sin(t) > 0,
  };
}

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const electronStateRef = useRef(electronDefs.map((e) => ({ ...e })));
  const backNodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const frontNodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;

    const onResize = () => {
      if (canvas) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.28,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.25, 0.3, 0.45],
      markerColor: [0.13, 0.83, 0.93],
      glowColor: [0.45, 0.35, 0.95],
      markers: [],
    });

    let animationFrame: number;
    const render = () => {
      if (pointerInteracting.current === null) {
        phiRef.current += 0.004;
      }
      globe.update({
        phi: phiRef.current + pointerInteractionMovement.current,
        width: width * 2,
        height: width * 2,
      });

      electronStateRef.current.forEach((electron, i) => {
        electron.t += electron.speed;
        const ring = RINGS[electron.ring];
        const { x, y, isFront } = electronPosition(ring, electron.t);

        const back = backNodeRefs.current[i];
        const front = frontNodeRefs.current[i];

        if (back) {
          back.style.left = `${x}%`;
          back.style.top = `${y}%`;
          back.style.opacity = isFront ? "0" : "1";
        }

        if (front) {
          front.style.left = `${x}%`;
          front.style.top = `${y}%`;
          front.style.opacity = isFront ? "1" : "0";
        }
      });

      animationFrame = requestAnimationFrame(render);
    };
    animationFrame = requestAnimationFrame(render);

    requestAnimationFrame(() => {
      if (canvas) canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const renderElectron = (index: number, layer: "front" | "back") => (
    <div
      key={`${layer}-${electronDefs[index].label}`}
      ref={(el) => {
        if (layer === "front") frontNodeRefs.current[index] = el;
        else backNodeRefs.current[index] = el;
      }}
      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 opacity-0"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
      <span className="whitespace-nowrap rounded-lg border border-white/10 bg-[#0b0f14]/90 px-2 py-0.5 text-[9px] font-medium tracking-wide text-slate-200 shadow-[0_6px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        {electronDefs[index].label}
      </span>
    </div>
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-visible">
      {/* Back layer: ring halves and electrons passing behind the globe */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(148,163,255,0.3)" strokeWidth="0.4" fill="none">
          {RINGS.map((ring, i) => (
            <path
              key={i}
              d={ellipseHalfPath(ring.rx, ring.ry, "back")}
              transform={`rotate(${ring.rotation} 50 50)`}
            />
          ))}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-0">
        {electronDefs.map((_, i) => renderElectron(i, "back"))}
      </div>

      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        className="relative z-10 h-full w-full cursor-grab opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
      />

      {/* Front layer: ring halves and electrons passing in front of the globe */}
      <svg
        className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g stroke="rgba(191,231,255,0.6)" strokeWidth="0.5" fill="none">
          {RINGS.map((ring, i) => (
            <path
              key={i}
              d={ellipseHalfPath(ring.rx, ring.ry, "front")}
              transform={`rotate(${ring.rotation} 50 50)`}
            />
          ))}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-20">
        {electronDefs.map((_, i) => renderElectron(i, "front"))}
      </div>

      {/* BVM AI CORE badge, anchored to the top of the globe */}
      <div className="absolute -top-3 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-cyan-400/30 bg-[#0b0f14]/90 px-3.5 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
            BVM AI Core
          </span>
        </div>
      </div>
    </div>
  );
}

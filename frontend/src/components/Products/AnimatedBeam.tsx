import { useEffect, useId, useState, type RefObject } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startYOffset?: number;
  endYOffset?: number;
  startGap?: number;
  endGap?: number;
}

export default function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4,
  delay = 0,
  pathColor = "rgba(255,255,255,0.12)",
  pathWidth = 1.5,
  pathOpacity = 1,
  gradientStartColor = "#22d3ee",
  gradientStopColor = "#a855f7",
  startYOffset = 0,
  endYOffset = 0,
  startGap = 0,
  endGap = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"] };

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      setDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });

      let startX = rectA.left - containerRect.left + rectA.width / 2;
      let startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      let endX = rectB.left - containerRect.left + rectB.width / 2;
      let endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      if (startGap || endGap) {
        const dx = endX - startX;
        const dy = endY - startY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const ux = dx / dist;
        const uy = dy / dist;

        startX += ux * startGap;
        startY += uy * startGap;
        endX -= ux * endGap;
        endY -= uy * endGap;
      }

      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      const lineDx = endX - startX;
      const lineDy = endY - startY;
      const lineDist = Math.sqrt(lineDx * lineDx + lineDy * lineDy) || 1;
      const perpX = -lineDy / lineDist;
      const perpY = lineDx / lineDist;

      const controlX = midX - perpX * curvature;
      const controlY = midY - perpY * curvature;

      setPathD(`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`);
    };

    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", updatePath);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startYOffset,
    endYOffset,
    startGap,
    endGap,
  ]);

  if (!pathD) return null;

  return (
    <svg
      fill="none"
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      className="pointer-events-none absolute left-0 top-0"
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{ x1: gradientCoordinates.x1, x2: gradientCoordinates.x2 }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

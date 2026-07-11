import { useEffect, useId, useState, type RefObject } from "react";
import { motion } from "framer-motion";

interface OrthogonalBeamProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  bendGap?: number;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startGap?: number;
  endGap?: number;
}

export default function OrthogonalBeam({
  containerRef,
  fromRef,
  toRef,
  bendGap = 20,
  duration = 4,
  delay = 0,
  pathColor = "rgba(255,255,255,0.12)",
  pathWidth = 1.5,
  pathOpacity = 1,
  gradientStartColor = "#22d3ee",
  gradientStopColor = "#a855f7",
  startGap = 0,
  endGap = 0,
}: OrthogonalBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

      const startX = rectA.right - containerRect.left + startGap;
      const startY = rectA.top - containerRect.top + rectA.height / 2;
      const endX = rectB.left - containerRect.left - endGap;
      const endY = rectB.top - containerRect.top + rectB.height / 2;
      const bendX = endX - bendGap;

      setPathD(
        `M ${startX},${startY} L ${bendX},${startY} L ${bendX},${endY} L ${endX},${endY}`
      );
    };

    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", updatePath);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [containerRef, fromRef, toRef, bendGap, startGap, endGap]);

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
        strokeLinejoin="round"
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{ x1: ["10%", "110%"], x2: ["0%", "100%"] }}
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

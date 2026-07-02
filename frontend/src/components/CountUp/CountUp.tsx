import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const match = value.match(/^(\d+(?:\.\d+)?)/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? value.slice(match[0].length) : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const [display, setDisplay] = useState(target === null ? value : decimals > 0 ? (0).toFixed(decimals) : "0");

  useEffect(() => {
    if (!isInView || target === null) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString());
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

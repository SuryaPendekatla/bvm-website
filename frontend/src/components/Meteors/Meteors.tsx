import { motion } from "framer-motion";

interface MeteorsProps {
  number?: number;
}

export default function Meteors({ number = 20 }: MeteorsProps) {
  const meteors = Array.from({ length: number });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((_, index) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 4 + Math.random() * 4;
        const drift = (Math.random() - 0.5) * 60;

        return (
          <motion.span
            key={index}
            className="absolute top-0 h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-white/70"
            style={{ left: `${left}%` }}
            initial={{ x: 0, y: -80, opacity: 0 }}
            animate={{
              x: [0, drift],
              y: [-80, 320],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
              times: [0, 0.1, 0.7, 1],
            }}
          />
        );
      })}
    </div>
  );
}

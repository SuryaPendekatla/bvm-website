import { motion } from "framer-motion";

export default function Particles() {
  const count = typeof window !== "undefined" && window.innerWidth < 640 ? 18 : 35;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {[...Array(count)].map((_: unknown, index: number) => (
        <motion.div
          key={index}
          className={`absolute rounded-full shadow-[0_0_12px_currentColor] ${
            index % 2 === 0
              ? "bg-cyan-400/70"
              : "bg-purple-400/70"
          }`}
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, -250],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

    </div>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none z-50"
      />

      <motion.div
        animate={{
          x: mouse.x - 150,
          y: mouse.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 80,
        }}
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-[100px] pointer-events-none z-50"
      />
    </>
  );
}
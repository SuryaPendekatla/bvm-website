import { motion } from "framer-motion";
import type React from "react";

interface RevealProps {
  children: React.ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import AINetwork from "../AINetwork/AINetwork";
import Particles from "../Particles/Particles";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] bg-gradient-to-b from-black via-[#050505] to-black text-white pt-24 md:pt-32 overflow-hidden">
      <Particles />
      {/* AI Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-40 w-40 h-40 rounded-full bg-cyan-500/20 blur-[80px]"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-40 w-32 h-32 rounded-full bg-purple-500/20 blur-[70px]"
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid xl:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 uppercase tracking-[0.25em] text-sm mb-4">
            AI-FIRST. HUMAN-LED.
          </p>

          <h1 className="text-[42px] sm:text-[54px] lg:text-[66px] xl:text-[78px] font-bold leading-[0.95] tracking-[-0.04em]">
            Accelerate Enterprise Growth
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              with AI-First
            </span>

            <br />

            Digital Transformation
          </h1>

          <p className="mt-8 max-w-[620px] text-[18px] leading-8 text-slate-300/90">
            BVM helps organizations unlock measurable business value through
            AI Enablement, Intelligent Automation, Cloud Transformation,
            Digital Engineering, and Strategic Talent Solutions.
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/20">
              Book a Strategy Call
            </button>

            <button className="border border-white/20 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-xl">
              Explore AI Services
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <AINetwork />
        </motion.div>

      </div>
    </section>
  );
}

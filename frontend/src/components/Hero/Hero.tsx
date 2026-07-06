import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroGlobe from "../HeroGlobe/HeroGlobe";
import Particles from "../Particles/Particles";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-[760px] bg-[#050B18] text-white pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <Particles />

      {/* AI Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-blue-500 uppercase tracking-[0.25em] text-sm mb-4">
            AI-FIRST. HUMAN-LED.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-[-0.03em]">
            Accelerate Growth
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              with AI-First
            </span>

            <br />

            Transformation
          </h1>

          <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-slate-300/90">
            BVM helps organizations unlock measurable business value through
            AI Enablement, Intelligent Automation, Cloud Transformation,
            Digital Engineering, and Strategic Talent Solutions.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition text-center"
            >
              Book a Strategy Call
            </Link>

            <Link
              to="/services"
              className="border border-white/20 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-xl text-center"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <HeroGlobe />
        </motion.div>

      </div>
    </section>
  );
}

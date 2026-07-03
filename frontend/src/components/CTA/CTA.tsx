import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-purple-900/30 backdrop-blur-xl p-12 md:p-16 text-center"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px]" />

          <div className="relative z-10">
            <p className="text-blue-400 uppercase tracking-widest mb-4">
              Let's Build The Future Together
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Accelerate
              <br />
              Your AI Journey?
            </h2>

            <p className="text-slate-300 max-w-3xl mx-auto mb-10 text-lg">
              Partner with BVMCS to unlock innovation, efficiency,
              intelligent automation, and measurable business growth
              through AI enablement and digital transformation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                Schedule a Consultation
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-xl text-white hover:border-cyan-400 hover:bg-white/5 transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

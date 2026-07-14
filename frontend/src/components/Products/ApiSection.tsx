import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { fadeUp } from "../../utils/animations";
import ApiBeamDiagram from "./ApiBeamDiagram";
import ApiBeamDiagramMobile from "./ApiBeamDiagramMobile";

export default function ApiSection() {
  return (
    <section id="apis" className="relative bg-[#0A1428] py-24 overflow-hidden scroll-mt-24">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            WhiteBooks API's
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful API's
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              For Developers
            </span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Direct, sub-second integrations for GST filing, e-way bills,
            e-invoicing, and notice tracking — built to drop straight into
            your ERP or product.
          </p>
        </motion.div>

        <div className="md:hidden">
          <ApiBeamDiagramMobile />
        </div>

        <div className="hidden md:block">
          <ApiBeamDiagram />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 md:-mt-6">
  <a
    href="https://accounts.whitebooks.in/signup?type=Developer&subscrid=&inviteId"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105"
  >
    Get API Access
    <ArrowRight className="w-3.5 h-3.5" />
  </a>

  <a
    href="https://whitebooks.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-6 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition"
  >
    Explore Whitebooks
    <ArrowUpRight className="w-3.5 h-3.5" />
  </a>
</div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bvm-banner-card p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            99.95% API Uptime SLA
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Enterprise-grade infrastructure with direct GSTN, NIC IRP, and
            NIC e-Way Bill access — no resold pipes, no middlemen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

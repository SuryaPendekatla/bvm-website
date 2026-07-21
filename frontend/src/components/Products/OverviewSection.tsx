import { motion } from "framer-motion";
import { ArrowBigRightDash, ArrowRight } from "lucide-react";
import whitebooksLogo from "../../assets/logos/whitebooks-logo.svg";
import gspLogo from "../../assets/logos/gsp-certified.svg";
import isoLogo from "../../assets/logos/iso-certified.svg";

export default function OverviewSection() {
  return (
    <section id="overview" className="relative bg-[#0A1428] pt-40 pb-24 text-center overflow-hidden scroll-mt-24">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[60px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Products
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-slate-400 text-sm uppercase tracking-widest">
              Powered by
            </span>
            <img
              src={whitebooksLogo}
              alt="WhiteBooks"
              className="h-7 md:h-8 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Compliance Infrastructure for
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              India's Largest Finance Teams
            </span>
          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            Compliance-first accounting, GST, e-invoice, and e-way bill
            software with developer-ready APIs — built for finance teams
            that can't afford to get it wrong.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://whitebooks.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              Explore WhiteBooks
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-2">
              <img src={gspLogo} alt="Licensed GST Suvidha Provider" className="h-9 w-auto" />
              <span className="text-slate-300 text-sm text-left leading-snug">
                Licensed GST Suvidha Provider (GSP)
                <br className="hidden sm:block" /> — authorised directly by GSTN
              </span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-2">
              <img src={isoLogo} alt="ISO 27001:2022 Certified" className="h-9 w-auto" />
              <span className="text-slate-300 text-sm">ISO 27001:2022 Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

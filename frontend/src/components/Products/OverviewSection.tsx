import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import whitebooksLogo from "../../assets/logos/whitebooks-logo.svg";

export default function OverviewSection() {
  return (
    <section id="overview" className="relative bg-[#0A1428] py-24 text-center overflow-hidden scroll-mt-24">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[60px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Compliance Infrastructure for
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              India's Largest Finance Teams
            </span>
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            Compliance-first accounting, GST, e-invoice, and e-way bill
            software with developer-ready APIs — built for finance teams
            that can't afford to get it wrong.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 text-slate-400 text-sm border border-white/10 rounded-full px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Licensed GST Suvidha Provider · ISO 27001:2022 Certified
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Webhook, ShieldCheck } from "lucide-react";
import { fadeUp } from "../../utils/animations";
import whitebooksLogo from "../../assets/logos/whitebooks-logo.svg";

const MotionLink = motion(Link);

const highlights = [
  { icon: Package, label: "WhiteBooks Software" },
  { icon: Webhook, label: "Developer APIs" },
  { icon: ShieldCheck, label: "Licensed GSP · GSTN Authorised" },
];

export default function ProductsPromo() {
  return (
    <section className="relative bg-[#071022] py-24 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Compliance Infrastructure, Powered by WhiteBooks
          </h2>
        </motion.div>

        <MotionLink
          to="/products"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="group block bvm-banner-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-slate-400 text-sm uppercase tracking-widest">
                  Powered by
                </span>
                <img src={whitebooksLogo} alt="WhiteBooks" className="h-6 w-auto" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Softwares, APIs & Licensed GSP — All in One Place
              </h3>

              <p className="text-slate-400 max-w-xl">
                Accounting, GST, e-invoice, and e-way bill software with
                developer-ready APIs, backed by a GSTN-authorised GSP license.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-slate-300 text-sm bg-white/[0.04] border border-white/10 rounded-full px-4 py-2"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] shrink-0">
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </MotionLink>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Calculator,
  Receipt,
  Truck,
  FileCheck2,
  BellRing,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "../../utils/animations";

interface SoftwareProduct {
  icon: LucideIcon;
  title: string;
  headline: string;
  features: string[];
  tags: string[];
}

const softwareProducts: SoftwareProduct[] = [
  {
    icon: Calculator,
    title: "Accounting Software",
    headline: "Smart Invoicing & Billing",
    features: [
      "Bank reconciliation",
      "Inventory, AR/AP, PO, QR",
      "Profit & loss, balance sheet",
      "Financial reports & MIS",
    ],
    tags: ["Simple", "Automated", "Powerful"],
  },
  {
    icon: Receipt,
    title: "GST Software",
    headline: "All GSTR Returns (1 / 3B / 9 / 2B)",
    features: [
      "Auto data fetch & reconciliation",
      "E-invoicing, e-way bill integration",
      "HSN/SAC & ITC management",
      "Multi-GSTIN management",
    ],
    tags: ["Accurate", "Fast", "Hassle-Free"],
  },
  {
    icon: Truck,
    title: "E-Way Bill Software",
    headline: "Generate, Update, Cancel, Extend",
    features: [
      "Bulk e-way bills",
      "Real-time tracking & alerts",
      "Direct NIC API integration",
      "Consolidated EWB reports",
    ],
    tags: ["Fast", "Reliable", "Compliant"],
  },
  {
    icon: FileCheck2,
    title: "E-Invoice Software",
    headline: "IRN Generation (NIC-IRP)",
    features: [
      "Bulk e-invoice support",
      "Signed JSON & QR code",
      "Auto-sync with ERP/Tally",
      "Credit/debit note support",
    ],
    tags: ["Instant", "Secure", "Compliant"],
  },
  {
    icon: BellRing,
    title: "Notice Management",
    headline: "Auto-Fetch from GSTN, ITD & TRACES",
    features: [
      "Smart deadline tracking & alerts",
      "CA & team collaboration",
      "Document management & audit trail",
    ],
    tags: ["Automated", "Timely", "Organised"],
  },
];

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
];

export default function SoftwareSection() {
  return (
    <section id="softwares" className="relative bg-[#071022] py-24 overflow-hidden scroll-mt-24">
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            WhiteBooks Softwares
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Everything Your Finance Team Needs
          </h2>

          <p className="text-slate-400 max-w-2xl mt-6">
            A complete suite of compliance-first software covering
            accounting, GST filing, e-way bills, e-invoicing, and notice
            management — built for businesses that can't afford to get
            compliance wrong.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {softwareProducts.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8 flex flex-col`}
              >
                <div className="bvm-icon-tile mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-white text-2xl font-semibold mb-2 group-hover:text-cyan-300 transition">
                  {product.title}
                </h3>

                <p className="text-slate-300 font-medium mb-5">
                  {product.headline}
                </p>

                <ul className="space-y-3 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

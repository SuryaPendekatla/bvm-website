import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "../../utils/animations";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI-First Methodology",
    description:
      "Every engagement is designed around AI enablement, automation, and intelligent decision-making.",
  },
  {
    icon: Zap,
    title: "Accelerated Delivery",
    description:
      "Rapid execution models help enterprises move from strategy to implementation faster.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Security, governance, compliance, and risk management are embedded from day one.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Business Impact",
    description:
      "Focused on outcomes including cost optimization, productivity gains, and revenue growth.",
  },
];

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-violet",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#071022] py-24 overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            Why BVM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Enterprises Choose BVM
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We combine strategy, technology, talent, and AI innovation
            to help organizations modernize faster and achieve sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
              >
                <div className="bvm-icon-tile mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bvm-banner-card p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Trusted Transformation Partner
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We help enterprises navigate AI adoption, digital modernization,
            cloud transformation, and workforce enablement with confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium">
            <span className="text-cyan-300">AI Enablement</span>
            <span className="text-sky-300">Cloud Transformation</span>
            <span className="text-emerald-300">Intelligent Automation</span>
            <span className="text-violet-300">Digital Engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
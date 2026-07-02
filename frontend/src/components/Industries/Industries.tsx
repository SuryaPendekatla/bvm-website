import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  Cpu,
  GraduationCap,
} from "lucide-react";

interface Industry {
  title: string;
  icon: LucideIcon;
}

const industries: Industry[] = [
  {
    title: "Banking & Financial Services",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
  },
  {
    title: "Manufacturing",
    icon: Factory,
  },
  {
    title: "Retail & E-Commerce",
    icon: ShoppingCart,
  },
  {
    title: "Technology",
    icon: Cpu,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
];

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-emerald",
  "bvm-card-accent-amber",
  "bvm-card-accent-violet",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#0A0A0A] py-24 overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            Industry Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Industries We Transform
          </h2>

          <p className="text-slate-400 max-w-2xl mt-6">
            We partner with forward-thinking organizations across industries
            to unlock growth through AI, automation, and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry: Industry, index: number) => {
            const Icon = industry.icon;

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

                <h3 className="text-white text-2xl font-semibold group-hover:text-cyan-300 transition">
                  {industry.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Delivering industry-specific AI solutions, intelligent
                  automation, and scalable digital transformation strategies.
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
          className="mt-20 bvm-banner-card p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Cross-Industry Transformation Expertise
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Our consultants, engineers, and AI specialists help organizations
            modernize operations, improve customer experiences, and unlock
            measurable business value through intelligent technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
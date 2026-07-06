import { motion } from "framer-motion";
import {
  Rocket,
  Trophy,
  Globe,
  Star,
  type LucideIcon,
} from "lucide-react";
import CountUp from "../CountUp/CountUp";

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

export default function Metrics() {
  const stats: Stat[] = [
    {
      value: "100+",
      label: "Projects Delivered",
      icon: Rocket,
      color: "text-blue-400",
    },
    {
      value: "15+",
      label: "Years of Expertise",
      icon: Trophy,
      color: "text-cyan-400",
    },
    {
      value: "10+",
      label: "Industry Domains",
      icon: Globe,
      color: "text-purple-400",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: Star,
      color: "text-green-400",
    },
  ];

  return (
    <section
      id="metrics"
      className="relative py-24 bg-[#071022] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            Impact At Scale
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Delivering Measurable Business Outcomes
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6">
            Helping enterprises unlock growth, innovation,
            efficiency, and long-term competitive advantage.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className={`bvm-card ${cardAccents[index % cardAccents.length]} p-8 text-center`}
              >

                <div className="bvm-icon-tile mx-auto mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className={`text-5xl font-bold ${stat.color}`}>
                  <CountUp value={stat.value} />
                </h3>

                <p className="text-slate-400 mt-4">
                  {stat.label}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

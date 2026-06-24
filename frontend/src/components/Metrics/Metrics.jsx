import { motion } from "framer-motion";
import {
  Rocket,
  Trophy,
  Globe,
  Star,
} from "lucide-react";

export default function Metrics() {
  const stats = [
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
      className="relative py-24 bg-[#080808] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

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
                }}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>

                <h3 className={`text-5xl font-bold ${stat.color}`}>
                  {stat.value}
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


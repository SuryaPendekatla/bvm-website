import { motion } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  Cpu,
  GraduationCap,
} from "lucide-react";

const industries = [
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

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#0A0A0A] py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
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

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry, index) => {
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
                  y: -10,
                  scale: 1.03,
                }}
                className="group bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-white text-2xl font-semibold group-hover:text-blue-400 transition">
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

        {/* Enterprise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-10 text-center"
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


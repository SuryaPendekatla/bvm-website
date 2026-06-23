import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const features = [
  {
    icon: "🤖",
    title: "AI-First Methodology",
    description:
      "Every engagement is designed around AI enablement, automation, and intelligent decision-making.",
  },
  {
    icon: "⚡",
    title: "Accelerated Delivery",
    description:
      "Rapid execution models help enterprises move from strategy to implementation faster.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Security, governance, compliance, and risk management are embedded from day one.",
  },
  {
    icon: "📈",
    title: "Measurable Business Impact",
    description:
      "Focused on outcomes including cost optimization, productivity gains, and revenue growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#080808] py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            Why BVMCS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Enterprises Choose BVMCS
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We combine strategy, technology, talent, and AI innovation
            to help organizations modernize faster and achieve sustainable growth.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
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
                y: -12,
                scale: 1.03,
              }}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[80px]" />
              </div>

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mt-20 mb-20">

          {[
            {
              value: "100+",
              label: "Projects Delivered",
            },
            {
              value: "15+",
              label: "Years Experience",
            },
            {
              value: "10+",
              label: "Industry Domains",
            },
            {
              value: "95%",
              label: "Client Satisfaction",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition-all duration-300"
            >
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="text-cyan-400 text-4xl font-bold mb-2"
              >
                {stat.value}
              </motion.h3>

              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-cyan-900/20 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Trusted Transformation Partner
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We help enterprises navigate AI adoption, digital modernization,
            cloud transformation, and workforce enablement with confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span>✓ AI Enablement</span>
            <span>✓ Cloud Transformation</span>
            <span>✓ Intelligent Automation</span>
            <span>✓ Digital Engineering</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


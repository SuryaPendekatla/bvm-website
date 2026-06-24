import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Lightbulb,
  Bot,
  Cloud,
  Code2,
} from "lucide-react";
import { fadeUp } from "../../utils/animations";

const services = [
  {
    title: "AI Enablement",
    description:
      "Empower teams with AI tools, copilots, and intelligent workflows to accelerate productivity.",
    icon: Brain,
  },
  {
    title: "Generative AI Solutions",
    description:
      "Build enterprise-grade AI assistants, RAG systems, copilots, and custom LLM applications.",
    icon: Sparkles,
  },
  {
    title: "AI Strategy & Consulting",
    description:
      "Create a practical roadmap for AI adoption aligned with business objectives.",
    icon: Lightbulb,
  },
  {
    title: "Intelligent Automation",
    description:
      "Automate repetitive workflows using AI agents, RPA, and process orchestration.",
    icon: Bot,
  },
  {
    title: "Cloud Transformation",
    description:
      "Modernize infrastructure with Azure, AWS, and Google Cloud for scalable growth.",
    icon: Cloud,
  },
  {
    title: "Digital Engineering",
    description:
      "Build modern digital products, platforms, and enterprise applications faster.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#080808] py-24 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Solutions for the AI Era
          </h2>

          <p className="text-slate-400 max-w-2xl mt-6">
            From strategy to execution, we help organizations unlock the full
            potential of artificial intelligence, automation, cloud technology,
            and digital innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-cyan-400 transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[80px]" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-white text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-8 text-cyan-400 hover:text-white transition font-medium">
                  Learn More →
                </button>

              </motion.div>
            );
          })}

        </div>

        {/* Stats */}
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
              whileHover={{
                y: -5,
              }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-cyan-400 font-bold text-3xl mb-2">
                {stat.value}
              </p>

              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-cyan-900/20 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom AI Solution?
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto mb-8">
            Our experts design, develop, and deploy tailored AI solutions
            that align with your business goals and deliver measurable results.
          </p>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition duration-300">
            Talk to an Expert
          </button>
        </motion.div>

      </div>
    </section>
  );
}

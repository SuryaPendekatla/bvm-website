import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Sparkles,
  Lightbulb,
  Bot,
  Cloud,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "../../utils/animations";
import CountUp from "../CountUp/CountUp";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Stat {
  value: string;
  label: string;
}

const services: Service[] = [
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

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#071022] py-24 overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
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
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
              >
                <div className="bvm-icon-tile mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-white text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-8 inline-block text-cyan-300 hover:text-white transition font-medium"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-20 mb-20">
          {([
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
          ] as Stat[]).map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className={`bvm-card ${cardAccents[index % cardAccents.length]} p-6 text-center`}
            >
              <p className="text-cyan-300 font-bold text-3xl mb-2">
                <CountUp value={stat.value} />
              </p>

              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bvm-banner-card p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom AI Solution?
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto mb-8">
            Our experts design, develop, and deploy tailored AI solutions
            that align with your business goals and deliver measurable results.
          </p>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition duration-300">
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Bot,
  Network,
  GraduationCap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface AIService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const aiServices: AIService[] = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmapping",
    description:
      "Build a practical AI adoption roadmap aligned with business objectives.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description:
      "Develop copilots, assistants, and GenAI applications for enterprise use.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Automate business workflows with intelligent AI agents.",
  },
  {
    icon: Network,
    title: "Enterprise AI Integration",
    description:
      "Connect AI solutions with ERP, CRM, and enterprise platforms.",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Adoption",
    description:
      "Enable teams with AI skills, governance, and operational readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Governance",
    description:
      "Implement AI securely with compliance, ethics, and risk management.",
  },
];

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-amber",
  "bvm-card-accent-pink",
];

export default function AIEnablement() {
  return (
    <section
      id="ai-enable"
      className="relative bg-[#0A1428] py-24 overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            AI Enablement Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Helping Enterprises
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Become AI-Ready
            </span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            From strategy and governance to implementation and adoption,
            BVM enables organizations to scale AI with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service: AIService, index: number) => {
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
            End-to-End AI Transformation
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We help organizations identify opportunities, implement AI
            solutions, govern responsibly, and drive measurable business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
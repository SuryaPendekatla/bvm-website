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

export default function AIEnablement() {
  return (
    <section
      id="ai-enable"
      className="relative bg-[#0A0A0A] py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
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
            BVMCS enables organizations to scale AI with confidence.
          </p>
        </motion.div>

        {/* Cards */}
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
                  y: -10,
                  scale: 1.02,
                }}
                className="group bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-white text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.description}
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
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-10 text-center"
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

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Assess business challenges, opportunities, and AI readiness.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Build a practical roadmap aligned with business objectives.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop AI solutions, automation systems, and integrations.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Deploy, govern, optimize, and scale AI across the enterprise.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            Our Process
          </p>

          <h2 className="text-5xl font-bold text-white mb-6">
            From Strategy To Scale
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We guide organizations through every stage of their AI
            transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8"
            >
              <div className="text-5xl font-bold text-blue-500 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
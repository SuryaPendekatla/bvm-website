import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

const steps: Step[] = [
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
    <section className="bg-[#050B18] py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            Our Process
          </p>

          <h2 className="text-5xl font-bold text-white mb-6">
            Our Approach In Four Steps
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            A simple framework we follow on every engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, transition: { duration: 0.2, ease: "easeOut" } }}
              className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
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

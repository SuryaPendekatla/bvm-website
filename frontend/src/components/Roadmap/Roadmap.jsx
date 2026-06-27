import { motion } from "framer-motion";

const roadmapSteps = [
{
step: "01",
title: "Discovery",
description:
"Understand business goals, challenges, and opportunities for AI adoption.",
},
{
step: "02",
title: "Assessment",
description:
"Evaluate data readiness, technology landscape, and organizational maturity.",
},
{
step: "03",
title: "Strategy",
description:
"Define a practical AI roadmap aligned with business outcomes and ROI.",
},
{
step: "04",
title: "Prototype",
description:
"Validate ideas through rapid AI pilots and proof-of-concept solutions.",
},
{
step: "05",
title: "Deployment",
description:
"Implement scalable AI solutions integrated into enterprise workflows.",
},
{
step: "06",
title: "Optimization",
description:
"Continuously improve performance, governance, and operational efficiency.",
},
{
step: "07",
title: "Scale",
description:
"Expand successful AI initiatives across teams, functions, and business units.",
},
];

export default function Roadmap() {
return ( <section className="relative bg-[#0A0A0A] py-24 overflow-hidden">

  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="text-center mb-20">
      <p className="text-blue-500 uppercase tracking-widest mb-3">
        AI Transformation Roadmap
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        A Proven Path To Enterprise AI Success
      </h2>

      <p className="text-slate-400 max-w-3xl mx-auto">
        We guide organizations through every stage of AI transformation,
        from strategy and experimentation to enterprise-wide adoption.
      </p>
    </div>

    <div className="space-y-8">
      {roadmapSteps.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          className="flex flex-col md:flex-row items-start gap-6 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
        >
          <div className="text-5xl font-bold text-blue-400">
            {item.step}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

);
}

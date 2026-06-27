import { motion } from "framer-motion";
import Particles from "../Particles/Particles";
import { fadeUp } from "../../utils/animations";

const caseStudies = [
{
company: "GlobalBank",
metric: "35%",
title: "Reduced Operational Costs",
result:
"Implemented intelligent automation workflows that streamlined operations and reduced costs across multiple business units.",
},
{
company: "HealthPlus",
metric: "60%",
title: "Faster Patient Support",
result:
"Deployed AI-powered support systems that significantly improved response times and patient experience.",
},
{
company: "RetailMax",
metric: "28%",
title: "Higher Sales Conversion",
result:
"Leveraged AI-driven customer insights and personalization strategies to boost revenue growth.",
},
];

export default function CaseStudies() {
return ( <section  
   id="case-studies"
   className="relative bg-[#0A0A0A] py-24 overflow-hidden"
 >         
{/* Background Glow */} <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" /> <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Section Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <p className="text-blue-500 uppercase tracking-widest mb-3">
        Success Stories
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Measurable Business Outcomes
      </h2>

      <p className="text-slate-400 max-w-3xl mt-6">
        We help organizations transform operations, improve customer experiences,
        and unlock growth through AI-driven innovation.
      </p>
    </motion.div>

    {/* Case Study Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
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
            scale: 1.02,
          }}
          className="group bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white text-2xl font-bold">
              {study.company}
            </h3>

            <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {study.metric}
            </span>
          </div>

          <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition">
            {study.title}
          </h4>

          <p className="text-slate-400 leading-relaxed">
            {study.result}
          </p>

          <button className="mt-8 text-blue-400 hover:text-cyan-300 transition font-medium">
            View Case Study →
          </button>
        </motion.div>
      ))}
    </div>

    {/* Results Banner */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-slate-900 to-cyan-900/20 p-10 text-center"
    >
      <h3 className="text-3xl font-bold text-white mb-4">
        Results That Matter
      </h3>

      <p className="text-slate-400 max-w-3xl mx-auto mb-8">
        Every engagement is focused on delivering measurable business value,
        operational efficiency, customer satisfaction, and sustainable growth.
      </p>

      <div className="flex flex-wrap justify-center gap-8 text-center">
        <div>
          <h4 className="text-3xl font-bold text-blue-400">100+</h4>
          <p className="text-slate-400 text-sm">Projects Delivered</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-cyan-400">95%</h4>
          <p className="text-slate-400 text-sm">Client Satisfaction</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-purple-400">15+</h4>
          <p className="text-slate-400 text-sm">Years Experience</p>
        </div>
      </div>
    </motion.div>

  </div>
</section>

);
}

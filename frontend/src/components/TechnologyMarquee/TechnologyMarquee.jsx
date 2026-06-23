import { motion } from "framer-motion";

import azure from "../../assets/logos/azure.svg";
import aws from "../../assets/logos/aws.svg";
import googleCloud from "../../assets/logos/google-cloud.svg";
import openai from "../../assets/logos/openai.svg";
import anthropic from "../../assets/logos/anthropic.svg";
import salesforce from "../../assets/logos/salesforce.svg";
import snowflake from "../../assets/logos/snowflake.svg";
import databricks from "../../assets/logos/databricks.svg";

const technologies = [
  { name: "Azure", logo: azure },
  { name: "AWS", logo: aws },
  { name: "Google Cloud", logo: googleCloud },
  { name: "OpenAI", logo: openai },
  { name: "Anthropic", logo: anthropic },
  { name: "Salesforce", logo: salesforce },
  { name: "Snowflake", logo: snowflake },
  { name: "Databricks", logo: databricks },
];

export default function TechnologyMarquee() {
  return (
    <section className="relative py-16 bg-[#080808] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/5 blur-[180px]" />

      <div className="text-center mb-10 relative z-10">
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          Technology Ecosystem
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Powered By Industry-Leading Platforms
        </h2>
      </div>

      <div className="relative overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex gap-6 w-max"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                flex items-center gap-4
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                px-8 py-5
                min-w-[240px]
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                transition-all duration-300
              "
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />

              <span className="text-white font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#080808] to-transparent z-20" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#080808] to-transparent z-20" />

    </section>
  );
}
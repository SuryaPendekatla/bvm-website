import { motion } from "framer-motion";

import azure from "../../assets/logos/azure.svg";
import aws from "../../assets/logos/aws.svg";
import googleCloud from "../../assets/logos/google-cloud.svg";
import openai from "../../assets/logos/openai.svg";
import anthropic from "../../assets/logos/anthropic.svg";
import salesforce from "../../assets/logos/salesforce.svg";
import snowflake from "../../assets/logos/snowflake.svg";
import databricks from "../../assets/logos/databricks.svg";

interface Technology {
  name: string;
  logo: string;
}

const technologies: Technology[] = [
  { name: "Microsoft Azure", logo: azure },
  { name: "Amazon AWS", logo: aws },
  { name: "Google Cloud", logo: googleCloud },
  { name: "OpenAI", logo: openai },
  { name: "Anthropic", logo: anthropic },
  { name: "Salesforce", logo: salesforce },
  { name: "Snowflake", logo: snowflake },
  { name: "Databricks", logo: databricks },
];

export default function TechnologyMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#071022] py-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[180px]" />

      {/* Top Accent */}
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 backdrop-blur-xl">

            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-[11px] uppercase tracking-[0.35em] font-semibold text-cyan-300">
              Technology Ecosystem
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">

            Powered by

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry-Leading Platforms
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Leveraging enterprise AI, cloud, automation, and data platforms
            to build secure, scalable, and future-ready digital solutions.
          </p>

        </motion.div>

        {/* Marquee */}

        <div className="relative overflow-hidden">

          <div className="bvm-marquee-track flex w-max gap-4 py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="
                  group
                  relative
                  flex
                  min-w-[200px]
                  sm:min-w-[216px]
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/[0.05]
                  to-white/[0.02]
                  px-5
                  py-4
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]
                "
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-2xl" />
                  <div className="absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-purple-500/10 blur-2xl" />
                </div>

                {/* Logo */}
                <div className="relative flex h-10 w-14 items-center justify-center">

                  <div className="absolute h-10 w-10 rounded-full bg-cyan-500/10 blur-lg opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="
                      relative
                      max-h-7
                      max-w-[64px]
                      object-contain
                      opacity-75
                      grayscale
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:opacity-100
                      group-hover:grayscale-0
                    "
                  />

                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* Name */}
                <div className="flex flex-col">

                  <span className="text-sm font-semibold tracking-wide text-white">
                    {tech.name}
                  </span>

                </div>

              </motion.div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-[#071022] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-[#071022] to-transparent" />

        </div>

      </div>

    </section>
  );
}

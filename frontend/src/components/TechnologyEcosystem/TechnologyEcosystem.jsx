import { motion } from "framer-motion";

import azureLogo from "../../assets/logos/azure.svg";
import awsLogo from "../../assets/logos/aws.svg";
import googleLogo from "../../assets/logos/google-cloud.svg";
import openaiLogo from "../../assets/logos/openai.svg";
import anthropicLogo from "../../assets/logos/anthropic.svg";
import salesforceLogo from "../../assets/logos/salesforce.svg";
import snowflakeLogo from "../../assets/logos/snowflake.svg";
import databricksLogo from "../../assets/logos/databricks.svg";

const technologies = [
  {
    name: "Microsoft Azure",
    logo: azureLogo,
  },
  {
    name: "AWS",
    logo: awsLogo,
  },
  {
    name: "Google Cloud",
    logo: googleLogo,
  },
  {
    name: "OpenAI",
    logo: openaiLogo,
  },
  {
    name: "Anthropic",
    logo: anthropicLogo,
  },
  {
    name: "Salesforce",
    logo: salesforceLogo,
  },
  {
    name: "Snowflake",
    logo: snowflakeLogo,
  },
  {
    name: "Databricks",
    logo: databricksLogo,
  },
];

export default function TechnologyEcosystem() {
  return (
    <section className="relative bg-[#080808] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            Technology Ecosystem
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered By Industry-Leading Platforms
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            We leverage world-class cloud, AI, data, and enterprise
            technologies to deliver scalable digital transformation.
          </p>

        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-cyan-400 transition-all duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[80px]" />
              </div>

              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center p-4 mx-auto mb-6 shadow-lg">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-white font-semibold text-lg text-center group-hover:text-cyan-400 transition">
                {tech.name}
              </h3>

            </motion.div>
          ))}

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-cyan-900/20 p-10 text-center"
        >

          <h3 className="text-3xl font-bold text-white mb-4">
            Enterprise Technology Partnerships
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Our ecosystem combines leading AI, cloud, analytics,
            and enterprise platforms to accelerate transformation
            and maximize business value.
          </p>

        </motion.div>

      </div>
    </section>
  );
}


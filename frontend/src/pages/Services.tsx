import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import TechnologyEcosystem from "../components/TechnologyEcosystem/TechnologyEcosystem";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp/CountUp";

import {
  Brain,
  Lightbulb,
  Sparkles,
  Bot,
  Cloud,
  Code2,
} from "lucide-react";

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

const services = [
  {
    icon: Brain,
    title: "AI Enablement",
    description:
      "Empower teams with AI tools, governance frameworks, and adoption strategies.",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    description:
      "Define AI roadmaps, operating models, and transformation strategies.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description:
      "Build copilots, assistants, knowledge systems, and GenAI platforms.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Automate business processes using intelligent agents and workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    description:
      "Modernize infrastructure and accelerate innovation with cloud-native architectures.",
  },
  {
    icon: Code2,
    title: "Digital Engineering",
    description:
      "Build scalable digital products, platforms, and enterprise applications.",
  },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Services | BVM AI & Digital Transformation</title>
        <meta
          name="description"
          content="Explore BVM services including AI Enablement, Generative AI, AI Agents, Cloud Transformation, and Digital Engineering."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bvmcs.com/services" />
        <meta property="og:title" content="Services | BVM AI & Digital Transformation" />
        <meta
          property="og:description"
          content="Explore BVM services including AI Enablement, Generative AI, AI Agents, Cloud Transformation, and Digital Engineering."
        />
        <meta property="og:image" content="https://bvmcs.com/bvm-logo.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | BVM AI & Digital Transformation" />
        <meta
          name="twitter:description"
          content="Explore BVM services including AI Enablement, Generative AI, AI Agents, Cloud Transformation, and Digital Engineering."
        />
        <meta name="twitter:image" content="https://bvmcs.com/bvm-logo.svg" />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 text-center bg-[#050B18] text-white relative overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[70px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[70px] rounded-full" />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Enterprise AI Services & Solutions
          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            We help enterprises accelerate growth through AI Enablement,
            Generative AI, Intelligent Automation, Cloud Transformation,
            and Digital Engineering services designed for measurable
            business outcomes.
          </p>

        </div>

      </section>

      {/* Services Grid */}
      <section className="pb-24 bg-[#050B18]">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
                >

                  <div className="bvm-icon-tile mx-auto mb-6">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-white text-2xl font-semibold mb-4 text-center group-hover:text-cyan-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-center">
                    {service.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="py-24 bg-[#071022]">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-widest mb-3">
              Our Process
            </p>

            <h2 className="text-4xl font-bold text-white">
              How We Deliver Transformation
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {["Discover", "Design", "Deploy", "Scale"].map(
              (step, index) => (
                <div
                  key={index}
                  className={`bvm-card ${cardAccents[index % cardAccents.length]} p-8 text-center`}
                >
                  <div className="text-cyan-400 text-4xl font-bold mb-4">
                    0{index + 1}
                  </div>

                  <h3 className="text-white text-xl font-semibold">
                    {step}
                  </h3>
                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* Outcomes */}
      <section className="py-24 bg-[#050B18]">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              Business Outcomes We Deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className={`bvm-card ${cardAccents[0]} p-6 text-center`}>
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                <CountUp value="40%" />
              </h3>
              <p className="text-slate-400">
                Productivity Increase
              </p>
            </div>

            <div className={`bvm-card ${cardAccents[1]} p-6 text-center`}>
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                <CountUp value="30%" />
              </h3>
              <p className="text-slate-400">
                Cost Reduction
              </p>
            </div>

            <div className={`bvm-card ${cardAccents[2]} p-6 text-center`}>
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                <CountUp value="3x" />
              </h3>
              <p className="text-slate-400">
                Faster Delivery
              </p>
            </div>

            <div className={`bvm-card ${cardAccents[3]} p-6 text-center`}>
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                <CountUp value="95%" />
              </h3>
              <p className="text-slate-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>

      <TechnologyEcosystem />

      {/* CTA */}
      <section className="pb-24 bg-[#050B18]">

        <div className="text-center max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready To Transform Your Business With AI?
          </h2>

          <p className="text-slate-400 mb-8 text-lg">
            Talk with our experts about AI Enablement, Generative AI,
            Intelligent Automation, Cloud Transformation, and Digital
            Engineering solutions tailored to your business goals.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
          >
            Book a Strategy Call
          </Link>

        </div>

      </section>

      <CTA />
    </MainLayout>
  );
}


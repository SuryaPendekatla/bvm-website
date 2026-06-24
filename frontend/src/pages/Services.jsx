import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import TechnologyEcosystem from "../components/TechnologyEcosystem/TechnologyEcosystem";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "🤖",
    title: "AI Enablement",
    description:
      "Empower teams with AI tools, governance frameworks, and adoption strategies.",
  },
  {
    icon: "🧠",
    title: "AI Strategy & Consulting",
    description:
      "Define AI roadmaps, operating models, and transformation strategies.",
  },
  {
    icon: "✨",
    title: "Generative AI Solutions",
    description:
      "Build copilots, assistants, knowledge systems, and GenAI platforms.",
  },
  {
    icon: "⚡",
    title: "AI Agents & Automation",
    description:
      "Automate business processes using intelligent agents and workflows.",
  },
  {
    icon: "☁️",
    title: "Cloud Transformation",
    description:
      "Modernize infrastructure and accelerate innovation with cloud-native architectures.",
  },
  {
    icon: "💻",
    title: "Digital Engineering",
    description:
      "Build scalable digital products, platforms, and enterprise applications.",
  },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Services | BVMCS AI & Digital Transformation</title>
        <meta
          name="description"
          content="Explore BVMCS services including AI Enablement, Generative AI, AI Agents, Cloud Transformation, and Digital Engineering."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 text-center bg-[#050505] text-white relative overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

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
      <section className="pb-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500"
              >

                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-white text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#080808]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-widest mb-3">
              Our Process
            </p>

            <h2 className="text-4xl font-bold text-white">
              How We Deliver Transformation
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Discover",
              "Design",
              "Deploy",
              "Scale",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 text-center"
              >
                <div className="text-cyan-400 text-4xl font-bold mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-white text-xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Outcomes */}
      <section className="py-24 bg-[#050505]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              Business Outcomes We Deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                40%
              </h3>
              <p className="text-slate-400">
                Productivity Increase
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                30%
              </h3>
              <p className="text-slate-400">
                Cost Reduction
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                3x
              </h3>
              <p className="text-slate-400">
                Faster Delivery
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">
                95%
              </h3>
              <p className="text-slate-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>

      <TechnologyEcosystem />

      {/* CTA Section */}
      <section className="pb-24 bg-[#050505]">

        <div className="text-center max-w-4xl mx-auto px-6">

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
            Talk To Our Experts
          </Link>

        </div>

      </section>

      <CTA />
    </MainLayout>
  );
}


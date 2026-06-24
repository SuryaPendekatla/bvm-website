import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import TechnologyEcosystem from "../components/TechnologyEcosystem/TechnologyEcosystem";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: "🏦",
    title: "Banking & Financial Services",
    description:
      "AI-powered risk management, fraud detection, customer intelligence, and operational automation.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Patient engagement, clinical insights, workflow automation, and intelligent healthcare operations.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "Predictive maintenance, quality assurance, supply chain intelligence, and smart operations.",
  },
  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    description:
      "Personalization, customer analytics, recommendation engines, and inventory optimization.",
  },
  {
    icon: "💻",
    title: "Technology",
    description:
      "AI-native platforms, engineering acceleration, developer productivity, and automation.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Personalized learning, digital platforms, intelligent content delivery, and analytics.",
  },
];

export default function Industries() {
  return (
    <MainLayout>
      <Helmet>
        <title>Industries | BVMCS AI Solutions</title>
        <meta
          name="description"
          content="Industry-specific AI solutions for Banking, Healthcare, Manufacturing, Retail, Technology, and Education."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 text-center bg-[#050505] text-white relative overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Industries
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Solutions Across Industries
          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            BVMCS delivers industry-specific AI solutions that help
            organizations improve operational efficiency, customer
            experience, decision-making, and business performance.
          </p>

        </div>

      </section>

      {/* Industries Grid */}
      <section className="pb-24 bg-[#050505]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500"
              >

                <div className="text-5xl mb-6">
                  {industry.icon}
                </div>

                <h3 className="text-white text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {industry.title}
                </h3>

                <p className="text-slate-400">
                  {industry.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* AI Use Cases */}
      <section className="py-24 bg-[#080808]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-widest mb-3">
              AI Use Cases
            </p>

            <h2 className="text-4xl font-bold text-white">
              Common AI Transformation Initiatives
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-white text-xl font-semibold mb-4">
                Intelligent Automation
              </h3>

              <p className="text-slate-400">
                Streamline workflows, reduce manual effort, and improve
                operational efficiency across departments.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-white text-xl font-semibold mb-4">
                Predictive Analytics
              </h3>

              <p className="text-slate-400">
                Forecast trends, identify opportunities, and make
                data-driven business decisions.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-white text-xl font-semibold mb-4">
                AI Assistants & Copilots
              </h3>

              <p className="text-slate-400">
                Enhance customer experiences and improve employee
                productivity with AI-powered assistants.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Outcomes */}
      <section className="py-24 bg-[#050505]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-white">
              Business Outcomes We Enable
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

      {/* CTA */}
      <section className="pb-24 bg-[#050505]">

        <div className="text-center max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Looking For Industry-Specific AI Solutions?
          </h2>

          <p className="text-slate-400 mb-8 text-lg">
            Our experts help organizations across Banking, Healthcare,
            Manufacturing, Retail, Technology, and Education implement
            AI-driven transformation initiatives that deliver measurable value.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
          >
            Schedule A Consultation
          </Link>

        </div>

      </section>

      <CTA />
    </MainLayout>
  );
}


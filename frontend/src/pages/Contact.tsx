import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import TechnologyEcosystem from "../components/TechnologyEcosystem/TechnologyEcosystem";
import CountUp from "../components/CountUp/CountUp";

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

export default function Contact() {
  return (
    <MainLayout>
      <Helmet>
        <title>Contact BVM | AI Transformation Experts</title>
        <meta
          name="description"
          content="Connect with BVM to explore AI Enablement, Generative AI, Intelligent Automation, Cloud Transformation, and Digital Engineering solutions."
        />
      </Helmet>

      <main className="bg-[#050505] text-white min-h-screen overflow-hidden">

        {/* Background Glow */}
        <div className="fixed top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

        {/* Hero */}
        <section className="pt-40 pb-20 text-center relative z-10">
          <div className="max-w-5xl mx-auto px-6">

            <p className="text-cyan-400 uppercase tracking-widest mb-4">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Contact Our AI Transformation Experts
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
              Connect with BVM to explore AI Enablement, Generative AI,
              Intelligent Automation, Cloud Transformation, and Digital
              Engineering solutions. Our experts help enterprises identify
              opportunities, implement AI solutions, and drive measurable
              business outcomes.
            </p>

          </div>
        </section>

        {/* Trust Metrics */}
        <section className="pb-20 relative z-10">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-6">

              <div className={`bvm-card ${cardAccents[0]} p-6 text-center`}>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  <CountUp value="100+" />
                </h3>
                <p className="text-slate-400">
                  Projects Delivered
                </p>
              </div>

              <div className={`bvm-card ${cardAccents[1]} p-6 text-center`}>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  <CountUp value="15+" />
                </h3>
                <p className="text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className={`bvm-card ${cardAccents[2]} p-6 text-center`}>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  <CountUp value="10+" />
                </h3>
                <p className="text-slate-400">
                  Industry Domains
                </p>
              </div>

              <div className={`bvm-card ${cardAccents[3]} p-6 text-center`}>
                <h3 className="text-cyan-400 text-3xl font-bold">
                  <CountUp value="95%" />
                </h3>
                <p className="text-slate-400">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-24 relative z-10">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <h2 className="text-4xl font-bold mb-6">
                  Talk To Our Experts
                </h2>

                <p className="text-slate-400 mb-10">
                  Whether you're exploring AI adoption, automation,
                  cloud transformation, or digital engineering,
                  our team is ready to help.
                </p>

                <div className="space-y-6">

                  <div className={`bvm-card ${cardAccents[0]} p-6`}>
                    <h3 className="font-semibold text-white mb-2">
                      📧 Email
                    </h3>

                    <p className="text-slate-400">
                      hello@bvmcs.com
                    </p>
                  </div>

                  <div className={`bvm-card ${cardAccents[1]} p-6`}>
                    <h3 className="font-semibold text-white mb-2">
                      📞 Phone
                    </h3>

                    <p className="text-slate-400">
                      +91 XXXXX XXXXX
                    </p>
                  </div>

                  <div className={`bvm-card ${cardAccents[2]} p-6`}>
                    <h3 className="font-semibold text-white mb-2">
                      📍 Location
                    </h3>

                    <p className="text-slate-400">
                      India
                    </p>
                  </div>

                </div>

                <div className="mt-8 bvm-banner-card p-6">

                  <h3 className="text-xl font-semibold mb-2">
                    Response Time
                  </h3>

                  <p className="text-slate-400">
                    Our team typically responds within 24 business hours.
                  </p>

                </div>

              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`bvm-card ${cardAccents[3]} p-8`}
              >

                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <input
                    type="email"
                    placeholder="Business Email"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                  >
                    Book a Call
                  </button>

                  <p className="text-center text-slate-500 text-sm">
                    No spam. We typically respond within 24 business hours.
                  </p>

                </div>

              </motion.form>

            </div>

          </div>
        </section>

        {/* Why Work With BVM */}
        <section className="py-24 bg-[#080808]">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold text-white">
                Why Work With BVM?
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className={`bvm-card ${cardAccents[0]} p-8`}>
                <h3 className="text-white text-xl font-semibold mb-4">
                  AI-First Expertise
                </h3>

                <p className="text-slate-400">
                  Deep expertise across AI strategy, GenAI,
                  automation, and enterprise transformation.
                </p>
              </div>

              <div className={`bvm-card ${cardAccents[1]} p-8`}>
                <h3 className="text-white text-xl font-semibold mb-4">
                  Enterprise Delivery
                </h3>

                <p className="text-slate-400">
                  Proven frameworks and delivery models
                  designed for scale.
                </p>
              </div>

              <div className={`bvm-card ${cardAccents[2]} p-8`}>
                <h3 className="text-white text-xl font-semibold mb-4">
                  Measurable Outcomes
                </h3>

                <p className="text-slate-400">
                  Focused on productivity, efficiency,
                  growth, and business value.
                </p>
              </div>

            </div>

          </div>

        </section>

        <TechnologyEcosystem />

      </main>
    </MainLayout>
  );
}


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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bvmcs.com/contact" />
        <meta property="og:title" content="Contact BVM | AI Transformation Experts" />
        <meta
          property="og:description"
          content="Connect with BVM to explore AI Enablement, Generative AI, Intelligent Automation, Cloud Transformation, and Digital Engineering solutions."
        />
        <meta property="og:image" content="https://bvmcs.com/bvm-logo.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact BVM | AI Transformation Experts" />
        <meta
          name="twitter:description"
          content="Connect with BVM to explore AI Enablement, Generative AI, Intelligent Automation, Cloud Transformation, and Digital Engineering solutions."
        />
        <meta name="twitter:image" content="https://bvmcs.com/bvm-logo.svg" />
      </Helmet>

      <main className="bg-[#050B18] text-white min-h-screen overflow-hidden">

        {/* Background Glow */}
        <div className="fixed top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[70px] rounded-full" />
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[70px] rounded-full" />

        {/* Hero */}
        <section className="pt-40 pb-20 text-center relative z-10">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

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
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

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
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

            <div className="mb-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Talk To Our Experts
              </h2>

              <p className="text-slate-400">
                Whether you're exploring AI adoption, automation,
                cloud transformation, or digital engineering,
                our team is ready to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <div className="space-y-6">

                  <div className={`bvm-card ${cardAccents[0]} p-6`}>
                    <h3 className="font-semibold text-white mb-2">
                      📧 Email
                    </h3>

                    <p className="text-slate-400">
                      info@bvmcs.com
                    </p>
                  </div>

                  <div className={`bvm-card ${cardAccents[1]} p-6`}>
                    <h3 className="font-semibold text-white mb-2">
                      📞 Phone
                    </h3>

                    <p className="text-slate-400">
                      India: +91 7075958248
                    </p>
                    <p className="text-slate-400">
                      UK: +44 771-635-1898
                    </p>
                  </div>

                  <div className={`bvm-card ${cardAccents[2]} p-6`}>
                    <h3 className="font-semibold text-white mb-4">
                      📍 Locations
                    </h3>

                    <div className="space-y-5">
                      <div>
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-0.5 mb-1.5">
                          Primary
                        </span>
                        <p className="text-white font-medium">
                          BVM IT Consulting Services India Private Limited
                        </p>
                        <p className="text-slate-400">
                          Flat No: 303, Gayathri Heights, Jubilee Enclave,
                          HITEC City, Hyderabad, Telangana 500081
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Flat+No+303%2C+Gayathri+Heights%2C+Jubilee+Enclave%2C+HITEC+City%2C+Hyderabad%2C+Telangana+500081"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
                        >
                          Get directions ↗
                        </a>
                      </div>

                      <div>
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-slate-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 mb-1.5">
                          UK Office
                        </span>
                        <p className="text-white font-medium">
                          BVM Consultancy Services
                        </p>
                        <p className="text-slate-400">
                          Office No B604, Vista Centre, 50 Salisbury Road,
                          Hounslow, TW4 6JQ, GB
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Office+No+B604%2C+Vista+Centre%2C+50+Salisbury+Road%2C+Hounslow%2C+TW4+6JQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
                        >
                          Get directions ↗
                        </a>
                      </div>

                      <div>
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-slate-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 mb-1.5">
                          US Office
                        </span>
                        <p className="text-slate-400">
                          620 Inverrary Ln, Deerfield, IL 60015, US
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=620+Inverrary+Ln%2C+Deerfield%2C+IL+60015%2C+US"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
                        >
                          Get directions ↗
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>

              {/* Contact Form */}
              <div>
                <motion.form
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`bvm-card ${cardAccents[3]} p-8`}
                >

                  <div className="space-y-5">

                    <div>
                      <label htmlFor="contact-name" className="sr-only">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="sr-only">
                        Business Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="Business Email"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="sr-only">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        placeholder="Company Name"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="sr-only">
                        Project Details
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                    >
                      Book a Strategy Call
                    </button>

                    <p className="text-center text-slate-500 text-sm">
                      No spam. We typically respond within 24 business hours.
                    </p>

                  </div>

                </motion.form>

                <div className="mt-8 bvm-banner-card p-6">

                  <h3 className="text-xl font-semibold mb-2">
                    Response Time
                  </h3>

                  <p className="text-slate-400">
                    Our team typically responds within 24 business hours.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Why Work With BVM */}
        <section className="py-24 bg-[#071022]">

          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

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


import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <main className="bg-[#050505] text-white min-h-screen overflow-hidden">

        {/* Background Glow */}
        <div className="fixed top-20 left-20 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* Hero */}
        <section className="pt-40 pb-20 text-center relative z-10">
          <div className="max-w-5xl mx-auto px-6">

            <p className="text-blue-500 uppercase tracking-widest mb-4">
              Contact Us
            </p>

            <h1 className="text-4xl md:text-7xl font-bold mb-6">
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

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                    <h3 className="font-semibold text-white mb-2">
                      📧 Email
                    </h3>
                    <p className="text-slate-400">
                      hello@bvmcs.com
                    </p>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                    <h3 className="font-semibold text-white mb-2">
                      📞 Phone
                    </h3>
                    <p className="text-slate-400">
                      +91 XXXXX XXXXX
                    </p>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                    <h3 className="font-semibold text-white mb-2">
                      📍 Location
                    </h3>
                    <p className="text-slate-400">
                      India
                    </p>
                  </div>

                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">
                    Response Time
                  </h3>

                  <p className="text-slate-400">
                    Our team typically responds within 24 hours.
                  </p>
                </div>

              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8"
              >
                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                  />

                  <input
                    type="email"
                    placeholder="Business Email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                  />

                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                  >
                    Schedule Consultation
                  </button>

                  <p className="text-center text-slate-500 text-sm mt-4">
                    No spam. We typically respond within 24 business hours.
                  </p>

                </div>
              </motion.form>

            </div>

          </div>
        </section>

      </main>
    </MainLayout>
  );
}
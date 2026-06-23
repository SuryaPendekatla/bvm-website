import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#080808] overflow-hidden">

      {/* Top Gradient Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-white">BVM</span>
              <span className="text-cyan-400">CS</span>
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Accelerating enterprise growth through AI Enablement,
              Intelligent Automation, Cloud Transformation,
              Digital Engineering, and Strategic Talent Solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                f
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>AI Enablement</li>
              <li>AI Strategy & Consulting</li>
              <li>Generative AI Solutions</li>
              <li>AI Agents & Automation</li>
              <li>Cloud Transformation</li>
              <li>Digital Engineering</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-cyan-400 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/industries"
                  className="hover:text-cyan-400 transition"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>hello@bvmcs.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>India</li>
            </ul>

            <motion.button
              animate={{
                boxShadow: [
                  "0 0 20px rgba(34,211,238,.2)",
                  "0 0 40px rgba(34,211,238,.4)",
                  "0 0 20px rgba(34,211,238,.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 rounded-xl text-white font-medium"
            >
              Book a Call
            </motion.button>

          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-20 mb-12 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to Accelerate AI Transformation?
            </h3>

            <p className="text-slate-400 mt-2">
              Let's build your AI-first future together.
            </p>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition">
            Book a Call
          </button>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-500 text-sm">
            © 2026 BVMCS. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-slate-500 text-sm">

            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Twitter
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Facebook
            </a>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}
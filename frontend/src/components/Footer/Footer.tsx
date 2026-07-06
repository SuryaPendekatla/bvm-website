import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import bvmlogo from "../../assets/logos/bvm-logo.svg";

const FULL_TEXT = "BVMCS";
const TYPE_SPEED = 220;
const START_DELAY = 500;

function FooterWordmark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });
  const hasStartedRef = useRef(false);
  const [text, setText] = useState("");
  const isDone = text.length === FULL_TEXT.length;

  useEffect(() => {
    if (!isInView || hasStartedRef.current) return;
    hasStartedRef.current = true;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 1; i <= FULL_TEXT.length; i++) {
      timeouts.push(
        setTimeout(() => setText(FULL_TEXT.slice(0, i)), START_DELAY + i * TYPE_SPEED)
      );
    }

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none pointer-events-none py-4 lg:py-6"
    >
      <p className="text-center font-extrabold leading-none tracking-[0.1em] sm:tracking-[0.15em] bg-gradient-to-b from-white/40 via-white/15 to-white/0 bg-clip-text text-transparent text-[clamp(3.5rem,20vw,15rem)]">
        {text}
        {!isDone && (
          <motion.span
            aria-hidden="true"
            className="inline-block w-[0.5em] ml-2 bg-white/40 align-middle"
            style={{ height: "0.75em" }}
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          />
        )}
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#071022] overflow-hidden">

      {/* Top Gradient Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[75px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[75px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Company */}
          <div>

            <div className="h-11 flex items-center gap-3 mb-5">

               <img
                src={bvmlogo}
                alt="BVM Logo"
                className="h-11 w-auto object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  BVM
                </h3>

                <p className="text-xs text-slate-400">
                  AI Transformation
                </p>
              </div>

            </div>

            <p className="text-slate-400 leading-relaxed">
              Accelerating enterprise growth through AI Enablement,
              Intelligent Automation, Cloud Transformation,
              Digital Engineering, and Strategic Talent Solutions.
            </p>

            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 mt-5 text-xs font-medium text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              ISO 27001 Certified
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 8.72 8.72 0 0 0-.629-.017h-.001c-.658 0-1.183.083-1.598.283-.416.199-.677.475-.845.849-.169.372-.226.842-.226 1.457v1.399h3.667l-.443 3.667h-3.224v7.98H9.101z" />
                </svg>
              </a>

            </div>

          </div>

          {/* Services */}
          <div>

            <div className="h-11 flex items-center mb-5">
              <h4 className="text-white font-semibold">
                Services
              </h4>
            </div>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  AI Enablement
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  AI Strategy & Consulting
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  Generative AI Solutions
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  AI Agents & Automation
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  Cloud Transformation
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  Digital Engineering
                </Link>
              </li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <div className="h-11 flex items-center mb-5">
              <h4 className="text-white font-semibold">
                Quick Links
              </h4>
            </div>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition">
                  Industries
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>

            </ul>

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

          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
          >
            Book a Strategy Call
          </Link>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BVM IT Consulting Services Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-slate-500 text-sm">

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

      <FooterWordmark />

    </footer>
  );
}

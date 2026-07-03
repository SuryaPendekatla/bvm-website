import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import bvmlogo from "../../assets/logos/bvm-logo.svg";
import InteractiveHoverButton from "../InteractiveHoverButton/InteractiveHoverButton";

interface NavLink {
  name: string;
  path: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3"
          >
           <img
  src={bvmlogo}
  alt="BVM Logo"
  className="h-11 w-auto object-contain"
/>

            <div>
              <h2 className="text-white text-xl font-bold leading-none">
                BVM
              </h2>

              <p className="text-[11px] text-slate-400 tracking-wider uppercase mt-1">
                AI Transformation
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group text-slate-300 hover:text-white transition"
            >
              {link.name}

              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <InteractiveHoverButton to="/contact" className="px-5 py-3 text-sm font-medium">
              Book a Call
            </InteractiveHoverButton>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-1 p-2 -mr-2"
          >
            <span
              className={`w-6 h-0.5 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />

            <span
              className={`w-6 h-0.5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-6 h-0.5 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="md:hidden overflow-hidden bg-[#080808]/98 backdrop-blur-2xl border-t border-white/10 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="px-6 py-6 flex flex-col divide-y divide-white/5">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3.5 text-lg transition ${
                    location.pathname === link.path
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="pt-5"
              >
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3.5 rounded-xl font-medium text-white">
                  Book a Call
                </button>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

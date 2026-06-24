import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20">
              B
            </div>

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
          <Link to="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(34,211,238,.15)",
                  "0 0 35px rgba(34,211,238,.4)",
                  "0 0 15px rgba(34,211,238,.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 rounded-xl font-medium text-white"
            >
              Book a Call
            </motion.button>
          </Link>

          {/* Mobile CTA */}
          <Link to="/contact" className="md:hidden">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-2 text-xs rounded-xl font-medium text-white">
              Book a Call
            </button>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
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
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition ${
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
              >
                <button className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-xl font-medium text-white">
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


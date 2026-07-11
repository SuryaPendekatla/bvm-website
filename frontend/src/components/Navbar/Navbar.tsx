import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  Package,
  Webhook,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import bvmlogo from "../../assets/logos/bvm-logo.svg";

interface NavChild {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface NavLink {
  name: string;
  path: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    path: "/products",
    children: [
      { name: "WhiteBooks APIs", path: "/products#apis", icon: Webhook },
      { name: "WhiteBooks Softwares", path: "/products#softwares", icon: Package },
      { name: "Certifications", path: "/products#certifications", icon: ShieldCheck },
      { name: "Overview", path: "/products#overview", icon: LayoutGrid },
    ],
  },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050B18]/95 backdrop-blur-sm border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className="relative inline-flex items-center gap-1 text-slate-300 hover:text-white transition"
                >
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full pt-3
                    opacity-0 invisible translate-y-1
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                    transition-all duration-200 z-50
                  "
                >
                  <div className="w-64 rounded-2xl border border-white/10 bg-[#0A1428]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2">
                    {link.children.map((child) => {
                      const Icon = child.icon;

                      return (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition"
                        >
                          <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            className="md:hidden overflow-hidden bg-[#071022]/98 backdrop-blur-2xl border-t border-white/10 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="px-6 py-6 flex flex-col divide-y divide-white/5">

              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.path}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileProductsOpen(false);
                        }}
                        className={`py-3.5 text-lg transition ${
                          location.pathname === link.path
                            ? "text-cyan-400"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>

                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((prev) => !prev)}
                        aria-label={
                          mobileProductsOpen
                            ? `Collapse ${link.name} sections`
                            : `Expand ${link.name} sections`
                        }
                        aria-expanded={mobileProductsOpen}
                        className="p-2 -mr-2 text-slate-400 hover:text-white transition"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pb-3"
                        >
                          {link.children.map((child) => {
                            const Icon = child.icon;

                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileProductsOpen(false);
                                }}
                                className="flex items-center gap-3 py-2.5 pl-1 text-slate-400 hover:text-white transition"
                              >
                                <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                                {child.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
              )}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="pt-5"
              >
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3.5 rounded-xl font-medium text-white">
                  Book a Strategy Call
                </button>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

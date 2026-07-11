import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import gspLogo from "../../assets/logos/gsp-certified.svg";
import isoLogo from "../../assets/logos/iso-certified.svg";

interface Certification {
  title: string;
  subtitle: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "Licensed GST Suvidha Provider",
    subtitle: "GSP",
    description:
      "A direct, authorised connection to GSTN — no resold pipes, no middlemen, filed straight from the source.",
  },
  {
    title: "ISO 27001:2022",
    subtitle: "Certified",
    description:
      "Enterprise-grade information security infrastructure with role-based access, encrypted filings, and audited controls.",
  },
];

export default function CertificationSection() {
  return (
    <section id="certifications" className="relative bg-[#050B18] py-24 overflow-hidden scroll-mt-24">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-3">
            Certifications & Trust
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Compliance Infrastructure You Can Trust
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Every filing runs on a licensed, independently certified
            foundation — built for finance teams that can't afford to get
            it wrong.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`bvm-card ${
                index === 0 ? "bvm-card-accent-cyan" : "bvm-card-accent-violet"
              } p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left`}
            >
              <img
                src={index === 0 ? gspLogo : isoLogo}
                alt={
                  index === 0
                    ? "Licensed GST Suvidha Provider badge"
                    : "ISO 27001:2022 Certified badge"
                }
                className="h-24 w-auto shrink-0"
              />

              <div>
                <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-1">
                  {cert.subtitle}
                </p>

                <h3 className="text-white text-2xl font-semibold mb-3">
                  {cert.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

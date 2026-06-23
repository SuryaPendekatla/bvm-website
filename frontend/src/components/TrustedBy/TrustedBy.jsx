import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "OpenAI",
  "Salesforce",
  "Oracle",
];

export default function TrustedBy() {
  return (
    <section className="bg-[#050505] py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-slate-400 uppercase tracking-widest">
            Technologies & Platforms We Work With
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="
                bg-slate-900/50
                border
                border-slate-800
                rounded-2xl
                p-6
                text-center
                text-white
                font-semibold
                hover:border-blue-500
                transition-all
              "
            >
              {company}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
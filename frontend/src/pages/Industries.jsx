import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import { Link } from "react-router-dom";

const industries = [
"Banking & Financial Services",
"Healthcare",
"Manufacturing",
"Retail & E-Commerce",
"Technology",
"Education",
];

export default function Industries() {
return ( <MainLayout> <section className="pt-40 pb-24 text-center bg-[#050505] text-white"> <div className="max-w-5xl mx-auto px-6"> <p className="text-blue-500 uppercase tracking-widest mb-4">
Industries </p>

```
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        AI Solutions Across Industries
      </h1>

      <p className="text-slate-400 text-xl max-w-3xl mx-auto">
        BVM delivers industry-specific AI solutions for Banking, Financial Services, Healthcare, Manufacturing, Retail, E-Commerce, Technology, and Education. Our expertise helps organizations improve operational efficiency, customer experience, and business performance.
      </p>
    </div>
  </section>

  <section className="pb-24 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
          >
            <h3 className="text-white text-xl font-semibold">
              {industry}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section className="pb-24 bg-[#0A0A0A]">
  <div className="text-center max-w-4xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Looking For Industry-Specific AI Solutions?
    </h2>

    <p className="text-slate-400 mb-8">
      Our experts help organizations across Banking, Healthcare,
      Manufacturing, Retail, Technology, and Education implement
      AI-driven transformation initiatives that deliver measurable value.
    </p>

    <Link
      to="/contact"
      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
    >
      Schedule A Consultation
    </Link>

  </div>
</section>
  <CTA />
</MainLayout>

);
}

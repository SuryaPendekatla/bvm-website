import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import { Link } from "react-router-dom";

const values = [
{
title: "Innovation",
description:
"We leverage emerging technologies to solve complex business challenges.",
},
{
title: "Excellence",
description:
"We deliver high-quality solutions focused on measurable outcomes.",
},
{
title: "Integrity",
description:
"Transparency, trust, and accountability guide every engagement.",
},
{
title: "Customer Success",
description:
"Our success is measured by the success of our clients.",
},
];

const stats = [
{ value: "100+", label: "Projects Delivered" },
{ value: "15+", label: "Years of Expertise" },
{ value: "10+", label: "Industry Domains" },
{ value: "95%", label: "Client Satisfaction" },
];

export default function About() {
return ( <MainLayout> <section className="pt-40 pb-24 text-center bg-[#050505] text-white"> <div className="max-w-5xl mx-auto px-6"> <p className="text-blue-500 uppercase tracking-widest mb-4">
About BVMCS </p>

```
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        AI Enablement & Digital Transformation Experts
      </h1>

      <p className="text-slate-400 text-xl max-w-3xl mx-auto">
        BVM helps enterprises accelerate innovation through AI Enablement, Generative AI, Intelligent Automation, Cloud Transformation, and Digital Engineering services. Our consultants work with organizations to develop scalable AI strategies and deliver measurable business outcomes.
      </p>
    </div>
  </section>

  <section className="py-24 bg-[#050505]">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl text-white font-bold mb-6">
          Who We Are
        </h2>

        <p className="text-slate-400 leading-relaxed">
          BVMCS is a technology consulting and AI transformation company
          helping enterprises modernize operations and accelerate growth.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
        <h3 className="text-white text-2xl font-semibold mb-4">
          Mission & Vision
        </h3>

        <p className="text-slate-400">
          Empower organizations through intelligent technology,
          innovation, and AI-first transformation.
        </p>
      </div>
    </div>
  </section>

  <section className="py-24 bg-[#0A0A0A]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-white text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-24 bg-[#050505]">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
        >
          <h3 className="text-4xl text-blue-500 font-bold mb-2">
            {stat.value}
          </h3>

          <p className="text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </section>
  <section className="pb-24 bg-[#050505]">
  <div className="text-center">

    <h2 className="text-3xl font-bold text-white mb-6">
      Explore Our AI Services
    </h2>

    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
      Discover how BVMCS helps enterprises accelerate innovation through
      AI Enablement, Intelligent Automation, Generative AI, and Digital
      Transformation solutions.
    </p>

    <Link
      to="/services"
      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
    >
      Explore Services
    </Link>

  </div>
</section>
  <CTA />
</MainLayout>

);
}

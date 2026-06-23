import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import { Link } from "react-router-dom";

const services = [
{
title: "AI Enablement",
description: "Empower teams with AI tools and adoption frameworks.",
},
{
title: "AI Strategy & Consulting",
description: "Create a roadmap for enterprise AI transformation.",
},
{
title: "Generative AI Solutions",
description: "Build copilots, assistants and GenAI platforms.",
},
{
title: "AI Agents & Automation",
description: "Automate business processes using AI agents.",
},
{
title: "Cloud Transformation",
description: "Modernize infrastructure with scalable cloud solutions.",
},
{
title: "Digital Engineering",
description: "Build modern applications and digital platforms.",
},
];

export default function ServicesPage() {
return ( <MainLayout> <section className="pt-40 pb-24 text-center bg-[#050505] text-white"> <div className="max-w-5xl mx-auto px-6"> <p className="text-blue-500 uppercase tracking-widest mb-4">
Services </p>

```
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Enterprise AI Services & Solutions
      </h1>

      <p className="text-slate-400 text-xl max-w-3xl mx-auto">
        Our AI services include AI Strategy Consulting, Generative AI Solutions, Intelligent Automation, AI Enablement, Cloud Transformation, and Digital Engineering. We help enterprises modernize operations, improve productivity, and accelerate growth through emerging technologies.
      </p>
    </div>
  </section>

  <section className="pb-24 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
          >
            <h3 className="text-white text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section className="pb-24 bg-[#050505]">
  <div className="text-center max-w-4xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Ready To Transform Your Business With AI?
    </h2>

    <p className="text-slate-400 mb-8">
      Talk with our experts about AI Enablement, Generative AI,
      Intelligent Automation, Cloud Transformation, and Digital
      Engineering solutions tailored to your business goals.
    </p>

    <Link
      to="/contact"
      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
    >
      Talk To Our Experts
    </Link>

  </div>
</section>
  <CTA />
</MainLayout>

);
}

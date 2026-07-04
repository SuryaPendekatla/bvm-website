import MainLayout from "../layouts/MainLayout";
import CTA from "../components/CTA/CTA";
import TechnologyEcosystem from "../components/TechnologyEcosystem/TechnologyEcosystem";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp/CountUp";

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

const values = [
  {
    title: "Innovation",
    description:
      "We leverage emerging technologies and AI to solve complex business challenges and create competitive advantages.",
  },
  {
    title: "Excellence",
    description:
      "Every engagement is focused on quality execution, measurable outcomes, and long-term value creation.",
  },
  {
    title: "Integrity",
    description:
      "Transparency, trust, and accountability are embedded into every client relationship.",
  },
  {
    title: "Customer Success",
    description:
      "Our success is measured by the growth, efficiency, and transformation achieved by our clients.",
  },
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Expertise" },
  { value: "10+", label: "Industry Domains" },
  { value: "95%", label: "Client Satisfaction" },
];

const approach = [
  {
    title: "Discover",
    description:
      "Identify opportunities, challenges, and AI transformation priorities.",
  },
  {
    title: "Design",
    description:
      "Build strategic roadmaps, architectures, and transformation frameworks.",
  },
  {
    title: "Deploy",
    description:
      "Implement scalable solutions across AI, cloud, automation, and engineering.",
  },
  {
    title: "Scale",
    description:
      "Optimize, govern, and continuously improve business outcomes.",
  },
];

export default function About() {
  return (
    <MainLayout>
      <Helmet>
        <title>About BVM | AI Transformation Experts</title>
        <meta
          name="description"
          content="Learn how BVM helps enterprises accelerate growth through AI Enablement, Generative AI, Intelligent Automation, Cloud Transformation, and Digital Engineering."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 text-center bg-[#050505] text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full" />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            About BVM
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Enablement & Digital Transformation Experts
          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            BVM helps enterprises accelerate innovation through AI
            Enablement, Generative AI, Intelligent Automation, Cloud
            Transformation, and Digital Engineering services.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400"><CountUp value="100+" /></h3>
              <p className="text-slate-400 text-sm">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400"><CountUp value="15+" /></h3>
              <p className="text-slate-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400"><CountUp value="95%" /></h3>
              <p className="text-slate-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl text-white font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              BVM is an AI-first digital transformation partner helping
              enterprises modernize operations, unlock new revenue
              opportunities, and accelerate innovation through intelligent
              technologies. We combine strategy, engineering excellence,
              cloud expertise, and AI enablement to help organizations move
              from experimentation to measurable business impact.
            </p>
          </div>

          <div className="bvm-card bvm-card-accent-cyan p-8">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Mission & Vision
            </h3>

            <p className="text-slate-400">
              Empower organizations through intelligent technology,
              innovation, and AI-first transformation while creating
              sustainable business growth and competitive advantage.
            </p>
          </div>

        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-widest mb-3">
              Our Approach
            </p>

            <h2 className="text-4xl font-bold text-white">
              How We Deliver Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div
                key={index}
                className={`bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
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

      {/* Values */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
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

      {/* Stats */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bvm-card ${cardAccents[index % cardAccents.length]} p-8 text-center`}
            >
              <h3 className="text-4xl text-cyan-400 font-bold mb-2">
                <CountUp value={stat.value} />
              </h3>

              <p className="text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TechnologyEcosystem />

      {/* Services CTA */}
      <section className="pb-24 bg-[#050505]">
        <div className="text-center px-6">

          <h2 className="text-3xl font-bold text-white mb-6">
            Explore Our AI Services
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Discover how BVM helps enterprises accelerate innovation
            through AI Enablement, Intelligent Automation, Generative AI,
            and Digital Transformation solutions.
          </p>

          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
          >
            Explore Services
          </Link>

        </div>
      </section>

      <CTA />
    </MainLayout>
  );
}

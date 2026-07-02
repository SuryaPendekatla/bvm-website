import { motion } from "framer-motion";
import CountUp from "../CountUp/CountUp";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

const testimonials: Testimonial[] = [
{
name: "Sarah Johnson",
role: "CIO, GlobalBank",
quote:
"BVMCS helped us accelerate our AI transformation roadmap and deliver measurable business outcomes.",
},
{
name: "Michael Chen",
role: "VP Technology, RetailMax",
quote:
"Their expertise in AI enablement and cloud modernization exceeded our expectations.",
},
{
name: "Priya Sharma",
role: "Director, HealthPlus",
quote:
"The team delivered innovative solutions that improved efficiency and customer experience.",
},
];

export default function Testimonials() {
return ( <section
   id="testimonials"
   className="relative bg-[#080808] py-24 overflow-hidden"
 >
{/* Background Glow */} <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" /> <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <p className="text-blue-500 uppercase tracking-widest mb-3">
        Client Success
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        What Our Clients Say
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto">
        Trusted by organizations across industries to deliver AI,
        cloud, and digital transformation outcomes.
      </p>
    </motion.div>

    {/* Testimonial Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className={`group bvm-card ${cardAccents[index % cardAccents.length]} p-8`}
        >
          <div className="text-6xl font-bold text-blue-400 mb-6">
            "
          </div>

          <p className="text-slate-300 leading-relaxed mb-8 italic">
            {item.quote}
          </p>

          <div className="border-t border-white/10 pt-6">
            <h4 className="text-white font-semibold text-lg">
              {item.name}
            </h4>

            <p className="text-slate-500 text-sm mt-1">
              {item.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Trust Banner */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 bvm-banner-card p-10 text-center"
    >
      <h3 className="text-3xl font-bold text-white mb-4">
        Delivering Results Across Industries
      </h3>

      <p className="text-slate-400 max-w-3xl mx-auto mb-8">
        From financial services and healthcare to retail and technology,
        we help organizations accelerate innovation and achieve measurable
        business impact.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <div>
          <h4 className="text-3xl font-bold text-blue-400"><CountUp value="100+" /></h4>
          <p className="text-slate-400 text-sm">Projects Delivered</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-cyan-400"><CountUp value="95%" /></h4>
          <p className="text-slate-400 text-sm">Client Satisfaction</p>
        </div>

        <div>
          <h4 className="text-3xl font-bold text-purple-400"><CountUp value="15+" /></h4>
          <p className="text-slate-400 text-sm">Years Experience</p>
        </div>
      </div>
    </motion.div>

  </div>
</section>

);
}

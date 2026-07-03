import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const cardAccents = [
  "bvm-card-accent-cyan",
  "bvm-card-accent-violet",
  "bvm-card-accent-amber",
  "bvm-card-accent-emerald",
  "bvm-card-accent-sky",
  "bvm-card-accent-pink",
];

const faqs: FAQItem[] = [
  {
    question: "What AI services does BVM provide?",
    answer:
      "We provide AI Enablement, AI Strategy & Consulting, Generative AI Solutions, AI Agents & Automation, Cloud Transformation, and Enterprise AI Integration.",
  },
  {
    question: "How long does AI implementation take?",
    answer:
      "Depending on complexity, AI initiatives can range from a few weeks for pilot projects to several months for enterprise-wide transformation programs.",
  },
  {
    question: "Do you build custom AI agents?",
    answer:
      "Yes. We design and deploy custom AI agents, copilots, and intelligent automation systems tailored to your business processes.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We work with Banking, Financial Services, Healthcare, Manufacturing, Retail, Technology, Education, and other enterprise sectors.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply schedule a consultation with our team. We assess your goals, identify opportunities, and create a roadmap for AI adoption.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#050505] py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got Questions?
          </h2>

          <p className="text-slate-400">
            Everything you need to know about our AI services and transformation process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq: FAQItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`bvm-card ${cardAccents[index % cardAccents.length]}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-blue-400 text-2xl">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

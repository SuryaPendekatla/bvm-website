import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import TechnologyMarquee from "../components/TechnologyMarquee/TechnologyMarquee";
import Metrics from "../components/Metrics/Metrics";
import AIEnablement from "../components/AIEnablement/AIEnablement";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Process from "../components/Process/Process";
import FAQ from "../components/FAQ/FAQ";
import TechnologyEcosystem from "../components/TechnologyEcosystem/TechnologyEcosystem";
import Roadmap from "../components/Roadmap/Roadmap";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>BVM | AI Enablement & Digital Transformation</title>

        <meta
          name="description"
          content="BVM helps enterprises accelerate growth through AI Enablement, Intelligent Automation, Cloud Transformation, Digital Engineering, and Generative AI Solutions."
        />
      </Helmet>

      <Hero />

      <TechnologyMarquee />

      <TrustedBy />

      <Metrics />

      <AIEnablement />

      <Process />

      <Services />

      <Industries />

      <WhyChooseUs />

      <TechnologyEcosystem />

      <Roadmap />

      <CaseStudies />

      <Testimonials />

      <FAQ />

      <CTA />

    </MainLayout>
  );
}
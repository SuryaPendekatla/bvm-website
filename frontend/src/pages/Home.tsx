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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bvmcs.com/" />
        <meta property="og:title" content="BVM | AI Enablement & Digital Transformation" />
        <meta
          property="og:description"
          content="BVM helps enterprises accelerate growth through AI Enablement, Intelligent Automation, Cloud Transformation, Digital Engineering, and Generative AI Solutions."
        />
        <meta property="og:image" content="https://bvmcs.com/bvm-logo.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BVM | AI Enablement & Digital Transformation" />
        <meta
          name="twitter:description"
          content="BVM helps enterprises accelerate growth through AI Enablement, Intelligent Automation, Cloud Transformation, Digital Engineering, and Generative AI Solutions."
        />
        <meta name="twitter:image" content="https://bvmcs.com/bvm-logo.svg" />
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

      <Roadmap />

      <CaseStudies />

      <Testimonials />

      <FAQ />

      <CTA />

    </MainLayout>
  );
}
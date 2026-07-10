import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import ProductHero from "../components/Products/ProductHero";
import SoftwareSection from "../components/Products/SoftwareSection";
import ApiSection from "../components/Products/ApiSection";
import CertificationSection from "../components/Products/CertificationSection";
import AIEnablement from "../components/AIEnablement/AIEnablement";
import CTA from "../components/CTA/CTA";

export default function Products() {
  return (
    <MainLayout>
      <Helmet>
        <title>Products | BVM WhiteBooks Softwares & APIs</title>

        <meta
          name="description"
          content="Explore WhiteBooks by BVM — accounting, GST, e-invoice, and e-way bill software plus developer APIs, backed by GSP licensing and ISO 27001:2022 certification."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bvmcs.com/products" />
        <meta property="og:title" content="Products | BVM WhiteBooks Softwares & APIs" />
        <meta
          property="og:description"
          content="Explore WhiteBooks by BVM — accounting, GST, e-invoice, and e-way bill software plus developer APIs, backed by GSP licensing and ISO 27001:2022 certification."
        />
        <meta property="og:image" content="https://bvmcs.com/bvm-logo.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products | BVM WhiteBooks Softwares & APIs" />
        <meta
          name="twitter:description"
          content="Explore WhiteBooks by BVM — accounting, GST, e-invoice, and e-way bill software plus developer APIs, backed by GSP licensing and ISO 27001:2022 certification."
        />
        <meta name="twitter:image" content="https://bvmcs.com/bvm-logo.svg" />
      </Helmet>

      <ProductHero />

      <SoftwareSection />

      <ApiSection />

      <CertificationSection />

      <AIEnablement />

      <CTA />
    </MainLayout>
  );
}

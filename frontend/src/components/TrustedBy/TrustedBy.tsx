import { motion } from "framer-motion";
import googleCloudLogo from "../../assets/logos/google-cloud.svg";
import awsLogo from "../../assets/logos/aws.svg";
import openaiLogo from "../../assets/logos/openai.svg";
import salesforceLogo from "../../assets/logos/salesforce.svg";
import azureLogo from "../../assets/logos/azure.svg";
import snowflakeLogo from "../../assets/logos/snowflake.svg";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
 { name: "Google Cloud", logo: googleCloudLogo },
  { name: "AWS", logo: awsLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "Azure", logo: azureLogo },
  { name: "Snowflake", logo: snowflakeLogo },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#050B18] py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

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
              <div className="flex flex-col items-center justify-center gap-4">
  <img
    src={company.logo}
    alt={company.name}
    className="h-10 w-auto object-contain opacity-90"
  />

  <span className="text-sm font-semibold">
    {company.name}
  </span>
</div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

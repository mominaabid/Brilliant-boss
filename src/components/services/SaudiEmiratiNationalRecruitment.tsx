import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { Link } from "react-router-dom";
import {
  FaNetworkWired,
  FaBalanceScale,
  FaChartLine,
  FaUsersCog,
  FaSearch,
  FaClipboardCheck,
  FaFlag,
  FaHandshake,
  FaUserLock,
} from "react-icons/fa";

const ourApproachData = [
  {
    icon: <FaNetworkWired className="h-9 w-9 " />,
    title: "Deep Local Network",
    description:
      "Gain access to our extensive, exclusive database of qualified Saudi and Emirati professionals across all industries.",
  },
  {
    icon: <FaBalanceScale className="h-9 w-9 " />,
    title: "Regulatory & Cultural Expertise",
    description:
      "Navigate complex labor laws, nationalization quotas (Saudization & Emiratisation), and cultural nuances with confidence.",
  },
  {
    icon: <FaSearch className="h-9 w-9 " />,
    title: "Strategic Sourcing & Headhunting",
    description:
      "We go beyond our database, employing proactive headhunting and targeted sourcing strategies to find the best passive and active candidates.",
  },
  {
    icon: <FaClipboardCheck className="h-9 w-9 " />,
    title: "Rigorous Vetting & Assessment",
    description:
      "Our multi-stage evaluation process assesses not only technical skills but also cultural fit and long-term potential within your organization.",
  },
  {
    icon: <FaFlag className="h-9 w-9 " />,
    title: "Nationalization Program Advisory",
    description:
      "We provide strategic advice on achieving and maintaining your Saudization and Emiratisation targets effectively and sustainably.",
  },
  {
    icon: <FaChartLine className="h-9 w-9 " />,
    title: "Candidate Development",
    description:
      "We identify high-potential local talent and can assist in creating development plans to align their skills with your specific needs.",
  },
  {
    icon: <FaHandshake className="h-9 w-9 " />,
    title: "Seamless Onboarding & Integration",
    description:
      "Our support extends beyond the hire; we assist with onboarding to ensure your new national employees are successfully integrated.",
  },
  {
    icon: <FaUserLock className="h-9 w-9 " />,
    title: "Confidential Executive Search",
    description:
      "We conduct highly confidential searches for senior leadership and C-suite roles, ensuring discretion and professionalism throughout.",
  },
  {
    icon: <FaUsersCog className="h-9 w-9 " />,
    title: "Long-Term Talent Partnership",
    description:
      "We aim to be your long-term partner, helping you build a sustainable pipeline of national talent for future leadership roles.",
  },
];

const sectors = [
  "Government & Public Sector",
  "Banking & Finance",
  "Energy & Utilities",
  "Technology & Telecoms",
  "Healthcare",
  "Real Estate & Construction",
  "Retail & FMCG",
  "Hospitality & Leisure",
  "Aviation & Logistics",
  "Manufacturing & Industrial",
  "Education",
  "Media & Entertainment",
  "Professional Services",
  "Automotive",
  "Pharmaceuticals & Life Sciences",
  "Family Groups & Conglomerates",
  "Sovereign Wealth Funds",
  "Oil & Gas",
];

// --- Main National Recruitment Component ---
export default function SaudiEmiratiNationalRecruitment() {
  return (
    <main className="bg-gray-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-4 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left">
           
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
              Empowering Your Workforce with National Talent
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mt-6">
              We are your strategic partner in achieving nationalization goals,
              connecting you with top-tier Saudi and Emirati professionals who
              will drive your business forward.
            </p>
            <div className="mt-1 flex gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <CallToActionButton
                  text="Achieve Your Nationalization"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/saudi.jpg"
              alt="Saudi & Emirati National Recruitment"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/services-expertise.jpg"
              alt="Professional Saudi and Emirati nationals in a meeting"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="text-gray-600">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              <span className="text-red-800">Harness</span> the Power of{" "}
              <span className="text-red-800">Local Expertise</span>
            </h2>
            <p className="mt-6 text-lg">
              In line with government initiatives like Saudization and
              Emiratisation, building a strong local workforce is more critical
              than ever. Hiring national talent brings invaluable local market
              knowledge, cultural understanding, and long-term stability to your
              organization.
            </p>
            <p className="mt-4 text-lg">
              We specialize in navigating this landscape, helping you find and
              retain the best local professionals who are perfectly aligned with
              your company's vision and values.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              A <span className="text-red-800">Strategic Approach</span> to
              National Recruitment
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We go beyond standard recruitment to provide a comprehensive
              service that ensures success for both employers and candidates.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ourApproachData.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center text-[#03254D] transition-colors duration-300 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-center text-xl font-bold text-[#03254D] transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
            Connecting <span className="text-red-800">National Talent</span> Across Key Sectors
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our specialization covers the most vital industries driving the
            regional economy.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gray-100 text-[#03254D] font-semibold py-3 px-6 rounded-full shadow-sm"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-950">
        <div className="container mx-auto px-6 max-sm:py-8 py-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Build a Stronger, Localized Workforce
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
            Partner with us to meet your nationalization targets and unlock the
            potential of local talent. Let's discuss your specific recruitment
            needs.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <CallToActionButton
                text="Consult with Our Specialists"
                className="text-red-800"
                isPrimary={false}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

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
      {/* New Section: National Recruitment, image right, text left, after header */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Saudi & Emirati National Recruitment
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong> is your trusted partner
            for sourcing, hiring, and developing top Saudi and Emirati talent. We
            help you meet nationalization targets while building a high-performing,
            culturally aligned workforce.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            Our team at{" "}
            <strong>Brilliant Boss HR consultancy</strong> leverages deep local
            networks, regulatory expertise, and a rigorous vetting process to
            deliver the best national candidates for your business.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Choose{" "}
            <strong>Brilliant Boss HR consultancy</strong> for seamless onboarding,
            compliance, and long-term success in Saudi Arabia and the UAE.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/em2.jpg"
            alt="Saudi Emirati National Recruitment"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain"
          />
        </div>
      </section>

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
     <section className="relative text-gray-900 py-12 md:py-20 px-4 bg-[#e6f9fb]">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Today is the day to streamline your HR process!
      </h2>
      <p className="text-base md:text-lg">
        Fill out the form, and we’ll handle the rest.
      </p>
    </div>

    {/* Right Form */}
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6 text-center">
        Get more information today
      </h3>
      <form
        action="https://formspree.io/f/xzzawdja"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
          required
        />
        <input
          type="hidden"
          name="_subject"
          value="New Contact Inquiry"
        />
        <input
          type="hidden"
          name="_redirect"
          value="https://yourdomain.com/thank-you"
        />
        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2 mt-3 hover:bg-red-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

    </main>
  );
}

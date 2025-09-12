import {
  FaHandshake,
  FaUserCheck,
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
  FaPassport,
  FaHome,
  FaCalculator,
  FaUsers,
  FaFileContract,
  FaReceipt,
  FaHeart,
} from "react-icons/fa";

import Header from "../Header";
import {
  SectionTitle,
  CallToActionButton,
  BenefitChecklistItem,
  ServiceCard,
} from "../../utils/helper";
import { Link } from "react-router-dom";

const MOBILITY_BENEFITS = [
  "Minimising tax costs and risks",
  "Identifying visa and travel costs",
  "Paying employees accurately and timely",
  "Identifying traveling employees who may cause compliance risks",
  "Providing valuable analytical data reports for mobility, HR and finance",
  "Assessing tax reporting and withholding obligations in the UAE",
  "Enhancing the employee relocation experience to boost satisfaction and retention",
  "Reducing the administrative burden on your internal HR and finance teams",
  "Ensuring consistent and fair application of global mobility policies",
  "Streamlining vendor management for all relocation-related services",
];

const MOBILITY_SERVICES = [
  {
    icon: <FaHandshake />,
    title: "Structured Global Mobility",
    description:
      "Highly experienced and dedicated mobility specialists at Brilliant Boss HR offer a wide range of administrative services, ensuring a smooth mobility process for your employees.",
  },
  {
    icon: <FaUserCheck />,
    title: "Global Talent Hiring",
    description:
      "Our experts streamline the hiring process for international talent, managing everything from sourcing to onboarding in full compliance with local regulations.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Compliance & Risk Mitigation",
    description:
      "We navigate the complexities of local and international law to ensure your mobility program is fully compliant, protecting your business from potential risks.",
  },
  {
    icon: <FaChartLine />,
    title: "Cross-Border Employee Benefits",
    description:
      "We design competitive benefits packages that align with local expectations and international standards to attract and retain key employees worldwide.",
  },
  {
    icon: <FaGlobe />,
    title: "Successful International Expansion",
    description:
      "Partner with us to build a robust international expansion strategy, leveraging our top-class global mobility and advisory services for a seamless launch.",
  },
  {
    icon: <FaPassport />,
    title: "Seamless Visa & Immigration",
    description:
      "We manage the entire visa and work permit application process, from documentation gathering to final approval, ensuring a smooth and timely transition for your employees.",
  },
  {
    icon: <FaHome />,
    title: "Comprehensive Relocation Support",
    description:
      "We offer personalized relocation services including home finding, school searches, and settling-in support to ensure a positive experience for employees and their families.",
  },
  {
    icon: <FaCalculator />,
    title: "Tax & Payroll Coordination",
    description:
      "Our experts handle the complexities of international payroll and tax compliance, ensuring accurate compensation and adherence to all relevant financial regulations.",
  },
  {
    icon: <FaUsers />,
    title: "Cultural Training & Integration",
    description:
      "Prepare your employees for success in their new environment with our customized cross-cultural training programs, designed to bridge cultural gaps and enhance team cohesion.",
  },
  {
    icon: <FaFileContract />,
    title: "Mobility Policy & Strategy",
    description:
      "We work with you to design and implement a clear, competitive, and compliant global mobility policy that aligns with your business goals and supports your talent strategy.",
  },
  {
    icon: <FaReceipt />,
    title: "Expense Management & Reporting",
    description:
      "We provide transparent tracking and management of all relocation-related expenses, offering clear reporting to help you manage budgets effectively.",
  },
  {
    icon: <FaHeart />,
    title: "Spousal & Family Support",
    description:
      "We offer dedicated support for partners and families, including career coaching and community integration services, to ensure a successful assignment for everyone.",
  },
];

// --- Main Page Component ---
const EmployeeMobilityPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      <main>
        {/* Section 1: Hero */}
        <section className="py-24 md:py-4 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
                Your Premier Global Mobility Specialists in Dubai
              </h1>
              <p className="mt-4  text-lg text-gray-600 max-w-3xl">
                As the leading experts in global mobility, we are dedicated to
                seamlessly relocating your most valuable asset—your people. We
                provide end-to-end solutions for mobilising the best talent to
                the UAE, expertly navigating complex tax laws and ensuring every
                move is made in full compliance with local regulations. Partner
                with us for a strategic, efficient, and stress-free expansion
                into the region.
              </p>
              <Link to="/contact">
                <CallToActionButton
                  text="Contact Us"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
            <div className="h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="/dubai-overall.jpg"
                alt="Global Mobility"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Introduction */}
        <section className="sm:py-20 py-4 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="Global Mobility in Dubai at Your Fingertips"
              subtitle="Whether you are relocating a single manager to Abu Dhabi or building an entire team in Dubai, we can manage your entire global workforce in the UAE. Brilliant Boss HR manages not just visa and work permits but also the full gamut of global mobility issues on your behalf while making sure your compliance needs are covered."
              titleClass="text-[#03254D]"
              subtitleClass="text-gray-600"
            />
            <Link to="/contact">
              <CallToActionButton
                text="Schedule A Call"
                className="bg-red-800 hover:bg-red-700"
              />
            </Link>
          </div>
        </section>

        {/* Section 3: Benefits */}
        <section className="pt-24 sm:pb-20 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 sm:gap-12 gap-2 items-center">
            <div className="md:pr-8">
              <SectionTitle
                titleClass="text-[#03254D]"
                subtitleClass="text-gray-600"
                title="Your Partner for Sustainable Success in the UAE"
                subtitle="Our proactive and efficient approach to global mobility in Dubai adds value to your business by streamlining complex processes, ensuring full compliance, and providing a seamless relocation experience for your employees."
              />
            </div>
            <div>
              <ul className="space-y-3">
                {MOBILITY_BENEFITS.map((benefit) => (
                  <BenefitChecklistItem key={benefit} text={benefit} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Strategic Advisory */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#03254D]">
                Comprehensive <span className="text-blue-950">Global Immigration</span> Support and <span className="text-blue-950">Strategic Advisory</span> Services
              </h1>
              <p className="text-lg mb-4 text-gray-600 mt-2 max-w-3xl mx-auto">
                Navigating the intricate landscape of global mobility and
                immigration in the UAE requires a deep understanding of local
                laws and a strategic approach. Having an expert migration
                consultant by your side is not just beneficial—it's crucial for
                success. We provide comprehensive assistance to companies of all
                sizes, guiding you through every step of legal compliance for
                your employees, executives, and business owners. We meticulously
                manage documentation, liaise with government authorities, and
                ensure every aspect of the immigration process is handled with
                precision, guaranteeing a smooth, efficient, and stress-free
                transition for your talent.
              </p>
              <Link to="/contact">
                <CallToActionButton
                  text="Contact Our Specialist"
                  className="bg-blue-950"
                />
              </Link>
            </div>
            <div className="h-80 w-full rounded-lg shadow-lg flex items-center justify-right">
              <img
                src="/immigration.jpg"
                alt="Global Mobility"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Section 5: What We Do */}
        <section className="py-20 max-sm:py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              titleClass="text-[#03254D]"
              subtitleClass="text-gray-600"
              title="Our Strategic Global Mobility Services"
              subtitle="We cover all aspects of mobility for your local and international employees, from immigration assistance and hiring to tax advisory services."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-3">
              {MOBILITY_SERVICES.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Connect With Us */}
        <section className="relative text-white py-24 px-4">
          <div className="absolute inset-0 bg-[#5b0404]" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-lg mb-6">
              Our global mobility programs are backed by our extensive
              experience. We combine a multi-disciplinary approach with deep
              industry knowledge to help you overcome all the challenges of
              global mobility and start your international operations without
              delay.
            </p>
            <Link to="/contact">
              <CallToActionButton
                text="Contact Us Now"
                className="bg-blue-800 text-red-950"
              />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmployeeMobilityPage;

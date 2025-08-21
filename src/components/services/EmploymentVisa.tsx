import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { GiPalmTree } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { useStore } from "../../store/store";
import {
  FaCompass,
  FaRedo,
  FaShieldAlt,
  FaRocket,
  FaBuilding,
  FaUserTie,
  FaClipboardCheck,
  FaGavel,
} from "react-icons/fa";
import { MdOutlineAllInclusive } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const whyChooseUsData = [
  {
    icon: <FaCompass className="h-12 w-12  mb-4 mx-auto" />,
    title: "Expert Guidance",
    description:
      "Navigate the application process easily with our experienced visa consultants.",
  },
  {
    icon: <GiPalmTree className="h-12 w-12  mb-4 mx-auto" />,
    title: "100% Emirati-Owned",
    description:
      "This allows us to process employment visas much faster and at better prices.",
  },
  {
    icon: <FaRedo className="h-12 w-12  mb-4 mx-auto" />,
    title: "Renewal Services",
    description:
      "Effortless employment visa renewal services to maintain legal employment status.",
  },
  {
    icon: <FaShieldAlt className="h-12 w-12  mb-4 mx-auto" />,
    title: "Legal Compliance",
    description:
      "Ensure your employees stay compliant with the UAE labour laws and safeguard their rights.",
  },
  {
    icon: <MdSupportAgent className="h-12 w-12  mb-4 mx-auto" />,
    title: "Long-Term Support",
    description:
      "Get tailored services for short- and long-term employment visas in the UAE.",
  },
  {
    icon: <RiMoneyDollarCircleLine className="h-12 w-12  mb-4 mx-auto" />,
    title: "Cost Transparency",
    description:
      "Clear insights into the costs of employment visas in the UAE, with no hidden fees.",
  },
  {
    icon: <FaRocket className="h-12 w-12  mb-4 mx-auto" />,
    title: "Accelerated Processing",
    description:
      "Our strong government relationships and streamlined processes minimize delays.",
  },
  {
    icon: <FaUserTie className="h-12 w-12  mb-4 mx-auto" />,
    title: "Dedicated Account Manager",
    description:
      "Receive personalized service with a single point of contact for all your queries.",
  },
  {
    icon: <MdOutlineAllInclusive className="h-12 w-12 mb-4 mx-auto" />,
    title: "End-to-End Solutions",
    description:
      "We handle the entire process, from initial application to final visa stamping.",
  },
  {
    icon: <FaBuilding className="h-12 w-12  mb-4 mx-auto" />,
    title: "Corporate & Bulk Processing",
    description:
      "Efficiently manage visa applications for your entire team, no matter the size.",
  },
  {
    icon: <FaGavel className="h-12 w-12  mb-4 mx-auto" />,
    title: "In-House PRO Services",
    description:
      "Our own PRO team handles all government liaison, ensuring accuracy and speed.",
  },
  {
    icon: <FaClipboardCheck className="h-12 w-12  mb-4 mx-auto" />,
    title: "Seamless Onboarding",
    description:
      "We assist with Emirates ID, medical tests, and other formalities for a smooth start.",
  },
];
const processSteps = [
  "Initial Consultation & Eligibility Check",
  "Assessment & Collection of Required Documents",
  "Labour Quota Application & Offer Letter Attestation",
  "Obtaining an Entry Permit for In-Country or Out-of-Country Use",
  "Full Assistance with Medical Fitness Tests & Health Insurance",
  "Biometrics & Full Assistance with Emirates ID Application",
  "Obtaining a Residence Visa Stamping in Passport",
  "Collection and Handover of Emirates ID Card",
  "Assistance with Bank Account Opening",
  "Ongoing PRO Support & Compliance Management",
  "Timely Employment Visa Renewal Processing",
  "Visa Cancellation & Final Settlement upon End of Service",
];

// --- Main Employment Visa Component ---
export default function EmploymentVisa() {
    const { setIsContactFormOpen } = useStore();
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#03254D] text-white">
        <div className="container mx-auto px-6 py-20 max-sm:py-8 lg:py-32 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase ">
            Employment Visa
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Hassle-Free UAE Employment Visa Services
          </h1>
          <p className="text-lg lg:text-xl  max-w-3xl mx-auto mt-6">
            Handling everything from initial application to obtaining work
            permits in Dubai.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <span>✓ Faster processing of visas</span>
            <span>✓ Compliance with UAE labour law</span>
            <span>✓ Global payroll services</span>
          </div>
          <div className="mt-10" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton
              text="Let’s Talk"
              isPrimary={false}
              className=" bg-white hover:bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
            Are you planning to{" "}
            <span className=" text-red-800">relocate employees</span> to the
            UAE?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Look no further! Brilliant Boss HR is your trusted partner in the
            UAE for all your employment visa processing needs, ensuring a smooth
            and compliant transition.
          </p>
          <div className="mt-8" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton
              text="Get Free Consultation"
              className=" bg-red-800 hover:bg-red-700"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Why <span className=" text-red-800">Choose Brilliant Boss</span>{" "}
              HR?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Top-Tier Employment Visa Services in the UAE
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl  transition-all duration-300 overflow-hidden"
              >
                <div
                  className="
          absolute inset-0 bg-[#03254D]
          transform -translate-x-full
          transition-transform duration-500 ease-in-out
          group-hover:translate-x-0
          z-0
          rounded-xl
          
        "
                />
                <div className="relative z-10">
                  <div className="h-12 w-12 mb-4 mx-auto text-[#03254D] group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#03254D] group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 group-hover:text-gray-200 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Our <span className=" text-red-800">End-to-End</span> Visa Process
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We manage every step of the journey to ensure a smooth transition
              for your employees.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="group relative flex items-center overflow-hidden rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div
                  className="
          absolute inset-0 z-0
          -translate-x-full transform bg-[#03254D]
          transition-transform duration-500 ease-in-out
          group-hover:translate-x-0
          rounded-lg
        "
                />
                <div className="relative z-10 flex w-full items-center">
                  <div className="mr-6 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#03254D] font-bold text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#03254D]">
                    {index + 1}
                  </div>
                  <p className="font-medium text-[#03254D] transition-colors duration-500 group-hover:text-white">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-800">
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Simplify Your Employee Relocation?
          </h2>
          <p className="text-lg  max-w-2xl mx-auto mt-4">
            Contact our experts today for a no-obligation quote and discover how
            we can make your employee visa processing fast and worry-free.
          </p>
          <div className="mt-8" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton text="Let’s Talk" isPrimary={false} className=" bg-white hover:bg-gray-100 text-red-800" />
          </div>
        </div>
      </section>
    </main>
  );
}

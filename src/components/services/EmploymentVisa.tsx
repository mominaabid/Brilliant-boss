import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { GiPalmTree } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
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
import { Link } from "react-router-dom";

const whyChooseUsData = [
  { icon: <FaCompass className="h-12 w-12  mb-4 mx-auto" />, title: "Expert Guidance", description: "Navigate the application process easily with our experienced visa consultants." },
  { icon: <GiPalmTree className="h-12 w-12  mb-4 mx-auto" />, title: "100% Emirati-Owned", description: "This allows us to process employment visas much faster and at better prices." },
  { icon: <FaRedo className="h-12 w-12  mb-4 mx-auto" />, title: "Renewal Services", description: "Effortless employment visa renewal services to maintain legal employment status." },
  { icon: <FaShieldAlt className="h-12 w-12  mb-4 mx-auto" />, title: "Legal Compliance", description: "Ensure your employees stay compliant with the UAE labour laws and safeguard their rights." },
  { icon: <MdSupportAgent className="h-12 w-12  mb-4 mx-auto" />, title: "Long-Term Support", description: "Get tailored services for short- and long-term employment visas in the UAE." },
  { icon: <RiMoneyDollarCircleLine className="h-12 w-12  mb-4 mx-auto" />, title: "Cost Transparency", description: "Clear insights into the costs of employment visas in the UAE, with no hidden fees." },
  { icon: <FaRocket className="h-12 w-12  mb-4 mx-auto" />, title: "Accelerated Processing", description: "Our strong government relationships and streamlined processes minimize delays." },
  { icon: <FaUserTie className="h-12 w-12  mb-4 mx-auto" />, title: "Dedicated Account Manager", description: "Receive personalized service with a single point of contact for all your queries." },
  { icon: <MdOutlineAllInclusive className="h-12 w-12 mb-4 mx-auto" />, title: "End-to-End Solutions", description: "We handle the entire process, from initial application to final visa stamping." },
  { icon: <FaBuilding className="h-12 w-12  mb-4 mx-auto" />, title: "Corporate & Bulk Processing", description: "Efficiently manage visa applications for your entire team, no matter the size." },
  { icon: <FaGavel className="h-12 w-12  mb-4 mx-auto" />, title: "In-House PRO Services", description: "Our own PRO team handles all government liaison, ensuring accuracy and speed." },
  { icon: <FaClipboardCheck className="h-12 w-12  mb-4 mx-auto" />, title: "Seamless Onboarding", description: "We assist with Emirates ID, medical tests, and other formalities for a smooth start." },
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
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
       <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Employment Visa Solutions
          </h2>
          The heading sizes in this file are set using Tailwind CSS classes:

          - h1: text-3xl md:text-5xl (mobile: 1.875rem, desktop: 3rem)
          - h2: text-2xl sm:text-3xl md:text-4xl (2xl: 1.5rem, sm: 1.875rem, md: 2.25rem)
          - h2 (other sections): text-3xl lg:text-4xl (mobile: 1.875rem, large: 2.25rem)
          - h3: text-xl (1.25rem), sometimes font-bold or font-semibold

          These classes control the font size responsively.
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            Our experts at <strong>Brilliant Boss HR consultancy</strong> handle all documentation, government liaison, and compliance, so you can focus on growing your business with peace of mind.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Choose <strong>Brilliant Boss HR consultancy</strong> for transparent pricing, dedicated support, and a seamless visa experience for your employees.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/visa1.jpg" alt="Employment Visa" className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 md:py-4 px-6 text-blue-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left">
           
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
              Hassle-Free UAE Employment Visa Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mt-6">
              Handling everything from initial application to obtaining work permits in Dubai. We ensure a smooth and hassle-free process so you can focus on building your future.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link to="/contact">
                <CallToActionButton text="Let’s Talk" className="bg-blue-950 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
            <img src="/visa.jpg" alt="Employment Visa" className="object-cover rounded-lg w-full h-full" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
            Are you planning to{" "}
            <span className="text-red-800">relocate employees</span> to the UAE?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Look no further! Brilliant Boss HR is your trusted partner in the UAE for all your employment visa processing needs, ensuring a smooth and compliant transition.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <CallToActionButton text="Get Free Consultation" className="bg-[#5b0404] hover:bg-red-900" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 max-sm:py-6 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Why <span className="text-red-800">Choose Brilliant Boss</span> HR?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Top-Tier Employment Visa Services in the UAE
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item) => (
              <div key={item.title} className="group relative bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-[#03254D] transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 z-0 rounded-xl" />
                <div className="relative z-10">
                  <div className="h-12 w-12 mb-4 mx-auto text-[#03254D] group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#03254D] group-hover:text-white transition-colors duration-500">{item.title}</h3>
                  <p className="text-gray-600 mt-2 group-hover:text-gray-200 transition-colors duration-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Our <span className="text-red-800">End-to-End</span> Visa Process
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We manage every step of the journey to ensure a smooth transition for your employees.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step} className="group relative flex items-center overflow-hidden rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-lg" />
                <div className="relative z-10 flex w-full items-center">
                  <div className="mr-6 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#03254D] font-bold text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#03254D]">{index + 1}</div>
                  <p className="font-medium text-[#03254D] transition-colors duration-500 group-hover:text-white">{step}</p>
                </div>
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
      <form className="space-y-4">
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
        />

        {/* Phone */}
        <div className="flex">
          <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-gray-100 text-sm">
            <option>+971</option>
            <option>+1</option>
            <option>+44</option>
          </select>
          <input
            type="tel"
            placeholder="Your phone number"
            className="w-full border border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
          />
        </div>

        {/* Interested In */}
        <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none">
          <option>Select-one-or-more</option>
          <option>HR Services</option>
          <option>Visa Services</option>
          <option>Recruitment</option>
          <option>Payroll Outsourcing</option>
        </select>

        {/* Message */}
        <textarea
          placeholder="How can we assist you?"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-950 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  </div>
</section>

    </main>
  );
}

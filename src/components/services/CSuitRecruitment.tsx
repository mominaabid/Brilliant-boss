import Header from "../Header";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { CallToActionButton } from "../../utils/helper";
import { Link } from "react-router-dom";
import {
  HiOutlineHandRaised,
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlineLockClosed,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineSparkles,
} from "react-icons/hi2";

const processSteps = [
  {
    icon: <HiOutlineHandRaised className="h-8 w-8 " />,
    title: "Strategic Partnership & Consultation",
    description:
      "We begin by understanding your organization's strategic goals, challenges, and culture to build a comprehensive profile of your ideal leader.",
  },
  {
    icon: <HiOutlineDocumentText className="h-8 w-8 " />,
    title: "Position Specification & Strategy",
    description:
      "We craft a detailed candidate brief and define a bespoke search strategy, outlining target industries and companies for our research.",
  },
  {
    icon: <HiOutlineGlobeAlt className="h-8 w-8 " />,
    title: "Global & Discreet Headhunting",
    description:
      "Leveraging our exclusive global network, we identify and engage high-caliber, often passive, candidates with the utmost discretion.",
  },
  {
    icon: <HiOutlineMagnifyingGlass className="h-8 w-8 " />,
    title: "Rigorous Vetting & Assessment",
    description:
      "Our multi-stage assessment goes beyond the resume, utilizing psychometric testing and in-depth referencing to evaluate leadership style and vision.",
  },
  {
    icon: <HiOutlineUserGroup className="h-8 w-8 " />,
    title: "Candidate Shortlist Presentation",
    description:
      "We present a curated shortlist of the most qualified candidates, complete with detailed reports on their skills, experience, and cultural fit.",
  },
  {
    icon: <HiOutlineBriefcase className="h-8 w-8 " />,
    title: "Client Interview Management",
    description:
      "We facilitate and coordinate the entire interview process, gathering feedback and ensuring a smooth and professional experience for all.",
  },
  {
    icon: <HiOutlineLockClosed className="h-8 w-8 " />,
    title: "Confidential Offer Management",
    description:
      "We manage the entire offer process, including complex compensation negotiations, ensuring a seamless and confidential transition for all parties.",
  },
  {
    icon: <HiOutlineSparkles className="h-8 w-8 " />,
    title: "Integration & Follow-Up",
    description:
      "Our partnership continues post-hire. We provide integration support and follow up to ensure a successful and lasting placement.",
  },
];

const cSuiteRoles = [
  "Chief Executive Officer (CEO)",
  "Chief Financial Officer (CFO)",
  "Chief Operating Officer (COO)",
  "Chief Technology Officer (CTO)",
  "Chief Information Officer (CIO)",
  "Chief Human Resources Officer (CHRO)",
  "Chief Marketing Officer (CMO)",
  "Board Members",
  "Chief Strategy Officer (CSO)",
  "Chief Revenue Officer (CRO)",
  "Chief Compliance Officer (CCO)",
  "Chief Legal Officer (CLO)",
  "Managing Director",
  "General Manager",
  "President",
  "Vice President (VP)",
];

// --- Main C-Suite Recruitment Component ---
export default function CSuiteRecruitment() {
  return (
    <main className="bg-gray-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-4 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
              Appointing Tomorrow's Visionaries
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mt-6">
              The future of your organization rests on its leadership. Our bespoke
              executive search service is built on a foundation of discretion,
              strategic insight, and unparalleled access to a global network of
              top-tier leaders.
            </p>
            <div className="mt-1 flex gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <CallToActionButton
                  text="Request a Consultation"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-80 w-full rounded-lg shadow-lg flex items-start justify-center">
            <img
              src="/hiring-leadership.jpg"
              alt="Hiring Leadership"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Our Bespoke Process Section */}
      <section className="py-20 max-sm:py-12 lg:py-26">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#03254D] lg:text-4xl">
              A <span className="text-blue-950">Meticulous Process</span> for
              Critical Hires
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recruiting for the C-Suite is a high-stakes endeavor that demands
              a specialized, consultative approach. Our proven process ensures
              we find a leader who will not only perform, but transform.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div
              className="absolute left-8 top-0 h-full w-0.5 bg-[#03254D]"
              aria-hidden="true"
            ></div>
            <div className="relative space-y-10 sm:space-y-12">
              {processSteps.map((step) => (
                <div key={step.title} className="group relative pl-20">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border bg-white shadow-lg max-sm:h-12 max-sm:w-12">
                    <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                    <div className="relative z-10 text-[#03254D] transition-colors duration-300 group-hover:text-white">
                      {step.icon}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-shadow group-hover:shadow-xl">
                    <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[#03254D] transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
            <span className="text-blue-950">Executive Roles</span> We Place
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our expertise covers the full spectrum of senior leadership
            positions.
          </p>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cSuiteRoles.map((role) => (
              <div
                key={role}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                <div className="relative z-10 flex w-full items-center justify-between">
                  <span className="font-semibold text-[#03254D] transition-colors duration-300 group-hover:text-white">
                    {role}
                  </span>
                  <ArrowUpRightIcon className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-950">
        <div className="container mx-auto px-6 max-sm:py-8 py-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Secure Your Organization's Future
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
            Engage our experts for a confidential discussion about your
            leadership needs and how we can help you find the visionary to guide
            your company's next chapter.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <CallToActionButton
                text="Engage Our Experts"
                isPrimary={false}
                className="text-red-800"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

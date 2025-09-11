import React, { useState } from "react";
import { FaRegClock, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";
import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { Link } from "react-router-dom";

interface OutsourcingType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OUTSOURCING_TYPES: OutsourcingType[] = [
  {
    id: "short-term",
    title: "Short-Term Staff Outsourcing",
    icon: <FaRegClock />,
    description:
      "Our short-term solutions are perfect for managing seasonal peaks, executing temporary projects, or covering critical employee leave. We provide access to a pool of pre-vetted, skilled professionals who can integrate quickly into your team for a defined period, allowing you to maintain productivity and manage fluctuating workloads without the overhead of long-term commitments.",
  },
  {
    id: "long-term",
    title: "Long-Term Staff Outsourcing",
    icon: <FaCalendarAlt />,
    description:
      "For ongoing operational needs, you can embed our highly skilled outsourced staff directly into your team for extended periods. This strategic model provides stability, deep integration, and consistent support for your core business functions. It acts as a seamless extension of your own workforce, ensuring knowledge retention and cultural alignment while we handle all HR and administrative responsibilities.",
  },
  {
    id: "project-based",
    title: "Project-Based Staff Outsourcing",
    icon: <FaProjectDiagram />,
    description:
      "When you have a specific goal with a clear start and finish, our project-based outsourcing is the ideal solution. We assemble a dedicated team with the precise skills required to deliver your project on time and within budget. This outcome-focused approach means we manage the team and deliverables, allowing you to focus on the results without getting bogged down in the day-to-day management.",
  },
];

const STAFFING_BENEFITS: Benefit[] = [
  {
    icon: (
      <img
        src="/hiring.jpg"
        className="object-cover rounded-lg w-full h-full"
        alt="Flexible Staffing Solutions"
      />
    ),
    title: "Flexible Staffing Solutions",
    description:
      "We provide dynamic and adaptable staffing models tailored to your business cycles. Whether you require permanent full-time employees to grow your core team, contract staffing for specific durations, or project-based hiring to meet critical deadlines, we deliver the right talent for you. This agility allows you to scale your workforce up or down seamlessly, ensuring you have the exact resources you need, precisely when you need them.",
  },
  {
    icon: (
      <img
        src="/professional-team.jpg"
        className="object-cover rounded-lg w-full h-full"
        alt="Access to Expertise"
      />
    ),
    title: "Access to Expertise",
    description:
      "Instantly tap into our extensive and diverse pool of pre-vetted, skilled professionals across every domain. Our network allows you to bypass lengthy recruitment cycles and gain immediate access to specialized skills that may not be readily available in-house. This on-demand expertise empowers you to tackle complex challenges, innovate faster, and maintain a competitive edge without the commitment of a permanent hire.",
  },
  {
    icon: (
      <img
        src="/saving-money.jpg"
        className="object-cover rounded-lg w-full h-full"
        alt="Significant Cost Savings"
      />
    ),
    title: "Significant Cost Savings",
    description:
      "Optimize your operational budget by paying only for the skills you need, precisely when you need them. Our outsourcing model allows you to avoid the significant and often hidden overheads associated with direct employment, including recruitment agency fees, visa processing, work permits, mandatory medical insurance, and ongoing payroll administration. This translates into predictable, manageable costs and a healthier bottom line.",
  },
  {
    icon: (
      <img
        src="/risk-prevention.jpg"
        className="object-cover rounded-lg w-full h-full"
        alt="Complete Risk Mitigation"
      />
    ),
    title: "Complete Risk Mitigation",
    description:
      "Transfer your employment-related risks to us. Our professional employee outsourcing services ensure you are fully protected from potential liabilities, such as non-compliance with complex UAE labour laws, payroll errors, and the complexities of benefits administration. We manage all statutory obligations, safeguarding your business and allowing you to operate with confidence and peace of mind.",
  },
];

const OutsourcingTypeToggle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(OUTSOURCING_TYPES[0].id);
  const activeContent = OUTSOURCING_TYPES.find((type) => type.id === activeTab);

  if (!activeContent) return null;

  return (
    <div>
      <div className="flex flex-col sm:flex-row border-b border-gray-300">
        {OUTSOURCING_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveTab(type.id)}
            className={`flex-1 py-3 px-4 text-lg cursor-pointer font-semibold transition-colors duration-300 ${
              activeTab === type.id
                ? "border-b-4 border-red-800 text-red-800"
                : "text-gray-600 hover:text-red-800"
            }`}
          >
            {type.title.split(" ")[0] + "-Term"}
          </button>
        ))}
      </div>
      <div className="p-8 bg-white rounded-b-lg">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl text-[#03254D]">{activeContent.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-[#03254D]">
              {activeContent.title}
            </h3>
            <p className="mt-2 text-gray-600">{activeContent.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AlternatingFeatureBlockProps extends Benefit {
  index: number;
}

const AlternatingFeatureBlock: React.FC<AlternatingFeatureBlockProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  const isReversed = index % 2 !== 0;
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isReversed ? "md:grid-flow-col-dense" : ""
      }`}
    >
      <div
        className={`h-80 w-full rounded-lg flex items-center justify-center ${
          isReversed ? "md:col-start-2" : ""
        }`}
      >
        <div className="text-6xl">{icon}</div>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-3xl font-bold text-[#03254D]">{title}</h3>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// --- Main Page ---
const StaffOutsourcingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-8 md:py-0.5 px-3">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 justify-center items-center">
            {/* Text Section */}
            <div className="max-w-xl bg-white text-blue-950 backdrop-blur-sm p-8 rounded-lg">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-950">
                Fully Compliant and Customizable Staff Outsourcing Solutions
              </h1>
              <p className="mt-4 text-lg text-blue-950">
               Take advantage of our highly trained pool of qualified talent in all fields and industries. We provide specialists who bring expertise and innovation to your organization. With the right talent, you can achieve faster growth and long-term success.
              </p>
              <Link to="/contact">
                <CallToActionButton
                  text="Let’s Talk"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>

            {/* Image Section */}
            <div className="h-80 w-full max-md:hidden rounded-lg flex items-center justify-center">
              <img
                src="/staff.jpg"
                alt="Staff Outsourcing"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 max-sm:py-8 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#03254D]">
              Build Your <span className="text-red-800">Dream Team</span> with
              Brilliant Boss HR
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Employees are the greatest assets of any business. Staff
              outsourcing helps you find the best talent in the UAE while
              cutting costs and fueling growth. That’s why businesses worldwide
              are turning to staff outsourcing to achieve greater flexibility,
              lower overheads, and hassle-free HR administration.
            </p>
            <Link to="/contact">
              <CallToActionButton
                text="Get In Touch"
                className="bg-red-800 hover:bg-red-700"
              />
            </Link>
          </div>
        </section>

        {/* Outsourcing Types */}
        <section className="py-20 max-sm:py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#03254D] text-center mb-10">
              Covering All Your{" "}
              <span className="text-red-800">Staff Outsourcing</span> Needs
            </h2>
            <OutsourcingTypeToggle />
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 max-sm:py-8 px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            <h2 className="text-4xl font-extrabold text-[#03254D] text-center">
              Why <span className="text-red-800">Choose Brilliant Boss</span> HR?
            </h2>
            {STAFFING_BENEFITS.map((benefit, index) => (
              <AlternatingFeatureBlock
                key={benefit.title}
                {...benefit}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 bg-[#5b0404] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold">Optimize Your Workforce Today</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Contact us to find out how our expert staff outsourcing solutions
              can streamline your recruitment procedure and improve your
              business’ efficiency.
            </p>
            <Link to="/contact">
              <CallToActionButton
                text="TALK TO OUR EXPERT"
                className="bg-blue-800 text-red-950"
              />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StaffOutsourcingPage;

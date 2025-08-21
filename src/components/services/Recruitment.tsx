import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { useStore } from "../../store/store";

const recruitmentRoles = [
  "Hospitality",
  "Hotels",
  "Tourism",
  "Cleaners",
  "Biomedical Engineer",
  "Sales Representative",
  "Procurement Specialist",
  "Project Manager",
  "Project Interface Manager",
  "HR Development Specialist",
  "Payroll Manager (SAP)",
  "IT Sales Specialist",
  "Translator",
  "Industrial Customer Relationship Manager",
  "HR Manager",
  "IT Network",
  "DC Manager",
  "TAX Specialist",
  "Trade Manager",
  "Manager Cafe",
  "Digital Enablement Manager",
  "Branch Operations Manager",
  "Key Account Manager",
  "Assistant Manager Financial Reporting",
  "Consultant Managed Security Services",
  "PS Business Operations Consultant",
];

// --- Main General Recruitment Component ---
export default function GeneralRecruitment() {
  const { setIsContactFormOpen } = useStore();
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#03254D] text-white">
        <div className="container mx-auto px-6 py-20 max-sm:py-8 lg:py-32 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase ">
            General Recruitment
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Building Your Dream Team, One Hire at a Time
          </h1>
          <p className="text-lg lg:text-xl  max-w-3xl mx-auto mt-6">
            We manage the entire recruitment lifecycle—from identifying your
            needs to integrating the perfect candidate into your organization.
          </p>
          <div className="mt-10" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton text="Start Hiring Today" isPrimary={false} />
          </div>
        </div>
      </section>

      {/* Definition Section with Image */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-600">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              What is <span className=" text-red-800">General Recruitment?</span>
            </h2>
            <p className="mt-6 text-lg">
              In essence, general recruitment is the comprehensive, multi-stage
              process of identifying, attracting, screening, selecting, and
              ultimately hiring the most qualified candidate for a specific job
              opening. It is a strategic function designed to be executed in a
              timely and cost-effective manner, ensuring your organization
              acquires the talent it needs to thrive without unnecessary delays
              or expenses.
            </p>
            <p className="mt-4 text-lg">
              This is a full lifecycle partnership that begins with a deep-dive
              analysis to understand your unique business needs, culture, and
              the specific requirements of the role. It concludes not just with
              a signed offer letter, but with the successful integration of a
              new, valuable member into your team. Our ultimate goal extends
              beyond simply filling a vacancy; we are committed to finding
              professionals who are not just qualified on paper, but who possess
              the right vision and drive to contribute meaningfully and help you
              achieve your long-term organizational goals.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/talent-finding.jpg"
              alt="A team collaborating and finding new talent"
              className="w-full h-full object-cover "
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl max-lg:order-2">
            <img
              src="/our-process.jpg"
              alt="Steps of the recruitment process"
              className="w-full h-full object-cover "
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
          <div className="text-gray-600 max-lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Our <span className="text-red-800">Proven Recruitment</span> Lifecycle
            </h2>
            <p className="mt-6 text-lg">
              We handle every stage of the process to ensure a seamless and
              successful hiring experience.
            </p>
            <ul className="mt-6 space-y-4 text-lg">
              <li className="flex items-start">
                <HiOutlineCheckCircle className="h-6 w-6 text-[#03254D] flex-shrink-0 mt-1" />
                <span className="ml-3">
                  <strong className="text-[#03254D]">
                    Job Analysis & Strategy:
                  </strong>{" "}
                  We start by deeply understanding the requirements of the role,
                  your company culture, and defining a tailored recruitment
                  strategy.
                </span>
              </li>
              <li className="flex items-start">
                <HiOutlineCheckCircle className="h-6 w-6 text-[#03254D] flex-shrink-0 mt-1" />
                <span className="ml-3">
                  <strong className="text-[#03254D]">
                    Sourcing & Candidate Attraction:
                  </strong>{" "}
                  We proactively identify, stimulate, and encourage top talent
                  from multiple channels, ensuring a strong pool of qualified
                  applicants.
                </span>
              </li>
              <li className="flex items-start">
                <HiOutlineCheckCircle className="h-6 w-6 text-[#03254D] flex-shrink-0 mt-1" />
                <span className="ml-3">
                  <strong className="text-[#03254D]">
                    Screening & Shortlisting:
                  </strong>{" "}
                  Our team rigorously evaluates all applicants against key
                  criteria, shortlisting only the most promising candidates to
                  find the perfect fit.
                </span>
              </li>
              <li className="flex items-start">
                <HiOutlineCheckCircle className="h-6 w-6 text-[#03254D] flex-shrink-0 mt-1" />
                <span className="ml-3">
                  <strong className="text-[#03254D]">
                    Interviews & Assessment:
                  </strong>{" "}
                  We coordinate and conduct in-depth interviews and technical
                  assessments to thoroughly validate skills, experience, and
                  cultural alignment.
                </span>
              </li>
              <li className="flex items-start">
                <HiOutlineCheckCircle className="h-6 w-6 text-[#03254D] flex-shrink-0 mt-1" />
                <span className="ml-3">
                  <strong className="text-[#03254D]">
                    Reference Checks & Offer Management:
                  </strong>{" "}
                  We perform thorough background and reference checks, then
                  manage the final offer negotiation process to secure your
                  chosen candidate.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roles We Fill Section */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              A <span className="text-red-800">Wide Range</span> of Roles We Fill
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our expertise spans numerous industries and positions, allowing us
              to find the right candidate for almost any role.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {recruitmentRoles.map((role, index) => (
              <div
                key={index}
                className="bg-gray-100 text-[#03254D] font-medium py-2 px-4 rounded-full text-sm shadow-sm"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-800">
        <div className="container mx-auto px-6 max-sm:py-8 py-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Grow Your Team?
          </h2>
          <p className="text-lg  max-w-2xl mx-auto mt-4">
            Partner with us to find the best-qualified people who will drive
            your organization's success. Let's discuss your hiring needs today.
          </p>
          <div className="mt-8" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton
              text="Contact Our Recruiters"
              className=" text-red-800"
              isPrimary={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

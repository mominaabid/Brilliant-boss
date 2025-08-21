import Header from "../Header";
import { GiGearHammer } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { CallToActionButton } from "../../utils/helper";
import { useStore } from "../../store/store";

import {
  FaStethoscope,
  FaBriefcase,
  FaChartBar,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaConciergeBell,
  FaGavel,
  FaUsers,
  FaHardHat,
  FaTruck,
} from "react-icons/fa";

const specializations = [
  {
    icon: <FaStethoscope className="h-10 w-10 " />,
    name: "Doctors & Para Medical",
  },
  {
    icon: <GiGearHammer className="h-10 w-10 " />,
    name: "Engineers",
  },
  {
    icon: <MdSchool className="h-10 w-10 " />,
    name: "Teachers",
  },
  {
    icon: <FaBriefcase className="h-10 w-10 " />,
    name: "Management",
  },
  {
    icon: <FaChartBar className="h-10 w-10 " />,
    name: "Sales & Marketing",
  },
  {
    icon: <FaLaptopCode className="h-10 w-10 " />,
    name: "Information Technology",
  },
  {
    icon: <FaFileInvoiceDollar className="h-10 w-10 " />,
    name: "Finance & Accounting",
  },
  {
    icon: <FaConciergeBell className="h-10 w-10 " />,
    name: "Hospitality",
  },
  {
    icon: <FaGavel className="h-10 w-10 " />,
    name: "Legal Services",
  },
  {
    icon: <FaUsers className="h-10 w-10 " />,
    name: "Human Resources",
  },
  {
    icon: <FaHardHat className="h-10 w-10 " />,
    name: "Construction & Real Estate",
  },
  {
    icon: <FaTruck className="h-10 w-10 " />,
    name: "Logistics & Supply Chain",
  },
];

// --- Main Executive Search Component ---
export default function ExecutiveSearch() {
  const { setIsContactFormOpen } = useStore();
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#03254D] text-white">
        <div className="container mx-auto px-6 py-20 max-sm:py-8 lg:py-32 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase ">
            Executive Search
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Connecting You with Visionary Leaders
          </h1>
          <p className="text-lg lg:text-xl  max-w-3xl mx-auto mt-6">
            Our validated search approach, deep industry knowledge, and
            innovative analytics ensure you find leaders who don't just fit
            in—they stand out.
          </p>
          <div className="mt-10" onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton
              text="Discover Our Process"
              isPrimary={false}
              className="bg-white hover:bg-gray-100 "
            />
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-600">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              The <span className="text-red-800">Right Leadership</span> is
              Everything
            </h2>
            <p className="mt-6 text-lg">
              We know the pressure you’re under to find leaders who align with
              your culture and drive your organization forward. Our search
              professionals are dedicated to understanding the unique challenges
              and opportunities within your industry, your corporate culture,
              and your organization.
            </p>
            <p className="mt-4 text-lg">
              We don't just find candidates; we identify the individuals best
              suited to lead the way forward.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/leader-ship.jpg"
              alt="Professional meeting discussing leadership"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </section>

      {/* Science of Success Section */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl max-lg:order-2 ">
            <img
              src="/tech-usage.jpg"
              alt="Data analytics and recruitment science"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
              }}
            />
          </div>
          <div className="text-gray-600 max-lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              The Science of{" "}
              <span className=" text-red-800">Recruiting Success</span>
            </h2>
            <p className="mt-6 text-lg">
              Attracting top talent can be time-consuming and complex. We
              simplify and accelerate your search with science and analytics,
              mitigating risk and ensuring the best possible decision for the
              long term.
            </p>
            <p className="mt-4 text-lg  ">
              Our innovative process includes proprietary tools like the{" "}
              <span className="font-bold">
                Four Dimensional Executive Assessment
              </span>
              , giving you total assurance that you are selecting the right
              candidate.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Specialized <span className="text-red-800">Recruitment</span>{" "}
              Across the Gulf
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We are specialists in recruiting top-tier talent across all Gulf
              Countries in a wide range of critical sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {specializations.map((spec) => (
              <div
                key={spec.name}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300  hover:shadow-xl"
              >
                <div
                  className="
          absolute inset-0 z-0
          -translate-x-full transform bg-[#03254D]
          transition-transform duration-500 ease-in-out
          group-hover:translate-x-0
        "
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="text-[#03254D] transition-colors duration-500 group-hover:text-white">
                    {spec.icon}
                  </div>
                  <h3 className="mt-4 text-md font-bold text-[#03254D] transition-colors duration-500 group-hover:text-white">
                    {spec.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-800">
        <div className="container mx-auto px-6 max-sm:py-8 py-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Find Your Next Leader Today
          </h2>
          <p className="text-lg  max-w-2xl mx-auto mt-4">
            Let's connect you with the talent that will define your
            organization's future. Schedule a confidential consultation with our
            experts.
          </p>
          <div className="mt-8" onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton
              text="Schedule a Consultation"
              isPrimary={false}
              className=" text-red-800"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

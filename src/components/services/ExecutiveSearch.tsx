import Header from "../Header";
import { GiGearHammer } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { CallToActionButton } from "../../utils/helper";
import { Link } from "react-router-dom";

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
  { icon: <FaStethoscope className="h-10 w-10 " />, name: "Doctors & Para Medical" },
  { icon: <GiGearHammer className="h-10 w-10 " />, name: "Engineers" },
  { icon: <MdSchool className="h-10 w-10 " />, name: "Teachers" },
  { icon: <FaBriefcase className="h-10 w-10 " />, name: "Management" },
  { icon: <FaChartBar className="h-10 w-10 " />, name: "Sales & Marketing" },
  { icon: <FaLaptopCode className="h-10 w-10 " />, name: "Information Technology" },
  { icon: <FaFileInvoiceDollar className="h-10 w-10 " />, name: "Finance & Accounting" },
  { icon: <FaConciergeBell className="h-10 w-10 " />, name: "Hospitality" },
  { icon: <FaGavel className="h-10 w-10 " />, name: "Legal Services" },
  { icon: <FaUsers className="h-10 w-10 " />, name: "Human Resources" },
  { icon: <FaHardHat className="h-10 w-10 " />, name: "Construction & Real Estate" },
  { icon: <FaTruck className="h-10 w-10 " />, name: "Logistics & Supply Chain" },
];

// --- Main Executive Search Component ---
export default function ExecutiveSearch() {
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* New Section: Executive Search, image right, text left, after header */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Executive Search Excellence
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong> specializes in connecting organizations with top-tier executive talent. Our proven search methodology ensures you find leaders who drive innovation and sustainable growth.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            With deep industry expertise and a global network, <strong>Brilliant Boss HR consultancy</strong> delivers a confidential, consultative process tailored to your unique needs.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Trust <strong>Brilliant Boss HR consultancy</strong> to elevate your leadership team and secure your company's future success.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/executive1.jpg" alt="Executive Search" className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-6 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div className="text-center md:text-left">
           
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
              Connecting You with Visionary Leaders
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-3xl">
              Our validated search approach, deep industry knowledge, and innovative analytics ensure you find leaders who don't just fit in—they stand out. We help you secure visionary professionals who drive transformation and lasting success.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <CallToActionButton
                  text="Discover Our Process"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/executive.jpg"
              alt="Executive Search"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="py-20 max-sm:py-8 lg:py-24">
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
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl max-lg:order-2">
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
              The Science of <span className="text-red-800">Recruiting Success</span>
            </h2>
            <p className="mt-6 text-lg">
              Attracting top talent can be time-consuming and complex. We
              simplify and accelerate your search with science and analytics,
              mitigating risk and ensuring the best possible decision for the
              long term.
            </p>
            <p className="mt-4 text-lg">
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
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Specialized <span className="text-red-800">Recruitment</span> Across the Gulf
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
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0"
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

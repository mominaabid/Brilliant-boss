import { CallToActionButton } from "../../utils/helper";
import Header from "../Header";
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CTA from "../CTA";
import {
  DocumentCheckIcon,
  ClockIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  MapPinIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

// --- Data for the component ---
const ourServicesData = [
  {
    icon: <DocumentCheckIcon className="h-8 w-8 " />,
    title: "Meticulous Document Verification",
    description:
      "We pre-screen all documents to ensure they meet the latest consular requirements, preventing common causes for rejection.",
  },
  {
    icon: <ClockIcon className="h-8 w-8" />,
    title: "Efficient Appointment Scheduling",
    description:
      "Our team navigates the complex booking systems to secure the earliest possible appointments, saving you valuable time.",
  },
  {
    icon: <BuildingLibraryIcon className="h-8 w-8 " />,
    title: "End-to-End Submission & Liaison",
    description:
      "We manage the entire submission process and act as your liaison with embassies and consulates, providing timely updates.",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 " />,
    title: "Secure Passport & Document Handling",
    description:
      "Your sensitive documents are handled with the highest level of security and care from collection to return.",
  },
  {
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 " />,
    title: "Expert Consultation & Advisory",
    description:
      "Receive clear, accurate advice on the specific requirements for your destination country and document type.",
  },
  {
    icon: <BriefcaseIcon className="h-8 w-8 " />,
    title: "Corporate & Bulk Processing",
    description:
      "We offer tailored solutions for businesses, efficiently managing attestation and visa services for your entire team.",
  },
  {
    icon: <MapPinIcon className="h-8 w-8 " />,
    title: "Real-Time Status Tracking",
    description:
      "Stay informed with our transparent process, allowing you to track the status of your application at every stage.",
  },
  {
    icon: <CheckBadgeIcon className="h-8 w-8 " />,
    title: "All Types of Certificate Attestation",
    description:
      "We handle educational, personal, and commercial documents, ensuring they are legally recognized for use abroad.",
  },
];

// --- Main Visa Stamping Services Component ---
export default function VisaStampingServices() {
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* New Section: Visa Stamping, image right, text left, after header */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Visa Stamping Services
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong> streamlines your visa
            stamping process with precision, speed, and full compliance. We handle
            every detail, so you can focus on your journey or business.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            Our experienced team at{" "}
            <strong>Brilliant Boss HR consultancy</strong> ensures your documents
            are verified, submitted, and processed efficiently—minimizing delays
            and maximizing peace of mind.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Choose{" "}
            <strong>Brilliant Boss HR consultancy</strong> for secure, reliable,
            and transparent visa stamping services trusted by individuals and
            companies alike.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/visaa2.png"
            alt="Visa Stamping"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-1 md:py-1 px-4 overflow-hidden">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
              The{" "}
              <span className="text-blue-950">Final Step</span> to Your Destination
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mb-20 mx-auto md:mx-0">
              Navigate the crucial final stage of your visa process with
              confidence. Our expert service ensures your visa is stamped
              accurately and efficiently, providing complete peace of mind.
              <span className="block mt-3 font-semibold text-red-800">
                We specialize in Saudi Visa stamping services, available for
                applicants across the globe.
              </span>
            </p>

            <Link to="/contact">
              <CallToActionButton
                text="Secure Your Visa Stamp"
                className="bg-blue-950 text-white"
              />
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg flex justify-center md:justify-end">
            <img
              src="/services-visa-stamping.jpg"
              alt="Visa Stamping Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-gray-50 py-12 max-sm:py-8 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gray-100 p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex justify-center mb-6">
              <HiOutlineShieldExclamation className="h-16 w-16 text-red-800" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              Don't{" "}
              <span className="text-red-800">Overlook</span> the{" "}
              <span className="text-red-800">Final Hurdle</span>
            </h2>

            <p className="text-lg text-gray-600 mt-6">
              Visa stamping is more than just a formality; it's the official
              endorsement in your passport that grants you entry. This critical
              process involves strict documentation, specific appointments, and
              direct dealings with embassies or consulates. Any error, no matter
              how small, can lead to significant delays or even outright
              rejection, jeopardizing your travel or employment plans.
              <br />
              <br />
              Our dedicated service focuses on{" "}
              <span className="font-semibold text-red-800">
                Saudi Visa stamping
              </span>
              , assisting applicants from anywhere in the world with reliable and
              efficient support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className=" py-12 max-sm:py-8 lg:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
              How{" "}
              <span className="text-red-800">We Ensure</span> a{" "}
              <span className="text-red-800">Smooth Process</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We provide a comprehensive, hands-on service to manage every detail
              of the visa stamping stage.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            {ourServicesData.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 z-0 -translate-x-full transform bg-[#03254D] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />

                <div className="relative z-10 flex items-start space-x-6">
                  <div className="flex-shrink-0 bg-[#03254D] text-white rounded-full p-4 transition-colors duration-300 group-hover:bg-white group-hover:text-[#03254D]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#03254D] transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}

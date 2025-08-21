import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { useStore } from "../../store/store";
import {
  HiOutlineCheckBadge,
  HiOutlineLifebuoy,
  HiOutlineFolder,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

// --- Main HR Services Component ---
export default function HrServices() {
  const { setIsContactFormOpen } = useStore();
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#03254D] text-white">
        <div className="container mx-auto px-6 py-20 max-sm:py-8 lg:py-32 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase ">
            HR Services
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Flexible HR Solutions for Modern Business
          </h1>
          <p className="text-lg lg:text-xl  max-w-3xl mx-auto mt-6">
            From streamlining administrative tasks to comprehensive outsourced
            HR management, we provide the technology and expert support to help
            you achieve your goals.
          </p>
          <div className="mt-10" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton text="Explore Our Services" isPrimary={false} />
          </div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section className=" py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 text-gray-600">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
                Your <span className=" text-red-800">Partner in</span> an Increasingly <span className=" text-red-800">Complex World</span>
              </h2>
              <p className="mt-6 text-lg">
                Since 2012, we've provided expert HR services across the Gulf
                countries. We understand that no two businesses face the same
                challenges, which is why we offer a choice of flexible HR
                services tailored to your unique needs.
              </p>
              <p className="mt-4 text-lg">
                We have a proven track record for timely and effective service
                deployment, backed by a powerful combination of HR technology
                and dedicated support.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-red-800 p-8 rounded-lg shadow-lg text-center">
              <p className="sm:text-6xl text-4xl font-extrabold text-red-800">
                25+
              </p>
              <p className="text-xl font-semibold text-red-800 mt-2">
                Years of Combined Industry Experience
              </p>
              <p className="text-gray-600 mt-4">
                Work with an expert team you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Alternating Layout */}
      <section className="py-20 max-sm:py-8 lg:py-24">
        <div className="container mx-auto px-6 space-y-20">
          {/* Service 1: Benefits Administration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/services-hr-automation.jpg"
                alt="Automated Benefits Administration"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <HiOutlineCog6Tooth className="h-12 w-12 text-[#03254D]" />
              <h3 className="text-3xl font-bold text-[#03254D] mt-4">
                <span className=" text-red-800">Automated </span>Benefits Administration
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Simplify one of HR's most complex and time-consuming tasks. We
                leverage modern Human Resource Information Systems (HRIS) to
                fully automate the benefits administration process. This
                includes everything from employee enrollment and life event
                changes to claims processing and reporting. By streamlining
                these workflows, we significantly reduce administrative errors,
                ensure compliance, and free up your valuable HR team to focus on
                more strategic, people-centric initiatives.
              </p>
            </div>
          </div>

          {/* Service 2: Records Administration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-last rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/services-record-management.jpg"
                alt="Efficient Records Administration"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <HiOutlineFolder className="h-12 w-12 text-[#03254D]" />
              <h3 className="text-3xl font-bold text-[#03254D] mt-4">
                <span className=" text-red-800">Efficient</span> Records Administration <span className=" text-red-800">(HRMS)</span>
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                With over a decade of experience, we deliver robust,
                full-lifecycle document and records management solutions. Our
                state-of-the-art Human Resource Management Systems (HRMS)
                provide a centralized, secure repository for all employee
                data—from contracts and visas to performance reviews. We ensure
                your critical information is meticulously organized, secure
                against unauthorized access, fully compliant with data
                protection laws, and easily accessible for audits and reporting.
              </p>
            </div>
          </div>

          {/* Service 3: Custom HR Support */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hr-support.jpg"
                alt="Custom HR Support"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <HiOutlineLifebuoy className="h-12 w-12 text-[#03254D]" />
              <h3 className="text-3xl font-bold text-[#03254D] mt-4">
                <span className=" text-red-800">Custom HR Support</span> for Your Business
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Get the expert HR help you need, precisely when you need it. We
                provide exceptional online and live phone support to address
                your day-to-day HR questions, from employee relations issues to
                performance management guidance. Furthermore, you gain access to
                a comprehensive, up-to-date library of legally vetted policies,
                templates, and guides covering all HR-related items, empowering
                you to manage your workforce with confidence.
              </p>
            </div>
          </div>

          {/* Service 4: Compliance Services */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-last rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/services-compliance.jpg"
                alt="Compliance Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <HiOutlineCheckBadge className="h-12 w-12 text-[#03254D]" />
              <h3 className="text-3xl font-bold text-[#03254D] mt-4">
                Essential <span className=" text-red-800">Compliance Services</span>
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Don't let the complexity of UAE Labour Law become a burden. We
                partner with leading risk and compliance experts to offer a
                complementary set of services that protect your business. We
                ensure you have the in-house resources, up-to-date knowledge,
                and expert guidance to stay ahead of changing regulations, from
                WPS and Emiratisation to data protection, mitigating risk and
                ensuring your operations are always fully compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-800">
        <div className="container mx-auto px-6 py-20 max-sm:py-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Optimize Your HR Operations Today
          </h2>
          <p className="text-lg  max-w-2xl mx-auto mt-4">
            Whether you need to streamline a single process or require a fully
            outsourced solution, we're here to help. Contact us for a
            consultation.
          </p>
          <div className="mt-8" 
                onClick={() => setIsContactFormOpen(true)}>
            <CallToActionButton text="Get a Custom Quote" isPrimary={false} className=" text-red-800" />
          </div>
        </div>
      </section>
    </main>
  );
}

import Header from "../Header";
import { CallToActionButton } from "../../utils/helper";
import { Link } from "react-router-dom";
import CTA from "../CTA";
import {
  HiOutlineCheckBadge,
  HiOutlineLifebuoy,
  HiOutlineFolder,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

// --- Main HR Services Component ---
export default function HrServices() {
  return (
    <main className="bg-gray-50 font-sans">
      <Header />
      {/* New Section: HR Services, image right, text left, after header */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Comprehensive HR Services
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong> delivers flexible,
            scalable HR solutions for businesses of all sizes. Our expert team
            streamlines your HR operations so you can focus on growth.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            From compliance and payroll to talent management,{" "}
            <strong>Brilliant Boss HR consultancy</strong> provides end-to-end
            support tailored to your unique needs.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Partner with{" "}
            <strong>Brilliant Boss HR consultancy</strong> for reliable, innovative
            HR services that empower your workforce and drive business success.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/hr6.jpg"
            alt="HR Services"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-1 md:py-1 px-4 overflow-hidden bg-white text-blue-950">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
              Flexible HR Solutions for Modern Business
            </h1>
            <p className="text-base md:text-lg max-w-xl mb-8 mx-auto md:mx-0">
              From streamlining administrative tasks to comprehensive outsourced 
              HR management, we provide the technology and expert support 
              to help you achieve your goals.
            </p>
            <Link to="/">
              <CallToActionButton 
                text="Explore Our Services" 
                className="bg-blue-950 text-white"
              />
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg flex justify-center md:justify-end">
            <img
              src="/hr2.jpg"
              alt="HR Services"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section className="bg-gray-50 py-20 max-sm:py-8 lg:py-34">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 text-gray-600">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#03254D]">
                Your <span className="text-blue-950">Partner in</span> an Increasingly <span className="text-blue-950">Complex World</span>
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
                Since 2012
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
                <span className="text-red-800">Automated </span>Benefits Administration
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
                <span className="text-red-800">Efficient</span> Records Administration <span className="text-red-800">(HRMS)</span>
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
                <span className="text-red-800">Custom HR Support</span> for Your Business
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
                Essential <span className="text-red-800">Compliance Services</span>
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
                {/* Service 5: Labour Policy Development (UAE) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/uae2.jpg"
                alt="Labour Policy Development UAE"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <HiOutlineCheckBadge className="h-12 w-12 text-[#03254D]" />
              <h3 className="text-3xl font-bold text-[#03254D] mt-4">
                Labour <span className="text-red-800">Policy Development</span> Services for UAE
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                We help businesses design and implement clear, compliant, and
                practical labour policies tailored to the UAE’s unique
                regulatory framework. From drafting employment contracts and
                workplace policies to creating grievance redressal mechanisms,
                our services ensure your HR policies align with local labour
                laws and industry best practices.  
              </p>
              <p className="mt-4 text-lg text-gray-600">
                With our expertise, you can foster a fair, transparent, and
                legally compliant work environment while safeguarding your
                organization against costly disputes and penalties.
              </p>
            </div>
          </div>


      {/* CTA Section */}
      <CTA />

    </main>
  );
}

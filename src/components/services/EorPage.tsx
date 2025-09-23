import {
  IoShieldCheckmark,
  IoRocketOutline,
  IoPeopleCircleOutline,
  IoPersonAddOutline,
  IoDocumentsOutline,
  IoGiftOutline,
  IoHeadsetOutline,
} from "react-icons/io5";
import { RiMoneyDollarCircleLine, RiShieldCheckLine } from "react-icons/ri";
import { MdOutlineAllInclusive, MdSettings } from "react-icons/md";
import Header from "../Header";
import {
  CallToActionButton,
  SectionTitle,
  FeatureCard,
  BenefitCard,
} from "../../utils/helper";
import { motion } from "framer-motion";
import {
  FaAward,
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaUserCheck,
  FaHeadset,
  FaLaptopCode,
} from "react-icons/fa";
import { Link } from "react-router-dom"; //   using React Router


const DIFFERENTIATORS = [
  {
    icon: <FaAward size={32} />,
    title: "100% Emirati-Owned EOR",
    description:
      "We combine our years of experience with strong local connections, enabling faster visa and work permit processing with guaranteed compliance.",
  },
  {
    icon: <FaGlobeAmericas size={32} />,
    title: "Hire Across the MENA Region",
    description:
      "Our global EOR framework lets us act as the sole legal employer for all your employees in all MENA countries, simplifying management with one monthly invoice.",
  },
  {
    icon: <MdSettings size={32} />,
    title: "Flexible Workforce Solutions",
    description:
      "Our on-demand manpower supply license allows us to legally source, deploy, and scale your workforce as your projects require, offering PEO, HR outsourcing, and more.",
  },
  {
    icon: <MdOutlineAllInclusive size={32} />,
    title: "End-To-End Services",
    description:
      "We handle everything—talent employment, onboarding, recruitment, immigration, and legal matters—saving you valuable time on your UAE expansion.",
  },
  {
    icon: <FaMoneyBillWave size={32} />,
    title: "Global Payroll Management",
    description:
      "We simplify complex payroll by accepting payments in major currencies like USD and ensuring your employees are paid accurately and on time in their local currency (AED).",
  },
  {
    icon: <FaUserCheck size={32} />,
    title: "Seamless Employee Onboarding",
    description:
      "Our structured onboarding process ensures your new hires feel welcomed and are fully integrated into your company culture, setting them up for long-term success.",
  },
  {
    icon: <FaHeadset size={32} />,
    title: "Dedicated Account Management",
    description:
      "You'll receive a single point of contact, a dedicated HR expert who understands your business and provides personalized, proactive support for all your needs.",
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: "Modern HR Tech Platform",
    description:
      "Manage your global workforce through our intuitive platform. Access employee data, track payroll, and handle HR tasks efficiently from anywhere in the world.",
  },
];

const BENEFITS = [
  {
    icon: <IoRocketOutline />,
    title: "Rapid Market Entry",
    description:
      "Launch in the UAE without the need to form your own legal entity.",
  },
  {
    icon: <IoShieldCheckmark />,
    title: "Risk Mitigation",
    description:
      "100% compliance assurance with local labour laws and industry standards.",
  },
  {
    icon: <RiMoneyDollarCircleLine />,
    title: "Cost Efficiency",
    description:
      "Avoid the significant expenses involved in setting up a local company.",
  },
  {
    icon: <IoPeopleCircleOutline />,
    title: "Flexibility & Scalability",
    description:
      "Easily scale your operations, launch new projects, and grow your team.",
  },
  {
    icon: <IoPersonAddOutline />,
    title: "Access to Top Talent",
    description:
      "Tap into our extensive network to find and hire the best professionals in the region.",
  },
  {
    icon: <IoDocumentsOutline />,
    title: "Streamlined Administration",
    description:
      "We manage all HR administration, from contracts to payroll, freeing up your internal resources.",
  },
  {
    icon: <IoGiftOutline />,
    title: "Competitive Benefits",
    description:
      "Offer attractive, locally compliant benefits packages to attract and retain top talent.",
  },
  {
    icon: <IoHeadsetOutline />,
    title: "Dedicated Expert Support",
    description:
      "Gain access to our team of HR and legal experts for ongoing guidance and support.",
  },
];

const EorPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      {/* New Section: EOR, image right, text left, after header */}
      <section className="w-full bg-white py-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            EOR Services by Brilliant Boss HR consultancy
          </h2>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            <strong>Brilliant Boss HR consultancy</strong> delivers world-class Employer of Record (EOR) solutions, enabling your business to hire, pay, and manage talent anywhere with full compliance and zero hassle.
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg">
            Our EOR platform streamlines onboarding, payroll, and HR administration, so you can focus on growth while we handle the legal complexities. Expand into new markets confidently with <strong>Brilliant Boss HR consultancy</strong> as your trusted partner.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Experience seamless international hiring, risk mitigation, and local expertise—choose <strong>Brilliant Boss HR consultancy</strong> for your EOR needs.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/EO2.jpg" alt="EOR Services" className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-lg shadow-md object-contain" />
        </div>
      </section>

      <main>
        {/* Section 1: Hero */}
        <section className="relative py-1 md:py-1 px-4 overflow-hidden">
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
             
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#03254D] mb-4 leading-tight">
                Build Your Dream Team in Dubai With EOR Services in the UAE
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-xl mb-8 mx-auto md:mx-0">
                Brilliant Boss HR is proud to be one of the only 10 companies
                licensed to offer legal and compliant EOR services in the UAE.
              </p>
              <Link to="/contact">
                <CallToActionButton
                  text="Contact Us"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
            {/* Video */}
            <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <video
                src="/team.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Intro */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#03254D] mb-4">
              Your Compliant Bridge to the UAE Market
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              As a{" "}
              <strong className="text-red-800">
                100% local Emirati-owned company
              </strong>
              , we guarantee faster visa processing and work permits with full
              compliance.
            </p>
            <div className="bg-gray-200 border-l-4 border-[#03254D]/90 text-left p-6 rounded-r-lg max-w-3xl mx-auto shadow-sm">
              <p className="text-gray-600 text-base md:text-lg">
                Want to hire or relocate employees to the UAE without the
                lengthy process of setting up an entity? Worried about
                compliance? Our EOR Dubai solutions fast-track your global
                expansion by simplifying HR management.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Difference */}
        <motion.section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              titleClass="text-[#03254D]"
              subtitleClass="text-gray-600"
              title="The Brilliant Boss HR Difference"
              subtitle="Why Choose Us for EOR Services in the UAE"
            />
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {DIFFERENTIATORS.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Section 4: Licensing */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2 shadow-lg">
              <img
                src="/compliance.jpg"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <RiShieldCheckLine className="text-5xl md:text-6xl text-red-800 mx-auto md:mx-0 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#03254D]">
                We’re Reputable, Recognised and Licensed
              </h2>
              <p className="text-base md:text-lg mb-8 text-gray-600 mt-3">
                Brilliant Boss HR is Licensed by the Ministry of Human Resources
                and Emiratization (MOHRE). We ensure our workforce solutions are
                100% compliant with local labour laws, industry regulations, and
                strict employment standards.
              </p>
              <Link to="/contact">
                <CallToActionButton
                  text="Learn More About Compliance"
                  className="bg-blue-950 text-white"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Benefits */}
        <motion.section
          className="py-12 md:py-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Key Benefits of Our EOR Services"
              titleClass="text-[#03254D]"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {BENEFITS.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 6: Final CTA */}
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
      <form
        action="https://formspree.io/f/xzzawdja"
        method="POST"
        className="space-y-3"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
          required
        />
        <input type="hidden" name="_subject" value="New EOR Inquiry" />
        <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />
        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2 mt-3 hover:bg-red-900 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

      </main>
    </div>
  );
};

export default EorPage;

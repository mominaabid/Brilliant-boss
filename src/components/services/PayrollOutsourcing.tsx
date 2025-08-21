import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaRegClock,
  FaChartBar,
  FaShieldAlt,
  FaRegListAlt,
  FaReceipt,
  FaSignOutAlt,
  FaUniversity,
  FaCoins,
  FaUserCog,
  FaFileExport,
} from "react-icons/fa";
import { useStore } from "../../store/store";
import { motion } from "framer-motion";

import { FaUsers } from "react-icons/fa";
import Header from "../Header";
import {
  CallToActionButton,
  HeroPill,
  ProcessStepCard,
  FeatureIconCard,
  SectionTitle,
} from "../../utils/helper";

const PAYROLL_PROCESS_STEPS = [
  {
    step: "01",
    title: "Onboarding & Data Collection",
    description:
      "We securely gather all necessary employee information, including contracts, identification, and bank details, to build a complete payroll profile.",
  },
  {
    step: "02",
    title: "Company & WPS Registration",
    description:
      "We start by registering your company with the Ministry of Human Resources and Emiratisation (MOHRE) to obtain your essential WPS registration number.",
  },
  {
    step: "03",
    title: "Monthly Variable Collation",
    description:
      "Each month, we collect and verify all variable data such as overtime, bonuses, deductions, and unpaid leave to ensure payroll accuracy.",
  },
  {
    step: "04",
    title: "Gross-to-Net Calculation",
    description:
      "Our system performs precise gross-to-net salary calculations for every employee, accounting for all variables and statutory requirements.",
  },
  {
    step: "05",
    title: "Salary Information File (SIF) Prep",
    description:
      "Our team prepares a compliant Salary Information File (SIF) according to strict WPS regulations, ensuring all data is accurate and correctly formatted.",
  },
  {
    step: "06",
    title: "Client Review & Approval",
    description:
      "We submit the draft payroll and SIF for your review and approval, providing a clear summary before any transactions are processed.",
  },
  {
    step: "07",
    title: "Processing & Payslip Issuance",
    description:
      "Upon approval, we process the salary transfers through the WPS system and securely issue detailed monthly payslips to each employee.",
  },
  {
    step: "08",
    title: "Final Settlements & Reporting",
    description:
      "We calculate Statutory Gratuity Payments and End of Service settlements as per UAE Labour Law and prepare customised payroll reports for your specifications.",
  },
];

const PAYROLL_FEATURES = [
  { icon: <FaCalculator />, name: "Salary Calculation" },
  { icon: <FaFileInvoiceDollar />, name: "E-Payslip Management" },
  { icon: <FaRegClock />, name: "Attendance & Leave" },
  { icon: <FaChartBar />, name: "Income Summary Reports" },
  { icon: <FaShieldAlt />, name: "Local Statutory Compliance" },
  { icon: <FaRegListAlt />, name: "Benefits Administration" },
  { icon: <FaReceipt />, name: "Expense & Reimbursement" },
  { icon: <FaSignOutAlt />, name: "End-of-Service Gratuity" },
  { icon: <FaUniversity />, name: "WPS & Bank Integration" },
  { icon: <FaCoins />, name: "Multi-Currency Support" },
  { icon: <FaUserCog />, name: "Employee Self-Service Portal" },
  { icon: <FaFileExport />, name: "Custom Report Builder" },
];

// --- Main Page Component ---
const PayrollOutsourcingPage = () => {
  const { setIsContactFormOpen } = useStore();
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      <main>
        {/* Section 1: Hero */}
        <section className=" py-8 md:py-28 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#03254D] leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-red-800">Payroll Outsourcing</span> Services
              in the UAE
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              With payroll expertise built over decades, we know what it takes
              to run payrolls smoothly in compliance with UAE’s Wage Protection
              System (WPS) regulations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <HeroPill
                icon={<FaShieldAlt className="text-green-500" />}
                text="WPS Compliant"
              />
              <HeroPill
                icon={<FaUsers className="text-[#03254D]" />}
                text="Any Business Size"
              />
              <HeroPill
                icon={<FaFileInvoiceDollar className="text-orange-500" />}
                text="Accurate & Timely"
              />
            </div>
            <div onClick={() => setIsContactFormOpen(true)}>
              <CallToActionButton
                text="Talk to an Expert"
                className=" bg-red-800 hover:bg-red-700"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Introduction */}
        <section className="py-20 max-sm:py-6 px-4 ">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#03254D] mb-4">
                A Reliable WPS Payroll Solution That Pays Off Immediately
              </h2>
              <p className="text-gray-600 mb-4">
                Effective payroll management is critical because it shapes
                employee satisfaction and ensures WPS compliance. However,
                navigating complex laws can be time-consuming.
              </p>
              <p className="text-gray-600">
                At Connect Resources, we manage payroll processing efficiently,
                ensuring accurate and timely salary payments alongside
                comprehensive benefits administration. You can focus on
                improving customer service and business growth.
              </p>
              <div onClick={() => setIsContactFormOpen(true)}>
                <CallToActionButton
                  text="BOOK A FREE CONSULTATION"
                  className="mt-8 bg-red-800 hover:bg-red-700"
                />
              </div>
            </div>
            <div className="h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="/compliance.jpg"
                className="object-cover rounded-lg w-full h-full"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Section 3: Services Process Stepper */}
        <motion.section
          className="py-20 px-4 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="max-w-3xl  mx-auto">
            <SectionTitle
              titleClass=" text-[#03254D]"
              subtitleClass="text-gray-600"
              title="Our Payroll Outsourcing Process"
              subtitle="We provide comprehensive and scalable WPS payroll services, regardless of your company's size or complexity."
            />
            <div className="relative space-y-12 border-l-2 border-[#03254D] ml-6">
              {PAYROLL_PROCESS_STEPS.map((item) => (
                <ProcessStepCard key={item.step} {...item} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Why Choose Us / Feature Grid */}
        <motion.section
          className="py-20 max-sm:py-6 px-4 "
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              titleClass="text-[#03254D]"
              subtitleClass="text-gray-600"
              title="Why Choose Us For Outsourcing Payroll?"
              subtitle="Achieve the best of both worlds – convenience and accuracy. Our dedicated specialists manage your payroll data with the highest level of security, accuracy, and precision."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {PAYROLL_FEATURES.map((feature) => (
                <FeatureIconCard key={feature.name} {...feature} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Final CTA */}
        <section className="py-20 px-4 ">
          <div className="max-w-4xl mx-auto bg-red-800 text-white p-12 rounded-lg text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Spend Less Time on Payroll. Focus More on Growth.
            </h2>
            <p className="mb-6 text-lg">
              Connect Resources is the UAE’s leading payroll outsourcing service
              provider, enhanced by digital solutions. Let us handle the
              complexity so you don't have to.
            </p>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="inline-block bg-white cursor-pointer text-red-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Find Out More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PayrollOutsourcingPage;

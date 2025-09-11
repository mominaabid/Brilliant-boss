import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IoShieldCheckmarkOutline,
  IoShuffleOutline,
  IoCashOutline,
  IoPeopleOutline,
  IoNewspaperOutline,
  IoPersonAddOutline,
  IoSchoolOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaCrown, FaUserTie, FaStamp, FaHandshake } from "react-icons/fa";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
};

const ServiceCard = ({ icon, title, description, path }: ServiceCardProps) => (
  <motion.div
    className="
      relative overflow-hidden bg-[#f1eae1] p-6 rounded-lg shadow
      transition-shadow duration-300 hover:shadow-lg
      group cursor-default
    "
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }} 
  >
    {/* Sliding overlay */}
    <div
      className="
        absolute inset-0 bg-[#01112d] 
        transform -translate-x-full
        transition-transform duration-500 ease-out
        group-hover:translate-x-0
        z-0
      "
    />

    {/* Content */}
    <div className="relative z-10">
      <div className="mb-4 text-[#03254D] group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#03254D] group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-100 transition-colors">
        {description}
      </p>
      <Link
        to={path}
        className="
          text-[#03254D]
          inline font-semibold cursor-pointer
          transition-all duration-300 ease-in-out
          hover:text-gray-400
          group-hover:text-white
        "
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  const servicesData = [
    {
      icon: <IoShieldCheckmarkOutline className="h-6 w-6" />,
      path: "/services/eor",
      title: "EOR (Employer of Record)",
      description:
        "We act as the legal employer for your remote workforce, handling all compliance, payroll, and HR responsibilities.",
    },
    {
      icon: <IoShuffleOutline className="h-6 w-6" />,
      path: "/services/employee-mobility",
      title: "Employee Mobility",
      description:
        "We assist businesses in managing employee relocations and remote work arrangements, ensuring compliance with local laws.",
    },
    {
      icon: <IoCashOutline className="h-6 w-6" />,
      path: "/services/payroll-outsourcing",
      title: "Payroll Outsourcing",
      description:
        "We provide comprehensive payroll outsourcing services to streamline your payroll processes and ensure compliance.",
    },
    {
      icon: <IoPeopleOutline className="h-6 w-6" />,
      path: "/services/staff-outsourcing",
      title: "Staff Outsourcing",
      description:
        "We provide businesses with the flexibility to scale their workforce up or down as needed, without the complexities of traditional hiring.",
    },
    {
      icon: <IoNewspaperOutline className="h-6 w-6" />,
      path: "/services/employment-visa",
      title: "Employment Visa",
      description:
        "We provide expert guidance on employment visa applications and compliance to help you navigate the complexities of hiring international talent.",
    },
    {
      icon: <FaUserTie className="h-6 w-6" />,
      path: "/services/executive-search",
      title: "Executive Search",
      description:
        "We specialize in finding and recruiting top-level executives to lead your organization, ensuring a perfect fit for your leadership needs.",
    },
    {
      icon: <IoPersonAddOutline className="h-6 w-6" />,
      path: "/services/recruitment",
      title: "Recruitment",
      description:
        "We help you find the right talent for your business, from entry-level positions to executive roles.",
    },
    {
      icon: <FaCrown className="h-6 w-6" />,
      path: "/services/c-suite-level-recruitment",
      title: "C-Suite Level Recruitment",
      description:
        "We specialize in recruiting top-tier executives for C-Suite positions, ensuring a perfect fit for your organization's leadership needs.",
    },
    {
      icon: <FaHandshake className="h-6 w-6" />,
      path: "/services/hr-services",
      title: "HR Services",
      description:
        "We provide comprehensive HR services to support your business needs, from talent acquisition to employee management.",
    },
    {
      icon: <IoLocationOutline className="h-6 w-6" />,
      path: "/services/saudi-emirati-nationals-recruitment",
      title: "Saudi and Emirati Nationals Recruitment",
      description:
        "We help you connect with and recruit top Saudi and Emirati talent to enhance your workforce diversity.",
    },
    {
      icon: <FaStamp className="h-6 w-6" />,
      path: "/services/visa-stamping-services",
      title: "Visa Stamping Services (For Saudi Arabia, For Rest of the World)",
      description:
        "We provide expert guidance on visa stamping processes to ensure compliance and smooth transitions for your international workforce.",
    },
    {
      icon: <IoSchoolOutline className="h-6 w-6" />,
      path: "/services/training-and-development",
      title:
        "Training & Development (Services available in all parts of the world, especially APAC, EMEA Regions)",
      description:
        "We offer training and development programs to enhance the skills of your workforce and drive business success.",
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-20">
      {/* HR IMAGE BACKGROUND */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/hr.jpg"
          alt="HR Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f1f0ea] drop-shadow-md">
            Services We Offer
          </h2>
          <p className="mt-2 text-lg text-white max-w-2xl mx-auto drop-shadow-md">
            We provide HR solutions for your business in the most flexible and
            affordable way.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              path={service.path}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
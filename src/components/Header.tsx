import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CandidateFormModal from "./Forms/CandidateForm";
import EmployerFormModal from "./Forms/EmployeeForm";
import ContactForm from "./Forms/ContactForm";
import { useStore } from "../store/store";

const servicesData = [
  { title: "EOR (Employer of Record)", path: "/services/eor" },
  { title: "Employee Mobility", path: "/services/employee-mobility" },
  { title: "Payroll Outsourcing", path: "/services/payroll-outsourcing" },
  { title: "Staff Outsourcing", path: "/services/staff-outsourcing" },
  { title: "Employment Visa", path: "/services/employment-visa" },
  { title: "Executive Search", path: "/services/executive-search" },
  { title: "Recruitment", path: "/services/recruitment" },
  {
    title: "C-Suite Level Recruitment",
    path: "/services/c-suite-level-recruitment",
  },
  { title: "HR Services", path: "/services/hr-services" },
  {
    title: "Saudi and Emirati Nationals Recruitment",
    path: "/services/saudi-emirati-nationals-recruitment",
  },
  { title: "Visa Stamping Services", path: "/services/visa-stamping-services" },
  {
    title: "Training & Development",
    path: "/services/training-and-development",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isCandidateFormOpen, setIsCandidateFormOpen] = useState(false);
  const [isEmployerFormOpen, setIsEmployerFormOpen] = useState(false);
  const { isContactFormOpen, setIsContactFormOpen } = useStore();
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="py-6 container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Brilliant Boss HR Consultancy"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to={"/"}
              className="text-black hover:text-gray-600 font-medium"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="text-black hover:text-gray-600  font-medium flex items-center gap-1 cursor-pointer">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {isServicesOpen && (
                <div className="absolute grid sm:grid-cols-2 lg:grid-cols-3 ring-1 ring-black  top-full left-1/2 -translate-x-1/2 w-128 bg-white rounded-md shadow-lg ">
                  {servicesData.map((service) => (
                    <NavLink
                      key={service.title}
                      to={service.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-md text-sm ${
                          isActive
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsEmployerFormOpen(true)}
              className="text-black hover:text-gray-600 font-medium cursor-pointer"
            >
              Employers
            </button>
            <button
              onClick={() => setIsCandidateFormOpen(true)}
              className="text-black hover:text-gray-600 font-medium cursor-pointer"
            >
              Candidates
            </button>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="text-black hover:text-gray-600 font-medium cursor-pointer"
            >
              Contact Us
            </button>
            <Link
              to={"/jobs"}
              className="text-black hover:text-gray-600 font-medium"
            >
              Jobs
            </Link>
          </nav>

          {/* Hamburger Menu Button (for mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[#0f3756] hover:text-gray-600"
              aria-label="Open menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (Overlay) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col p-4">
          <div className="flex justify-end">
            <button
              onClick={closeMobileMenu}
              className="text-[#0f3756] hover:text-gray-600"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow gap-4 text-center">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-[#0f3756] text-2xl font-semibold"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="w-full">
              <div
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-[#0f3756] text-2xl font-semibold cursor-pointer flex items-center justify-center gap-2"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {isMobileServicesOpen && (
                <div className="mt-3 flex flex-col gap-2 bg-gray-50 p-4 rounded-lg">
                  {servicesData.map((service) => (
                    <Link
                      key={service.title}
                      to={service.path}
                      onClick={closeMobileMenu}
                      className="text-gray-700 text-base font-medium"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setIsEmployerFormOpen(true);
              }}
              className="text-[#0f3756] text-2xl font-semibold"
            >
              Employers
            </button>

            <button
              onClick={() => {
                setIsCandidateFormOpen(true);
              }}
              className="text-[#0f3756] text-2xl font-semibold"
            >
              Candidates
            </button>
            <button
              onClick={() => {
                setIsContactFormOpen(true);
              }}
              className="text-[#0f3756] text-2xl font-semibold"
            >
              Contact Us
            </button>
            <Link
              to="/jobs"
              onClick={closeMobileMenu}
              className="text-[#0f3756] text-2xl font-semibold"
            >
              Jobs
            </Link>
          </nav>
        </div>
      )}
      {/* Render Modals */}
      <CandidateFormModal
        isOpen={isCandidateFormOpen}
        onClose={() => setIsCandidateFormOpen(false)}
      />
      <EmployerFormModal
        isOpen={isEmployerFormOpen}
        onClose={() => setIsEmployerFormOpen(false)}
      />
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
};

export default Header;

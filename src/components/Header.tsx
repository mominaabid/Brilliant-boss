import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

// Service icons
import {
  FaUserTie,
  FaUsers,
  FaGlobe,
  FaMoneyCheckAlt,
  FaIdBadge,
  FaSearch,
  FaUserPlus,
  FaUserShield,
  FaUserCog,
  FaFlag,
  FaStamp,
  FaChalkboardTeacher,
} from "react-icons/fa";

const servicesData = [
  { title: "EOR (Employer of Record)", path: "/services/eor", icon: <FaUserTie className="text-blue-600 h-6 w-6" /> },
  { title: "Employee Mobility", path: "/services/employee-mobility", icon: <FaGlobe className="text-green-600 h-6 w-6" /> },
  { title: "Payroll Outsourcing", path: "/services/payroll-outsourcing", icon: <FaMoneyCheckAlt className="text-yellow-600 h-6 w-6" /> },
  { title: "Staff Outsourcing", path: "/services/staff-outsourcing", icon: <FaUsers className="text-purple-600 h-6 w-6" /> },
  { title: "Employment Visa", path: "/services/employment-visa", icon: <FaIdBadge className="text-pink-600 h-6 w-6" /> },
  { title: "Executive Search", path: "/services/executive-search", icon: <FaSearch className="text-indigo-600 h-6 w-6" /> },
  { title: "Recruitment", path: "/services/recruitment", icon: <FaUserPlus className="text-red-600 h-6 w-6" /> },
  { title: "C-Suite Level Recruitment", path: "/services/c-suite-level-recruitment", icon: <FaUserShield className="text-gray-700 h-10 w-10" /> },
  { title: "HR Services", path: "/services/hr-services", icon: <FaUserCog className="text-blue-700 h-6 w-6" /> },
  { title: "Saudi and Emirati Nationals Recruitment", path: "/services/saudi-emirati-nationals-recruitment", icon: <FaFlag className="text-red-700 h-8 w-8" /> },
  { title: "Visa Stamping Services", path: "/services/visa-stamping-services", icon: <FaStamp className="text-orange-600 h-8 w-8" /> },
  { title: "Training & Development", path: "/services/training-and-development", icon: <FaChalkboardTeacher className="text-teal-600 h-8 w-8" /> },
  { title: "US Recruitment & Staffing", path: "/services/us-recruitment", icon: <FaUserPlus className="text-red-600 h-6 w-6" /> },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const linkColor = "text-white";
  const toggleMobileMenu = () => setIsMenuOpen((s) => !s);

  return (
    <header className="relative z-30 w-full">
      {/* Top thin header */}
      <div className="bg-black text-sm text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-1 sm:py-2 gap-1 sm:gap-1">
          <p className="text-center w-full sm:w-auto">Smart HR Solutions for Brilliant Results</p>

          {/* Right: phone + proposal link */}
          <div className="flex flex-row sm:flex-row gap-2 sm:gap-6 items-center w-full sm:w-auto justify-center sm:justify-end">
            <a
              href="tel:+971-545188045"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors justify-center"
            >
              <FaPhoneAlt className="w-4 h-4" />
              <span className="font-medium underline">+971-545188045</span>
            </a>

            <Link
              to="/contact"
              className="text-white text-sm underline hover:text-gray-300 transition-colors text-center"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
  <div className="py-3 bg-[#001345] relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <img
              src="/logo4.png"
              alt="Brilliant Boss HR Consultancy"
              className="h-14 sm:h-16 md:h-18"
            />
          </Link>

          {/* Hamburger button (mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-blue-700 transition-colors text-white"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>
              Home
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div
                className={`${linkColor} font-medium flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[48rem] bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-2 p-2">
                    {servicesData.map((service) => (
                      <NavLink
                        key={service.title}
                        to={service.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-2 text-sm transition-colors border-b border-gray-200 last:border-b-0 ${
                            service.title === 'Saudi and Emirati Nationals Recruitment'
                              ? ''
                              : 'whitespace-nowrap'
                          } ${
                            isActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`
                        }
                      >
                        {service.icon}
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Page Links */}
            <Link to="/employee" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>
              Employers
            </Link>
            <Link to="/candidate" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>
              Candidates
            </Link>
            <Link to="/contact" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>
              Contact Us
            </Link>
            <Link to="/jobs" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>
              Jobs
            </Link>
          
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#001345] shadow-lg z-40 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-3 p-4 text-white">
              <Link to="/" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              {/* Services Dropdown (Mobile) */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full hover:text-gray-300"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="mt-2 bg-white rounded-md shadow-md text-gray-700">
                    {servicesData.map((service) => (
                      <NavLink
                        key={service.title}
                        to={service.path}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          {service.icon}
                          {service.title}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/employee" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Employers
              </Link>
              <Link to="/candidate" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Candidates
              </Link>
              <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <Link to="/jobs" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Jobs
              </Link>
             
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

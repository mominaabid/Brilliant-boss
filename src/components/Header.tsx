import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Service icons + social icons
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
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const servicesData = [
  { title: "EOR (Employer of Record)", path: "/services/eor", icon: <FaUserTie className="text-blue-600" /> },
  { title: "Employee Mobility", path: "/services/employee-mobility", icon: <FaGlobe className="text-green-600" /> },
  { title: "Payroll Outsourcing", path: "/services/payroll-outsourcing", icon: <FaMoneyCheckAlt className="text-yellow-600" /> },
  { title: "Staff Outsourcing", path: "/services/staff-outsourcing", icon: <FaUsers className="text-purple-600" /> },
  { title: "Employment Visa", path: "/services/employment-visa", icon: <FaIdBadge className="text-pink-600" /> },
  { title: "Executive Search", path: "/services/executive-search", icon: <FaSearch className="text-indigo-600" /> },
  { title: "Recruitment", path: "/services/recruitment", icon: <FaUserPlus className="text-red-600" /> },
  { title: "C-Suite Level Recruitment", path: "/services/c-suite-level-recruitment", icon: <FaUserShield className="text-gray-700" /> },
  { title: "HR Services", path: "/services/hr-services", icon: <FaUserCog className="text-blue-700" /> },
  { title: "Saudi and Emirati Nationals Recruitment", path: "/services/saudi-emirati-nationals-recruitment", icon: <FaFlag className="text-red-700" /> },
  { title: "Visa Stamping Services", path: "/services/visa-stamping-services", icon: <FaStamp className="text-orange-600" /> },
  { title: "Training & Development", path: "/services/training-and-development", icon: <FaChalkboardTeacher className="text-teal-600" /> },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const linkColor = "text-white";
  const toggleMobileMenu = () => setIsMenuOpen((s) => !s);

  return (
    <header className="relative z-30">
      {/* Top thin header */}
      <div className="bg-black text-sm text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1">
          <span className="font-medium">Welcome to Brilliant Boss Human Resources Consultancy</span>
          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/brilliantbosshr/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={18} className="text-[#1877F2] hover:opacity-80" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={18} className="text-[#1DA1F2] hover:opacity-80" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={18} className="text-[#0077B5] hover:opacity-80" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} style={{ color: "#E1306C" }} className="hover:opacity-80" /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="py-4 bg-[#001345] relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
         <Link to={"/"} className="flex items-center">
  <div className="bg-white rounded px-3 py-2">
    <img
      src="/logo.png"
      alt="Brilliant Boss HR Consultancy"
      className="h-10 md:h-12"
    />
  </div>
</Link>


          {/* Hamburger button (mobile) */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-md hover:bg-blue-700 transition-colors text-white">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>Home</Link>

            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <div className={`${linkColor} font-medium flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors`}>
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-128 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-0 p-2">
                    {servicesData.map((service) => (
                      <NavLink
                        key={service.title}
                        to={service.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 text-sm transition-colors border-b border-gray-300/40 last:border-b-1 ${
                            isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          }`
                        }
                      >
                        {service.icon}{service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Page Links */}
            <Link to="/employee" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>Employers</Link>
            <Link to="/candidate" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>Candidates</Link>
            <Link to="/contact" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>Contact Us</Link>
            <Link to="/jobs" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>Jobs</Link>
            <Link to="/login" className={`${linkColor} hover:text-gray-300 font-medium transition-colors`}>Login</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#001345] shadow-lg z-40">
            <nav className="flex flex-col space-y-3 p-4 text-white">
              <Link to="/" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</Link>

              {/* Services Dropdown (mobile) */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full hover:text-gray-300"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <Link to="/employee" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Employers</Link>
              <Link to="/candidate" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Candidates</Link>
              <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <Link to="/jobs" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Jobs</Link>
              <Link to="/login" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

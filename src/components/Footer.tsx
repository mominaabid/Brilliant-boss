import { FaMapMarkerAlt, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Logo + About Us */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/logo.png"
              alt="Brilliant Boss HR Consultancy"
              className="h-16 mb-6"
            />
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              About Us
            </h3>
            <p className="text-gray-600 text-sm text-center lg:text-left leading-relaxed">
              Brilliant Boss HR Consultancy provides trusted HR, recruitment, 
              and workforce solutions tailored for businesses worldwide.
            </p>
          </div>

          {/* Services (Top 6 Only) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="/services/eor" className="hover:text-blue-600 transition-colors duration-200">
                  EOR
                </a>
              </li>
              <li>
                <a href="/services/employee-mobility" className="hover:text-blue-600 transition-colors duration-200">
                  Employee Mobility
                </a>
              </li>
              <li>
                <a href="/services/payroll-outsourcing" className="hover:text-blue-600 transition-colors duration-200">
                  Payroll Outsourcing
                </a>
              </li>
              <li>
                <a href="/services/recruitment" className="hover:text-blue-600 transition-colors duration-200">
                  Recruitment
                </a>
              </li>
              <li>
                <a href="/services/executive-search" className="hover:text-blue-600 transition-colors duration-200">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="/services/training-and-development" className="hover:text-blue-600 transition-colors duration-200">
                  Training & Development
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="/#" className="hover:text-blue-600 transition-colors duration-200 block">
                  Home
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-600 transition-colors duration-200 block">
                  Login
                </a>
              </li>
              <li>
                <a href="/candidate" className="hover:text-blue-600 transition-colors duration-200 block">
                  Candidate
                </a>
              </li>
              <li>
                <a href="/employee" className="hover:text-blue-600 transition-colors duration-200 block">
                  Employee
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-blue-600 transition-colors duration-200 block">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 transition-colors duration-200 block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Get in Touch
            </h3>
            <div className="space-y-5 text-gray-600 text-sm">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1 w-4 h-4" />
                <span className="leading-relaxed">
               Al Moosa Tower 2 - Sheikh Zayed Rd - Trade Centre - Trade Centre 1 - Dubai - United Arab Emirates
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMailBulk className="text-blue-600 w-4 h-4" />
                <a
                  href="mailto:info@brilliantbosshr.com"
                  className="hover:text-blue-600 transition-colors duration-200 leading-relaxed"
                >
                  info@brilliantbosshr.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-600 w-4 h-4" />
                <a
                  href="tel:+971501234567"
                  className="hover:text-blue-600 transition-colors duration-200 leading-relaxed"
                >
                  +971 50 123 4567
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400">
            <p className="text-sm leading-relaxed">
              © 2025 Brilliant Boss HR Consultancy
              <span className="hidden sm:inline mx-2">|</span>
              <br className="sm:hidden" />
              Developed With Love By{" "}
              <a
                href="https://technicmentors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Technic Mentors
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
